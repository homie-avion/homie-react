import React, {Fragment} from 'react'
import {Modal} from 'react-bootstrap'

import Button from '../../shared/button/button.component'

const ModalContentDelete = (props) => {
    const { title,
            message,
            button_props_cancel,
            button_props_delete } = props

    return (
        <Fragment>
            <h2 closeButton className="border-0">
            {title}
            </h2>

            <div>
                {message}
            </div>

            <div className="border-0">
                <Button
                    {...button_props_cancel}
                />
                <Button
                    {...button_props_delete}
                />
            </div> 
        </Fragment>
    )
}

export default ModalContentDelete
// <Fragment>
//             <h2 closeButton className="border-0">
//             {title}
//             </h2>

//             <div>
//                 {message}
//             </div>

//             <div className="border-0">
//                 <Button
//                     {...button_props_cancel}
//                 />
//                 <Button
//                     {...button_props_delete}
//                 />
//             </div> 
//         </Fragment>