Aplicación móvil en React Native + Expo para escanear códigos QR, guardar historial y administrar registros.

Integrantes

Emmanuel Narro Renteria

Sonia Ontiveros Soto

Descripción

QR ScanApp es una aplicación móvil que permite escanear códigos QR usando la cámara del dispositivo.
Cada escaneo se guarda automáticamente en un historial interno, desde el cual el usuario puede:

Copiar el contenido

Eliminar registros individuales

Borrar todo el historial

La aplicación está construida con Expo SDK 54 y utiliza expo-camera para el escaneo.

Permisos utilizados
Permiso	Uso
Cámara	Escanear códigos QR con CameraView de expo-camera.
Almacenamiento (AsyncStorage)	Guardar historial de escaneos localmente dentro del dispositivo.
Tecnologías utilizadas

React Native

Expo SDK 54

expo-camera

AsyncStorage

React Navigation (native-stack)

Expo Go (para pruebas)

JavaScript

▶ ¿Cómo instalar / ejecutar la app?

Clonar el proyecto

git clone <url-del-repositorio>
cd my-qr-app

Instalar dependencias

npm install

Instalar módulos de Expo necesarios

npx expo install expo-camera @react-native-async-storage/async-storage

npx expo install react-native-screens react-native-safe-area-context

Ejecutar el proyecto

npx expo start

Escanear con Expo Go

Abre Expo Go en tu celular

Escanea el código QR que aparece en la terminal o en el navegador

Capturas de pantalla
Pantalla principal – Escáner

![Imagen de WhatsApp 2025-12-04 a las 11 17 26_966d20c8](https://github.com/user-attachments/assets/86b3fa28-dfeb-405d-beb2-a8ae02487045)


Historial

![Imagen de WhatsApp 2025-12-04 a las 11 17 27_43dfd0bf](https://github.com/user-attachments/assets/cc610596-089a-4d5c-ba49-0fc53f3fd00c)


Ajustes

![Imagen de WhatsApp 2025-12-04 a las 11 17 26_cde067a1](https://github.com/user-attachments/assets/afb1d7dc-242c-498c-b542-1c391437a916)



