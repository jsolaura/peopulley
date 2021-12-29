import './App.css';
import './responsive.css';
import Header from 'components/Header/Header';
import GoToTop from 'components/GoToTop/GoToTop';
import Transition from 'components/Transition/Transition';
import Cursor from "components/Cursor/Cursor";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
      <>
        <Router>
            <GoToTop />
            <Header />
            <Transition />
            <Cursor />
        </Router>
      </>
  );
}

export default App;
