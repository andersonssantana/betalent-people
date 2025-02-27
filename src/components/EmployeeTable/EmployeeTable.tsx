import { GoDotFill } from 'react-icons/go';
import EmployeeRow from '../EmployeeRow';
import EmptyEmployeeRow from '../EmptyEmployeeRow';
import { Employee } from '../../types';
import './EmployeeTable.css';

interface EmployeeTableProps {
  employees: Employee[];
  onRowClick?: (employee: Employee) => void;
}

function EmployeeTable({ 
  employees,
  onRowClick
}: EmployeeTableProps) {
  return (
    <section className="employee-table__container">
      <table className="employee-table__table" role="table">
        <thead>
          <tr className="employee-table__head-row">
            <th className="employee-table__head-cell" scope="col">FOTO</th>
            <th className="employee-table__head-cell" scope="col">
              <div className="employee-table__name-header">
                <span>NOME</span>
                <GoDotFill className="employee-table__name-icon" aria-hidden="true" />
              </div>
            </th>
            <th className="employee-table__head-cell" scope="col">CARGO</th>
            <th className="employee-table__head-cell" scope="col">DATA DE ADMISSÃO</th>
            <th className="employee-table__head-cell" scope="col">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          { employees.length > 0 ? (
            employees.map((employee) => (
              <EmployeeRow 
                key={employee.id} 
                employee={employee}
                onRowClick={onRowClick} 
              />
            ))
          ) : (
            <EmptyEmployeeRow message="Nenhum funcionário encontrado" />
          )}
        </tbody>
      </table>
    </section>
  );
}

export default EmployeeTable;
