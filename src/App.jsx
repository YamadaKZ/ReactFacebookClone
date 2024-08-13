import './App.css'
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import { Route , Routes } from 'react-router-dom';


const App =() => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path= "/chat" element={<Chat/>} />
      </Routes>
    </div>
  );
}

export default App
