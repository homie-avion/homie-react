import React, {useContext} from 'react'
import UserContext from '../../context/user/userContext'
import { useHistory, withRouter } from 'react-router-dom'

const Home = () => {
    const userContext = useContext(UserContext)
    const history = useHistory();
    
    const {token} = userContext

    if (token){
        history.push("/journals")
    }

    return (
        <div className="container">
            <h1>Home</h1>
        </div>
    )
}

export default withRouter(Home)
