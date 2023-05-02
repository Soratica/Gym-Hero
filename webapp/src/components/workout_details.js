import { useWorkoutsContext } from "../hooks/use_workouts_context";

//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('/api/gymhero/' + workout._id, {
      method: 'DELETE'
    });
    const json = await response.json();
    
    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{workout.title}</Card.Title>
          <p className="ps-2">
            <strong>Load (lbs): </strong>{workout.load}
            <br />
            <strong>Reps: </strong>{workout.reps}
          </p>
        <Button className="float-right" variant="secondary" onClick={handleClick}>Delete</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}
      </Card.Footer>
    </Card>
        


  )
}

export default WorkoutDetails