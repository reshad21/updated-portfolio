import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  const { toggle } = useSelector(state => state.navber);
  console.log(toggle);
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  )
}

export default App
