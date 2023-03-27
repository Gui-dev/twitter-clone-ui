import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

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
