import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice.js";
import { selectFilter } from "../../redux/filters/selectors.js";
import css from "./SearchBox.module.css";
export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <div className={css.SearchBox}>
      <label htmlFor={searchId}>Find contacts by name: {value}</label>
      <input
        onChange={handleChange}
        id={searchId}
        type="text"
        placeholder="Search contact"
      />
    </div>
  );
}
