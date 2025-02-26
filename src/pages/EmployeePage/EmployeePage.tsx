import { useEmployees } from '../../hooks/useEmployees';
import EmployeeTable from '../../components/EmployeeTable';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import SearchInput from '../../components/SearchInput';
import './EmployeePage.css';

function EmployeePage() {
  const {
    employees,
    searchTerm,
    isLoading,
    error,
    handleSearchChange
  } = useEmployees();

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="employee-page">
      <section className="employee-page__header">
        <h2 className="employee-page__title">Funcionários</h2>
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Pesquisar"
        />
      </section>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default EmployeePage;
