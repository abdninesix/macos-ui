import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'

const Trash = () => {

    return (
        <>
            <div id='window-header'>
                <WindowsControls target='trash' />
                <h2>Trash</h2>
            </div>

            <p>Hi</p>
        </>
    )
}

const TrashWindow = WindowWrapper(Trash, 'trash')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default TrashWindow;
