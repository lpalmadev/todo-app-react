import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Todo } from './pages/Todo'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import './App.css'
import AuthProvider from './context/AuthContext'
import { Todo } from './pages/Private/Todo'

function App() {

  return (
    <div className="bg-slate-300 h-screen flex text-white">
        <AuthProvider	>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Todo/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
              </Routes>
            </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default App
