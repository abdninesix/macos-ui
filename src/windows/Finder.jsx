import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Search } from 'lucide-react'

const Finder = () => {
    return (
        <>
            <div id='window-header'>
                <WindowsControls target='finder' />
                <Search className="icon" />
            </div>

            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    <div>
                        <h3>Favorites</h3>
                        <ul>...</ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default FinderWindow