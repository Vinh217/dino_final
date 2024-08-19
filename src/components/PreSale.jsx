import Container from './common/Container';
// import Paragraph from './common/Paragraph';
import TextHeader from './common/TextHeader';
import LazyLoad from 'react-lazyload';
import CountdownTimer from './CountdownTimer';
import Paragraph from './common/Paragraph';

export default function PreSale() {
    const dateTimeAfter30_8 = new Date('2024-08-30T00:00:00').getTime();

    return (
        <Container>
            <div className="flex h-full w-full flex-col justify-center md:flex-row pb-[300px] md:pb-[30px]">
                <div className="flex w-full min-w-[200px]" data-aos="zoom-in-up">
                    <LazyLoad height={200} once>
                        <img
                            src="/assets/dino_song.png"
                            alt="egg"
                            className="w-full shrink-0 object-cover"
                        />
                    </LazyLoad>
                </div>
                <div className="flex w-full flex-col items-center gap-[30px]" data-aos="zoom-in-down">
                    <TextHeader
                        classes={'font-potta-one text-center py-[30px]'}
                    >
                        PRE-SALE
                    </TextHeader>
                    <Paragraph classes={'font-[700] text-center'}>
                        Get some $SOL and ready to join DINO Party
                    </Paragraph>
                    <CountdownTimer targetDate={dateTimeAfter30_8} />
                    <Paragraph classes={'font-[700]'}>Min:</Paragraph>
                    <Paragraph classes={'font-[700]'}>Max:</Paragraph>
                    <div className="flex w-[300px] cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#000000] bg-white px-[20px] py-[10px] transition-all hover:scale-105">
                        <a className="cursor-pointer text-[22px] font-bold text-black">
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-0' data-aos="zoom-in-up">
            <div className="flex w-full min-w-[200px]">
                <LazyLoad height={200} once>
                    <img
                        src="/assets/twoegg.png"
                        alt="egg"
                        className="w-full shrink-0 object-cover"
                    />
                </LazyLoad>
            </div>
            </div>
          
        </Container>
    );
}
