import { useState } from 'react';
import { formatDate, formatPhone } from "../../utils/formatters";
import { Employee } from "../../types";
import { FaChevronDown } from 'react-icons/fa';
import './EmployeeRow.css';

function EmployeeRow ({ employee }: { employee: Employee }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr 
        key={employee.id} 
        className={`table__row${isExpanded ? ' expanded' : ''}`}
        onClick={toggleExpand}
      >
        <td className="table__td">
          <img src={employee.image} alt={employee.name} className="profile-image" />
        </td>
        <td className="table__td">
          <div className="name-with-icon">
            {employee.name}
            <FaChevronDown className={`chevron-icon ${isExpanded ? 'rotated' : ''}`} />
          </div>
        </td>
        <td className="table__td">{employee.job}</td>
        <td className="table__td">{formatDate(employee.admission_date)}</td>
        <td className="table__td">{formatPhone(employee.phone)}</td>
      </tr>
      {isExpanded && (
        <tr className="expanded-row">
          <td colSpan={5}>
            <div className="expanded-content">
              <div><strong>Cargo:</strong> {employee.job}</div>
              <div><strong>Data de admissão:</strong> {formatDate(employee.admission_date)}</div>
              <div><strong>Telefone:</strong> {formatPhone(employee.phone)}</div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default EmployeeRow;
