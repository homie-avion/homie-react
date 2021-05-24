import React, { useContext, useState } from 'react'

import UserContext from '../../context/user/userContext'

import SearchPreferences from '../../components/pages/app/search_preferences/searchPreferences.component'
// './components/pages/app/search_preferences/searchPreferences.component'

const SearchPreferencesContainer = () => {

  const userContext = useContext(UserContext)

  const [ questionNo, setQuestionNo ] = useState(1)
  const [userAnswer, setUserAnswer] = useState({})

  const resetQuestion = () => {
    setQuestionNo(1)
  }

  const nextQuestion = () => {
    if (questionNo > 4) {
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
    console.log(e.target.getAttribute("name"))
    console.log(e.target.value)
    const questionNoSelected = e.target.getAttribute("name")
    setUserAnswer({...userAnswer, [questionNoSelected] : parseInt(e.target.value) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    // console.log(e.currentTarget.getAttribute('value'))
  }
  

  const {user, token, isLoading, updateUserAccount} = userContext
  if (token && user){

  }
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
