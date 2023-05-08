
import './App.css';
import{BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/signup';
import Login  from './component/logIn'
import ForgotPassword from './component/forgetpassword';
import ResetPass from './component/resetpassword';

function App() {
  return (
    <div className="App">
     <Router>

      <Routes>

      <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/for-pass" element={<ForgotPassword/>} />
              <Route path="/reset-pass" element={<ResetPass/>} />

      </Routes>

     </Router>

    </div>
  );
}

export default App;
