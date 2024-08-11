import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Landing from './pages/Landing';
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';

function App() {
  return (
    <>
      <Header/>

      <div className="container mb-5">

        <Routes>

          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/watchhistory' element={<WatchHistory/>}/>

        </Routes>

        
      </div>

      <Footer/>
    </>
  );
}

export default App;