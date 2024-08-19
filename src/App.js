import "./App.css";
import Main from "./Pages/Main";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
