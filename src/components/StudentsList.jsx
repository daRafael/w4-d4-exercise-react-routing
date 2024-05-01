import { useState } from "react";
import "./StudentsList.css";
import StudentCard from "./StudentCard";

export default function StudentsList({ students }) {
  const [items, setItems] = useState(students);

  return (
    <div className="wrapper">
      <ul>
        {items.map((item) => (
          <StudentCard key={item.id} student={item} />
        ))}
      </ul>
    </div>
  );
}
