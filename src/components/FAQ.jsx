import { useState } from 'react';
import '../assets/css/FAQ.css'
import { Fade } from 'react-awesome-reveal';

const FAQ = () => {
    const allData = [
        {
            id: 1,
            title: 'Will I receive customs/import duties? ',
            content: 'Any customs or import duties are charged once the parcel reaches its destination country. You may be charged for handling fees and taxes as your order passes through customs. These charges must be paid by the recipient of the parcel. We are not responsible for any customs and import duty charges. '
        },
        {
            id: 2,
            title: 'How do I place a return or exchange? ',
            content: 'It’s our goal to ensure you have the best possible experience with us, and so we offer returns valid for 30 days from the date of arrival. As such, you will be responsible for paying for your own shipping costs for returning your item. '
        },
        {
            id: 3,
            title: 'Can I return or exchange an item I bought on sale? ',
            content: 'Unfortunately, all items purchased during a sale or marked at a discounted rate cannot be exchanged or refunded. If you send them back to us for a return we will not be able to process a refund. If you have any questions about sizing, fit, or fabric, please reach out to our customer service before placing your order. '
        }
    ];

    const [isOpenArray, setIsOpenArray] = useState(allData.map(() => false));

    const toggleAccordion = (index) => {
        const newIsOpenArray = [...isOpenArray];
        newIsOpenArray[index] = !newIsOpenArray[index];
        setIsOpenArray(newIsOpenArray);
    };



    return (
        <div className='max-area' id='faq'>
            <p className='about'>FAQ</p>
            <div className='ac-area'>
                {allData.map((data, index) => {
                    return (
                        <div key={data.id}>
                            <Fade>
                                <div className="accordion">
                                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                        <h3>{data.title}</h3>
                                        <div className={`arrow ${isOpenArray[index] ? 'open' : ''}`}>&#9660;</div>
                                    </div>
                                    {isOpenArray[index] && <div className="accordion-content">{data.content}</div>}
                                </div>
                            </Fade>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
