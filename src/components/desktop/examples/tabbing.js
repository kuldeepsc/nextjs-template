/*
* This code defines a Tabbing component that uses the useState hook to manage the state of the activeTab variable and the onClick event handler to switch between tabs. It renders a set of buttons for each tab and uses a ternary operator to apply the active class to the button for the currently active tab. It also renders the content for the active tab using a ternary operator to show the content for the selected tab and hide the content for the other tabs.

You can style the tabs and content using CSS to create a visually appealing tabbing component.
*
* */

import { useState } from 'react';

function Tabbing() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <div className="tabs">
                <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>
                    Tab 1
                </button>
                <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>
                    Tab 2
                </button>
                <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>
                    Tab 3
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 1 && <div>Content for tab 1</div>}
                {activeTab === 2 && <div>Content for tab 2</div>}
                {activeTab === 3 && <div>Content for tab 3</div>}
            </div>
        </div>
    );
}

export default Tabbing;

