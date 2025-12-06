import { navIcons, navLinks } from "../constants/data"

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src='/images/logo.svg' alt='logo' />
                <p className='font-bold'>macFolio</p>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <p>{link.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map((icon) => (
                        <li key={icon.id}>
                            <img src={icon.img} alt={`icon-${icon.id}`} className="hover:opacity-80 cursor-pointer" />
                        </li>
                    ))}
                </ul>
                <time>
                    {new Intl
                        .DateTimeFormat('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true, year: 'numeric', month: '2-digit', day: '2-digit' })
                        .format(new Date())}
                </time>
            </div>
        </nav>
    )
}

export default Navbar