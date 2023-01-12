import React, {useEffect, useState} from 'react';

const TableFilter = ({ data }) => {

    /* const data = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ]; */

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (!searchTerm) {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
    }, [searchTerm, data]);

    return (
        <div>
            <input value={searchTerm} onChange={handleSearchChange} />
            <button onClick={() => setSearchTerm('')}>Reset</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableFilter;
