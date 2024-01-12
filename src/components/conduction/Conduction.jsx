import React from 'react'
import Heading from '../heading/Heading'
import Line1 from '../../assets/images/Line1.svg'
import Border1 from '../../assets/images/border.svg'
import RegisterImage from '../../assets/images/register-image.svg'
import ScientistImage from '../../assets/images/scientist-image.svg'
import TechWalkImage from '../../assets/images/techwalk-image.svg'
import Image from 'next/image'

const Conduction = () => {

    const Data = [
        {
            description: "The event will be organized in two categories.",
        },
        {
            description: "Category-1: 8th to 10th",
        },
        {
            description: "classNameCategory-2: 11th and 12th className",
        },
    ]

  return (
    <div className='lg:py-[8rem] py-[2.5rem] relative w-full overflow-x-hidden'>
        <div className='w-[90%] mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <Heading title="Conduction" heading="Conduction" />
                <div className='flex gap-4 items-start'>
                    <div className='pt-2 hidden lg:block'>
                        <Image 
                            src={Line1}
                            className="h-full w-full hidden lg:block"
                            alt="line1-image"
                        />
                    </div>
                    <div className=' flex flex-col lg:gap-2 mt-4 lg:mt-0 ml-auto pr-4 lg:pr-0'>
                        {Data.map(({description}, ind) => (
                            <p 
                                key={ind}
                                className='text-[#fff] font-archivo lg:text-[1.25rem] text-[0.725rem] not-italic font-[400] lg:leading-[2.125rem] leading-1' 
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
                        className=' absolute -left-[1rem]'
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
                                        description='conducted on the school level and it can be either online or offline as per the preference of the school. The pattern of the exam will be objective type consisting of three sections with a time limit of 90 mins For detailed syllabus look into the attachment. The top 5% of participants from each school will qualify for Phase 2. All the participants who participate in stage-1 will also get an opportunity for Techwalk.'
                                    />
                                    <Card1 
                                        heading='Direct registration of participants' 
                                        description='It will be conducted in online mode on 16th march from 6.00 pm to 7.30 pm. The pattern of will be objective type consisting of three sections with a time limit of 90 mins For detailed syllabus look into the attachment. Top 10% of participants will qualify for Phase-2 and they will be eligible for Techwalk'
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
                                <Card1
                                    heading='Phase-2'   
                                    description={"This phase will be conducted in IIT Ropar during Zeitgeist’23. The pattern of the exam will be objective type consisting of three sections with a time limit of 90 mins syllabus will be the same as Phase-1. Phase 2 will be conducted during Zeitgeist’23 on 23rd March The winners will be awarded."}
                                />
                                <Card1
                                    heading='Junior Scientist Competition'   
                                    description={`In this competition, a maximum of three projects are allowed for display by individual schools in each category. The projects will be presented at IIT Ropar during Zeitgeist’23. Project should be working based on any scientific technology. Exciting prizes for winners and certificates of participation for all the participants. All the participants will also get an opportunity for Techwalk.`}
                                />
                            </div>
                        }
                        card2={<Card2 image={ScientistImage}/>}
                    />

                    <CardWrapper
                        card1={
                            <Card1
                                heading='Techwalk'
                                description={`During Zeitgeist 2023, all of our institute's participating labs will be open to school students. Various departments will demonstrate cutting-edge technologies in their respective areas. Aside from the labs, there will be an exhibition of projects created by students and faculty. There will be exhibitors from across the globe displaying emerging technologies. For the visitors, this will be a great opportunity to learn, experience, and interact with experts from distinct scientific fields and witness the recent advancements in the field of science. Students will experience the culture of IIT Ropar, student life, and the responsibilities of students here. They gain a lot of valuable information about cracking the JEE exam.`}
                            />
                        }
                        card2={<Card2 image={TechWalkImage} />}
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
const Card1 = ({
    heading = "", 
    description = "", 
    children
}) => {

    return (
        <div className={`text-[#FFF] font-superbrigade lg:text-[1.875rem] text-[1.225rem]  not-italic font-[400] lg:leading-normal leading-2`}>
            <div className='flex flex-col gap-2'>
                <h1>{heading}</h1>
                {description.length === 0 ? (
                    <div>{children}</div>
                ) : (
                    <p className='text-[#FFF] font-archivo lg:text-[1.25rem] text-[0.925rem] not-italic font-[400] lg:leading-[2.125rem] leading-4'>{description}</p>
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
                    className='w-[30rem] object-center '
                    alt='image-logo'
                />
            </div>
        </div>
    );
}

export default Conduction