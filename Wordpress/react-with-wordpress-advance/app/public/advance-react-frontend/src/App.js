import Home from './components/Home';
import "./scss/main.scss";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SinglePost from './components/SinglePost';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:id" element={<SinglePost/>} />
        </Routes>
      </Router>
  );
}

export default App;
