/*
*  use the useEffect hook to load a custom component when the user scrolls to a certain point on the page.
*
* OnScrollLoad that wraps your custom component and uses the useEffect hook to check if the user has scrolled to a certain point on the page.
*
* */

import React, { useState, useEffect } from 'react'

const OnScrollLoad = ({ children, offset=200 }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > offset) {
                setIsVisible(true)
                window.removeEventListener('scroll', handleScroll)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [offset])

    return <>{isVisible && children}</>
}

export default OnScrollLoad;