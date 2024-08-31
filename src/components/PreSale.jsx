import Container from './common/Container';
// import Paragraph from './common/Paragraph';
import TextHeader from './common/TextHeader';
import CountdownTimer from './CountdownTimer';
import Paragraph from './common/Paragraph';
import ButtonCustom from './common/ButtonCustom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Content from './common/Content';
export default function PreSale() {
    // const dateTimeAfter30_8 = new Date('2024-08-31T22:00:00').getTime();
    // const date = new Date(2024, 7, 31); 
    // date.setHours(22, 0, 0, 0);
    const dateTimeAfter30_8 = new Date('2024-08-31T22:00:00+07:00').getTime();

    return (
        <Container>
            <div className="flex h-full w-full flex-col justify-center pb-[200px] md:flex-row md:pb-[30px]" id="presale">
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
                    <Paragraph classes={'font-[700]'}>Min: 0.1 $SOL</Paragraph>
                    <Paragraph classes={'font-[700]'}>Max: 200 $SOL</Paragraph>
                    <Popup modal trigger={<ButtonCustom>Buy Now</ButtonCustom>}>
                        {close => <Content close={close} />}
                    </Popup>
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
