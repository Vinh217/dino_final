import About from '../../components/About';
import Dinonomic from '../../components/Dinonomic';
import LineSpace from '../../components/LineSpace';
import Presale from '../../components/PreSale';
import Roadmap from '../../components/Roadmap';
import Paragraph from '../../components/common/Paragraph';
import TextHeader from '../../components/common/TextHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            // once: true,
            easing: 'ease-in-out',
            mirror: false,
            delay: 0,
            offset: 0,
        });
    }, []);

    return (
        <div>
            <div className="flex aspect-video w-full max-w-full bg-banner bg-100% bg-center bg-no-repeat pr-[16px] md:h-full">
                <div className="flex items-end">
                    <div className="flex w-full min-w-[200px] max-w-[700px]">
                        <img
                            src="/assets/dino_ip.png"
                            alt="gift"
                            className="w-full shrink-0 object-cover"
                        />
                    </div>
                    <div
                        className="flex h-full flex-col justify-center text-center"
                        data-aos="fade-up"
                    >
                        <TextHeader classes={'uppercase !font-urban'}>
                            Welcome to Dino
                        </TextHeader>
                        <Paragraph>
                            The age of dinosaurs is dawning once more
                        </Paragraph>
                    </div>
                </div>
            </div>
            <LineSpace />
            <About />
            <LineSpace />
            <Roadmap />
            <LineSpace />
            <Presale />
            <LineSpace />
            <Dinonomic />
        </div>
    );
}
