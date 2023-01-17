import { useSelector, useDispatch } from "react-redux";
import { petFaIncrement, petFaDecrement } from "./actions";
import "./App.css";

function NewApp() {
  const dispatch = useDispatch();
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);

  return (
    <div className="App">
      <h1>Manage Favorite Pets</h1>
      <button onClick={() => dispatch(petFaIncrement(3))}>Add FA pet</button>
      <button onClick={() => dispatch(petFaDecrement())}>Remove FA pet</button>
      <h2>Pet Counter: {petCounter}</h2>
      <h2>Number of favorite pets so far: {petFavorite}</h2>
    </div>
  );
}

export default NewApp;
