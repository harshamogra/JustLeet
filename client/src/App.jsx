
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>}/>
            <Route path='/login' element={
              <PublicRoute>
                <Login/>
              </PublicRoute>
              }/>
            <Route path='/register' element= {<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
