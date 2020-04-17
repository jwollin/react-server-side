import React, { useState } from 'react';

export const App = () => {
	const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is being server side rendered</p>
			{show && (
                <div>I was clicked</div>
            )}
			<button onClick={() => setShow(!show)}>Click Me</button>
        </div>
    )
};