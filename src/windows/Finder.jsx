import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Search } from 'lucide-react'
import useLocationStore from '../store/location'
import { locations } from '../constants/data'

const Finder = () => {

    const { activeLocation, setActiveLocation } = useLocationStore()

    const openItem = () => { }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            {items.map((item) => (
                <li key={item.id} onClick={() => setActiveLocation(item)} className={item.id === activeLocation.id ? "active" : "not-active"}>
                    <img src={item.icon} alt={item.name} className="w-4" />
                    <p className='text-sm font-medium truncate'>{item.name}</p>
                </li>
            ))}
        </div>
    );

    return (
        <>
            <div id='window-header'>
                <WindowsControls target='finder' />
                <Search className="icon" />
            </div>

            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    <ul> {renderList("Favorites", Object.values(locations))}</ul>
                    <ul>{renderList("Work", locations.work.children)}</ul>
                </div>
            </div>

            <ul className='content'>
                {activeLocation?.children.map((item) => (
                    <li key={item.id} className={item.position} onClick={() => openItem(item)}></li>
                ))}
            </ul>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default FinderWindow