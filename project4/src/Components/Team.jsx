import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const settings = {
        dots:true,
        arrows: true, // Enable arrows
        speed: 500, // Slide transition speed
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        infinite: true, // Infinite scrolling
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Autoplay speed in ms
        responsive: [
            {
                breakpoint: 1024, // 1024px is the typical breakpoint for tablets
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                },
            },
            {
                breakpoint: 600, // 600px for small screens (mobile)
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                },
            },
        ],
    };

    const data = [
        {
            name: 'Sanjay Tandon',
            img: './Images/12.JPEG',
            review: "Speedy & efficient means thru which my mediclaim was reimbursed to me. There is a huge improvement in services rendered by your organisation over the years. Thank you once again.",
        },
        {
            name: 'Dhamayanthi',
            img: './Images/11.JPEG',
            review: "I received help from Star during my surgery and recovery. And my faith in the company has increased a lot. Thanks a lot.",
        },
        {
            name: 'Sushanth',
            img: './Images/13.JPEG',
            review: "Didn't really know that filing and getting my claim processed could be literally this easy. I took care of myself while the Star Health team took care of the cashless bill settlement at the hospital.",
        }
    ];

    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-3 mt-10 mb-20'>
                <h1 className='text-xl md:text-4xl font-serif'>Hear From Our Happy Customers</h1>
                <p className='text-lg'>‘Happily Insured!’ with Star Health</p>
            </div>
            <div className='w-3/4 m-auto'>
                <div className='mt-20'>
                    {/* Pass settings here */}
                    <Slider {...settings}>
                        {data.map((d, index) => (
                            <div key={index} className='bg-white shadow-2xl h-[450px] text-black rounded-xl'>
                                <div className='h-56 rounded-t-xl bg-blue-700 flex justify-center items-center'>
                                    <img src={d.img} className='h-44 w-44 rounded-full' alt={d.name} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p>{d.review}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex flex-col items-center justify-center mt-20 gap-5 '>
                    <h1 className='text-xl md:text-3xl font-semibold'>Star Health and Allied Insurance Co Ltd
                    </h1>
                    <p className='flex items-center'>This advertisement is designed for combination of benefits of two or more individual and separate products named 1. Star Health Assure Insurance Policy 2. Young Star Insurance Policy 3. Star Comprehensive Insurance Policy .These products are also available for sale individually without the combination offered/suggested. This benefit illustration is the arithmetic combination and chronological listing of combined benefits of individual products. The customer is advised to refer to the detailed sales brochure of respective individual products mentioned herein before concluding the sale.Star Health and Allied Insurance Co. Ltd. Registered Office: No: 1, New Tank Street, Valluvar Kottam High Road, Nungambakkam, Chennai – 600 034, Corporate Office: No 148, Acropolis, Dr. Radha Krishnan Salai, Mylapore, Chennai 600004. CIN No: L66010TN2005PLC056649. IRDAI Registration No: 129. UAN: SHAI/2024-25/ONLINE-LP/SHA- SHAHLIP23131V022223/YSI-SHAHLIP22036V042122/COMP-SHAHLIP22028V072122/ENGLISH 001.</p>
                    <p>Insurance is the subject matter of solicitation. For more details on risk factors, terms and conditions, please read the sales brochure carefully before concluding a sale. IRDAI clarifies to public that IRDAI or its officials do not involve in activities like sale of any kind of insurance or financial products nor invest premiums. IRDAI does not announce any bonus. Public receiving such phone calls are requested to lodge a police complaint along with details of phone call number.<br/> Email: info@starhealth.in | Website: www.starhealth.in | Toll Free Number -1800-425-2255 / 1800-102-4477.</p>
                    <p className='text-lg text-blue-700'>Privacy Policy</p>
                    <p className='mb-3'>Copyright ©2024. Star Insurance. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
