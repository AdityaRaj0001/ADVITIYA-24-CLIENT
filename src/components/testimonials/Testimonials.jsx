import Heading from "../heading/Heading"
import Image from 'next/image'
import Avatar from '../../assets/images/testimonials-avatar.png'
import CardBg from '../../assets/images/testimonials-bg.svg'
import Numbers from '../../assets/images/testimonials-number.svg'


const Testimonials = () => {
    const Data = [
        {
            avatar: Avatar,
            name: "Ayush Saini",
            description: "Hey This is Mohit Bhuria currently pursuing computer science from IIT Ropar want to share my experience of a blissful day of my life -'Advitiya ' a full-day amalgam of science, technology, fun, entertainment, innovation and research at I.I.T ROPAR is a most awaited day for any engineer who is interested in technology and innovation. It would help you to explore the world of Robotics, coding, quizzing, gaming, workshop MUN, and much more in the same way as it helped me to learn and explore. I got a chance to attend Advitiya when I was an IIT JEE Aspirant through the 'Advitiya Open Olympiad 'in which I was ranked 2nd. It was a whole new experience for me which gave me the motivation to study hard and get into a college like I.I.T ROPAR. Exhibitions organized by Indian Army and I.S.R.O. were well interactive and helped exhibitors to learn and explore new things. Overall, the experience was virtuous and was worth attending",
            rating: <Stars5/>,
        },
        {
            avatar: Avatar,
            name: "Mohit Bhuriya",
            description: "Hello everyone. This is Ayush Saini and I would like to share my experience of Advitiya 2020. I got the opportunity to visit the technical fest of IIT Ropar, as an 11th grader in February 2020. This became possible through the Advitiya Open Olympiad. It was a great experience. I attended exhibitions by the Indian Army and ISRO. And I even got the opportunity of attending a lecture from a former ISRO chairman, Dr K Radhakrishnan and some other reputed authors, whose names I fail to recollect at the moment. Also, I was exposed to the world of robotics and drone competitions for the first time, despite being just a school student. Moreover, I got to know a lot about residential college life, and engineering as a whole. I am deeply grateful to IIT Ropar for having me as a guest and extending their warm hospitality to me. The learning experience here shall be remembered by me throughout my life.",
            rating: <Stars5/>,
        },
        {
            avatar: Avatar,
            name: "Akhsit Singh",
            description: "Hello everyone. This is Akshit Singh and I would like to share my experience of Advitiya 2020. I got the opportunity to visit the technical fest of IIT Ropar, as an 11th grader in February 2020. This became possible through the Advitiya Open Olympiad. It was a great experience. I attended exhibitions by the Indian Army and ISRO. And I even got the opportunity of attending a lecture from a former ISRO chairman, Dr K Radhakrishnan and some other reputed authors, whose names I fail to recollect at the moment. Also, I was exposed to the world of robotics and drone competitions for the first time, despite being just a school student. Moreover, I got to know a lot about residential college life, and engineering as a whole. I am deeply grateful to IIT Ropar for having me as a guest and extending their warm hospitality to me. The learning experience here shall be remembered by me throughout my life.",
            rating: <Stars5/>,
        },
    ];
    return (
        <div className="py-[2rem] lg:py-[8rem] relative mb-24">
            <img src="./Testimonialbg.svg" className="w-[600px] absolute bottom-[200px]  xl:-top-[520px] left-0"/>
            <div className="w-[90%] mx-auto">
                <div>
                    <Heading title={`Testimonials`} heading={`Testimonials`} />
                </div>
                <div className="grid lg:grid-cols-[93%_7%] pt-6">
                    <div className="flex flex-col gap-[1rem]">
                        {Data.map((obj, ind) => (<Card key={ind} {...obj} />))}
                    </div>
                    <div className=" place-self-center hidden lg:block">
                        <Image src={Numbers} alt="numbers"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({
    avatar,
    name,
    description,
    rating,
}) => {

    return (
        <div className="py-4 relative">
            <div className="lg:block hidden">
                <Image src={CardBg} className="absolute lg:block hidden" alt="card-bg"/>
            </div>
            <div className="flex flex-col gap-2 w-[95%] mx-auto mt-[2rem]">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div> <Image src={avatar} alt="avatar"/> </div>
                        <div
                            className=" text-[#fff] font-archivo text-[1.275rem] lg:text-[1.875rem] not-italic font-[600] leading-[2rem]"
                        >{name}</div>
                    </div>
                    <div>{rating}</div>
                </div>
                <div
                    className=" text-[#fff] font-archivo text-[.925rem] lg:text-[1.25rem] not-italic font-[400] leading-[1.3rem] lg:leading-[2rem]"
                >{description}</div>
            </div>
        </div>
    );
}

const Stars3 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="215" height="35" viewBox="0 0 215 35" fill="none">
        <path d="M107.5 0L111.429 12.0922L124.143 12.0922L113.857 19.5656L117.786 31.6578L107.5 24.1844L97.2138 31.6578L101.143 19.5656L90.8565 12.0922L103.571 12.0922L107.5 0Z" fill="#FFD913"/>
        <path d="M152.5 1.61804L155.953 12.2467L156.066 12.5922H156.429L167.605 12.5922L158.563 19.1611L158.269 19.3746L158.382 19.7201L161.835 30.3488L152.794 23.7799L152.5 23.5664L152.206 23.7799L143.165 30.3488L146.618 19.7201L146.731 19.3746L146.437 19.1611L137.395 12.5922L148.571 12.5922H148.934L149.047 12.2467L152.5 1.61804Z" stroke="#FFD913"/>
        <path d="M197.5 1.61804L200.953 12.2467L201.066 12.5922H201.429L212.605 12.5922L203.563 19.1611L203.269 19.3746L203.382 19.7201L206.835 30.3488L197.794 23.7799L197.5 23.5664L197.206 23.7799L188.165 30.3488L191.618 19.7201L191.731 19.3746L191.437 19.1611L182.395 12.5922L193.571 12.5922H193.934L194.047 12.2467L197.5 1.61804Z" stroke="#FFD913"/>
        <path d="M62.5 0L66.429 12.0922L79.1435 12.0922L68.8572 19.5656L72.7862 31.6578L62.5 24.1844L52.2138 31.6578L56.1428 19.5656L45.8565 12.0922L58.571 12.0922L62.5 0Z" fill="#FFD913"/>
        <path d="M17.5 0L21.429 12.0922L34.1435 12.0922L23.8572 19.5656L27.7862 31.6578L17.5 24.1844L7.21376 31.6578L11.1428 19.5656L0.85651 12.0922L13.571 12.0922L17.5 0Z" fill="#FFD913"/>
    </svg>
)

const Stars5 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="215" height="35" viewBox="0 0 215 35" fill="none">
        <path d="M107.5 0L111.429 12.0922L124.143 12.0922L113.857 19.5656L117.786 31.6578L107.5 24.1844L97.2138 31.6578L101.143 19.5656L90.8565 12.0922L103.571 12.0922L107.5 0Z" fill="#FFD913"/>
        <path d="M152.5 0L156.429 12.0922L169.143 12.0922L158.857 19.5656L162.786 31.6578L152.5 24.1844L142.214 31.6578L146.143 19.5656L135.857 12.0922L148.571 12.0922L152.5 0Z" fill="#FFD913"/>
        <path d="M197.5 0L201.429 12.0922L214.143 12.0922L203.857 19.5656L207.786 31.6578L197.5 24.1844L187.214 31.6578L191.143 19.5656L180.857 12.0922L193.571 12.0922L197.5 0Z" fill="#FFD913"/>
        <path d="M62.5 0L66.429 12.0922L79.1435 12.0922L68.8572 19.5656L72.7862 31.6578L62.5 24.1844L52.2138 31.6578L56.1428 19.5656L45.8565 12.0922L58.571 12.0922L62.5 0Z" fill="#FFD913"/>
        <path d="M17.5 0L21.429 12.0922L34.1435 12.0922L23.8572 19.5656L27.7862 31.6578L17.5 24.1844L7.21376 31.6578L11.1428 19.5656L0.85651 12.0922L13.571 12.0922L17.5 0Z" fill="#FFD913"/>
    </svg>
)

export default Testimonials