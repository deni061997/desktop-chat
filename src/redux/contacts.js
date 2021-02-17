const initialState = {
  contacts: [],
  loading: false,
};

export const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/loading/start':
      return {
        ...state,
        loading: true,
      };
    case 'contacts/loading/succeed':
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case 'chosen/card':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact._id === action.payload) {
            return {
              ...contact,
              checked: true,
            };
          }
          return {
            ...contact,
            checked: false,
          };
        }),
      };
    default:
      return state;
  }
};
