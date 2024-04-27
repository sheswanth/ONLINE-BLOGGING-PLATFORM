import {useState} from 'react';

import Login from './components/account/Login'
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
import Posts from "./pages/Posts/Posts"
import AboutUs from './pages/Posts/about/AboutUs';
import ContactUs from './pages/Posts/contact/ContactUs';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
    <>
      <Header />
      <Outlet />
    </> 
  : <Navigate replace to='/login' />
};

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
      <DataProvider>
        <BrowserRouter>
        <Header />
        <div style={{ marginTop: 64}}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path="/posts" element={<Posts/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path = "/ContactUs" element={<ContactUs/>}></Route>
          </Routes>
        </div>
        </BrowserRouter>
      </DataProvider>
  );
}

export default App;
