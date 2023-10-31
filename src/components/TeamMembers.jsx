import img from '../assets/images/team/1.jpg'
import img2 from '../assets/images/team/2.jpg'
import img3 from '../assets/images/team/3.jpg'
import img4 from '../assets/images/team/4.jpg'

import '../assets/css/TeamMember.css'
import { AttentionSeeker } from 'react-awesome-reveal'
export const TeamMembers = () => {
    const allData = [
        {
            id: 1,
            img: img,
            name: "Jonathon Andrew",
            designation: "Founder"
        },
        {
            id: 2,
            img: img2,
            name: "Adipisci Velit",
            designation: "Photographer"
        },
        {
            id: 3,
            img: img3,
            name: "John Fexit",
            designation: "Manager"
        },
        {
            id: 4,
            img: img4,
            name: "John Fexit",
            designation: "creative director"
        },
    ]

    return (
        <div className="max-area" id='team'>
            <p className='about'>Team members</p>
            <div className='grid-2'>
                {
                    allData.map((data) => {
                        return (

                            <div key={data.id}>
                                <AttentionSeeker effect='flash'>
                                    <div>
                                    <img className='team-img' src={data.img} alt="" />
                                    <p className='team-name'>{data.name}</p>
                                    <p className='team-designation'>{data.designation}</p>
                                    </div>
                                </AttentionSeeker>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
