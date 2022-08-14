import Todo from "./Todo";
import {useContext} from 'react';
import {ThemeContext} from "./ThemeContext"

function App() {
  const context = useContext(ThemeContext)

  console.log(context);
  return (
      <div className="App">
        <button onClick={context.handleChangeTheme}>Change Theme</button>
        <Todo />
      </div>
  );
}

export default App;
