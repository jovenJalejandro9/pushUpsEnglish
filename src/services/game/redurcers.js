import {combineReducers} from 'redux'
import {TRANSLATE, BAD, RIGTH, RESET} from './actions'

let initialState = {
  index: 0,
  numWords: 1,
  initialWord: true,
  words:[
    {word: 'hola', translation: 'hello'},
    {word: 'adios', translation: 'bye'}, 
    {word: 'perro', translation: 'dog'},
    {word: 'gato', translation: 'cat'}
  ],
  end: false,
  currentWord: 'hola',
  fails: 0,
  over: false,
  pushUpsFail: 5
}

const translation = (state=initialState, action) => {
  let newState = {}
  switch(action.type){
    case TRANSLATE:
      newState = {
        currentWord: state.words[state.index].translation,
        initialWord: false
      }
      return Object.assign({}, state, newState)
    case BAD:
      newState = {
        currentWord: state.words[state.index + 1].word,
        initialWord: true,
        index: state.index + 1,
        fails: state.fails + 1
      }
      if(newState.index === state.numWords) newState.over = true
      return Object.assign({}, state, newState)
    case RIGTH:
      newState = {
        currentWord: state.words[state.index + 1].word,
        initialWord: true,
        index: state.index + 1
      }
      if(newState.index === state.numWords) newState.over = true
      return Object.assign({}, state, newState)
      case RESET:
      newState = {
        currentWord: state.words[state.index].translation,
        initialWord: true, 
        over: false, 
        initialWord: true, 
        index: 0, 
        fails: 0
      }
      return Object.assign({}, state, newState)
    default:
      return state
    }
}
const centralState = combineReducers({
  translation
})

export default centralState