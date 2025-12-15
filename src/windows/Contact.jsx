import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'

const Contact = () => {

    return (
        <>
            <div id='window-header'>
                <WindowsControls target='contact' />
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default ContactWindow;
