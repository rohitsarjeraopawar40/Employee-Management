import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeSearch = () => {
  const { employees } = useContext(EmployeeContext);
  const [searchId, setSearchId] = useState('');
  const [foundEmployee, setFoundEmployee] = useState(null);

  const handleSearch = () => {
    const employee = employees.find(emp => emp.id === searchId);
    setFoundEmployee(employee);
  };

  return (
    <div>
      <h2>Search Employee</h2>
      <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Enter ID" />
      <button onClick={handleSearch}>Search</button>
      {foundEmployee && (
        <div>
          <h3>Employee Details</h3>
          <p>ID: {foundEmployee.id}</p>
          <p>Name: {foundEmployee.name}</p>
          <p>Position: {foundEmployee.position}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeSearch;
