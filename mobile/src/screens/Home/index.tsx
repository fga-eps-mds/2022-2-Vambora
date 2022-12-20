import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Container, HalfContainer } from "./styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

interface Coordinate {
  latitude: number;
  longitude: number;
}

export function Home() {
  const [origin, setOrigin] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [destination, setDestination] = useState({
    latitude: -15.98928,
    longitude: -48.04454,
  });

  const [coordinates, setCoordinates] = useState([]);

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
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  }, [origin, destination]);

  function updateLocation(location) {
    setOrigin({
      latitude: location.latitude,
      longitude: location.longitude,
    });
  }

  function filterDirections(cs: Coordinate[]) {
    const directions = [];

    cs.forEach((c) => {
      if (directions.length > 0) {
        const distance = Math.sqrt(
          Math.pow(directions[directions.length - 1].latitude - c.latitude, 2) +
            Math.pow(
              directions[directions.length - 1].longitude - c.longitude,
              2
            )
        );

        if (distance > 0.015) {
          directions.push(c);
        }
      } else {
        directions.push(c);
      }
    });

    setCoordinates(directions);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
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
              onPress={(event) => updateLocation(event.nativeEvent.coordinate)}
            >
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
                    `Started routing between "${params.origin}" and "${params.destination}"`
                  );
                }}
                onReady={(result) => {
                  console.log(`Distance: ${result.distance} km`);
                  console.log(`Duration: ${result.duration} min.`);

                  filterDirections(result.coordinates);
                }}
              />
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
                title="UnB Campus Gama"
                identifier="destination"
              />
              {coordinates.map((coordinate, index) => (
                <Marker key={`coordinate_${index}`} coordinate={coordinate} />
              ))}
            </MapView>
          )}
        </HalfContainer>
        <HalfContainer>
          <GooglePlacesAutocomplete
            placeholder="De onde você quer sair?"
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
            }}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              setOrigin({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }}
            fetchDetails={true}
          />
        </HalfContainer>
      </Container>
    </SafeAreaView>
  );
}
