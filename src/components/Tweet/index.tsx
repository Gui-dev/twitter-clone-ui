import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './style.css'

export const Tweet = () => {
  return (
    <article>
      <a className="tweet">
        <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
        <div className="tweet-content">
          <div className="tweet-content-header">
            <h1>Gui Silva</h1>
            <span>@Dryix</span>
          </div>
          <p>
            Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:
            <br />
            ✅ npm start: De 32s para 400ms (sim, demorava 30s)<br />
            ✅ npm build: De 120s para 22s<br />
            Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
          </p>
          <div className="tweet-content-footer">
            <button>
              <ChatCircle />
              20
            </button>
            <button>
              <ArrowClockwise />
              20
            </button>
            <button>
              <Heart />
              20
            </button>
          </div>
        </div>
      </a>
    </article>
  )
}
