import React from 'react'
import WindowsControls from '../components/WindowsControls'
import WindowWrapper from '../hoc/WindowWrapper'
import { PanelLeft } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { ShieldHalf } from 'lucide-react'
import { Search } from 'lucide-react'
import { Copy } from 'lucide-react'
import { Share } from 'lucide-react'
import { Plus } from 'lucide-react'
import { blogPosts } from '../constants/data'
import { MoveRight } from 'lucide-react'

const Safari = () => {
    return (
        <>
            <div id='window-header'>
                <WindowsControls target='safari' />
                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center gap-1 ml-5'>
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>
                <div className='flex-1 flex-center gap-3'>
                    <ShieldHalf className='icon' />
                    <div className='search'>
                        <Search />
                        <input type="text" placeholder='Search or enter URL' className='flex-1' />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className='blog'>
                <h2>My Thoughts</h2>
                <div className='space-y-8'>
                    {blogPosts.map(({ id, date, title, image, link }) => (
                        <div key={id} className='blog-post'>
                            <div className='col-span-2'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} target='_blank' rel='noopener noreferrer'>Check out this blog<MoveRight /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')  //This Higher-Order-Compononent takes Terminal and returns a modified version of it

export default SafariWindow