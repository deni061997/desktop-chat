export const loadContacts = () => {
  return (dispatch) => {
    dispatch({ type: 'contacts/loading/start' });

    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'contacts/loading/succeed',
          payload: json,
        });
      });
  };
};

export const loadMessages = (linkToMessage, id) => {
  return (dispatch) => {
    dispatch({ type: 'messages/loading/start' });

    fetch(`https://api.intocode.ru:8001/api/messages/${linkToMessage}/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'messages/loading/succeed',
          payload: json,
        });
      });
  };
};

export function loadLink() {
  return (dispatch) => {
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: 'myProfile/load/succeed',
          payload: json,
        }),
      );
  };
}

export const sendMessage = (content, contactId) => {
  return (dispatch, getState) => {
    const state = getState();
    const tempId = state.messages.newId;
    const myId = state.profile.myId;
    dispatch({
      type: 'message/add/started',
      payload: {
        tempId,
        content,
        toUserId: contactId,
        type: 'text',
        sending: true,
      },
    });

    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        myId,
        contactId,
        content,
        type: 'text',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'message/add/succeed',
          payload: {
            ...json,
            tempId,
          },
        });
      });
  };
};

export const deleteMessage = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'message/delete/start',
      payload: id,
    });

    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'message/delete/succeed',
          payload: json,
        });
      });
  };
};

export const setFilterContact = (text) => {
  return {
    type: 'contact/filter',
    payload: text,
  };
};

export const buttonChanged = () => {
  return {
    type: 'button/change',
  };
};

export const chosenCard = (id) => {
  return {
    type: 'chosen/card',
    payload: id,
  };
};

export const filterMessage = (text) => {
  return {
    type: 'filter/message',
    payload: text,
  };
};

export const showDetails = () => {
  return {
    type: 'show/details',
  };
};
