import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Search } from 'lucide-react'

const Finder = () => {
    return (
        <>
            <div className='window-header'>
                <WindowsControls target='finder' />
                <Search className="icon" />
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default FinderWindow