# TMO-Utility
[Leer en Español](README_es.md)

Chrome extension to automatically redirect external domain links from TuMangaOnline to the main viewer of [Zonatmo.com](https://zonatmo.com)

## In a Nutshell
The script applies if the page URL matches the format `https://(any domain)/news/(HexID)/<cascade|paginated> ...`

If it matches the format and the regular expression matches the `HexID`, the window location will be redirected to `https://zonatmo.com/viewer/(HexID)/<current configuration...>`
You must click on the "Cascade" option (button).

![image](https://github.com/user-attachments/assets/d9743ac3-b8b0-4cb5-8b09-dc47d3c705fd)

## Description
**TMO Utility** is a Chrome extension that automatically replaces external TMO links with the **ZonaTMO** viewer. It simplifies your reading experience by redirecting you directly to the content you want to view.

## Features
- Automatic replacement of external links.
- Simple and easy-to-use interface.
- Compatible with the latest versions of Chrome.

## Installation
Follow these steps to install the extension:

1. Clone this repository or download the code as a ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the project folder.

## Usage
1. Navigate to a page with external TMO links.
2. Click the **Cascade** button to automatically redirect to the ZonaTMO viewer.
![image](https://github.com/user-attachments/assets/b05d7fbc-beba-4164-86a0-19f9ca2d9034)

## Contributing
Contributions are welcome! If you want to improve this project, follow these steps:

1. **Fork** the repository.
2. Create a branch for your feature or fix: `git checkout -b your-feature-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push your changes: `git push origin your-feature-name`.
5. Submit a **Pull Request**.

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
