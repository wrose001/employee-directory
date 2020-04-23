import React, { Component } from 'react';
import employees from './employees.json';
import './App.css';
import EmployeeRow from './components/EmployeeRow/index.js';

class App extends Component {

  state = { employees: employees }

  render() {
    return (
      <div className="main">
        <h1>Weston Rose's Company Directory</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Title</th>
              <th>Department</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employeeObject => {
              return (
                <EmployeeRow 
                  key={employeeObject.id} 
                  first_name={employeeObject.first_name} 
                  last_name={employeeObject.last_name} 
                  email={employeeObject.email} 
                  gender={employeeObject.gender} 
                  title={employeeObject.title} 
                  department={employeeObject.department} 
                  
                  />
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

