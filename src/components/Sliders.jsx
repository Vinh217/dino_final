import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import LazyLoad from 'react-lazyload';

function Sliders() {
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const listSliders = [
        {
            id: 1,
            titleOne: 'BUILD',
            titleTwo: 'A DINO COMMUNITY',
            description:
                'Foster a community of dinosaur enthusiasts and meme lovers who can engage, share, and contribute to our growing library of dino-memes',
            image: '/assets/sl1.png',
        },
        {
            id: 2,
            titleOne: 'LEARN WITH',
            titleTwo: 'FUN',
            description:
                'Use meme as a platform to share fun and interestin facts about dinosaurs, blending education with entertainment.',
            image: '/assets/sl2.png',
        },
        {
            id: 3,
            titleOne: 'CREATE',
            titleTwo: 'DINO-MITE CONTENT',
            description:
                'Develop a collection of engaging and shareable memes featuring various dinosaur species in humorous scenarios.',
            image: '/assets/sl3.png',
        },
    ];

    return (
        <div className="slider-container">
            <Slider
                ref={(slider) => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                {listSliders.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="flex flex-col gap-[5px]">
                                <LazyLoad height={200} once>
                                    <img
                                        src={item.image}
                                        alt="1"
                                        className="h-[240px] rounded-[14px] border md:h-[300px]"
                                    />
                                </LazyLoad>
                                <div className="min-h-[250px] rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px]">
                                    <div className="flex flex-col items-start gap-[5px] text-[32px] font-[900] text-[#2A4C75] md:flex-row md:items-center">
                                        {item.titleOne}{' '}
                                        <span className="text-[32px] font-[900] text-bg-base">
                                            {item.titleTwo}
                                        </span>
                                    </div>
                                    <div className="text-[18px]">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="flex w-full justify-center gap-[150px] pt-[40px]">
                <LazyLoad height={200} once>
                    <img
                        src="/assets/arrow-left.webp"
                        onClick={previous}
                        alt=""
                        className="w-[67px] cursor-pointer"
                    />
                </LazyLoad>
                <LazyLoad height={200} once>
                    <img
                        src="/assets/arrow-right.webp"
                        onClick={next}
                        alt=""
                        className="w-[67px] cursor-pointer"
                    />
                </LazyLoad>
            </div>
        </div>
    );
}

export default Sliders;
