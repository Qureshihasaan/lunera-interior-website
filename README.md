# Lunera - Luxury Home Decor

A full-stack ready React application for premium interior design.

## Setup

1.  Initialize a new Vite project:
    ```bash
    npm create vite@latest lunera -- --template react-ts
    cd lunera
    npm install
    ```

2.  Install dependencies:
    ```bash
    npm install react-router-dom lucide-react @google/genai
    ```

3.  Replace the contents of the generated files with the code provided in this project.

4.  Add your API Key:
    *   Create a `.env` file in the root.
    *   Add: `VITE_API_KEY=your_gemini_api_key_here`
    *   (Note: In the code provided, we use `process.env.API_KEY` for compatibility with the generated output format, but in Vite you typically use `import.meta.env.VITE_API_KEY`. Ensure your bundler maps the variable correctly).

## Deployment (Vercel)

1.  Push your code to a GitHub repository.
2.  Log in to Vercel and click "Add New Project".
3.  Import your repository.
4.  In "Environment Variables", add `API_KEY` (or `VITE_API_KEY`).
5.  Click "Deploy".
