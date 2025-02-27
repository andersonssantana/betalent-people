import logo from './assets/logo.svg';
import EmployeePage from './pages/EmployeePage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <main className="app">
      <Header logo={logo} alt="BeTalent" />
      <EmployeePage />
    </main>
  );
}

export default App;
