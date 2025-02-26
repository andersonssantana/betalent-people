import { useState, useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Employee } from '../../types';
import { formatDate, formatPhone } from '../../utils/formatters';
import './EmployeeRow.css';

interface EmployeeRowProps {
  employee: Employee;
}

function EmployeeRow({ employee }: EmployeeRowProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toggleExpand = useCallback(() => {
    if (isExpanded) {
      setIsClosing(true);
      // Espera a animação terminar antes de fechar de fato
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsExpanded(true);
    }
  }, [isExpanded]);

  const formattedDate = formatDate(employee.admission_date);
  const formattedPhone = formatPhone(employee.phone);

  return (
    <>
      <tr 
        className={`employee-row ${isExpanded ? 'employee-row--expanded' : ''}`} 
        onClick={toggleExpand}
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
        <tr className="employee-row__details">
          <td colSpan={2}>
            <div className={`employee-row__expanded-content ${isClosing ? 'employee-row__expanded-content--closing' : ''}`}>
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
