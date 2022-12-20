import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Platform, SafeAreaView, Text, View } from "react-native";

import { Container, HalfContainer } from "./styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_API_KEY } from "@env";

export function Home() {
  const [origin, setOrigin] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [destination, setDestination] = useState({
    latitude: -15.98928,
    longitude: -48.04454,
  });

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

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Container>
        <HalfContainer>
          {origin.latitude !== 0 && origin.longitude !== 0 && (
            <MapView
              style={{
                flex: 1,
              }}
              ref={mapRef}
              mapType="mutedStandard"
              initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              provider={PROVIDER_GOOGLE}
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
            </MapView>
          )}
        </HalfContainer>
        <HalfContainer></HalfContainer>
      </Container>
    </SafeAreaView>
  );
}
