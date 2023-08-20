import './App.css';
import Login from './page/Login';
import HomePage from './page/HomePage';
import {BrowserRouter as Router ,Routes ,  Route} from 'react-router-dom'
import Header from './component/Header';
// import { PrivateRoute } from './utils/PrivateRoute';
import { ProtectedRoute } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          
          <Route path='/login' 
          element = {
            <AuthProvider>
              <Login/>
            </AuthProvider>
          }
          />
          <Route path='/'
          element = {
            <AuthProvider>
              <ProtectedRoute>
                <HomePage/>
              </ProtectedRoute>
            </AuthProvider>
          }
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
