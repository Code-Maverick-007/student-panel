import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { aptitudeQuestions } from '../data/mockData';

export default function AptitudeQuizPage() {
  const { state, dispatch } = useApp();
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = aptitudeQuestions[state.quizProgress.currentQuestion];
  const progress = ((state.quizProgress.currentQuestion + 1) / state.quizProgress.totalQuestions) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...state.quizProgress.answers,
      [state.quizProgress.currentQuestion]: answer
    };

    dispatch({
      type: 'UPDATE_QUIZ_PROGRESS',
      payload: { answers: newAnswers }
    });
  };

  const handleNext = () => {
    if (state.quizProgress.currentQuestion < state.quizProgress.totalQuestions - 1) {
      dispatch({
        type: 'UPDATE_QUIZ_PROGRESS',
        payload: { currentQuestion: state.quizProgress.currentQuestion + 1 }
      });
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (state.quizProgress.currentQuestion > 0) {
      dispatch({
        type: 'UPDATE_QUIZ_PROGRESS',
        payload: { currentQuestion: state.quizProgress.currentQuestion - 1 }
      });
    }
  };

  const handleRestart = () => {
    dispatch({ type: 'RESET_QUIZ' });
    setIsCompleted(false);
  };

  const getRecommendations = () => {
    const answers = Object.values(state.quizProgress.answers);
    
    // Simple logic to determine career recommendations based on answer patterns
    const analyticalCount = answers.filter(a => 
      a?.includes('numbers') || a?.includes('Office') || a?.includes('organized') || 
      a?.includes('Mathematics') || a?.includes('structured')
    ).length;
    
    const creativeCount = answers.filter(a => 
      a?.includes('Creating') || a?.includes('studio') || a?.includes('expression') || 
      a?.includes('Art') || a?.includes('flexibility')
    ).length;
    
    const peopleCount = answers.filter(a => 
      a?.includes('Helping') || a?.includes('community') || a?.includes('society') || 
      a?.includes('Social') || a?.includes('teams')
    ).length;

    if (analyticalCount >= creativeCount && analyticalCount >= peopleCount) {
      return {
        primaryCareer: 'Engineering & Technology',
        careers: ['Software Engineer', 'Data Analyst', 'Financial Analyst', 'Research Scientist'],
        colleges: ['IIT Delhi', 'IIT Bombay', 'BITS Pilani']
      };
    } else if (creativeCount >= analyticalCount && creativeCount >= peopleCount) {
      return {
        primaryCareer: 'Creative Arts & Design',
        careers: ['UI/UX Designer', 'Graphic Designer', 'Content Creator', 'Product Designer'],
        colleges: ['NID', 'Pearl Academy', 'MIT Institute of Design']
      };
    } else {
      return {
        primaryCareer: 'Healthcare & Social Services',
        careers: ['Doctor', 'Psychologist', 'Teacher', 'Social Worker'],
        colleges: ['AIIMS', 'Jamia Millia Islamia', 'JNU']
      };
    }
  };

  if (isCompleted) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed! 🎉</h1>
              <p className="text-gray-600">Based on your responses, here are your personalized recommendations</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Career Match</h2>
              <div className="text-2xl font-bold text-blue-600 mb-2">{recommendations.primaryCareer}</div>
              <p className="text-gray-600">This field aligns well with your interests and aptitude</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Careers</h3>
                <ul className="space-y-2">
                  {recommendations.careers.map((career, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Colleges</h3>
                <ul className="space-y-2">
                  {recommendations.colleges.map((college, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{college}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Retake Quiz
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Talk to Counselor
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Explore Colleges
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Aptitude Quiz</h1>
          <p className="text-gray-600">Discover your strengths and find the perfect career path</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-blue-600">
              {state.quizProgress.currentQuestion + 1} of {state.quizProgress.totalQuestions}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentQuestion?.question}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {currentQuestion?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`p-4 text-left border-2 rounded-lg transition-all ${
                  state.quizProgress.answers[state.quizProgress.currentQuestion] === option
                    ? 'border-blue-600 bg-blue-50 text-blue-800'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    state.quizProgress.answers[state.quizProgress.currentQuestion] === option
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {state.quizProgress.answers[state.quizProgress.currentQuestion] === option && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={state.quizProgress.currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Question {state.quizProgress.currentQuestion + 1} of {state.quizProgress.totalQuestions}
              </p>
            </div>

            <button
              onClick={handleNext}
              disabled={!state.quizProgress.answers[state.quizProgress.currentQuestion]}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>
                {state.quizProgress.currentQuestion === state.quizProgress.totalQuestions - 1 ? 'Finish' : 'Next'}
              </span>
              {state.quizProgress.currentQuestion !== state.quizProgress.totalQuestions - 1 && (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Take your time to think about each question. There are no right or wrong answers!
          </p>
        </div>
      </div>
    </div>
  );
}