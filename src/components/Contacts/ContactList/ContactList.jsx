import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useContacts } from 'components/hooks/useContacts';

export const ContactList = () => {
  const contacts = useContacts();

  return (
    <List>
      <ListItem contacts={contacts} />
    </List>
  );
};
