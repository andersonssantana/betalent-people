import { useState, useEffect, useCallback, useMemo } from 'react';
import { GoDotFill } from 'react-icons/go';
import { Employee } from '../../types';
import EmployeeRow from '../EmployeeRow/';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import SearchInput from '../SearchInput';
import { fetchEmployees } from '../../services/api';
import './EmployeeTable.css';

function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetchEmployees();
        
        if (response.status !== 200) {
          throw new Error(response.message || 'Falha ao buscar funcionários');
        }
        
        setEmployees(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };
    
    getEmployees();
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;
    
    const term = searchTerm.toLowerCase();
    
    return employees.filter((employee) => 
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
    <div className="employee-table">
      <section className="employee-table__header">
        <h2 className="employee-table__title">Funcionários</h2>
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Pesquisar"
        />
      </section>
      <section className="employee-table__container">
        <table className="employee-table__table">
          <thead>
            <tr className="employee-table__head-row">
              <th className="employee-table__head-cell">FOTO</th>
              <th className="employee-table__head-cell">
                <div className="employee-table__name-header">
                  <span>NOME</span>
                  <GoDotFill className="employee-table__name-icon" />
                </div>
              </th>
              <th className="employee-table__head-cell">CARGO</th>
              <th className="employee-table__head-cell">DATA DE ADMISSÃO</th>
              <th className="employee-table__head-cell">TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <EmployeeRow key={employee.id} employee={employee} />
              ))
            ) : (
              <tr className="employee-table__empty-row">
                <td colSpan={5} className="employee-table__empty-cell">
                  Nenhum funcionário encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default EmployeeTable;
