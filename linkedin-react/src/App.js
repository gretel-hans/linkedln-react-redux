import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './components/profilePage/ProfilePage';
import CustomNavbar from './components/CustomNavbar';
import HomePage from './components/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomNavbar/>
      <Routes>  
        <Route path={'/'} element={<HomePage/>}/>  
        <Route path={'/profile/:id'} element={<ProfilePage/>}/>        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
