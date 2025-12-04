import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { CameraView, Camera } from "expo-camera"; // 👈 CORRECTO PARA EXPO 54
import { saveEntry } from "../storage/history";
import { useIsFocused } from "@react-navigation/native";

export default function ScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();
  const timeoutRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleBarcodeScanned = async ({ type, data }) => {
    if (scanned) return;
    setScanned(true);

    const entry = {
      id: Date.now().toString(),
      type,
      data,
      createdAt: new Date().toISOString(),
    };

    await saveEntry(entry);

    Alert.alert(
      "Escaneado",
      data,
      [
        { text: "Cerrar" },
        { text: "Historial", onPress: () => navigation.navigate("History") }
      ]
    );

    timeoutRef.current = setTimeout(() => setScanned(false), 1500);
  };

  if (hasPermission === null) {
    return <View style={styles.center}><Text>Solicitando permisos...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.center}><Text>No hay acceso a la cámara</Text></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      {isFocused ? (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          barcodeScannerSettings={{ barcodeTypes: ["qr", "code128", "ean13"] }}
          style={StyleSheet.absoluteFillObject}
        />
      ) : null}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("History")}>
          <Text style={styles.btnText}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.btnText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  footer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnText: { color: "white" },
});
