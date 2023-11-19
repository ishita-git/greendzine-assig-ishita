import React, { useState } from "react";
import "./dashboard.css";
import profile from "./profile.png";
import moptro from "./moptro.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Employees from "../Employees/Employees";

const Dashboard = () => {
    const [allUsers, setAllUsers] = useState(false);

    const handleHomeClick = () =>{
        setAllUsers(false);
    }
    const handlePersonClick = () =>{
        setAllUsers(true)
    }

    const initialEmployees = [
        { id: '1', name: 'Arjun', dob: '16-11-2000', role: 'Software Engineer' },
        { id: '2', name: 'Ram', dob: '16-11-2000', role: 'Product Manager' },
        { id: '3', name: 'Ishita', dob: '16-11-2000', role: 'Senior Manager' },
        { id: '4', name: 'Karan', dob: '16-11-2000', role: 'HR' },
      ];
    
      const [employees, setEmployees] = useState(initialEmployees);
      const [searchQuery, setSearchQuery] = useState('');
    
      const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredEmployees = initialEmployees.filter((employee) =>
          employee.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setEmployees(filteredEmployees);
      };
    
  return (
    <div className="page">
      <div className="dashboard-page">
        <div className="profile-logo">
          <img src={profile} alt="profile" />
        </div>
        <div className="main-logo">
          <img src={moptro} alt="moptro-logo" />
        </div>
        {allUsers ? (
           <div className="all-users">
           <input
             placeholder="Search with name"
             value={searchQuery}
             onChange={handleSearch}
           />
           {employees.map((employee) => (
             <Employees
               key={employee.id}
               id={employee.id}
               name={employee.name}
               dob={employee.dob}
               role={employee.role}
             />
           ))}
         </div>

        ): (
            <>
            <div className="title-container">
          <div className="title">Employee Productivity Dashboard</div>
        </div>
        <div className="main-dashboard">
          <ProgressBar title={"Progress on Monday"} percentage={"95%"} />
          <ProgressBar title={"Progress on Monday"} percentage={"95%"} />
          <ProgressBar title={"Progress on Monday"} percentage={"95%"} />
          <ProgressBar title={"Progress on Monday"} percentage={"95%"} />
          <ProgressBar title={"Progress on Monday"} percentage={"95%"} />
        </div>
        </>

        )}
        
      </div>
      <div className="bottom-navbar">
        <div className="home">
          <a onClick={handleHomeClick}>
            <HomeIcon />
          </a>
        </div>
        <div className="profiles">
          <a onClick={handlePersonClick}>
            <PersonIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
