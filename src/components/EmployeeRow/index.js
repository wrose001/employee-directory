import React from 'react';

function EmployeeRow(props) {
    return (
        <tr key={props.id}>
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