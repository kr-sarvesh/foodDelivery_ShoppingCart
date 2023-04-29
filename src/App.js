import './App.css';
import Body from './components/Body';
import Header from "./components/Header"


// This is a normal fn which returns some piece of JSx

function App() {
  return (
    <div className="App">
    <Header />
    <Body/>
    </div>
  );
}

export default App;
