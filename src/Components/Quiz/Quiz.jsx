import React from "react";
import "./Quiz.scss";
import data from "../../Data/api.json";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Quiz = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(0);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [checkedState, setCheckedState] = useState([-1, -1, -1, -1]);
  
  const variantChecked = (index) => {
    
    setCheckedState(checkedState.map((variant, i) => {
      if (i === current) {
        return  index;
      } else {
        return variant;
      }
    }))

    // if(data[current].correctAnswer === index) {
    //   console.log("duz secdin");
    // } else {
    //   console.log("sehv secdin");
    // }
  };

  useEffect(()=>{
    
      let inpts = document.querySelectorAll("input");
      for (var i = 0; i < inpts.length; i++) {
          inpts[i].checked = false;
      }
      if(checkedState[current] !== -1){
        inpts[checkedState[current]].checked = true;
      }
      console.log(checkedState)
  },[current])
;
const ComeBack = () => {
  setResult(0)
  setIsSubmitClicked(false)
  navigate('/')
}
const onSubmitClicked = () => {
  let x = 0
  for(let i = 0; i < data.length ;i++){
    if (data[i].correct_answer === checkedState[i]) {
      setResult(++x);
    }
  }
  console.log(x)
  setCheckedState([-1, -1, -1, -1])
  setIsSubmitClicked(true)
};

  return (
    <div className="quiz-c">
      {!isSubmitClicked ? (
        <>
          <h1>{data[current].question}</h1>

          <ul>
            <li>
              <input
                onClick={() => variantChecked(0)}
                id="square1"
                name="variant"
                type="radio"
              />
              <label htmlFor="square1">
                {data[current].incorrect_answers[0]}
              </label>
            </li>
            <li>
              <input
                onClick={() => variantChecked(1)}
                id="square2"
                name="variant"
                type="radio"
              />
              <label htmlFor="square2">
                {data[current].incorrect_answers[1]}
              </label>
            </li>
            <li>
              <input
                onClick={() => variantChecked(2)}
                id="square3"
                name="variant"
                type="radio"
              />
              <label htmlFor="square3">
                {data[current].incorrect_answers[2]}
              </label>
            </li>
            <li>
              <input
                onClick={() => variantChecked(3)}
                id="square4"
                name="variant"
                type="radio"
              />
              <label htmlFor="square4">
                {data[current].incorrect_answers[3]}
              </label>
            </li>
          </ul>
          <div className="btn-c">
            {current !== 0 && (
              <button onClick={() => setCurrent(current - 1)}>Previous</button>
            )}
            {current !== data.length - 1 && (
              <button onClick={() => setCurrent(current + 1)}>Next</button>
            )}
            {current === data.length - 1 && (
              <button onClick={onSubmitClicked}>Submit</button>
            )}
          </div>
        </>
      ) : (
        <>
          <h2>
            Your score is: <span>{result}</span>
          </h2>
          <button id="backToHomeBtn" onClick={ComeBack}>
            Ana sehifeye qayit
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
