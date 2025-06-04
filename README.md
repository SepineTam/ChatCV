# ChatCV

Simple AI chatbot website powered by [Dify](https://dify.ai). The frontend uses HTML and Tailwind CSS.

## Setup

1. Copy `.env.example` to `.env` and fill in your `DIFY_APP_ID` and `DIFY_API_KEY`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:3000`.

## Project Structure

- `website/index.html` – main webpage with Tailwind styling and Dify chat widget.
- `server.js` – small Express server that injects environment variables.
- `.env.example` – example file for environment configuration.

## Screenshots

![screenshot](./screenshot.png)
