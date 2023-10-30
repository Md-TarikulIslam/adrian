import img from '../assets/images/category/1.jpg'
import img2 from '../assets/images/category/2.jpg'
import img3 from '../assets/images/category/3.jpg'

import '../assets/css/Category.css'

const allData = [
    {
        id: 1,
        img: img,
        title: "Stylish Leather Watch",
        offer: "40%",
        link: "#"
    },
    {
        id: 2,
        img: img2,
        title: "Ladies Hand Bag",
        offer: "50%",
        link: "#"
    },
    {
        id: 3,
        img: img3,
        title: "Trendy Shoe",
        offer: "40%",
        link: "#"
    },
]
const Category = () => {
    return (
        <div className='max-area'>
            <div className='grid '>
                {
                    allData.map((data) => {
                        return (
                            <div key={data.id} className='category-div'>
                                <div className=''>
                                    <img className='category-image' src={data.img} alt="" />
                                </div>
                                <div className='category-text-div'>
                                    <p className='category-title'>{data.title}</p>
                                    <p className='category-offer'>up to {data.offer} off</p>
                                    <a href={data.link}><button className='cat-shop-now-btn'>Shop now</button></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category