import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import AlertContext from '../../context/alert/alertContext'
import UserContext from '../../context/user/userContext'

import SearchPreferences from '../../components/pages/app/search_preferences/searchPreferences.component'
// './components/pages/app/search_preferences/searchPreferences.component'

const SearchPreferencesContainer = () => {
  // history
  const history = useHistory();
  // Contexts
  const userContext = useContext(UserContext)
  const alertContext = useContext(AlertContext)
  const {user, preferences, token, isLoading, updateUserPreferences} = userContext
  // Local States
  const [ questionNo, setQuestionNo ] = useState(1)
  // const [userAnswer, setUserAnswer] = useState({})
  const [finalAnswer, setFinalAnswer] = useState({})
  


  const arrayPreferences = [ 
    "property_type",
    "city",
    "stay_period",
    "rent",
  ]

  useEffect(() => {
    if (preferences){
      arrayPreferences.forEach(async (prefer) => {
        console.log(prefer, preferences[prefer])
        setFinalAnswer(finalAnswer => ({ ...finalAnswer, [prefer]: preferences[prefer] }))
      })
    }
  },[])
  

  const reRoute = () => history.push("/account")

  const resetQuestion = () => {
    setQuestionNo(1)
  }

  const nextQuestion = () => {
    if (questionNo > arrayPreferences.length) {
      resetQuestion()
    } else {
      setQuestionNo(questionNo + 1)
    }
  }

  const prevQuestion = () => {
    if (questionNo <= 0) {
      resetQuestion()
    } else {
      setQuestionNo(questionNo - 1)
    }
  }

  const handleChange = (e) => {
    // console.log(e.target.getAttribute("name"))
    // console.log(e.target.value)
    // const questionNoSelected = e.target.getAttribute("data-anchor")

    const category = arrayPreferences[questionNo-1]
    const value = options[questionNo][e.target.value-1]

    console.log(category, value, questionNo)
    

    if (options[questionNo][e.target.value-1] === "Any") {
      setFinalAnswer({...finalAnswer, [category] : [] })
    } else {
      if (category === "city"){
        
        console.log(finalAnswer[category])
        // debugger
        if (!finalAnswer[category]) {
          setFinalAnswer({...finalAnswer, [category] :  [parseInt(e.target.value)] })
        } else {
  
          const arrayDiff = finalAnswer[category].filter(x => ![parseInt(e.target.value)].includes(x))
          const equals = JSON.stringify(finalAnswer[category]) === JSON.stringify([parseInt(e.target.value)]);
          console.log("array diff", arrayDiff, equals)
          if (arrayDiff.length > 0 && equals === true){
            setFinalAnswer({...finalAnswer, [category] :  arrayDiff })
          } else {
            setFinalAnswer({...finalAnswer, [category] :  [...finalAnswer[category], parseInt(e.target.value)] })
          }

        }
          
      } else{
        setFinalAnswer({...finalAnswer, [category] : [parseInt(e.target.value)] })
      }
    }

  
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)
    // console.log(e.currentTarget.getAttribute('value'))
    updateUserPreferences(finalAnswer,token, setAlertReRoute)
    // console.log(userAnswer)
    console.log(finalAnswer)
  }

  const setAlertReRoute = (message, statusCode) => {
    if (message) {
      alertContext.setAlert({
        title: message.status,
        message: message.message,
      });
    }
    console.log(statusCode)
    if (statusCode === 200) {
      reRoute();
    }
  };
  
  const questions = {
    1: "What properties are you looking for?",
    2: "What city you desired to stay?",
    3: "What is your preferred length of stay?",
    4: "What is your monthly budget?"
  }

  const options = {
    1 : ["Condominium", "Townhouse", "Dormitory", "Any"],
    2 : ["Quezon City", "Makati City", "Mandaluyong City",
         "San Juan City", "Taguig City", "Pasig City",
         "Marikina City", "Paranaque City", "Pasay City",
         "Manila City", "Any"],
    3 : ["Up to 6 months", "Maximum of 1 year", "Any"],
    4 : ["Less than 10K Php", "Between 10K to 15K Php",
         "Between 15K to 20K Php", "20K php and up", "Any"]
  }

  const propSent = {
    arrayPreferences,
    finalAnswer,
    handleChange,
    handleSubmit,
    questions,
    options,
    user, token, isLoading, updateUserPreferences,
    questionNo,
    nextQuestion,
    prevQuestion,
    resetQuestion
  }
  return (
    <SearchPreferences {...propSent} />
  )
}

export default SearchPreferencesContainer
