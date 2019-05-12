
// functions that create actions — they simply return actions
export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}