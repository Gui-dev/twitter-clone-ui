import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import twiiterLogoImg from './assets/logo-twitter.svg'
import './styles/style.css'

function App () {
  return (
    <section className="layout">
      <aside className="sidebar">
        <img src={twiiterLogoImg} alt="Twitter Logo" className="logo" />

        <nav className="main-navigation">
          <a href="#" className="active">
            <House weight="fill" />
            Home
          </a>
          <a href="#">
            <Hash />
            Explore
          </a>
          <a href="#">
            <Bell />
            Notifications
          </a>
          <a href="#">
            <Envelope />
            Messages
          </a>
          <a href="#">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="#">
            <FileText />
            Lists
          </a>
          <a href="#">
            <User />
            Profile
          </a>
          <a href="#">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button type="button" className="new-tweet">
          Tweet
        </button>
      </aside>
      <div className="content">
        Content
      </div>
    </section>
  )
}

export default App
