import React from 'react'
import Hero from '../../Components/Hero/Hero';
import Nav from '../../Components/Nav/Nav';

const HomePage = () => {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <div class="cards-s">
        <div class="cards-c">
          <div class="card">
            <div class="card-heading">
              <img src="/img2.svg" alt="" />
              <h2>Quick Results!</h2>
            </div>
            <p>
              The evaluation of offline quizzes is done manually and therefore
              takes time. Online quizzes are evaluated online with the help of
              technology. You get the quiz result as soon as you submit the
              submit button.
            </p>

            <button>More Info</button>
          </div>
          <div class="card">
            <div class="card-heading">
              <img src="/img3.svg" alt="" />
              <h2>Enhances Memory</h2>
            </div>
            <p>
              Quiz games improve concentration, identify knowledge gaps, boost
              confidence, and help retain information. They're also
              entertaining!
            </p>

            <button>More Info</button>
          </div>
          <div class="card">
            <div class="card-heading">
              <img src="/img4.svg" alt="" />
              <h2>Unleashes The True Potential of Your Mind</h2>
            </div>
            <p>
              It exercises the brain's frontal cortex, the part of the brain
              responsible for memory function. This, in turn, improves cognitive
              skills and problem-solving abilities.
            </p>

            <button>More Info</button>
          </div>
          <div class="card">
            <div class="card-heading">
              <img src="/img5.svg" alt="" />
              <h2>Unleashes The True Potential of Your Mind</h2>
            </div>
            <p>
              Playing online trivia games helps enhance brain and cognitive
              development. It could also lead to better decision-making and
              problem-solving skills over time.
            </p>

            <button>More Info</button>
          </div>
        </div>
        <p>
          We are proud to be an equal opportunity employer that values
          diversity. We do not discriminate on the basis of race, religion,
          color, national origin, gender, sexual orientation, age, marital
          status, veteran status, or disability status.
        </p>
      </div>
    </>
  );
}

export default HomePage