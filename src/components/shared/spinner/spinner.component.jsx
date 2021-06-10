import React, {Fragment} from 'react';

import spinner from './spinner.gif';

const Spinner = ({ local }) => {
    return (
        <Fragment>
            <img 
                src={spinner} 
                alt="loading"

                style={
                    local 
                    ?
                    {
                        width : '100px', 
                        margin : '100px auto',
                        display: 'block',
                    }
                    : 
                    {
                        width : '100px', 
                        margin : 'auto',
                        display: 'block',
                        position: 'absolute',
                        top: '40vh',
                        left: 'calc(50% - 50px)'
                    }
                }
            />
        </Fragment>
    )
}

export default Spinner