import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from './component/Signin';
import { User } from './component/User';
// import { Signup } from './components/Signup';
// import { Signin } from './components/Signin';
// import { User } from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/signup"} element={<Signup />} /> */}
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
