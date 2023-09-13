/*
* load a custom component on scroll is to use the useRef hook to get a reference to a DOM element and then use the useEffect hook to check if the element is in the viewport.
*
* This way, the component will be loaded when it is visible in the viewport, regardless of the scroll position.
*
* */

import React, { useState, useEffect, useRef } from 'react'

const OnScrollLoadViewPort = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true)
                window.removeEventListener('scroll', handleScroll)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [ref])

    return (
        <div ref={ref}>
            {isVisible && children}
        </div>
    )
}

export default OnScrollLoadViewPort;