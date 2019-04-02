const myStore = {
  title: 'ini sebuah title lewat redux',
  info: 'Learn React',
  people: [],   
  angka: 0 
}


const myReducer = (state = {...myStore}, action) => {
  switch(action.type){
    case('INCREMENT'):
      return({
        ...state,
        angka: state.angka += 1
      })
    case('DECREMENT'):
      return({
        ...state,
        angka: state.angka -= action.payload
      })
    default:
      return state
  }
} 

export default myReducer