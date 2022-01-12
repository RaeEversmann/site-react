import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
          >
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
          </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
