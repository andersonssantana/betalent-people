import { useState, useMemo } from 'react';
import { useEmployees } from '../../hooks/useEmployees';
import EmployeeTable from '../../components/EmployeeTable';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import SearchInput from '../../components/SearchInput';
import './EmployeePage.css';

function EmployeePage() {
  const { employees, isLoading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;
    const term = searchTerm.toLowerCase();
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term) ||
        employee.job.toLowerCase().includes(term) ||
        employee.phone.includes(term)
    );
  }, [employees, searchTerm]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="employee-page">
      <section className="employee-page__header">
        <h2 className="employee-page__title">Funcionários</h2>
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar"
        />
      </section>
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
}

export default EmployeePage;
