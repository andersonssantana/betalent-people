import { GoDotFill } from 'react-icons/go';
import EmployeeRow from '../EmployeeRow';
import { Employee } from '../../types';
import './EmployeeTable.css';

interface EmployeeTableProps {
  employees: Employee[];
}

function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
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
          {employees.length > 0 ? (
            employees.map((employee) => (
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
  );
}

export default EmployeeTable;
