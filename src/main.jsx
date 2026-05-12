import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Timeline from './pages/Timeline/Timeline'
import StatsPage from './pages/StatsPage/StatsPage'
import HomePage from './pages/HomePage/HomePage'
import FriendDetails from './pages/FriendsDetails/FriendDetails'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children:[
        {
          index: true,
          element: <HomePage />,
          // loader: ()=> fetch("/data.json"),
        },
        {
          path: '/FriendsDetails/:friendId',
          element: <FriendDetails />,
          loader: () => fetch('/data.json'),
        },
        {
          path: '/Timeline',
          element: <Timeline />,
        },
        {
          path: '/StatsPage',
          element: <StatsPage />
        }
      ],
      errorElement: <NotFoundPage />,
    },
  ],
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
