import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'

const Finder = () => {
    return (
        <>
            <div className='content-header'>
                <WindowsControls target='finder' />
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default FinderWindow