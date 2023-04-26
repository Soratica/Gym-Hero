import { WorkoutsContext } from "../context/workout_context";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error('useWorksContext muse be used inside an WorkoutsContxtProvider')
  }

  return context
}