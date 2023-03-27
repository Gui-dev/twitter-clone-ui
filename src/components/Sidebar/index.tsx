import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
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
          Home
        </NavLink>
        <Link to="#">
          <Hash />
          Explore
        </Link>
        <Link to="#">
          <Bell />
          Notifications
        </Link>
        <Link to="#">
          <Envelope />
          Messages
        </Link>
        <Link to="#">
          <BookmarkSimple />
          Bookmarks
        </Link>
        <Link to="#">
          <FileText />
          Lists
        </Link>
        <Link to="#">
          <User />
          Profile
        </Link>
        <Link to="#">
          <DotsThreeCircle />
          More
        </Link>
      </nav>
      <button type="button" className="new-tweet">
        Tweet
      </button>
    </aside>
  )
}
