import React, {Fragment} from 'react'
import Button from '../../../shared/button/button.component'
const Question = (props) => {
  const { arrayPreferences,
          questions, 
          options, 
          questionNo,
          handleChange,
          handleSubmit,
          userAnswer,
          nextQuestion,
          prevQuestion,} = props



  const button_props = {
    variant: "success-button",
    text: "Submit",
    type: "submit",
    onClick: null
  }
  const previous_btn_props = {
    variant: "success-button",
    text: " Previous",
    type: "submit",
    onClick:  (e) => {
      e.preventDefault()
      prevQuestion()
    }
  }
  const next_btn_props = {
    variant: "success-button",
    text: " Next ",
    type: "submit",
    onClick:  (e) => {
      e.preventDefault()
      nextQuestion()
    }
  }


  const qLength = Object.keys(questions).length

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <h3 className="text-black text-4xl font-bold tracking-tight mb-2 mx-auto">
        {questions[questionNo]}
        </h3>
        <p className="text-gray-500 text-xl font-light mb-8">
          Choose only one.
        </p>
        <div className="mb-8">
          {
            options[questionNo].map((option, index) => {
              let index1 = index + 1
              return (<Fragment key={index1}>
                <input 
                  type="radio" 
                  id={index1} 
                  name={questionNo} 
                  value={index1} 
                  required={index1 === 1 && true}
                  checked={userAnswer[arrayPreferences[questionNo-1]] === index1 ? true : false}
                  onChange={(e) => handleChange(e)}
                />
                <label className="text-black text-xl font-light mb-8" htmlFor={index1}>  {option}</label>
                <br/>
              </Fragment>)
            })
          }
        </div>
        
            
        <div className="flex justify-end">
          {
          questionNo > 1 &&
            <div className="w-max">
              <Button {...previous_btn_props} />
            </div>
          }
          {
            qLength === questionNo ?
              <div className="ml-2 w-max">
                <Button {...button_props} />
              </div>
            :
            <div className="ml-2 w-max">
              <Button {...next_btn_props} />
            </div>
          }
        </div>
        

      </form>

    </div>
  )
}

export default Question
