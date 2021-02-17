const initialState = {
  messages: [],
  loading: false,
  newId: 1,
  deleting: false,
};

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'messages/loading/start':
      return {
        ...state,
        loading: true,
      };
    case 'messages/loading/succeed':
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case 'message/add/started':
      return {
        ...state,
        newId: state.newId + 1,
        messages: [...state.messages, action.payload],
      };
    case 'message/add/succeed':
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.tempId === action.payload.tempId) {
            return {
              ...message,
              sending: false,
              _id: action.payload._id,
            };
          }
          return message;
        }),
      };
    case 'message/delete/start':
      return {
        ...state,
        deleting: true,
        messages: state.messages.filter(
          (message) => message._id !== action.payload,
        ),
      };
    case 'message/delete/succeed':
      return {
        ...state,
        deleting: false,
        messages: action.payload,
      };
    default:
      return state;
  }
};
