import { useState } from "react"
import { useWorkoutsContext } from "../hooks/use_workouts_context";

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {title, load, reps}

    const response = await fetch('/api/gymhero', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();


    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
      document.getElementById('form-alert').classList.remove('d-none');
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      console.log('new workout added:', json);
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      document.getElementById('form-alert').classList.add('d-none');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Excercize Title</Form.Label>
        <Form.Control type="text" 
                      onChange={(e) => setTitle(e.target.value)} 
                      value={title}
                      className={emptyFields.includes('title') ? 'border-danger' : ''}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Load (in lbs)</Form.Label>
        <Form.Control type="number" 
                      onChange={(e) => setLoad(e.target.value)} 
                      value={load}
                      className={emptyFields.includes('load') ? 'border-danger' : ''}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Reps</Form.Label>
        <Form.Control type="number" 
                      onChange={(e) => setReps(e.target.value)} 
                      value={reps}
                      className={emptyFields.includes('reps') ? 'border-danger' : ''}/>
      </Form.Group>
      <Button type="submit">Add Workout</Button>

      <div id="form-alert" className="alert alert-danger mt-3 d-none" role="alert">
        {error && <div>{error}</div>}
      </div>
      
    </Form>
  )
}

export default WorkoutForm