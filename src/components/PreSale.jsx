import Container from './common/Container';
// import Paragraph from './common/Paragraph';
import TextHeader from './common/TextHeader';
import CountdownTimer from './CountdownTimer';
import Paragraph from './common/Paragraph';
import ButtonCustom from './common/ButtonCustom';

export default function PreSale() {
    const dateTimeAfter30_8 = new Date('2024-08-30T00:00:00').getTime();

    return (
        <Container>
            <div className="flex h-full w-full flex-col justify-center pb-[200px] md:flex-row md:pb-[30px]">
                <div
                    className="flex w-full min-w-[200px]"
                    data-aos="flip-right"
                >
                    <img
                        src="/assets/dino_song.png"
                        alt="egg"
                        className="w-full shrink-0 object-cover"
                    />
                </div>
                <div
                    className="flex w-full flex-col items-center gap-[30px]"
                    data-aos="flip-left"
                >
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
                    <ButtonCustom>Buy Now</ButtonCustom>
                </div>
            </div>
            <div className="absolute bottom-0 right-0" data-aos="fade-down-right">
                <div className="flex w-full min-w-[200px]">
                    <img
                        src="/assets/twoegg.png"
                        alt="egg"
                        className="w-full shrink-0 object-cover"
                    />
                </div>
            </div>
        </Container>
    );
}
