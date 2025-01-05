# TMO-Utility
[Leer en Español](README_es.md)

Chrome extension to automatically redirect TuMangaOnline external domain links to the main [Zonatmo.com](https://zonatmo.com) viewer  

## In a nutshell
The script is applied if the URL page meets with the format `https://(any domain)/news/(HexID)/<cascade|paginated> ...`

If meets with the format, and the regex matches the `HexID`, the window location will be
redirected to `https://lectortmo.com/viewer/(HexID)/<current configuration ...>`
You need to click on the "Cascade" button.
