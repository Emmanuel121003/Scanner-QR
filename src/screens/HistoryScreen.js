import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAllEntries, deleteEntry, clearAll } from '../storage/history';
import * as Clipboard from 'expo-clipboard';

export default function HistoryScreen() {
  const [items, setItems] = useState([]);

  async function load() {
    const all = await getAllEntries();
    setItems(all);
  }

  useEffect(() => {
    load();
  }, []);

  const handleCopy = async (text) => {
    await Clipboard.setStringAsync(text);
    Alert.alert('Copiado', 'Texto copiado al portapapeles.');
  };

  const handleDelete = (id) => {
    Alert.alert("Eliminar", "¿Eliminar este elemento?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          const newList = await deleteEntry(id);
          setItems(newList);
        },
      },
    ]);
  };

  const handleClearAll = () => {
    Alert.alert("Borrar todo", "¿Seguro?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sí, borrar",
        style: "destructive",
        onPress: async () => {
          await clearAll();
          setItems([]);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.data}>{item.data}</Text>
        <Text style={styles.meta}>{new Date(item.createdAt).toLocaleString()}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={() => handleCopy(item.data)}>
          <Text style={styles.btnText}>Copiar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#ff3b30' }]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.btnText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <View style={styles.center}><Text>No hay historial aún</Text></View>
      ) : (
        <>
          <FlatList data={items} keyExtractor={i => i.id} renderItem={renderItem} />
          <TouchableOpacity style={styles.clearBtn} onPress={handleClearAll}>
            <Text style={{ color: '#fff' }}>Borrar todo</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    elevation: 2
  },
  data: { fontSize: 14, marginBottom: 6 },
  meta: { fontSize: 12, color: '#666' },
  btn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginBottom: 6
  },
  btnText: { color: '#fff' },
  clearBtn: {
    backgroundColor: '#ff3b30',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10
  }
});
