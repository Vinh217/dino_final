import Paragraph from "./Paragraph";

// eslint-disable-next-line react/prop-types
export default function Content({ close }) {
    return (
        <div className="rounded-[10px]">
            <div className="w-full flex justify-end">
                <img src="/assets/menu-close.svg" alt="close" className="cursor-pointer" onClick={close}/>
            </div>
            <div className="flex flex-col items-center pt-[40px]">
            <Paragraph classes={'font-[700]'}>Min: 0.1 $SOL</Paragraph>
            <Paragraph classes={'font-[700]'}>Max: 200 $SOL</Paragraph>
            </div>
        </div>
    );
}
