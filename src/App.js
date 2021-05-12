
import './App.css';
import DataPage from './Pages/DataPage/views';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import AddDataPage from './Pages/AddDataPage/views';

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={DataPage} exact/>
        <Route path='/addDataPage' component={AddDataPage} />
      </Container>
    </Router>
  );
}

export default App;
