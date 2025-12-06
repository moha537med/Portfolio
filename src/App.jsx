import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ]);

  return (

  
  <>
    <Toaster
    position="top-right"
    toastOptions={{
      style: {
        background: '#0f172a', // dark navy
        color: '#e5e7eb',
        border: '1px solid #1e293b',
      },
      success: {
        iconTheme: {
          primary: '#38bdf8', // blue
          secondary: '#0f172a',
        },
      },
      error: {
        iconTheme: {
          primary: '#ef4444',
          secondary: '#0f172a',
        },
      },
    }}
  />
  
  <RouterProvider router={router} />;
  </>

  )
}

export default App;
