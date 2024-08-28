import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'


const queyClient=new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queyClient}>
 <App />

  </QueryClientProvider>
   
  ,
)
