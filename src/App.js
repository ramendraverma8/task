import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import data from "./User.json"
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home users={data.users}  />}/>
        <Route exact path="/profile/:id" element={<Profile users={data.users} />}/>
        <Route exact path="/profile/:id/:type" element={<Profile users={data.users} />}/>
        {/* <Route exact path="/add" element={<AddStudent showAlert={showAlert} newStudent={newStudent}/>}/>
        <Route path="/display" element={<DisplayStudent showAlert={showAlert} deleteStudent={deleteStudent} students={students} />}/>
        <Route path="/edit/:id" element={<EditStudent students={students} showAlert={showAlert} setStudents={setStudents}/>} /> */}
      </Routes>
    </Router>
  

    </>
  );
}

export default App;
