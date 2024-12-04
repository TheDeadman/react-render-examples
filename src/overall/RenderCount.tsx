import React, { useEffect, useRef, useState } from 'react';

const RenderCount = ({ componentName = 'Component' }) => {
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <p style={{ border: 'thin solid black' }}>
            {componentName} Render Count: {renderCount.current}
        </p>
    );
};

export default RenderCount;
