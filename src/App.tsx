import { Outlet } from 'react-router-dom'; // Added for page routing/links
import './styles/app/app.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <div id='header'>Home</div>
      </header>
      <Navbar />
      <div className='content-window'>
      <Outlet />
      </div>
    </div>
    
  );
}

export default App;
