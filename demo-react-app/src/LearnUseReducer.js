import { useReducer } from 'react'

const initState = {
  job: "",
  jobs: []
}

const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DELETE_JOB = "delete_job"

const setJob = payload => {
  return {
    type: SET_JOB,
    payload,
  };
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload,
  };
}
const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload,
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((item, index) => index !== action.payload ),
      };

    default:
      throw new Error("Invalid action.");
  }
}

function LearnUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state

  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  }
  
  return (
    <div className="todo-wrap">
      <input type="text" value={job} onChange={(e) => dispatch(setJob(e.target.value))} />
      <button onClick={handleAddJob}>Add job</button>
      <div className="list">
        <ul>
          {
            jobs.map((item, index) => (
              <li key={index}>{ item } <button onClick={() => dispatch(deleteJob(index))}>&times;</button></li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default LearnUseReducer;
