import { useState } from 'react'
import { Navigation } from './Navigation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import HomePage from './pages/Home'
import SortingPage from './pages/Sorting'
import TypeShowPage from './pages/TypeShow'
import AboutPage from './pages/About'
import RootLayout from './Root'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
  { path: "/", 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      
      { path: "/sorting", element: <SortingPage /> },
      { path: "/typeshow", element: <TypeShowPage /> },
      { path: "/About", element: <AboutPage /> }
  ]},
 
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <RouterProvider router={router} />
    </>

  )
}

export default App
