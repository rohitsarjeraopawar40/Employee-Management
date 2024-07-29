import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({ id: '', name: '', position: '' });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({ id: '', name: '', position: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" value={employee.id} onChange={handleChange} placeholder="ID" required />
      <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="position" value={employee.position} onChange={handleChange} placeholder="Position" required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
