import React from 'react';
import Layout1 from './Layout1';

const layout2 = () => <div>Hello Layout 2</div>

function LayoutChooser({children}) {
    console.log("Children:", children);

    let layoutArray = [{
        name: 'layout-1',
        Component: Layout1
    },{
        name: 'layout-2',
        Component: layout2
    },]

    const ChoosenLayout = layoutArray[0];
    console.log("ChoosenLayout.Component:", ChoosenLayout.Component);

    return (
        <div>

        <ChoosenLayout.Component />
            {children}
        </div>
    )
}

export default LayoutChooser
