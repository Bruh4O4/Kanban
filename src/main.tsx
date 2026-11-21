import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Layout from './layout/Layout'
import Boards from './pages/Boards/Boards'
import Success from './pages/Success/Success'
import Kanban from './pages/Kanban/Kanban'
import BoardModal from './pages/BoardModal/BoardModal'
import StickerInfoModal from './pages/StickerInfoModal/StickerInfoModal'
import StickerModal from './pages/StickerModal/StickerModal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/auth',
    element: <Auth/>
  },
  {
    path: '/main',
    element: <Layout/>,
    children: [
      {
        path: 'boards',
        element: <Boards/>,
        children: [
          {
            path: 'new',
            element: <BoardModal/>
          }
        ]
      },
      {
        path: 'boards/:boardId',
        element: <Kanban/>,
        children: [
          {
            path: 'stickers/:stickerId',
            element: <StickerInfoModal/>
          },
          {
            path: 'stickers/new',
            element: <StickerModal/>
          }
        ]
      },
      {
        path: 'stats',
        element: <Success/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)