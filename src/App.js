import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { ForgetPassword } from './components/ForgetPassword';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
          <Route path='forgetPassword' element={<ForgetPassword />} />
          <Route path='home' element={<Home />} />
          <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
