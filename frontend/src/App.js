import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
   <>
   <Router>
    <Header />
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addUser' element={<AddUser />} />
      <Route path='/edit-user/:id' element={<EditUser />} />
    </Routes>
    <Footer />
   </Router>
   </>
  )
}

export default App;
