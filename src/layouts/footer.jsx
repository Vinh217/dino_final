import Paragraph from '../components/common/Paragraph';
import { PiTelegramLogoDuotone } from 'react-icons/pi';
import { BsTwitterX } from 'react-icons/bs';
export default function Footer() {
    return (
        <div
            className="flex aspect-video w-full max-w-full flex-col items-center justify-center bg-footer bg-100% bg-center bg-no-repeat pr-[16px] md:h-[300px]"
            id="footer"
        >
            <div className="flex gap-[50px]" 
            data-aos="zoom-out-left"
            >
                <PiTelegramLogoDuotone className="h-[70px] w-[70px] cursor-pointer text-white" />
                <BsTwitterX className="h-[70px] w-[70px] cursor-pointer text-white" />
            </div>
            <Paragraph classes={'font-[700] mt-[20px]'}>
                Unleash the Dino-Mite! Stay Connected and Join the Adventure!
            </Paragraph>
        </div>
    );
}
