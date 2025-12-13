import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import useWindowStore from '../store/window'

const Image = () => {

    const { windows } = useWindowStore()
    const data = windows.imgfile?.data

    if (!data) return null

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id='window-header'>
                <WindowsControls target='imgfile' />
                <h2>{name}</h2>
            </div>

            <div className='p-5 space-y-6 bg-white'>
                {image ? (
                    <img src={image} alt={name} className='-w-full h-auto rounded' />
                ) : null}
                {subtitle ? <h3 className='text-lg font-semibold'>{subtitle}</h3> : null}
                {Array.isArray(description) && description.length > 0 ? (
                    <div className='space-y-3 leading-relaxed text-base text-gray-800'>
                        {description.map((para, i) => (<p key={i}>{para}</p>))}
                    </div>
                ) : null}
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default ImageWindow;
