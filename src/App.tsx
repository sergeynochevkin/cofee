import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MAIN_ROUTE, PAYMENT_ROUTE } from './constants'
import { Main } from './pages/main/Main'
import { AppWrapper } from './hoc/AppWrapper'
import { Payment } from './pages/payment/Payment'

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Routes>
          <Route path={MAIN_ROUTE} element={<Main />} />
          <Route path={PAYMENT_ROUTE} element={<Payment />} />
        </Routes>
      </AppWrapper>
    </div>
  )
}

export default App
