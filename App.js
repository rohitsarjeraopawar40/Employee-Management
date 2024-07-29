import React from 'react';
import EmployeeProvider from './components/EmployeeContext';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './employee-management\\src\\components\\EmployeeList.js';
import SearchEmployee from './components/SearchEmployee';
import './styles.css';

const App = () => {
    return (
        <EmployeeProvider>
            <div className="App">
                <h1>Employee Management System</h1>
                <EmployeeForm onSubmit={() => {}} />
                <SearchEmployee />
                <EmployeeList />
            </div>
        </EmployeeProvider>
    );
};

export default App;
