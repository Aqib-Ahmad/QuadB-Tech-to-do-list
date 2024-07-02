import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Container className="app">
      <Row>
        <Col>
          <h1>To-Do List</h1>
          <TaskInput />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
