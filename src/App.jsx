import { Routes, Route } from "react-router-dom";
import "./App.css";
import students from "./studentsData";
import Navbar from "./components/Navbar";
import StudentsList from "./components/StudentsList";

//pages
import HomePage from "./HomePage";
import Listing from "./Listing";
import SingleStudent from "./SingleStudent";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Listing students={students} />} />
        <Route path="/students/:studentId" element={<SingleStudent students={students} />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
