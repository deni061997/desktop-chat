const initialState = {
  myId: '',
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'myProfile/load/succeed':
      return {
        ...state,
        myId: action.payload._id,
      };
    default:
      return state;
  }
};
