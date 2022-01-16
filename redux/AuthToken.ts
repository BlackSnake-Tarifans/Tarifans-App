export const TOKEN_CHANGE = 'TOKEN_CHANGE'

var initialState : any = ""

const authTokenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOKEN_CHANGE:
        {
            initialState=action.payload
            return action.payload
        }
      
    
  }
  return state
}

export default authTokenReducer