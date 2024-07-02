
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ text: task }));
      setTask('');
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        placeholder="Add a new task"
      />
      <Button variant="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
