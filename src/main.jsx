import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageProvider } from './context/PageProvider'
import { DetailSimpson } from './components/DetailSimpson/DetailSimpson';
import SimpsonPage from './components/SimpsonCard/SimpsonPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageProvider>
        <Routes>
          <Route path="/" element={<Home pageActual={1}/>} />
          <Route path="/simpson/:id" element={<DetailSimpson />} />
          <Route path="/page" element={<SimpsonPage />} />
        </Routes>
      </PageProvider>
    </BrowserRouter>
  </StrictMode>
)
