import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Search } from 'lucide-react'
import useLocationStore from '../store/location'
import { locations } from '../constants/data'

const Finder = () => {

    const { activeLocation, setActiveLocation } = useLocationStore()

    const renderList = (item) => items.map((item) => (
        <li key={item.id} onClick={() => setActiveLocation(item)} className={item.id === activeLocation.id ? "active" : "not-active"}>
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className='text-sm font-medium truncate'>{item.name}</p>
        </li>
    ))

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
                        <ul> {renderList(Object.values(locations))}</ul>
                    </div>
                    <div>
                        <h3>Work</h3>
                        <ul>{renderList(locations.work.children)}</ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default FinderWindow