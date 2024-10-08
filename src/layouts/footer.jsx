import Paragraph from '../components/common/Paragraph';
import { PiTelegramLogoDuotone } from 'react-icons/pi';
import { BsTwitterX } from 'react-icons/bs';
export default function Footer() {
    return (
        <>
            <div className="w-full bg-bg-primary">
            <img
                src="/assets/line.svg"
                alt=""
                className="h-full w-full"
            />
        </div>
            <div
            className="flex aspect-video w-full max-w-full flex-col items-center justify-center bg-footer bg-100% bg-center bg-no-repeat pr-[16px] md:h-[300px]"
            id="footer"
        >
            <div className="flex gap-[50px]" data-aos="fade-in">
                <a href="https://t.me/dino_meme" target="_blank">
                    <PiTelegramLogoDuotone className="h-[70px] w-[70px] cursor-pointer text-white" />
                </a>
                <a href="https://t.me/Dino_memecoin" target="_blank">
                    <PiTelegramLogoDuotone className="h-[70px] w-[70px] cursor-pointer text-white" />
                </a>
                <a href="https://x.com/dino_memecoin" target="_blank">
                    <BsTwitterX className="h-[70px] w-[70px] cursor-pointer text-white" />
                </a>
            </div>
            <Paragraph classes={'font-[700] mt-[20px] text-center'}>
                Unleash the Dino-Mite! Stay Connected and Join the Adventure!
            </Paragraph>
            <Paragraph classes={'font-[700] mt-[20px] text-center'}>
                Contact: <a href="mailto:hello@dino.win" className='underline font-[700] text-[1.4rem] md:text-[2.8rem] font-poppins not-italic'>hello@dino.win</a>
            </Paragraph>
        </div>
        </>
        
    );
}
