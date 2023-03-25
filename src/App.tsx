import { RouterProvider } from 'react-router-dom'

import { Sidebar } from './components/Sidebar'
import { router } from './routes'

import './styles/style.css'

function App () {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <RouterProvider router={router} />
      </main>
    </div>
  )
}

export default App
