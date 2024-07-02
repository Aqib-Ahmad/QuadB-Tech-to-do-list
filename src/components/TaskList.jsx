
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleCompleteTask } from '../redux/actions';
import { Button, ListGroup, ButtonGroup } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newTaskText) => {
    const updatedText = prompt('Edit task:', newTaskText);
    if (updatedText !== null) {
      dispatch(editTask(id, { text: updatedText }));
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleCompleteTask(id));
  };

  return (
    <ListGroup className="task-list">
      {tasks.map(task => (
        <ListGroup.Item key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => handleToggleComplete(task.id)} style={{ cursor: 'pointer' }}>
            {task.text}
          </span>
          <ButtonGroup>
            <Button variant="warning" size="sm" onClick={() => handleEdit(task.id, task.text)}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => handleDelete(task.id)}>
              Delete
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
