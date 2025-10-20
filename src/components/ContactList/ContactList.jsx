import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";

import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
