import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'qr_history_v1';

export async function saveEntry(entry) {
  const raw = await AsyncStorage.getItem(KEY);
  const list = raw ? JSON.parse(raw) : [];
  list.unshift(entry); 
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
  return list;
}

export async function getAllEntries() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function clearAll() {
  await AsyncStorage.removeItem(KEY);
}

export async function deleteEntry(id) {
  const raw = await AsyncStorage.getItem(KEY);
  const list = raw ? JSON.parse(raw) : [];
  const filtered = list.filter(e => e.id !== id);
  await AsyncStorage.setItem(KEY, JSON.stringify(filtered));
  return filtered;
}
