import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Mail } from 'lucide-react'
import { Search } from 'lucide-react'
import useWindowStore from '../store/window'
import { photosLinks } from '../constants/data'

const Photos = () => {

    const { openWindow } = useWindowStore();

    return (
        <>
            <div id='window-header'>
                <WindowsControls target='photos' />
                <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
                    <Mail className='icon' />
                    <Search className='icon' />
                </div>
            </div>

            <div className='flex w-full'>
                <div className='sidebar'>
                    <h2>Photos</h2>
                    <ul>{photosLinks.map(({ id, icon, title }) => (
                        <li key={id}>
                            <img src={icon} alt={title} />
                            <p>{title}</p>
                        </li>
                    ))}</ul>
                </div>
                <div className='gallery'></div>
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default PhotosWindow
