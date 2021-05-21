import React, { Fragment } from "react";

import Button from "../../shared/button/button.component";

const ModalContentDelete = (props) => {
  const { title, message, button_props_cancel, button_props_delete, hideModal } = props;

  return (
    <Fragment>
      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 className="text-3xl font-semibold">
          {title}
        </h3>
        <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => hideModal()}
          >
            <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
      </div>

      <div className="relative p-6 flex-auto">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            {message}
          </p>
        </div>

      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <div className="ml-4 w-max">
          <Button {...button_props_cancel} />
        </div>
        <div className="ml-4 w-max">
          <Button {...button_props_delete} />
        </div>
      </div>
    </Fragment>
  );
};

export default ModalContentDelete;
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
