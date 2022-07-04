import { useReducer } from "react";
import reducer, { initState } from './reducer'
import {setJob, addJob, deleteJob} from './actions'

function LearnUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  return (
    <div className="todo-wrap">
      <input
        type="text"
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAddJob}>Add job</button>
      <div className="list">
        <ul>
          {jobs.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => dispatch(deleteJob(index))}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LearnUseReducer;
