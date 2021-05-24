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
  const {user, token, isLoading, updateUserAccount} = userContext
  // Local States
  const [ questionNo, setQuestionNo ] = useState(1)
  const [userAnswer, setUserAnswer] = useState({})



  const arrayPreferences = [ 
    "property_type_preference",
    // "city_preference",
    "length_of_stay_preference",
    "rent_price_preference",
  ]

  useEffect(() => {
    if (token && user){
      arrayPreferences.forEach(async (prefer) => {
        // console.log(prefer, user[prefer])
        setUserAnswer(userAnswer => ({ ...userAnswer, [prefer]: user[prefer] }))
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
    const questionNoSelected = e.target.getAttribute("name")
    setUserAnswer({...userAnswer, [arrayPreferences[questionNoSelected - 1]] : parseInt(e.target.value) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)
    // console.log(e.currentTarget.getAttribute('value'))
    updateUserAccount(userAnswer,token, setAlertReRoute)
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
    // 2: "What city you desired to stay?",
    2: "What is your preferred length of stay?",
    3: "What is your monthly budget?"
  }

  const options = {
    1 : ["Condominium", "Townhouse", "Dormitory", "Any"],
    // 2 : ["Quezon City", "Makati City", "Mandaluyong City",
    //      "San Juan City", "Taguig City", "Pasig City",
    //      "Marikina City", "Paranaque City", "Pasay City",
    //      "Manila City", "Any"],
    2 : ["Up to 6 months", "Maximum of 1 year", "Any"],
    3 : ["Less than 10K Php", "Between 10K to 15K Php",
         "Between 15K to 20K Php", "20K php and up", "Any"]
  }

  const propSent = {
    arrayPreferences,
    userAnswer,
    handleChange,
    handleSubmit,
    questions,
    options,
    user, token, isLoading, updateUserAccount,
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
