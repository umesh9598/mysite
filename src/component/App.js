import Navbar from './component/Navbar';
import Home from './component/Home';
import {Route, Switch} from 'react-router-dom'
import About from './component/About'

function App() {
  return (
    <>
    <div className="App bg-[#008274]">
     <Navbar/>
     <Home/>
     <Switch>
      <Route path='/About' component = {About}/>
     </Switch>
    </div>
    </>
  );
}

export default App;
