import { useState } from 'react';
import Paragraph from './Paragraph';

// eslint-disable-next-line react/prop-types
export default function Content({ close }) {
    const [textToCopy] = useState('2cB22PnMtWPoqNKf8rDGwuarRijgtQjEbiiaio2fQzuU');
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
                <Paragraph classes={'text-white font-[700]'}>Send  <span className='font-[900] text-[1.4rem] md:text-[2.8rem] '>Min 0.1 $SOL Max 200 $SOL </span>to Presale Wallet</Paragraph>
                <div className="flex gap-[20px] items-center pb-[20px]">
                    <Paragraph classes={'text-white md:!text-[2.4rem] !text-[1.05rem] font-[900]'}>{textToCopy}</Paragraph>
                    <button
                        onClick={handleCopy}
                        className="rounded-[10px] bg-white border border-[#000000] px-[20px] py-[10px] font-wild text-[1.4rem] font-[700] not-italic md:text-[2.8rem]"
                    >
                        {copySuccess ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <div>
                <Paragraph classes={'font-[500] text-white'}>🦖 Early investors will get UP TO a 25% BONUS in $DINO tokens</Paragraph>
                <Paragraph classes={'font-[500] text-white'}>- Round 1: 0 - 1,111 SOL +25% bonus</Paragraph>
                <Paragraph classes={'font-[500] text-white'}>- Round 2: 1,112 - 3,333 SOL +15% bonus</Paragraph>
                <Paragraph classes={'font-[500] text-white'}>- Round 3: 3,334 - 5,555 SOL +10% bonus</Paragraph>
                <Paragraph classes={'font-[500] text-white'}>- Round 4: 5,556 - 7,777 SOL +5% bonus</Paragraph>
                <Paragraph classes={'font-[500] text-white'}>- Extension: 7,778 - 10,000 SOL + 0% bonus tokens</Paragraph>
                </div>
                {/* <Paragraph classes={'font-[700] text-white'}>Min: 0.1 $SOL</Paragraph>
                <Paragraph classes={'font-[700] text-white'}>Max: 200 $SOL</Paragraph> */}
            </div>
        </div>
    );
}
