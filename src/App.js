import React, { Component } from 'react';
import employees from './employees.json';
import './App.css';
import EmployeeRow from './components/EmployeeRow/index.js';
import Footer from './components/Footer/index';

class App extends Component {

  state = { employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1), 
    ascending: true }

  //This function allows users to filter by last name//
  handleChange = event => {
    let userInput = event.target.value;
      if(userInput === "") {
        this.setState({employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1)})
      } else {
        const characters = employees;

    const result = characters.filter(employee => employee.last_name.toLowerCase().match(userInput.toLowerCase()) !== null);
  
    this.setState({employees: result})} 
  }

  //This function allows users to sort on multiple column titles.//
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
      <div>
      <div className="main">
        <h1>Weston Rose's Company Directory</h1>
        <div className="input">
        <input placeholder="Search by Last Name Only" type="search" onChange={e => this.handleChange(e)} name="lname" label="input field" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Employee Photo</th>
              <th onClick={() => this.handleSort("first_name")}>First Name <i className="fas fa-arrows-alt-v"></i></th>
              <th onClick={() => this.handleSort("last_name")}>Last Name <i className="fas fa-arrows-alt-v"></i></th>
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
                  avatar={employeeObject.avatar}
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
        <Footer />  
      </div>
    );
  }
}

export default App;

