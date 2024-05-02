import { Link } from "react-router-dom";

export default function StudentCard({ student, deleteItem }) {
  return (
    <Link to={`/students/${student.id}?showAge=true&showBootcamp=false`}>
      <li>
      {student.name}
      <button onClick={() => deleteItem(student.id)}>🗑️</button>
    </li>
    </Link>
  );
}
