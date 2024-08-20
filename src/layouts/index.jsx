import Header from './header';
import Footer from './footer';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menus = [
        {
            id: 1,
            title: 'Home',
            link: '',
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
    ];

    return (
        <>
            {/* desktop */}
            <div className="fixed left-0 top-[43px] z-10 flex h-[50px] w-full flex-col items-center">
                <div className="ml-auto mr-auto w-full max-w-[1674px] px-[14px]">
                    <div className="headerrr border-x border-t border-black px-[16px] py-[10px] md:py-[10px]">
                        <div className="flex items-center md:gap-[50px]">
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
                            <div></div>
                            <div className="hidden cursor-pointer flex-row gap-[20px] font-poppins text-[30px] font-bold uppercase text-black md:flex">
                                {menus.map((m) => (
                                    <a
                                        href={m.link}
                                        className="cursor-pointer"
                                        key={m.id}
                                    >
                                        {m.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#000000] bg-text-base px-[20px] py-[5px] transition-all hover:scale-105 md:flex">
                            <a
                                className="cursor-pointer text-nowrap break-keep text-[24px] font-bold text-white"
                                href="#presale"
                            >
                                PRE-SALE
                            </a>
                        </div>

                        {/* humberger  */}
                        <div
                            className="block cursor-pointer md:hidden"
                            onClick={toggleMenu}
                        >
                            <img
                                src="/assets/ham.svg"
                                alt=""
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile  */}
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
                    <div className="flex cursor-pointer flex-col gap-[20px] text-[30px] font-bold uppercase text-text-base md:hidden">
                        {menus.map((m) => (
                            <a
                                href={m.link}
                                className="cursor-pointer"
                                key={m.id}
                                onClick={() => setIsOpen(false)}
                            >
                                {m.title}
                            </a>
                        ))}
                    </div>

                    <div className="flex cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#000000] bg-text-base px-[20px] py-[5px] transition-all hover:scale-105 md:hidden">
                        <a
                            className="cursor-pointer text-[24px] font-bold text-white"
                            href="#presale"
                            onClick={() => setIsOpen(false)}
                        >
                            PRE-SALE
                        </a>
                    </div>
                </div>
            </div>

            <Header />
            {children}
            <Footer />
        </>
    );
}
