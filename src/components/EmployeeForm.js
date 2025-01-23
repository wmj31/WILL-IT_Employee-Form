import React, { useState } from 'react';
import "./EmployeeForm.css";


function EmployeeForm({ addEmployee }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone) {
            addEmployee({ name, email, phone });
            setName('');
            setEmail('');
            setPhone('');
        }
    };

    return (
        <div className="employee-form">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone"
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default EmployeeForm;