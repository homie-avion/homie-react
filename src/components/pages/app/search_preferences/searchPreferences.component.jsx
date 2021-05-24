import React from 'react'
import Question from './question.component'

const SearchPreferences = (props) => {
  return (
    <section className="h-screen">
      <div className= "container mx-auto px-4 h-5/6 flex justify-center items-center">
        <Question {...props}/>
      </div>
    </section>
  )
}

export default SearchPreferences
