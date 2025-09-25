import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Router from './router.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from "react-redux";
import { store } from './redux/stores/pokemonStore.ts'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <Router />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
