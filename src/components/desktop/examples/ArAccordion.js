import React, {useState} from 'react';

const ArAccordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className={`accordion-header ${isOpen?'active':''}`} onClick={toggleAccordion}>{props.title}</button>
            {isOpen && <div className="accordion-body">{props.children}</div>}
        </div>
    );
};

export default ArAccordion;
