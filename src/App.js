import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { ContextProvider } from './context/context';

function App() {
  return (
    <>
      <Header></Header>
      <ContextProvider>
        <Shop></Shop>
      </ContextProvider>
      <Footer></Footer>
    </>
  );
}

export default App;
