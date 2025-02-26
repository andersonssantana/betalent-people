import { memo } from 'react';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <main className="app">
      <Header logo={logo} alt="BeTalent" />
      <EmployeeTable />
    </main>
  );
}

export default memo(App);
