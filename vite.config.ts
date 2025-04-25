import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
// import preline from '@preline/plugin';  // Correct import path


export default defineConfig({
       plugins: [
        tailwindcss(),
        react(),
      ],
 
  
});