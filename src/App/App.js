import { Box, Flex } from '@chakra-ui/react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import NavBar from '../components/NavBar';
import PlaygroundJs from '../components/PlaygroundJs';
import SideBar from '../components/SideBar';
import SignUp from '../components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
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
            <Flex minH="calc(100dvh - 70px)">
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
          <Route path="playground" element={<PlaygroundJs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
