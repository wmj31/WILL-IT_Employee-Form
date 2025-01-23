import React from 'react';
import "./EmployeeList.css";

function EmployeeList({ employees }) {
    return (
        <div className="employee-list">
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name} - {employee.email} - {employee.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;