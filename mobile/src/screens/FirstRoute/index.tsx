import React, { useEffect, useRef, useState } from "react";

import {
  Campus,
  CampusContainer,
  CampusRow,
  CampusText,
  Container,
  ContinueButton,
  ContinueButtonText,
  HalfContainer,
  Input,
  Label,
  RoutesContainer,
  Title,
} from "./styles";
import { Alert, Platform, View } from "react-native";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function FirstRoute() {
  const [origin, setOrigin] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [destination, setDestination] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [campus, setCampus] = useState("");
  const [hasSelectedRoute, setHasSelectedRoute] = useState(false);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [originNeighborhood, setOriginNeighborhood] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    async function getUserLocationPermissions() {
      if (Platform.OS !== "web") {
        const { status } = await requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Permissões insuficientes",
            "Nós precisamos da sua localização para que você possa usar o app.",
            [{ text: "Okay" }]
          );
          return;
        } else {
          const userPosition = await getCurrentPositionAsync();

          setOrigin({
            latitude: userPosition.coords.latitude,
            longitude: userPosition.coords.longitude,
          });
        }
      }
    }

    getUserLocationPermissions();
  }, []);

  useEffect(() => {
    if (!origin || (destination.latitude === 0 && destination.longitude === 0))
      return;

    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  }, [origin, destination]);

  function handleSelection(campus: string) {
    setCampus(campus);

    if (campus === "Darcy Ribeiro") {
      setDestination({
        latitude: -15.757995,
        longitude: -47.871353,
      });
    } else if (campus === "Gama") {
      setDestination({
        latitude: -15.98928,
        longitude: -48.04454,
      });
    } else if (campus === "Ceilândia") {
      setDestination({
        latitude: -15.845021,
        longitude: -48.099459,
      });
    } else {
      setDestination({
        latitude: -15.600754,
        longitude: -47.65857,
      });
    }
  }

  async function handleContinue() {
    const formattedOrigin = [
      origin.latitude.toString(),
      origin.longitude.toString(),
    ];
    const formattedDestination = [
      destination.latitude.toString(),
      destination.longitude.toString(),
    ];

    const user = await AsyncStorage.getItem("@vambora:user");

    const token = JSON.parse(user).token;

    try {
      await api.post(
        "/route",
        {
          name: "Rota Default",
          description: "Rota criada no registro do usuário",
          distance: parseInt(distance.toFixed(2)),
          duration: parseInt(duration.toFixed(2)),
          origin: formattedOrigin,
          destination: formattedDestination,
          originNeighborhood,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Sucesso!");
    } catch (error) {
      alert("Erro!");
      console.log(error);
    }
  }

  return (
    <Container>
      <HalfContainer>
        {origin.latitude !== 0 && origin.longitude !== 0 && (
          <MapView
            style={{
              flex: 1,
            }}
            ref={mapRef}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            provider={PROVIDER_GOOGLE}
          >
            {destination.latitude !== 0 && destination.longitude !== 0 && (
              <MapViewDirections
                origin={{
                  latitude: origin.latitude,
                  longitude: origin.longitude,
                }}
                destination={{
                  latitude: destination.latitude,
                  longitude: destination.longitude,
                }}
                apikey={GOOGLE_MAPS_API_KEY}
                strokeWidth={3}
                strokeColor="#8257E5"
                onStart={(params) => {
                  console.log(
                    `Started routing for driver between "${params.origin}" and "${params.destination}"`
                  );
                }}
                onReady={(result) => {
                  console.log(`Distance: ${result.distance} km`);
                  console.log(`Duration: ${result.duration} min.`);

                  setHasSelectedRoute(true);
                  setDuration(result.duration);
                  setDistance(result.distance);
                }}
              />
            )}
            <Marker
              coordinate={{
                latitude: origin.latitude,
                longitude: origin.longitude,
              }}
              title="Origem"
              description="Sua localização atual"
              identifier="origin"
            />
            <Marker
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude,
              }}
              title="Destino"
              description={campus}
              identifier="destination"
            />
          </MapView>
        )}
      </HalfContainer>
      <HalfContainer>
        <RoutesContainer>
          <Title>Vamos criar a sua primeira rota!</Title>
          <Label>De onde você irá sair?</Label>
          <View style={{ marginBottom: 12 }}>
            <GooglePlacesAutocomplete
              placeholder="Por padrão, já selecionamos sua localização atual"
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              styles={{
                container: {
                  flex: 0,
                },
                textInput: {
                  fontSize: 18,
                },
              }}
              query={{
                key: GOOGLE_MAPS_API_KEY,
                language: "pt-br",
                components: {
                  country: "br",
                },
              }}
              enablePoweredByContainer={false}
              onPress={(data: any, details = null) => {
                setOrigin({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
                setOriginNeighborhood(data.terms[data.terms.length - 4].value);
              }}
              fetchDetails={true}
              GooglePlacesSearchQuery={{
                rankby: "distance",
              }}
              enableHighAccuracyLocation={true}
            />
          </View>
          <Label>Para qual campus você vai?</Label>
          <CampusContainer>
            <CampusRow>
              <Campus
                isSelected={campus === "Darcy Ribeiro"}
                onPress={() => handleSelection("Darcy Ribeiro")}
              >
                <CampusText isSelected={campus === "Darcy Ribeiro"}>
                  Darcy Ribeiro
                </CampusText>
              </Campus>
              <Campus
                isSelected={campus === "Gama"}
                onPress={() => handleSelection("Gama")}
              >
                <CampusText isSelected={campus === "Gama"}>Gama</CampusText>
              </Campus>
            </CampusRow>
            <CampusRow>
              <Campus
                isSelected={campus === "Ceilândia"}
                onPress={() => handleSelection("Ceilândia")}
              >
                <CampusText isSelected={campus === "Ceilândia"}>
                  Ceilândia
                </CampusText>
              </Campus>
              <Campus
                isSelected={campus === "Planaltina"}
                onPress={() => handleSelection("Planaltina")}
              >
                <CampusText isSelected={campus === "Planaltina"}>
                  Planaltina
                </CampusText>
              </Campus>
            </CampusRow>
          </CampusContainer>
          <ContinueButton disabled={!hasSelectedRoute} onPress={handleContinue}>
            <ContinueButtonText>Continuar</ContinueButtonText>
          </ContinueButton>
        </RoutesContainer>
      </HalfContainer>
    </Container>
  );
}
