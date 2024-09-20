import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/Ragistretion":{
        target:"http://localhost:3000",
        changeOrigin:true
      },
      "/Loginchecking":{
        target:"http://localhost:3000",
        changeOrigin:true
      },
      "/Aboutchecking":{
        target:"http://localhost:3000",
        changeOrigin:true
      },
      "/Contectchecking":{
        target:"http://localhost:3000",
        changeOrigin:true
      },
      "/ContectPaging":{
        target:"http://localhost:3000",
        changeOrigin:true
      },
      "/Uploading":{
        target:"http://localhost:5111",
        changeOrigin:true
      }
    }
  },
  plugins: [react()],
})
