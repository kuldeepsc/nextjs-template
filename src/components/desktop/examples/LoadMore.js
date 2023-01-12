/*
* In this example, the LoadMore component has a state variable items that is used to store the items that have been loaded, a state variable page that is used to store the current page number, and a state variable hasMore that is used to store a boolean value indicating whether there are more items to load. The useEffect hook is used to load the next page of items when the page state variable changes. The LoadMore component displays a "Load More" button if there are more items to load, and a message indicating that there are no more items to load if there are no more items.
*
* */


import { useState, useEffect } from 'react';

function LoadMore({ data }) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function loadMore() {
            const response = await fetch(`/api/items?page=${page}`);
            const data = await response.json();
            setItems([...items, ...data]);
            setPage(page + 1);
            setHasMore(data.length > 0);
        }
        loadMore();
    }, [page]);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
            {hasMore ? (
                <button onClick={() => setPage(page + 1)}>Load More</button>
            ) : (
                <div>No more items to load</div>
            )}
        </div>
    );
}

export default LoadMore;
