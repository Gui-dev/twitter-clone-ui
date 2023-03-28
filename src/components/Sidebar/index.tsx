import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'

import twiiterLogoImg from './../../assets/logo-twitter.svg'
import './style.css'

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={twiiterLogoImg} alt="Twitter Logo" className="logo" />

      <nav className="main-navigation">
        <NavLink to="/" className="active">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <Link to="#">
          <Hash />
          <span>Explore</span>
        </Link>
        <Link to="#">
          <Bell />
          <span>Notifications</span>
        </Link>
        <Link to="#">
          <Envelope />
          <span>Messages</span>
        </Link>
        <Link to="#">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </Link>
        <Link to="#">
          <FileText />
          <span></span>
        </Link>
        <Link to="#">
          <User />
          <span>Profile</span>
        </Link>
        <Link to="#">
          <DotsThreeCircle />
          <span>More</span>
        </Link>
      </nav>
      <button type="button" className="new-tweet">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}
