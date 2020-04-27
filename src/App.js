import React, { Component } from 'react';
import employees from './employees.json';
import './App.css';
import EmployeeRow from './components/EmployeeRow/index.js';

class App extends Component {

  state = { employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1), 
    ascending: true }

  handleChange = event => {
    const characters = this.state.employees;
    let userInput = event.target.value;
    // const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    // const regex = /[A-Z]/g;
    // employee.last_name.toLowerCase.match(userInput.toLowerCase());

    // console.log(found);
    const result = characters.filter(employee => employee.last_name.toLowerCase().match(userInput.toLowerCase()) !== null);
    console.log(result);
    this.setState({employees: result}) 
  }

  handleSort = (columnTitle) => {
    let sortArray;
    const toggle = !this.state.ascending;
    if(toggle) {
      sortArray = employees.sort((a, b) => (a[columnTitle].toLowerCase() > b[columnTitle].toLowerCase()) ? 1 : -1)
    } else {
      sortArray = employees.sort((a, b) => (b[columnTitle].toLowerCase() > a[columnTitle].toLowerCase()) ? 1 : -1)
    }
    this.setState( { employees: sortArray, ascending: toggle } );
  }

  render() {
    return (
      <div className="main">
        <h1>Weston Rose's Company Directory</h1>
        <input type="search" onChange={e => this.handleChange(e)} name="lname" />
        <table>
          <thead>
            <tr>
              <th onClick={() => this.handleSort("last_name")}>First Name</th>
              <th onClick={() => this.handleSort("last_name")}>Last Name</th>
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

