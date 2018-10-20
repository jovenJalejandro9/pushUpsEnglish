import React, { Component } from 'react'
import NormalCard from './NormalCard';
import FinalMessage from './FinalMessage'


class Game extends Component {
  render() {
    const { index, numWords, word, initialWord, translate, right, bad, over, fails, pushUpsFail, reset } = this.props
    return (
      <div>
        {over ? (
          <FinalMessage
            fails={fails}
            pushUpsFail={pushUpsFail}
            over={over}
            reset={reset}
          />
        ) : (
            <NormalCard
              index={index}
              numWords={numWords}
              word={word}
              initialWord={initialWord}
              translate={translate}
              right={right}
              bad={bad}
            />
          )}
      </div>
    )
  }
}

export default Game