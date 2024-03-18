import './App.css';
import Search from './components/Search/Search';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Search />,
    },
    {
      path: '/weather/:place/:lat/:lng',
      element: <CurrentWeather />
    }
])

  return (
    <div className='container'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
