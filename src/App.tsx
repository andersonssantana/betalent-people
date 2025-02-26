import { memo } from 'react';
import Header from './components/Header';
import logo from './assets/logo.svg';
import './App.css';
import EmployeePage from './pages/EmployeePage';

function App() {
  return (
    <main className="app">
      <Header logo={logo} alt="BeTalent" />
      <EmployeePage />
    </main>
  );
}

export default memo(App);
