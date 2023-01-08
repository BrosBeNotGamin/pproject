import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from "./Pages/HomePage/HomePage";
import QuizPage from "./Pages/QuizPage/QuizPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
