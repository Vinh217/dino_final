import { useState } from 'react';
import Paragraph from '../components/common/Paragraph';

export default function Header() {
    const [isClose, setIsClose] = useState(true);
    const renderNoti = () => {
        if (isClose) {
            return null;
        }
        return (
            <div className="flex h-[48px] items-center justify-between bg-bg-primary px-[16px]">
                <div></div>
                <div className="flex items-center gap-[8px]">
                    <div className="flex w-full max-w-[24px]">
                        <img
                            src="/assets/gift.svg"
                            alt="gift"
                            className="w-full shrink-0"
                        />
                    </div>
                    <Paragraph>
                        Register now — Get up to 100 USDT in trading fee rebate
                        (for verified users)
                    </Paragraph>
                    <img
                        src="/assets/go-next.svg"
                        alt="go"
                        className="w-full shrink-0"
                    />
                </div>
                <div
                    className="flex w-full max-w-[24px] cursor-pointer"
                    onClick={() => setIsClose(true)}
                >
                    <img
                        src="/assets/close.svg"
                        alt="close"
                        className="w-full shrink-0"
                    />
                </div>
            </div>
        );
    };
    return renderNoti();
}
