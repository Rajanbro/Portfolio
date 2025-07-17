# Portfolio

## Deploying to Netlify

This project uses Vite + React + TypeScript. To deploy on Netlify:

1. **Build Command:**
   ```
   npm run build
   ```
2. **Publish Directory:**
   ```
   dist
   ```
3. **Recommended:** Add a `netlify.toml` file to the project root for best results:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

This ensures client-side routing works and the build output is served correctly.

# Portfolio
