import ReactDOM from 'react-dom/client'
// Import the required Provider component and createBrowserRouter helper function
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Error from './pages/Error';
import Home from './pages/Home';
import SingleThought from './pages/SingleThought';

// Define the router object which will control the Provider's ability to display certain pages to match the proper URLs
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
        path: '/thoughts/:thoughtId',
        element: <SingleThought />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
