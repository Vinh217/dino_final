import { useState } from 'react';
import Paragraph from './Paragraph';

// eslint-disable-next-line react/prop-types
export default function Content({ close }) {
    const [textToCopy] = useState('Test Wallet');
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 1000);
        });
    };

    return (
        <div className="rounded-[10px]">
            <div className="flex w-full justify-end">
                <img
                    src="/assets/menu-close.svg"
                    alt="close"
                    className="cursor-pointer"
                    onClick={close}
                />
            </div>
            <div className="flex flex-col items-center pt-[40px]">
                <div className="flex gap-[20px] items-center pb-[20px]">
                    <Paragraph classes={'text-white'}>{textToCopy}</Paragraph>
                    <button
                        onClick={handleCopy}
                        className="rounded-[10px] bg-white border border-[#000000] px-[20px] py-[10px] font-wild text-[1.4rem] font-[700] not-italic md:text-[2.8rem]"
                    >
                        {copySuccess ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <Paragraph classes={'font-[700] text-white'}>Min: 0.1 $SOL</Paragraph>
                <Paragraph classes={'font-[700] text-white'}>Max: 200 $SOL</Paragraph>
            </div>
        </div>
    );
}
