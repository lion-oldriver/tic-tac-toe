import calculateWinner from './calculateWinner'
import { Action } from './Action'
import { SquaresType } from './SquaresType'

interface History {
  squares: SquaresType
}

interface State {
  history: History[]
  stepNumber: number
  xIsNext: boolean
}

export const initialState: State = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
}

const reducer = (state: State, action: Action) => {
  switch (action.type){
    case 'click':
      const currentHistory = state.history.slice(0, state.stepNumber + 1);
      const current = currentHistory[currentHistory.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.value]) {
        return state;
      }
      squares[action.value] = state.xIsNext ? "X" : "O";

      return {
        ...state,
        history: [ ...currentHistory, { squares: squares } ],
        stepNumber: currentHistory.length,
        xIsNext: !state.xIsNext,
      }
    case 'jump': 
      return {
        ...state,
        stepNumber: action.value,
        xIsNext: (action.value % 2) === 0
      }
    default:
      return state
  }
}

export default reducer
