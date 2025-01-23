import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";

function EmployeeList(props) {
    return (
        <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {props.employees.map((employee) => (
                    <li key={employee.EmployeeId}>
                        <Link to={`/employees/${employee.EmployeeId}`}>
                            {employee.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


const testEmployees = [
  { EmployeeId: 1, name: "Darth Vader" },
  { EmployeeId: 2, name: "Luke Skywalker" },
];

export default EmployeeList;