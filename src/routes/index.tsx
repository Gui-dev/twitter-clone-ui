import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from '../layouts/Default'

import { Home } from '../pages/Home'
import { Status } from '../pages/Status'

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home />
  // },
  // {
  //   path: '/status/:id',
  //   element: <Status />
  // }
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/status/:id',
        element: <Status />
      }
    ]
  }
])
