import './App.css';
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './feature/Input';
import AddGame from './feature/AddGame';
import Calculator from './feature/Calculator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './feature/Search';

function App() {
  return (
    <>
      <Container>
        <Row className='text-center'>
          <Input
            type="text"
            placeholder="Enter your task"
            buttonText = "Add"
          />
        </Row>
        <Row>
          <AddGame
            title = "Enter your game"
            buttonText = "Add"
          />
        </Row>
        <Row>
          <Calculator/>
        </Row>
        <Row>
            <Search/>
        </Row>
      </Container>
    </>
  );
}

export default App;
