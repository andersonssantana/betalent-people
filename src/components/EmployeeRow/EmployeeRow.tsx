import { FaChevronDown } from 'react-icons/fa';
import { Employee } from '../../types';
import { formatDate, formatPhone } from '../../utils/formatters';
import { useExpandableRow } from '../../hooks/useExpandableRow';
import './EmployeeRow.css';

interface EmployeeRowProps {
  employee: Employee;
  onRowClick?: (employee: Employee) => void;
}

function EmployeeRow({ employee, onRowClick }: EmployeeRowProps) {
  const { isExpanded, isClosing, toggleExpand } = useExpandableRow();

  const handleRowClick = () => {
    toggleExpand();
    if (onRowClick) {
      onRowClick(employee);
    }
  };

  const formattedDate = formatDate(employee.admission_date);
  const formattedPhone = formatPhone(employee.phone);

  return (
    <>
      <tr 
        className={`employee-row ${isExpanded ? 'employee-row--expanded' : ''}`} 
        onClick={handleRowClick}
        role="row"
        aria-expanded={isExpanded}
      >
        <td className="employee-row__cell">
          <img 
            src={employee.image} 
            alt={`Foto de ${employee.name}`} 
            className="employee-row__image" 
          />
        </td>
        <td className="employee-row__cell">
          <div className="employee-row__name-container">
            {employee.name}
            <FaChevronDown 
              className={`employee-row__chevron ${isExpanded ? 'employee-row__chevron--rotated' : ''}`} 
              aria-hidden="true"
            />
          </div>
        </td>
        <td className="employee-row__cell">{employee.job}</td>
        <td className="employee-row__cell">{formattedDate}</td>
        <td className="employee-row__cell">{formattedPhone}</td>
      </tr>
      {isExpanded && (
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
      )}
    </>
  );
}

export default EmployeeRow;
