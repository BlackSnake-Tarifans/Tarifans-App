export const TOKEN_CHANGE = 'TOKEN_CHANGE';

const initialState: any = { auth_token: '' };

const authTokenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOKEN_CHANGE: {
      initialState.auth_token = action.payload;
      return initialState;
    }
  }
  return state;
};

export default authTokenReducer;
