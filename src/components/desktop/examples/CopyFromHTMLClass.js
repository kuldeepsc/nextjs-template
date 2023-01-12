/*
*
* In this example, the CopyFromHTMLClass component has a state variable message that is used to store the message to display to the user, and a ref inputRef that is used to reference the input element. The useEffect hook is used to set the value of the input element to the inner text of the element with the specified class name. The handleCopy function is called when the "Copy" button is clicked and uses the select and execCommand methods to copy the text to the clipboard. The CopyFromHTMLClass component displays the message if it is not an empty string.
* */

import { useRef, useState, useEffect } from 'react';
import {arrayToObject, objectToArray, objectToArray1} from "../../../helper/general";

function CopyFromHTMLClass({ className }) {
    const [message, setMessage] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        const element = document.querySelector(`.${className}`);
        inputRef.current.value = element.innerText;
    }, [className]);

    function handleCopy() {
        const selector = event.target.getAttribute('data-copy-element');
        const element = document.querySelector(`.${selector}`);
        inputRef.current.value = element.innerText;
        inputRef.current.select();
        document.execCommand('copy');
        setMessage('Copied to clipboard!');
    }

    const arr = [{ sid: 3, name: 'Alice' }, { sid: 2, name: 'Bob' }];
    console.log("array", arr);
    const obj=arrayToObject(arr,'name');
    console.log("arrayToObject ", obj);
    const arr1=objectToArray(obj);
    console.log("objectToArray ", arr1);
    const arr2=objectToArray1(obj,false);
    console.log("objectToArray1 ", arr2);


    return (
        <div>
            <p className="copyarea">loream ds sfsf df fdg dfg gdfg</p>
            <input ref={inputRef} type="text" readOnly />
            <button onClick={handleCopy} data-copy-element="copyarea">Copy</button>
            {message && <div>{message}</div>}
        </div>
    );
}

export default CopyFromHTMLClass;
