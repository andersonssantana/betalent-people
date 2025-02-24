import logo from './assets/logo.svg';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <main className='container'>
      <Header logo={ logo } alt='BeTalent'/>
      <EmployeeTable />
    </main>
  )
}

export default App
