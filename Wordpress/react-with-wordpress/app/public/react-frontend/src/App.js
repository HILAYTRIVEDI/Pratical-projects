import './App.css';
import Books from './components/Books';
import {BrowserRouter as Router, Routes , Route} from  'react-router-dom';
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Books/>} />
      </Routes>
    </Router>
  );
}

export default App;
