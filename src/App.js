import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { SidebarProvider } from './Component/sidebarcontext'
import Sidebar from './Component/sidebar';
import Dashboard from './Page/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarProvider>
          <Sidebar />
          <Routes>
            <Route exact path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </SidebarProvider>
      </Router>
    </div>
  );
}

export default App;
