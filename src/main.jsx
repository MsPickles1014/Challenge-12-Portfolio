import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Error from './pages/Error.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about', // Updated path to be consistent with routing conventions
        element: <About />,
      },
      {
        path: 'portfolio', // Updated path to be consistent with routing conventions
        element: <Portfolio />,
      },
      {
        path: 'contact', // Updated path to be consistent with routing conventions
        element: <Contact />,
      },
      {
        path: 'resume', // Updated path to be consistent with routing conventions
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
