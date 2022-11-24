import './App.css';
import Home from './Pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/Single';
import New from './Pages/new/New';
import "./style/dark.scss"

function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
      <Routes>
        <Route path="/"/>
          <Route index element={<Home/>}></Route>
          <Route path='Login' element={<Login></Login>}></Route>
          <Route path='users'>
            <Route index element={<List></List>}></Route>
            <Route path=':Userid' element={<Single/>}></Route>
            <Route path='new' element={<New/>}></Route>
          </Route>
            <Route path='Products'>
            <Route index element={<List></List>}></Route>
            <Route path=':productid' element={<Single/>}></Route>
            <Route path='new' element={<New/>}></Route>
            </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
