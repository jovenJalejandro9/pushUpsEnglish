import{connect} from 'react-redux'
import {translate, right, bad, reset} from '../../services/game/actions'
import GamePage from '../../ui/views/content/Game'

const mapStatetoProps = (state) => {
  return {
    word: state.translation.currentWord,
    numWords: state.translation.numWords, 
    index: state.translation.index,
    initialWord: state.translation.initialWord,
    over: state.translation.over,
    fails: state.translation.fails,
    pushUpsFail: state.translation.pushUpsFail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    translate: () => dispatch(translate()),
    right: () => dispatch(right()),
    bad: () => dispatch(bad()),
    reset: () => dispatch(reset())
  }
}

const EnhancedGamePage = connect(
  mapStatetoProps, 
  mapDispatchToProps
)(GamePage)

export default EnhancedGamePage