import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import {
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      {error && <p>Oops, something went wrong, please reload the page.</p>}
      {!error && <SearchBox />}

      <ContactList />
    </div>
  );
}
