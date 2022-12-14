
import './MainList.scss'

// import Fotos
import photo1 from '../img/01-Books.png'
import photo2 from '../img/01-Home.png'
import photo3 from '../img/02-Lifestyle.png'
import photo4 from '../img/29-Lifestyle_b-o.png'
import photo5 from '../img/45-Home_hem.png'
import photo6 from '../img/46-Home_bm.png'

import Main from './Main'

// Liste Products
const List = [
    {
        url: photo2,
        marke: 'Vifa Copenhagen 2.0 Loudspeaker',
        preis: '$799.00'
    },
    {
        url: photo4,
        marke: 'Bang & Olufsen Wireless Headphones',
        preis: '$174.00'
    },
    {
        url: photo1,
        marke: 'Poketo: Creative Spaces',
        preis: '$25.00'
    },
    {
        url: photo3,
        marke: 'Ucon Acrobatics Hajo Backpack',
        preis: '$79.00',
        link: '#'
    },
    {
        url: photo6,
        marke: 'Summer Print by Bratislav Milenkovic',
        preis: '$27.00',
        link: '#'
    },
    {
        url: photo5,
        marke: 'Pako Mocular Corner Sofa by Hem',
        preis: '$3.999.00',
        link: '#'
    }
]

const MainList = () => {
    return (
        <div className='containerMain'>

            {List.map((el, i) => {
                return (

                    <Main
                        url={el.url}
                        link={el.link}
                        marke={el.marke}
                        preis={el.preis}
                    />

                )
            })}

        </div>
    )
}

export default MainList;