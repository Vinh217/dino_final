import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menus = [
        {
            id: 1,
            title: 'Home',
            link: '#',
        },
        {
            id: 2,
            title: 'About',
            link: '#about',
        },
        {
            id: 3,
            title: 'Roadmap',
            link: '#roadmap',
        },
        {
            id: 4,
            title: 'Dinonomic',
            link: '#dinonomic',
        },
        {
            id: 5,
            title: 'FAQ',
            link: 'https://dino-5.gitbook.io/dino_memecoin',
            target: '_blank',
        },
    ];
    return (
        <>
            {/* desktop */}
            <div className="fixed left-0 z-10 hidden h-[50px] w-full flex-col items-center md:top-[43px] md:flex">
                <div className="ml-auto mr-auto w-full max-w-[1674px] px-[14px]">
                    <div className="headerrr border-x border-t border-black px-[16px] py-[10px] md:py-[10px]">
                        <div className="flex items-center md:gap-[50px]">
                            <div
                                className="flex w-full max-w-[50px] cursor-pointer md:max-w-[70px]"
                            >
                                <img
                                    src="/assets/dino_logo.png"
                                    alt="gift"
                                    className="w-full shrink-0 rounded-full"
                                />
                            </div>
                            <div></div>
                            <div className="hidden cursor-pointer flex-row gap-[20px] font-poppins text-[30px] font-bold uppercase text-black md:flex">
                                {menus.map((m) => (
                                    <a
                                        href={m.link}
                                        className="cursor-pointer font-wild text-[3.6rem]"
                                        key={m.id}
                                        target={m?.target}
                                    >
                                        {m.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-up">
                            <a href="#presale" className="btn btn-white btn-animate font-wild text-[2rem] font-[700] border-2 border-black">
                                PRE-SALE
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile  */}
            <div className="flex w-full items-center justify-between bg-[#2DAB2D] px-[16px] py-[5px] md:hidden">
                <div
                    className="flex w-full max-w-[50px] cursor-pointer md:max-w-[70px]"
                    onClick={() => window.location.reload()}
                >
                    <img
                        src="/assets/dino_logo.png"
                        alt="gift"
                        className="w-full shrink-0 rounded-full"
                    />
                </div>
                {/* humberger  */}
                <div
                    className="block cursor-pointer md:hidden"
                    onClick={toggleMenu}
                >
                    <img
                        src="/assets/ham.svg"
                        alt=""
                        className="w-[40px] cursor-pointer"
                    />
                </div>
            </div>

            <div
                className={`menu ${isOpen ? 'open' : ''} z-20 flex bg-white py-[20px] pl-[16px] md:hidden`}
            >
                <div className="flex w-full flex-col items-start gap-[20px] px-[10px]">
                    <div className="flex w-full justify-between">
                        <div className="flex w-full max-w-[60px]">
                            <img
                                src="/assets/dino_logo.png"
                                alt="gift"
                                className="w-full shrink-0 rounded-full"
                            />
                        </div>
                        <div>
                            <img
                                src="/assets/menu-close.svg"
                                className="cursor-pointer"
                                alt=""
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    </div>
                    <div className="flex cursor-pointer flex-col gap-[20px] text-[30px] font-bold uppercase text-black md:hidden">
                        {menus.map((m) => (
                            <a
                                href={m.link}
                                className="cursor-pointer font-wild text-[3.6rem]"
                                key={m.id}
                                target={m?.target}
                                onClick={() => setIsOpen(false)}
                            >
                                {m.title}
                            </a>
                        ))}
                    </div>
                    <div className="relative" data-aos="fade-up">
                        <a href="#presale" className="btn btn-white btn-animate font-wild text-[2rem] font-[700] border-2 border-black" onClick={() => setIsOpen(false)}>
                            PRE-SALE
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
