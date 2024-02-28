import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);

function App() {

  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  )
}

export default App
