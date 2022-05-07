import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const theme = useSelector((state) => state.theme.themeColor)
  return (
    <div className={theme}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
