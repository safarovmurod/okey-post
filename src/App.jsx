import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import HowToBuy from './pages/HowToBuy'
import Sales from './pages/Sales'
import NotFound from './components/NotFound'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'how-to-buy',
      element: <HowToBuy/>
    },
    {
      path: 'sales',
      element: <Sales/>
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ])

  return <RouterProvider router={router}/>
}