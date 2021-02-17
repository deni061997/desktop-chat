const initialState = {
  contactFilter: '',
  showDetailsFlag: false,
  filterMessages: '',
  buttonChange: false,
};

export const application = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/filter':
      return {
        ...state,
        contactFilter: action.payload,
      };
    case 'button/change':
      return {
        ...state,
        buttonChange: !state.buttonChange,
      };
    case 'show/details':
      return {
        ...state,
        showDetailsFlag: !state.showDetailsFlag,
      };
    case 'filter/message':
      return {
        ...state,
        filterMessages: action.payload,
      };
    default:
      return state;
  }
};
