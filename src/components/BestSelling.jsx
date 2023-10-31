import img from '../assets/images/best-selling/1.jpg'
import img2 from '../assets/images/best-selling/2.jpg'
import img3 from '../assets/images/best-selling/3.jpg'
import img4 from '../assets/images/best-selling/4.jpg'
import img5 from '../assets/images/best-selling/5.jpg'
import img6 from '../assets/images/best-selling/6.jpg'
import img7 from '../assets/images/best-selling/7.jpg'
import main from '../assets/images/best-selling/main.jpg'
import { useCount } from './shared/Counter'
import '../assets/css/BestSelling.css'
const BestSelling = () => {
    const { increment, decrement } = useCount()
    const allData = [
        {
            id: 1,
            img: img,
            name: "Lamp",
            price: "10"

        },
        {
            id: 2,
            img: img2,
            name: "Nike Backpack",
            price: "10"

        },
        {
            id: 3,
            img: img3,
            name: "Bag",
            price: "10"

        },
        {
            id: 4,
            img: img4,
            name: "Sweater",
            price: "10"

        },
        {
            id: 5,
            img: img5,
            name: "Shirt",
            price: "10"

        },
        {
            id: 6,
            img: img6,
            name: "Backpack",
            price: "10"

        },
        {
            id: 7,
            img: img7,
            name: "T-shirt",
            price: "10"

        },
        {
            id: 8,
            img: img,
            name: "Backpack",
            price: "10"

        },
    ]
    return (
        <div className='max-area'>
            <p className='about'>Best selling</p>
            <div className='flex'>
                <div className='flex-1'>
                    <img src={main} alt="" />
                </div>
                <div className='grid-2 flex-1'>
                    {
                        allData.map((data) => {
                            return (
                                <div key={data.id} className='item-area'>
                                    <img src={data.img} alt="" /> <br />
                                    <p>{data.name}</p>
                                    <p>${data.price}</p>
                                    <div className='cart-flex'>
                                        <button className='add-btn' onClick={increment}>+</button>
                                        <p className='add-text'>Add to cart</p>
                                        <button className='remove-btn' onClick={decrement} >-</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default BestSelling