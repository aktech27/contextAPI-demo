import "./App.css";
import Navbar from "./components/navbar";
import Bottombar from "./components/bottombar";
import Sidebar from "./components/sidebar";
import Article from "./components/article";
import { UserProvider } from "./context/userType";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Article />
        <Bottombar />
      </div>
    </UserProvider>
  );
}

export default App;
