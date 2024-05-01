export default function StudentCard({ student, deleteItem }) {
  return (
    <li>
      {student.name}
      <button onClick={() => deleteItem(student.id)}>🗑️</button>
    </li>
  );
}
