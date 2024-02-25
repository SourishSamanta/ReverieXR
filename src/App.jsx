import React from 'react'
import Main from './components/main/main'
import About from './components/about/about'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import Subscription from './components/subsciption/subscription';
// import 'rsuite/dist/rsuite.min.css';  // or 'rsuite/styles/index.less';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscription" element={<Subscription/>} />

          {/* <Route path="contact" element={<Contact />} /> */}
          
        
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App