import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
}

interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  rating: number;
  image: string;
  fees: string;
  cutoff?: number[];
}

interface Counselor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  availability: string;
  photo: string;
}

interface QuizProgress {
  currentQuestion: number;
  answers: Record<number, string>;
  totalQuestions: number;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  savedColleges: College[];
  connectedCounselors: Counselor[];
  quizProgress: QuizProgress;
  chatMessages: { id: string; text: string; sender: 'user' | 'ai'; timestamp: Date }[];
}

type AppAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SAVE_COLLEGE'; payload: College }
  | { type: 'REMOVE_SAVED_COLLEGE'; payload: string }
  | { type: 'CONNECT_COUNSELOR'; payload: Counselor }
  | { type: 'UPDATE_QUIZ_PROGRESS'; payload: Partial<QuizProgress> }
  | { type: 'ADD_CHAT_MESSAGE'; payload: { text: string; sender: 'user' | 'ai' } }
  | { type: 'RESET_QUIZ' };

const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  savedColleges: [],
  connectedCounselors: [],
  quizProgress: {
    currentQuestion: 0,
    answers: {},
    totalQuestions: 10
  },
  chatMessages: []
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case 'SAVE_COLLEGE':
      return {
        ...state,
        savedColleges: [...state.savedColleges, action.payload]
      };
    case 'REMOVE_SAVED_COLLEGE':
      return {
        ...state,
        savedColleges: state.savedColleges.filter(college => college.id !== action.payload)
      };
    case 'CONNECT_COUNSELOR':
      return {
        ...state,
        connectedCounselors: [...state.connectedCounselors, action.payload]
      };
    case 'UPDATE_QUIZ_PROGRESS':
      return {
        ...state,
        quizProgress: { ...state.quizProgress, ...action.payload }
      };
    case 'ADD_CHAT_MESSAGE':
      const newMessage = {
        id: Date.now().toString(),
        text: action.payload.text,
        sender: action.payload.sender,
        timestamp: new Date()
      };
      return {
        ...state,
        chatMessages: [...state.chatMessages, newMessage]
      };
    case 'RESET_QUIZ':
      return {
        ...state,
        quizProgress: {
          currentQuestion: 0,
          answers: {},
          totalQuestions: 10
        }
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}