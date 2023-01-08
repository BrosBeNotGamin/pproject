import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Quiz from '../../Components/Quiz/Quiz'
import "./QuizPage.scss"

const QuizPage = () => {
  return (
    <>
        <Nav/>
        <section className='quiz-s'>
            <Quiz/>
        </section>
    </>
  )
}

export default QuizPage