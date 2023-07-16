import logo from "./logo.svg";
import "./App.css";
import CounterComponent from "./Counter";
import { Provider } from "react-redux";
import store from "./store";

import Counter from "./Test";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
