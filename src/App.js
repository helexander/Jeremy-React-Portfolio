import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';

import Navigation from './components/Nav/Nav';
import AppBody from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <AppBody />
      <Footer />
    </div>
  );
}

export default App;
