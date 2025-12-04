QR ScanApp

Aplicación móvil en React Native + Expo para escanear códigos QR, guardar historial y administrar registros.

👥 Integrantes

Emmanuel Narro Renteria

Sonia Ontiveros Soto

📝 Descripción breve

QR ScanApp es una aplicación móvil que permite escanear códigos QR usando la cámara del dispositivo.
Cada escaneo se guarda automáticamente en un historial interno, desde el cual el usuario puede:

Copiar el contenido

Eliminar registros individuales

Borrar todo el historial

La aplicación está construida con Expo SDK 54 y utiliza expo-camera para el escaneo.

🔐 Permisos utilizados
Permiso	Uso
📷 Cámara	Escanear códigos QR con CameraView de expo-camera.
💾 Almacenamiento (AsyncStorage)	Guardar historial de escaneos localmente dentro del dispositivo.
🛠 Tecnologías utilizadas

React Native

Expo SDK 54

expo-camera

AsyncStorage

React Navigation (native-stack)

Expo Go (para pruebas)

JavaScript

▶ ¿Cómo instalar / ejecutar la app?

1️⃣ Clonar el proyecto

git clone <url-del-repositorio>
cd my-qr-app

2️⃣ Instalar dependencias

npm install

3️⃣ Instalar módulos de Expo necesarios

npx expo install expo-camera @react-native-async-storage/async-storage

npx expo install react-native-screens react-native-safe-area-context

4️⃣ Ejecutar el proyecto

npx expo start

5️⃣ Escanear con Expo Go

Abre Expo Go en tu celular

Escanea el código QR que aparece en la terminal o en el navegador

📸 Capturas de pantalla
Pantalla principal – Escáner

![Imagen de WhatsApp 2025-12-04 a las 11 17 26_966d20c8](https://github.com/user-attachments/assets/86b3fa28-dfeb-405d-beb2-a8ae02487045)


Historial

![Imagen de WhatsApp 2025-12-04 a las 11 17 27_43dfd0bf](https://github.com/user-attachments/assets/cc610596-089a-4d5c-ba49-0fc53f3fd00c)


Ajustes

![Imagen de WhatsApp 2025-12-04 a las 11 17 26_cde067a1](https://github.com/user-attachments/assets/afb1d7dc-242c-498c-b542-1c391437a916)



🔄 Flujo general de la aplicación
[Inicio / Scanner]
       ↓
  Detecta QR
       ↓
 Guarda entrada en historial
       ↓
[Historial]
   • Copiar
   • Eliminar
   • Borrar todo
       ↓
[Ajustes]
   Información del app y permisos

📚 Historias de Usuario

Como usuario, quiero escanear códigos QR para obtener su información rápidamente.

Como usuario, quiero guardar automáticamente cada código escaneado para poder consultarlo después.

Como usuario, quiero copiar el contenido de un QR para usarlo en otra aplicación.

Como usuario, quiero eliminar elementos del historial para mantenerlo ordenado.

Como usuario, quiero borrar todo el historial cuando ya no sea necesario.

🧪 Casos de prueba manuales
Prueba	Acción	Resultado esperado
1. Pedir permiso de cámara	Abrir la app por primera vez	Muestra el diálogo de permisos
2. Escanear código QR	Apuntar a un QR	Detecta el QR y lo guarda en historial
3. Copiar contenido	En historial → Copiar	Texto copiado al portapapeles
4. Eliminar registro	Historial → Eliminar	El elemento desaparece del listado
5. Borrar historial completo	“Borrar todo”	Historial vacío
6. Navegación entre pantallas	Cambiar entre Scanner / Historial / Ajustes	Navega sin errores
🚀 Release – Versión 1.0.0
✔ Qué funciona

Escaneo de QR con expo-camera

Guardado automático en AsyncStorage

Copiar contenido

Eliminar elementos

Borrar todo el historial

Navegación estable

Permisos de cámara correctamente solicitados

⚠ Qué falta / mejoras posibles

Reconocer URLs y abrirlas directamente

Tema oscuro / claro

Compartir QR escaneado

🐞 Bugs conocidos

Si se mueve rápido la cámara, puede detectar el QR más de una vez (limitado con setScanned, pero puede depender del dispositivo).
