// Importingdependiences from the react-router dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Importing Componets
import NavBar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
// Importing pages
import AddToContact from './Pages/AddToContact/AddToContact';
import Edit from './Pages/EditContact/EditContact';
//  stateManagement Library
import CustomeContext from './context';

//  Toastify to disply the notification 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Importing css file
import './App.css';



function App() {

  // Creating Routes
  const router = createBrowserRouter([
     {path : '/' , element : <NavBar /> , children : [
      {path : '/' , element : <Home />},
      {path : 'add-contact' , element : <AddToContact /> },
      {path : 'edit-contact/:id' , element : <Edit />}
     ]}
  ]);

  return (
    <CustomeContext>
      <ToastContainer />
      <div className="App">
        {/* Assigning Routes */}
        <RouterProvider router={router} />
      
      </div>
    </CustomeContext>
  );
}

export default App;