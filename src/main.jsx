import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Forside from './views/forside.jsx'
import Kontakt from './views/kontakt.jsx'
import Pokemon from './views/pokemon.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Forside />
  },
  {
    path: "/kontakt",
    element: <Kontakt />
  },
  {
    path: "/pokemon/:name",
    element: <Pokemon />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
