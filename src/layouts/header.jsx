import { useState } from 'react';
import Paragraph from '../components/common/Paragraph';
import LazyLoad from 'react-lazyload';

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
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/gift.svg"
                                alt="gift"
                                className="w-full shrink-0"
                            />
                        </LazyLoad>
                    </div>
                    <Paragraph>
                        Register now — Get up to 100 USDT in trading fee rebate
                        (for verified users)
                    </Paragraph>
                    <div className="flex w-full max-w-[24px] cursor-pointer">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/go-next.svg"
                                alt="go"
                                className="w-full shrink-0"
                            />
                        </LazyLoad>
                    </div>
                </div>
                <div
                    className="flex w-full max-w-[24px] cursor-pointer"
                    onClick={() => setIsClose(true)}
                >
                    <LazyLoad height={200} once>
                        <img
                            src="/assets/close.svg"
                            alt="close"
                            className="w-full shrink-0"
                        />
                    </LazyLoad>
                </div>
            </div>
        );
    };
    return renderNoti();
}
