import { Box, Flex } from '@chakra-ui/react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import SideBar from '../components/SideBar';
import SignUp from '../components/SignUp';
import NavBar from '../components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div>
              <SignUp />
            </div>
          }
        />
        <Route
          path="/app"
          element={
            <Flex>
              <SideBar />
              <Box flexGrow="1">
                <Outlet />
              </Box>
            </Flex>
          }
        >
          <Route index element={<div>WELCOME APP(NEWS)</div>} />
          <Route path="news" element={<div>NEWS</div>} />
          <Route path="search" element={<div>SEARCH</div>} />
          <Route path="playground" element={<div>PLAYGROUND</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
