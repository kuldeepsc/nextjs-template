/*
*
* In this example, the LoadMoreOnScroll component has a state variable items that is used to store the items that have been loaded, a state variable page that is used to store the current page number, and a state variable hasMore that is used to store a boolean value indicating whether there are more items to load. The useEffect hook is used to load the next page of items when the page state variable changes. The Waypoint component from react-waypoint is used to trigger the loading of the next page of items when the user scrolls to the bottom of the page. The Waypoint component takes an onEnter prop that is a function that is called when the user scrolls to the bottom of the page.
*
* */

import { useState, useEffect } from 'react';
import Waypoint from 'react-waypoint';

function LoadMoreOnScroll({ data }) {
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
                <Waypoint onEnter={() => setPage(page + 1)}>
                    <div>Loading more items...</div>
                </Waypoint>
            ) : (
                <div>No more items to load</div>
            )}
        </div>
    );
}

export default LoadMoreOnScroll;
