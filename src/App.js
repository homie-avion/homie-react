import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { LoadScript } from '@react-google-maps/api';

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
import SearchPreferencesContainer from './containers/user/user.searchPreferences.container'
import PropertyContainer from './containers/property/property.container'
import SinglePropertyContainer from './containers/property/single_property.container'
import CreatePropertyContainer from './containers/property/create_property.container'
import EditPropertyContainer from './containers/property/edit_property.container'

// state
import UserState from './context/user/UserState'
import AlertState from './context/alert/AlertState'
import ModalState from './context/modal/ModalState'
import PropertyState from './context/property/PropertyState'
// import JournalState from './context/journal/JournalState'
// import TaskState from './context/task/TaskState'

import './App.css'

const lib = ["places"];

function App() {

  return (
    <LoadScript 
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
      libraries={lib}
      >
      <UserState>
        <PropertyState>
          <AlertState>
            <ModalState>
              <Router>
                <div className="App relative">
                  <Navbar />
                  <AlertContainer/>
                  <Modal/>
                  <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={SignUpContainer}/>
                    <Route exact path="/signin" component={SignInContainer}/>
                    
                    <Route exact path="/partners" component={Partners}/>
                    <Route exact path="/partners/signup" component={SignUpContainer}/>

                    <Route exact path="/search_preferences" component={SearchPreferencesContainer}/>

                    <Route exact path="/recommendations" component={PropertyContainer}/>
                    <Route exact path="/recommendations/:id" component={SinglePropertyContainer}/>

                    <Route exact path="/properties" component={PropertyContainer}/>
                    <Route exact path="/properties/:id" component={SinglePropertyContainer}/>
                    <Route exact path="/property/create" component={CreatePropertyContainer}/>
                    <Route exact path="/property/edit/:id" component={EditPropertyContainer}/>

                    <Route exact path="/account" component={UserContainer}/>

                    <Route component={NotFound}/>
                  </Switch>
                  <Footer/>
                </div>
              </Router>
            </ModalState>
          </AlertState>
        </PropertyState>
      </UserState>
    </LoadScript>
  );
}

export default App;
