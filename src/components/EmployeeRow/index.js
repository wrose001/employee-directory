import React from 'react';
import './index.css';

function EmployeeRow(props) {
    return (
        <tr key={props.id}>
          <td id="employeeImage"><img src={props.avatar} alt={props.id} /></td>
          <td>{props.first_name}</td>
          <td>{props.last_name}</td>
          <td>{props.title}</td>
          <td>{props.department}</td>
          <td>{props.email}</td>
          <td>{props.gender}</td>
          
        </tr>
    )
}

export default EmployeeRow;