import "./App.css";
import { petDecrement, petIncrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
      <button onClick={() => dispatch(petIncrement(3))}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove pet</button>
      <h2>Pet Counter: {petCounter}</h2>
      <h2>Number of favorite pets so far: {petFavorite}</h2>
    </div>
  );
}

export default App;
