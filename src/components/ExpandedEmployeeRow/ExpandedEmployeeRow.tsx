import { Employee } from '../../types';
import './ExpandedEmployeeRow.css';

interface ExpandedEmployeeRowProps {
  employee: Employee;
  formattedDate: string;
  formattedPhone: string;
  isClosing: boolean;
}

function ExpandedEmployeeRow({ employee, formattedDate, formattedPhone, isClosing }: ExpandedEmployeeRowProps) {
  return (
    <tr className="employee-row__details" role="row">
      <td colSpan={2}>
        <div
          className={`employee-row__expanded-content ${isClosing ? 'employee-row__expanded-content--closing' : ''}`}
          role="region"
          aria-label={`Detalhes de ${employee.name}`}
        >
          <div className="employee-row__detail-item">
            <strong>Cargo:</strong> {employee.job}
          </div>
          <div className="employee-row__detail-item">
            <strong>Data de admissão:</strong> {formattedDate}
          </div>
          <div className="employee-row__detail-item">
            <strong>Telefone:</strong> {formattedPhone}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ExpandedEmployeeRow;
