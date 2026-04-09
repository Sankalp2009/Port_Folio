/* eslint-disable no-undef */
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      logStats: true,
      cache: true,
      png: { quality: 82 },
      jpeg: { quality: 82, mozjpeg: true },
      jpg: { quality: 82, mozjpeg: true },
      webp: { quality: 82 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/Port_Folio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animation: ["framer-motion"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          ui: ["@radix-ui/react-tooltip", "lucide-react", "sonner"],
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.trace",
        ],
      },
      format: {
        comments: false,
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
    ],
    // `three` loads on demand with lazy Scene3D — omit so it is not pre-bundled into the dev cold path.
  },
});
