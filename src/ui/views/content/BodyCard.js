import React, {Component} from 'react'
import TranslatedCard from './TranslatedCard'
import GuessCard from './GuessCard'

class BodyCard extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      pos: 0,
      translated: true
    }
    // this.translate = this.translate.bind(this)
  }

    render() {
      const words = this.props.words
      return this.state.translated ?
      <TranslatedCard></TranslatedCard>:
      <GuessCard></GuessCard>
    }
}

export default BodyCard;