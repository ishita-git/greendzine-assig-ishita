import React from "react";
import "./employees.css";

const Employees = ({ id,name,dob,role }) => {
  return (
    <div className="employee-card">
      <div className="row">
        <div className="label-title">{'EMP ID :'}</div>
        <div className="label-value">{id}</div>
      </div>
      <div className="row">
        <div className="label-title">{'Name :'}</div>
        <div className="label-value">{name}</div>
      </div>
      <div className="row">
        <div className="label-title ">{'DOB :'}</div>
        <div className="label-value yellow ">{dob}</div>
      </div>
      <div className="row">
        <div className="label-title ">{'Role :'}</div>
        <div className="label-value green">{role}</div>
      </div>
      
    </div>
  );
};

export default Employees;
