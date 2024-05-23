import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SimpleCounter from './pages/SimpleCounter'
import FilterSearch from './pages/FilterSearch'
import Footer from './components/Footer'
import DisplayList from './pages/DisplayList'
import ContextApi from './pages/ContextApi'
import FetchCall from './pages/FetchCall'
import AxiosCall from './pages/AxiosCall'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />
        <Route path="/filter-search" element={<FilterSearch />} />
        <Route path="/display-list" element={<DisplayList />} />
        <Route path="/context-api" element={<ContextApi />} />
        <Route path="/fetch" element={<FetchCall />} />
        <Route path="/axios" element={<AxiosCall />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
