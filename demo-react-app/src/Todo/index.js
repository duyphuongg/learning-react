import { useReducer, useContext } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import { ThemeContext } from "./../ThemeContext";
import styled from "styled-components";

const TodoStyle = styled.div`
  // eslint-disable-next-line no-undef
  .todo-wrap {
    width: 100%;
    min-height: 100vh;
    &.light {
      background-color: #fff;
    }
    &.dark {
      background-color: #f1f1f1;
    }
  }
`;

function LearnUseReducer() {
  const context = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  return (
    <TodoStyle theme={context.theme}>
      <div className={`${context.theme} todo-wrap`}>
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
    </TodoStyle>
  );
}

export default LearnUseReducer;
