import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist', // Nombre de la carpeta de salida
    rollupOptions: {
      input: {
        main: './src/index.html', // Ruta al archivo HTML principal
      }
    }
  },
  server: {
    port: 8080
  }
}