import {BrowserRouter} from "react-router-dom";

import './App.css';
import Main from "./Components/Main";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <Main/>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
