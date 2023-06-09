import { Link } from 'react-router-dom'
import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'

import './style.css'

export interface ITweet {
  id: string
  name: string
  user: string
  image_url: string
  tweet: string
  comments: number
  retweets: number
  likes: number
}

export const Tweet = (tweet: ITweet) => {
  return (
    <article>
      <Link to={`/status/${tweet.id}`} className="tweet">
        <img src={tweet.image_url} alt={tweet.name} />
        <div className="tweet-content">
          <div className="tweet-content-header">
            <h1>{tweet.name}</h1>
            <span>{tweet.user}</span>
          </div>
          <p>{tweet.tweet}</p>
          <div className="tweet-content-footer">
            <button>
              <ChatCircle />
              {tweet.comments}
            </button>
            <button>
              <ArrowClockwise />
              {tweet.retweets}
            </button>
            <button>
              <Heart />
              {tweet.likes}
            </button>
          </div>
        </div>
      </Link>
    </article>
  )
}
