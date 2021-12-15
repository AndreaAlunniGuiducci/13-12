import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const name = 'Feisbrut';
  const nav = [
    { link: "/home", label: "home" },
    { link: "/friends", label: "friends" },
    { link: "/messages", label: "messages" }
  ]

  return (
    <div className="App">
      <Header name={name} links={nav} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
