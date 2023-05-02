import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/use_workouts_context'

//components
import WorkoutDetails from '../components/workout_details'
import WorkoutForm from '../components/workout_form'

// Bootstrap
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const Home = () => {

  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/gymhero')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch]);

  return (
    <Container className="mt-5" fluid="sm">
      <Row>
        <Col sm={8}>
          <Stack gap={3}>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
              ))}
          </Stack>

        </Col>
        <Col>
          <WorkoutForm />
        </Col>
      </Row>
        
    </Container>

  );
}

export default Home