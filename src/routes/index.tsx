import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Status } from '../pages/Status'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/status/:id',
    element: <Status />
  }
])
