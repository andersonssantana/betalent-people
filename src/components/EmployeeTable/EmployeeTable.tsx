import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { Employee } from '../../types';
import EmployeeRow from '../EmployeeRow/';
import Loading from '../Loading';
import './EmployeeTable.css';

function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3000/employees');
        if (!response.ok) {
          throw new Error('Falha ao buscar funcionários');
        }
        const data: Employee[] = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.includes(searchTerm)
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <section className="container__subheader">
        <h2 className="container__title">Funcionários</h2>
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar"
            className="search__input"
          />
          <FaSearch className="search__icon" />
        </div>
      </section>
      <section className="table-container">
        <table className="table">
          <thead>
            <tr className="table__header">
              <th className="table__th">FOTO</th>
              <th className="table__th">
                <div className="table__th--name">
                  <span>NOME</span>
                  <GoDotFill />
                </div>
              </th>
              <th className="table__th">CARGO</th>
              <th className="table__th">DATA DE ADMISSÃO</th>
              <th className="table__th">TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default EmployeeTable;
