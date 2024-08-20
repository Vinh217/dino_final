import Container from './common/Container';
import Paragraph from './common/Paragraph';
import TextHeader from './common/TextHeader';

export default function Dinonomic() {
    return (
        <Container>
            <div className='bg-dua bg-100% md:bg-auto bg-center bg-no-repeat aspect-video w-full'>
                <div
                    className="text-center"
                    data-aos="flip-right"
                    id="dinonomic"
                >
                    <TextHeader>DINONOMICS</TextHeader>
                </div>
                <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
                    <div
                        className="flex w-[50%] flex-col items-center justify-center gap-[30px]"
                        data-aos="fade-up"
                    >
                        <TextHeader
                            classes={
                                ' !text-[3.6rem] md:!text-[4.8rem] break-keep whitespace-nowrap'
                            }
                        >
                            Total Supply:
                        </TextHeader>
                        <Paragraph
                            classes={'font-[700] break-keep whitespace-nowrap'}
                        >
                            999,999,999,999 DINO
                        </Paragraph>
                        <div className="item-center flex flex-col justify-center rounded-bl-[50px] rounded-tr-[50px] border border-white bg-[red] px-[50px] py-[16px]">
                            <Paragraph
                                classes={
                                    'font-[700] break-keep whitespace-nowrap'
                                }
                            >
                                30% Presale + Bonus
                            </Paragraph>
                            <Paragraph
                                classes={
                                    'font-[700] break-keep whitespace-nowrap'
                                }
                            >
                                25% Treasury + Marketing
                            </Paragraph>
                            <Paragraph
                                classes={
                                    'font-[700] break-keep whitespace-nowrap'
                                }
                            >
                                30% Liquid + CEX + MM
                            </Paragraph>
                            <Paragraph
                                classes={
                                    'font-[700] break-keep whitespace-nowrap'
                                }
                            >
                                5% Early Contributor
                            </Paragraph>
                            <Paragraph
                                classes={
                                    'font-[700] break-keep whitespace-nowrap'
                                }
                            >
                                10% DINO Fund
                            </Paragraph>
                        </div>
                    </div>
                    <div
                        className="flex w-full min-w-[200px]"
                        data-aos="flip-left"
                    >
                        <img
                            src="/assets/dino_rest.png"
                            alt="egg"
                            className="w-full shrink-0 object-cover"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}
