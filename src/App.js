import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import QuizPage from './components/QuizPage/QuizPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        {
          path: '/quiz',
          loader: async () => {
            return fetch(' https://openapi.programming-hero.com/api/quiz')
          }, element: <Quiz></Quiz>
        },
        {
          path: '/statistics', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Statistics></Statistics>
        },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            // console.log(params.quizId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }, element: <QuizPage></QuizPage>
        }
      ]
    },
    { path: '*', element: <div>This page is not found</div> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
