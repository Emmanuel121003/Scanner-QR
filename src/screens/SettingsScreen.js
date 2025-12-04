import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Text>Permisos utilizados:</Text>
      <Text>- Cámara</Text>

      <Text style={{ marginTop: 10 }}>Almacenamiento:</Text>
      <Text>- AsyncStorage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});
