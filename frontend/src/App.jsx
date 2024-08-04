import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SellerDashboard from './pages/SellerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/sellerdashboard' element={<SellerDashboard/>}/>
              <Route path='/buyerdashboard' element={<BuyerDashboard/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
