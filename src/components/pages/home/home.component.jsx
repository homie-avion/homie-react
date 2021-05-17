import React, {useContext, Fragment} from 'react'
import UserContext from '../../../context/user/userContext'
import { useHistory, withRouter } from 'react-router-dom'

import LocationDropdown from './LocationDropdown.component'

const Home = () => {
    const userContext = useContext(UserContext)
    const history = useHistory();
    
    const {token} = userContext

    if (token){
        history.push("/journals")
    }

    return (
        <Fragment>
            <section 
                className="h-screen-70vh bg-no-repeat bg-cover bg-top-center"
                style={{backgroundImage: "url('assets/img/bg.jpg.webp')"}}>
                <div className="container mx-auto h-full flex justify-center items-center">
                    <div className="max-w-5xl flex flex-col justify-center">
                        <h1 className="text-white text-7xl font-extrabold tracking-tight mb-2">
                            Find your next home!
                        </h1>
                        <p className="text-white mb-2">House, condominiums, and apartments for rent.</p>
                        <LocationDropdown/>
                    </div>
                </div>
            </section>
            <section
                className="h-screen"
            >   
                <div className="container mx-auto h-full">
                    <div className="">
                        <div className="">
                            <h2>Properties in various cities in NCR</h2>
                            <p>Choose your city!</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}

export default withRouter(Home)
