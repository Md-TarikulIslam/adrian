import img from '../assets/images/new-arrival/1.jpg'
import img2 from '../assets/images/new-arrival/2.jpg'
import img3 from '../assets/images/new-arrival/3.jpg'
import img4 from '../assets/images/new-arrival/4.jpg'
import '../assets/css/NewArrival.css'
const NewArrival = () => {
    const allData = [
        {
            id: 1,
            img: img,
            name: "Floral Kirby",
            price: "320"
        },
        {
            id: 2,
            img: img2,
            name: "Open Knit Sweater",
            price: "120"
        },
        {
            id: 3,
            img: img3,
            name: "Official Trendy",
            price: "200"
        },
        {
            id: 4,
            img: img4,
            name: "Frock",
            price: "150"
        },
    ]
    return (
        <div className="max-area">
            <p className='about'>New arrival</p>
            <div className='grid-2'>
                {
                    allData.map((data) => {
                        return (
                            <div key={data.id}>
                                <img className='arrival-img' src={data.img} alt="" />
                                <p className='arrival-name'>{data.name}</p>
                                <p className='arrival-price'>${data.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewArrival