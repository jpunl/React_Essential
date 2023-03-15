import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false)

  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <lable>{checked ? "checked" : "not checked"}</lable>
    </div>
  );
}

export default App;
