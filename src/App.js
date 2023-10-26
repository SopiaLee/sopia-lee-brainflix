import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage'

import "./App.scss";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Header/>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:id" element={<HomePage/>}/>
            <Route path="/upload" element={<UploadPage/>}/>
          </Routes>
  

      </div>
    </BrowserRouter>
  );
}

export default App;
