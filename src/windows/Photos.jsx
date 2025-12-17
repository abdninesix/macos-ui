import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { Mail } from 'lucide-react'
import { Search } from 'lucide-react'
import useWindowStore from '../store/window'

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
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default PhotosWindow
