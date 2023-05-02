import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// pages & components
import Home from './pages/home';
import UserSignUp from './pages/user_signup'
import NavbarTemplate from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavbarTemplate />
      </header>
        <Routes>
            <Route 
              path="/gymhero"
              element={<Home />}
            />
            <Route 
              path="/signup"
              element={<UserSignUp />}
            />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
