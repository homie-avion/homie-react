import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/navbar/navbar.component'
import Home from './components/pages/home/home.component'
import Partners from './components/pages/partners/partners.component'
import Footer from './components/layout/footer/footer.component'
import NotFound from './components/pages/notfound.component'

import AlertContainer from './components/shared/alert/alert-container.component'
import Modal from './components/shared/modal/modal.component'

//Containers
// import JournalsContainer from './containers/journal/journals.container'
// import TasksContainer from './containers/task/tasks.container'
import SignInContainer from './containers/auth/signin.container'
import SignUpContainer from './containers/auth/signup.container'
import UserContainer from './containers/user/user.container'
// state
import UserState from './context/user/UserState'
import AlertState from './context/alert/AlertState'
import ModalState from './context/modal/ModalState'
// import JournalState from './context/journal/JournalState'
// import TaskState from './context/task/TaskState'

import './App.css'

function App() {

  return (
    <UserState>
      <AlertState>
        <ModalState>
          <Router>
            <div className="App">
              <Navbar />
              <AlertContainer/>
              <Modal/>
              <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={SignUpContainer}/>
                <Route exact path="/signin" component={SignInContainer}/>
                
                <Route exact path="/partners" component={Partners}/>
                <Route exact path="/partners/signup" component={SignUpContainer}/>

                
                <Route exact path="/account" component={UserContainer}/>

                <Route component={NotFound}/>
              </Switch>
              <Footer/>
            </div>
          </Router>
        </ModalState>
      </AlertState>
    </UserState>
  );
}

export default App;
