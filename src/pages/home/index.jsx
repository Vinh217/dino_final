import LazyLoad from 'react-lazyload';
import About from '../../components/About';
import Dinonomic from '../../components/Dinonomic';
import Presale from '../../components/PreSale';
import Roadmap from '../../components/Roadmap';
import Paragraph from '../../components/common/Paragraph';
import TextHeader from '../../components/common/TextHeader';
export default function Home() {
    return (
        <div>
            <div className="flex aspect-video w-full max-w-full bg-banner bg-100% bg-center bg-no-repeat pr-[16px] md:h-full">
                <div className="flex items-end">
                    <div className="flex w-full min-w-[200px] max-w-[700px]">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/dino_ip.png"
                                alt="gift"
                                className="w-full shrink-0 object-cover"
                            />
                        </LazyLoad>
                    </div>
                    <div className="flex h-full flex-col justify-center text-center">
                        <TextHeader classes={'uppercase font-urban'}>
                            Welcome to Dino
                        </TextHeader>
                        <Paragraph>
                            The age of dinosaurs is dawning once more
                        </Paragraph>
                    </div>
                </div>
            </div>
            <About />
            <Roadmap />
            <Presale />
            <Dinonomic />
        </div>
    );
}
