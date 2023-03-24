import { Header } from './components/Header'
import { Separator } from './components/Separator'
import { Sidebar } from './components/Sidebar'
import { Tweet } from './components/Tweet'
import './styles/style.css'

import fakeTweets from './tweets.json'

function App () {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <div className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
              <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>
            <button type="submit">
              Tweet
            </button>
          </form>

          <Separator />

          {fakeTweets.map(tweet => {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
