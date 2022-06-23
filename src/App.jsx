import logo from './logo.svg';
import './App.css';
import {expenses} from './importData';
import Expenses from './components/Expenses';
function App() {

  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;

/*

the tags img/a/p these arent html the is a special syntax used in react this is transformed into html when
the screen renders

Component is a custom html tag
*/