# TMO-Utility
[Read in English](README.md)

Extensión de Chrome para redirigir automáticamente los enlaces de dominios externos de TuMangaOnline al visor principal de [Zonatmo.com](https://zonatmo.com)

## En pocas palabras
El script se aplica si la URL página cumple con el formato `https://(cualquier dominio)/news/(HexID)/<cascade|paginated> ...`

Si cumple con el formato y la expresión regular coincide con el `HexID`, la ubicación de la ventana será
redirigido a `https://zonatmo.com/viewer/(HexID)/<configuración actual...>`
Debe apretar en la opción (botón) "Cascada"
