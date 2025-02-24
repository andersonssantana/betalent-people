import { formatDate, formatPhone } from "../../utils/formatters";
import { Employee } from "./types";

function EmployeeRow ({ employee }: { employee: Employee }) {
  return (
    <tr key={employee.id} className="table-row">
      <td>
        <img src={employee.image} alt={employee.name} className="avatar" />
      </td>
      <td>{employee.name}</td>
      <td>{employee.job}</td>
      <td>{formatDate(employee.admission_date)}</td>
      <td>{formatPhone(employee.phone)}</td>
    </tr>
  );
}

export default EmployeeRow;
