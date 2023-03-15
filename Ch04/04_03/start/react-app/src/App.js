import "./App.css";

const [firstCity] = ["Tokyo", "Beijing", "NewYork"];

console.log(firstCity);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
