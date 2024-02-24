import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Rootlayout from './layouts/rootlayout';
import Membersprofile from './pages/membersprofile';
import Contact from './pages/contact';
import { Route,
   RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
   } from 'react-router-dom';








const router = createBrowserRouter(
  createRoutesFromElements(

      <Route path='/' element={<Rootlayout/>}>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About /> }/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path='/tradermemberprofile' element={<Membersprofile/>}/>

    </Route> 

   
  )
)
function App() {
 
  return (
    <>
  
{/*   
      <Navbar />,
   <Slideshow/>
      <About/>,
      <Aims />
      <Membership/>  */}

     
      <RouterProvider router={router}/>
      
      
    </>
  );
}

export default App;


