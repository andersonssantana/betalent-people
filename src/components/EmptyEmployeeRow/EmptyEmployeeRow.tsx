import './EmptyEmployeeRow.css';

interface EmptyEmployeeRowProps {
  message: string;
}

function EmptyEmployeeRow({ message }: EmptyEmployeeRowProps) {
  return (
    <tr className="employee-table__empty-row">
      <td colSpan={5} className="employee-table__empty-cell">
        { message }
      </td>
    </tr>
  );
}

export default EmptyEmployeeRow;
