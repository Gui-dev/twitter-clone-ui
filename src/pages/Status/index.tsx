import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { ITweet, Tweet } from '../../components/Tweet'

import fakeTweets from './../../tweets.json'
import fakeAnswers from './../../fakes-answers.json'

import './style.css'
import { PaperPlaneRight } from 'phosphor-react'

export const Status = () => {
  const [tweet, setTweet] = useState<ITweet>({} as ITweet)
  const route = useParams()
  const { id } = route

  useEffect(() => {
    const findTweet = fakeTweets.find(tweet => tweet.id === id)
    if (!findTweet) return
    setTweet(findTweet)
  }, [id])

  return (
    <div className="status">
      <Header title="Tweet" />

      <Tweet {...tweet} />
      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
          <textarea id="tweet" placeholder="Tweet your answer"></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {fakeAnswers.map(answer => {
        return (
          <Tweet key={answer.id} {...answer} />
        )
      })}
    </div>
  )
}
