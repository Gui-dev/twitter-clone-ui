import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

import './style.css'

export const DefaultLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
