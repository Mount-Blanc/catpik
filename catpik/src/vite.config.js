// vite.config.js
export default {
    // Base URL for the application (useful if your app is deployed in a subdirectory)
    base: '/',
  
    // Root directory of the source code
    root: './src',
  
    // Development server configuration
    server: {
      port: 3000, // The port to run the development server on
    },
  
    // Build output directory configuration
    build: {
      outDir: 'dist', // The directory where the build output will be placed
    },
     // Configure the resolver for JSX files
  resolve: {
    alias: {
      // Make sure to adjust the path if your source directory is different
      '@jsx': require('path').resolve(__dirname, 'src')
    }
  },
  testEnvironment: 'jsdom',
  // Configure Vite's build step to handle JSX
  esbuild: {
    jsxFactory: 'jsx', // Set the JSX factory function (if needed)
    jsxInject: 'import jsx from "@jsx";' // Import the JSX factory module
  },

  testEnvironment: 'jsdom',
    // Plugins and custom configurations
    plugins: [], // Add any Vite plugins here
  };
  