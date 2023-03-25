import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'

import fakeTweets from './../../tweets.json'

import './style.css'

export const Home = () => {
  return (
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
  )
}
