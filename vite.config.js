import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vite.dev/config/
export default defineConfig({
  base: "https://tomas12py.github.io/Blog-project",
  plugins: [react()],

})
