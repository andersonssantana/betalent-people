import { formatDate, formatPhone } from "../../utils/formatters";
import { Employee } from "../../types";
import './EmployeeRow.css';

function EmployeeRow ({ employee }: { employee: Employee }) {
  return (
    <tr key={employee.id} className="table__row">
      <td className="table__td">
        <img src={employee.image} alt={employee.name} className="profile-image" />
      </td>
      <td className="table__td">{employee.name}</td>
      <td className="table__td">{employee.job}</td>
      <td className="table__td">{formatDate(employee.admission_date)}</td>
      <td className="table__td">{formatPhone(employee.phone)}</td>
    </tr>
  );
}

export default EmployeeRow;
