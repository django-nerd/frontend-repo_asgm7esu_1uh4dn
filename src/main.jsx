import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import USA from './pages/USA'
import Argentina from './pages/Argentina'
import Blog from './pages/Blog'
import Test from './Test'
import Admin from './pages/Admin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/ar" element={<Argentina />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
