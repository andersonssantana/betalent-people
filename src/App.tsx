import logo from './assets/logo.svg';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header logo={ logo } alt='BeTalent'/>
      <EmployeeTable />
    </>
  )
}

export default App
