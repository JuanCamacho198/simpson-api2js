import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home/Home'
import { InputSearch } from './components/Search/InputSearch'
import { PageContext } from './context/PageProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageContext.Provider>
      <InputSearch />
      <Home />
    </PageContext.Provider>
  </StrictMode>,
)
