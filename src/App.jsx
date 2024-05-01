import "./App.css";
import students from "./studentsData";
import StudentsList from "./components/StudentsList";

function App() {
  return (
    <div>
      <h1>Students List</h1>
      <StudentsList students={students} />
    </div>
  );
}

export default App;
