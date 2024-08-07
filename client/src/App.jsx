import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Signout from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';

export default function App() {
  return 
    (<BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-In" element={<SignIn />} />
        <Route path="/sign-Up" element={<Signout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </BrowserRouter>)
  
}
