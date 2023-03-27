import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { ITweet, Tweet } from '../../components/Tweet'

import fakeTweets from './../../tweets.json'

import './style.css'

export const Home = () => {
  const [tweets, setTweets] = useState<ITweet[]>(fakeTweets)
  const [newTweet, setNewTweet] = useState('')

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault()
    const result: ITweet = {
      id: String(Math.random() + new Date().getTime()),
      name: 'Gui Silva',
      user: '@Dryix',
      tweet: newTweet,
      image_url: 'https://github.com/Gui-dev.png',
      comments: 0,
      likes: 0,
      retweets: 0
    }
    setTweets([...tweets, result])
    setNewTweet('')
  }

  return (
    <div className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={event => setNewTweet(event.target.value)}
          >
          </textarea>
        </label>
        <button type="submit">
          Tweet
        </button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return (
          <Tweet key={tweet.id} {...tweet} />
        )
      })}
    </div>
  )
}
