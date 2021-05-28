import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import RegisterComponent from './Components/RegisterComponent'
import LoginComponent from './Components/LoginComponent';
import UserInfo from './Components/UserInfo';
import AddTask from './Components/AddTask';

function App() {
  return (
    <div>

    

     <BrowserRouter>
      
      <Switch>

      <Route exact path='/'>
            <LoginComponent/>
          </Route>
      
        <Route path='/register'>
          <RegisterComponent/>
        </Route>

        <Route path='/user'>
        <UserInfo/>
        </Route>

        <Route path='/addtask'>
        <AddTask/>
        </Route>

    
      </Switch>
      
      
      </BrowserRouter>

      
    </div>
  )
}

export default App;
