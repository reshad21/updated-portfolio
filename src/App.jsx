import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  const { test } = useSelector(state => state.counter);
  console.log(test);
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  )
}

export default App
