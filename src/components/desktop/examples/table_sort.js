/*
*  In this example, the table has three columns: Name, Age, and Country. The user can click on the column headers to sort the table by the corresponding field. The state variables sortField and sortDirection are used to store the current sort field and direction. The handleSort function is called when the user clicks on a column header, and it updates the state variables accordingly. The sortData function is used to sort the data array based on the current sort field and direction. Finally, the sorted data is displayed in the table using the map function.
*
* */

import { useState } from 'react';
import MyApp from "./modal";

function MyTable({ data }) {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  function handleSort(field) {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  }

  function sortData(data) {
    if (!sortField) return data;

    return data.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
console.log("data.... ", data)
  const sortedData = sortData(data);

  return (
      <table>
        <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('age')} >Age</th>
          <th onClick={() => handleSort('country')}>Country</th>
        </tr>
        </thead>
        <tbody>
        {sortedData.length>0 && sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}

export default MyTable;