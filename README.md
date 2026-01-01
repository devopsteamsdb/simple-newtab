# Static NewTab Dashboard

A lightweight, pixel-perfect clone of the NewTab dashboard, re-engineered to run entirely client-side without any server-side dependencies.

### 🔴 [Live Demo](https://devopsteamsdb.github.io/simple-newtab/)

## 🚀 Key Features

*   **100% Static**: Pure HTML, CSS, and JavaScript. No Node.js, Python, or PHP backend required.
*   **Serverless**: Runs directly in the browser, even via the `file://` protocol.
*   **Local Assets**: All images and icons are stored locally in the `assets/` folder.
*   **Configuration via `data.js`**: Data is loaded synchronously from a JavaScript file, avoiding CORS issues common with JSON fetching in local environments.
*   **Advanced Card Features**:
    *   **3D Flip Cards**: Interactive cards with front and back faces.
    *   **Smart Pagination**: Automatically paginates link lists link lists inside cards ( > 4 links).
    *   **Clickable Cards**: Cards with a single link are fully clickable.
    *   **Tags**: Support for visual tags on card faces.
    *   **Visual Customization**: Full control over background/foreground colors, images, and sizing modes (`fit`, `fill`, `cover`).
*   **Presets Library**: Includes a comprehensive `presets.json` (for reference) and pre-downloaded assets for 99+ common DevOps and tech tools.

## 📂 Project Structure

*   `index.html`: The main entry point. Open this file in your browser.
*   `data.js`: **Configuration file**. Edit this to add your own pages, systems (cards), and links.
*   `script.js`: Core logic for rendering, pagination, and interactions.
*   `style.css`: All visual styling, including the grid layout, animations, and responsive design.
*   `assets/`: Directory containing all local image files.
*   `presets.json`: A reference file containing templated data for common services.

## 🛠️ How to Customize

1.  **Open `data.js`** in any text editor.
2.  **Edit the `systems` array** to add your own cards.
    ```javascript
    {
        "name": "My Service",
        "image": "assets/my-icon.png", // Ensure image is in assets/ folder
        "links": [
            { "text": "Go to Dashboard", "url": "https://dashboard.local" }
        ],
        "tags": ["Production", "v1.0"], // Optional tags
        "pages": ["default", "devops"]  // Pages where this card appears
    }
    ```
3.  **Refresh `index.html`** in your browser to see changes instantly.

## 🌟 Why this version?

Unlike the original project which may rely on a backend for data serving, search APIs, or admin interfaces, this version is stripped down to the essentials for speed, portability, and ease of deployment. You can host it on GitHub Pages, S3, or just keep it on your local machine.
