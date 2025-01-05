# TMO-Utility
[Read in English](README.md)

Extensión de Chrome para redirigir automáticamente los enlaces de dominios externos de TuMangaOnline al visor principal de [Zonatmo.com](https://zonatmo.com)

## En pocas palabras
El script se aplica si la URL página cumple con el formato `https://(cualquier dominio)/news/(HexID)/<cascade|paginated> ...`

Si cumple con el formato y la expresión regular coincide con el `HexID`, la ubicación de la ventana será
redirigido a `https://zonatmo.com/viewer/(HexID)/<configuración actual...>`
Debe apretar en la opción (botón) "Cascada"

![image](https://github.com/user-attachments/assets/d9743ac3-b8b0-4cb5-8b09-dc47d3c705fd)

## Descripción
**TMO Utility** es una extensión de Chrome que reemplaza automáticamente los enlaces externos de TMO con el visor de **ZonaTMO**. Simplifica tu experiencia de lectura al redirigirte directamente al contenido que deseas ver.

## Características
- Reemplazo automático de enlaces externos.
- Interfaz sencilla y fácil de usar.
- Compatible con las últimas versiones de Chrome.

## Instalación
Sigue estos pasos para instalar la extensión:

1. Clona este repositorio o descarga el código como archivo ZIP.
2. Abre Chrome y ve a `chrome://extensions/`.
3. Activa el modo **Modo desarrollador** en la esquina superior derecha.
4. Haz clic en **Cargar descomprimida** y selecciona la carpeta del proyecto.

## Uso
1. Navega a una página con enlaces externos de TMO.
2. Haz clic en el botón **Cascade** para redirigir automáticamente al visor de ZonaTMO.
![image](https://github.com/user-attachments/assets/b05d7fbc-beba-4164-86a0-19f9ca2d9034)


## Contribución
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un **Fork** del repositorio.
2. Crea una rama para tu feature o corrección: `git checkout -b nombre-de-tu-feature`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añade alguna feature'`.
4. Sube tus cambios: `git push origin nombre-de-tu-feature`.
5. Envía un **Pull Request**.

## Licencia
Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
