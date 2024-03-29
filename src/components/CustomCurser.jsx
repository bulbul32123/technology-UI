import React from 'react';
import AnimatedCursor from "react-animated-cursor"

export default function CustomCurser() {
    return (
        <>
            <div className="App">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={8}
                    color='00, 182,00'
                    outerAlpha={0.4}
                    innerScale={0.4}
                    outerScale={8}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                    ]}
                />
            </div>
        </>
    )
}
