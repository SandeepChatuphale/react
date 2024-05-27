import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Header from './Header';
import Footer from './Footer';
import AddMessage from './AddMessage';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <AddMessage></AddMessage>
        <Message></Message>
        <Footer></Footer>
    </div>
  );
}

export default App;
