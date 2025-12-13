import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'

const Text = () => {
    return (
        <>
            <div id='window-header'>
                <WindowsControls target='text' />
                <h2>Something</h2>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, 'text')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default TextWindow;
