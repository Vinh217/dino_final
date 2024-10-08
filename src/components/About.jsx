import Container from './common/Container';
import Paragraph from './common/Paragraph';
import TextHeader from './common/TextHeader';

export default function About() {
    return (
        <Container>
            <div
                className="flex h-full w-full flex-col justify-center text-center"
                data-aos="flip-left"
                id="about"
            >
                <TextHeader>Meet The Playful Dinosaurs</TextHeader>
                <Paragraph>Powered by Solana</Paragraph>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row">
                <div className="flex w-full min-w-[200px]" data-aos="fade-up">
                    <img
                        src="/assets/egg.png"
                        alt="egg"
                        className="w-full shrink-0 object-cover"
                    />
                </div>
                <div
                    className="flex flex-col items-center gap-[20px] text-center"
                    data-aos="flip-left"
                >
                    <Paragraph classes={'font-[700]'}>
                        Millions years ago, colossal creatures once ruled the
                        Earth. But then, in a twist of fate, a catastrophic
                        event silenced their mighty roars forever
                    </Paragraph>
                    <Paragraph classes={'font-[700]'}>
                        As technology evolved, so did the possibilities. Web3
                        opens a gateway to new worlds where the impossible
                        becomes reality.
                    </Paragraph>
                    <Paragraph classes={'font-[700]'}>
                        And somewhere in this new realm, something ancient is
                        beginning to stir
                    </Paragraph>
                    <div className="relative" data-aos="fade-up">
                        <a href="#footer" className="btn btn-white btn-animate font-wild text-[2rem] font-[700] border-2 border-black">
                        Join Our Community
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}
