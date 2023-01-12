/*
* In this example, the TypeAndSearch component has a state variable searchTerm that is used to store the search term entered by the user, and a state variable results that is used to store the search results. The handleSearch function is called when the form is submitted and uses the fetch function to send a request to the server with the search term. The server should return a JSON array of search results, which is then stored in the results state variable. The TypeAndSearch component then displays the search results in an unordered list.
*
* */


import { useState } from 'react';

function TypeAndSearch({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    async function handleSearch(e) {
        e.preventDefault();
        // const response = await fetch(`/api/search?q=${searchTerm}`);
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const data = await response.json();
        setResults(data);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
            <ul>
                {results.map((item) => (
                    <li key={item.id}>{item.name.common}</li>
                ))}
            </ul>
        </form>
    );
}

export default TypeAndSearch;
