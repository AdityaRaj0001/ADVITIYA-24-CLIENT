import React from 'react'
import Heading from '../heading/Heading'
import Line1 from '../../assets/images/Line1.svg'
import Border1 from '../../assets/images/border.svg'
import RegisterImage from '../../assets/images/register-image.png'
import ScientistImage from '../../assets/images/scientist-image.png'
import TechWalkImage from '../../assets/images/techwalk-image.png'
import Image from 'next/image'
import Link from 'next/link'

const Conduction = () => {

    const Data = [
        {
            description: "The event will be organized in two categories.",
        },
        {
            description: "Category-1: 6th to 8th",
        },
        {
            description: "Category-2: 9th to 12th ",
        },
    ]

  return (
    <div className='lg:py-[8rem] py-[2.5rem] relative w-full overflow-x-hidden'>
        <img src='./conductionbg.svg'  className="-z-10 absolute top-[13%] right-0 xl:top-[30%] xl:right-0 opacity-50 h-[200px] xl:h-[500px]"/>
        <div className='w-[90%] mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <Heading title="Conduction" heading="Conduction" />
                <div className='flex gap-4 items-start'>
                    <div className='pt-2 hidden lg:block'>
                        <Image 
                            src={Line1}
                            className="h-full pointer-events-none w-full hidden lg:block"
                            alt="line1-image"
                        />
                    </div>
                    <div className=' flex flex-col lg:gap-2 mt-4 lg:mt-0 ml-auto pr-4 lg:pr-0'>
                        {Data.map(({description}, ind) => (
                            <p 
                                key={ind}
                                className='text-[#fff]  lg:text-[1.25rem] text-[0.525rem] not-italic  lg:leading-[2.125rem] leading-1' 
                            >{description}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:pt-[4rem] relative'>
                {/* Border of the container */}
                <div className='hidden lg:block'>
                    <Image
                        src={Border1}
                        className='pointer-events-none absolute -left-[1rem]'
                        alt='border-line'
                    />
                </div>

                {/* Cards */}
                <div className='lg:ml-[5rem] lg:mt-[6.5rem]'>
                    <CardWrapper
                        card1={
                            <Card1 heading='Phase - 1'>
                                <div className='flex flex-col gap-2'>
                                    <Card1 
                                        heading='Registration through school' 
                                        description='Olympiad which is totally FREE-of-cost, will be conducted at the school level and will be conducted in offline mode. Schools will be provided the question paper and they need to conduct it as per their convenience within 29th Jan - 3rd Feb 2024 interval. The pattern of the exam will be objective type consisting of four sections with a time limit of 60 mins. The top 5 participants from each school will qualify for Quiz Competition from both divisions i.e. DIV 1(6th-8th std)  and DIV 2(9th-12th std). All the participants who participate in Phase-1 will also get an opportunities to take part in ongoing Fest Events, Talks & Panel Discussions, Campus Visits and Science and Art Competitions. For detailed syllabus look into the attachment below'
                                    />
                                    <a  href="https://www.google.com/" className="underline text-[#9c78e4] text-[1.8rem] hover:cursor-pointer ">Syllabus</a>
                                    <Card1 
                                        heading='Direct registration of student' 
                                        description='Students whose schools are not taking part in the Conclave can also Register for the event. They will get opportunities to take part in ongoing Fest Events, Talks & Panel Discussions, Campus Visits and Science and Art Competitions.'
                                    />
                                </div>
                            </Card1>
                        }
                        card2={<>
                            <Card2 image={RegisterImage}/>
                        </>}
                    />

                    <CardWrapper1
                        css={``}
                        card1={
                            <div className=' flex flex-col gap-2'>
                                <Card12
                                    heading='Phase-2'   
                                    description={"This phase will be conducted at IIT Ropar. Quiz-Competition : Students who have taken the olympiad in their repsective schools and secured rank within TOP 5 in the olympiad will be taking part in the quiz. Science & Art Competition : Students can bring their Sceince Models. For Art competition Students can bring their Art Model based on theme India@2047. Art can be any painting or craft.Campus Visits : Studets will be given campus visit to all the iconic labs and building that IIT Ropar have.  -   TECHWALKIAS/IPS panel talk : Students will be able to communicate and ask their doubts regarding famous topics like Government policies or career options.Defence Panel  talk : Defence Officials of BRigadier or Admiral level will be giving a talk on how india is advancing its capabilities in defence sector."}
                                />
                                {/* <Card1
                                    heading='Junior Scientist Competition'   
                                    description={`In this competition, a maximum of three projects are allowed for display by individual schools in each category. The projects will be presented at IIT Ropar during Zeitgeist’23. Project should be working based on any scientific technology. Exciting prizes for winners and certificates of participation for all the participants. All the participants will also get an opportunity for Techwalk.`}
                                /> */}
                            </div>
                        }
                        card2={<Card2 image={ScientistImage}/>}
                    />
                </div>
            </div>
            
        </div>
    </div>
  )
}

// Title description and Image card top and bottom block
const CardWrapper = ({
    card1,
    card2,
    css,
}) => {
    return (
        <div className={` flex flex-col-reverse lg:grid lg:grid-cols-2 ${css} py-8`} >
            <div className=' '>{card1}</div>
            <div className=' justify-self-center'>{card2}</div>
        </div>
    );
}

// scientist block card wrapper
const CardWrapper1 = ({
    card1,
    card2,
    css,
}) => {
    return (
        <div className={`grid lg:grid-cols-2 ${css} space-x-reverse py-8`} dir=''>
            <div className=' justify-self-center'>{card2}</div>
            <div className=' '>{card1}</div>
        </div>
    );
}

// Title description card
const Card12 = ({
    heading = "", 
    description = "", 
    children
}) => {

    return (
        <div className={`text-[#FFF] font-superbrigade lg:text-[1.25rem] text-[0.925rem]  not-italic font-[400] lg:leading-normal leading-2`}>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold'>{heading}</h1>
                {description.length === 0 ? (
                    <div>{children}</div>
                ) : (
                    <>
                    <p className='text-[#84828afd]   lg:text-[1.25rem] text-[0.925rem] not-italic font-[700] lg:leading-[2.125rem] leading-4'>This phase will be conducted at IIT Ropar. There will be Quiz competition for the students who have qualified the olympiad from respective schools from each category.</p>
                    <p className='text-[#84828afd]   lg:text-[1.25rem] text-[0.925rem] not-italic font-[700] lg:leading-[2.125rem] leading-4'>For any registered student, they have access to the following things:</p>
                    <li>Science & Art Competition</li>
                    <li>IAS/IPS Panel Talk</li>
                    <li>Defence Forces Panel Talk</li>
                    <li>Experience Zones</li>
                    <li>Robo-Show event</li>
                    </>
                    
                )}
            </div>
        </div>
    );
}
const Card1 = ({
    heading = "", 
    description = "", 
    children
}) => {

    return (
        <div className={`text-[#FFF] font-superbrigade lg:text-[1.875rem] text-[1.225rem]  not-italic font-[400] lg:leading-normal leading-2`}>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold tracking-widest'>{heading}</h1>
                {description.length === 0 ? (
                    <div>{children}</div>
                ) : (
                    <p className='text-[#84828afd]   lg:text-[1.25rem] text-[0.925rem] not-italic font-[700]  lg:leading-[2.125rem] leading-4'>{description}</p>
                )}
            </div>
        </div>
    );
}

// Image card
const Card2 = ({image = RegisterImage}) => {

    return (
        <div>
            <div className=''>
                <Image
                    src={image}
                    className='w-[30rem] pointer-events-none object-center '
                    alt='image-logo'
                />
            </div>
        </div>
    );
}

export default Conduction