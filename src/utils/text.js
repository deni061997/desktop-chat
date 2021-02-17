//Функция для сокращения сообщения, отображенного в карточке контакта

export const cutMessage = (contact) => {
  if ([...contact.lastMessage.content].length >= 18) {
    return contact.lastMessage.content.substring(0, 18) + '...';
  }
  return contact.lastMessage?.content;
};
