
import './Navbar.scss'

const Navbar = () => {

    const url = '#'

    return (
        <div className='containerNav'>

            <nav>

                <article >
                    <h2>THE DESIGN SHOP</h2>
                </article>

                <article>
                    <ul className='ul1'>
                        <li> <a href={url}>Featured</a> </li>
                        <li> <a href={url}>Lifestyle</a></li>
                        <li> <a href={url}>Books</a></li>
                        <li> <a href={url}>Digital</a></li>
                    </ul>

                    <ul>
                        <li> <a href={url}>Weekly Picks</a></li>
                        <li> <a href={url}>The Design Blog</a></li>
                    </ul>

                </article>

            </nav>

        </div>
    )
}

export default Navbar;