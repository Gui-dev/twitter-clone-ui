import { Sparkle } from 'phosphor-react'

import './style.css'

interface IHeader {
  title: string
}

export const Header = ({ title }: IHeader) => {
  return (
    <div className="timeline-header">
      {title}
      <Sparkle />
    </div>
  )
}
