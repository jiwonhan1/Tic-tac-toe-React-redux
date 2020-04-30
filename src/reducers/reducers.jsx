// reducers 
// manage statuses

import * as actions from '../actions/actions';

const initialState = {
  winner : '',
  turn : 'O',
  tableData: [
    ['', '', '', ''], 
    ['', '', '', ''], 
    ['', '', '', ''], 
    ['', '', '', ''],
  ],
  latestInput: [-1, -1]
}

const reducer = (state=initialState, action)=> {
  console.log(state);
  //console.log('action is ' +state.action);
  switch(action.type){
    case actions.CLICK_CELL:
      //console.log('latest input is'+ state.latestInput[0])
      const tableData = [...state.tableData];
      console.log(tableData);
      console.log(action)
      tableData[action.rowIndex] = [...tableData[action.rowIndex]];
      tableData[action.rowIndex][action.columnIndex] = state.turn;
      // console.log('action.turn' +action.turn);
      // console.log('state.turn' + state.turn);
      // console.log(action.rowIndex);
      return {
        ...state,
        tableData,
        turn: state.turn,
        latestInput: [action.rowIndex, action.columnIndex]
      }
    case actions.SET_WINNER:
      console.log('set winnr', state.turn);
      return {
        ...state,
        winner: 'Winner is ' + state.turn
      }
    case actions.SET_TURN:
      console.log('set' + state.turn);
      return {
        ...state,
        turn: state.turn ==='O' ? 'X' : 'O'
      };
    case actions.RESET:
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', '', ''], 
          ['', '', '', ''], 
          ['', '', '', ''], 
          ['', '', '', ''],
        ],
        latestInput: [-1, -1]
      }
    default:
      return state;
  }
}

export default reducer