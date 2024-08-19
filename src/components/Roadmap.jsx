import Container from './common/Container';
import Paragraph from './common/Paragraph';
import TextHeader from './common/TextHeader';
import LazyLoad from 'react-lazyload';

export default function Roadmap() {
    return (
        <Container>
            <div className="text-center">
                <TextHeader>DINO ROADMAP</TextHeader>
            </div>
            <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
                <div className="flex flex-col gap-[30px] md:flex-row">
                    <div className="flex flex-col justify-start">
                        <Paragraph classes={'font-[700] break-keep whitespace-nowrap'}>
                            1 The Triassic
                        </Paragraph>
                        <div>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Presale
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                DEX listing
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Liquidity burn
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Marketing Campaign
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                CGC & CMC
                            </Paragraph>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start md:mt-[100px]">
                        <Paragraph classes={'font-[700] break-keep whitespace-nowrap'}>
                            2 The Jurrasic
                        </Paragraph>
                        <div>
                            <Paragraph classes={'md:text-[2rem]'}>
                                CEX listing
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Promotion
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Campaign & reward
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Airdrop campaigns
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Buyback and burn
                            </Paragraph>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-start md:mt-[200px]">
                        <Paragraph classes={'font-[700] break-keep whitespace-nowrap'}>
                            3 The Cretaceous
                        </Paragraph>
                        <div>
                            <Paragraph classes={'md:text-[2rem]'}>
                                Staking
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                DINO NFT
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                DINO Launchpad
                            </Paragraph>
                            <Paragraph classes={'md:text-[2rem]'}>
                                DINO Game
                            </Paragraph>
                        </div>
                    </div>
                </div>
                <div className="flex w-full min-w-[200px]">
                    <LazyLoad height={200} once>
                        <img
                            src="/assets/dino_surface.png"
                            alt="egg"
                            className="w-full shrink-0 object-cover"
                        />
                    </LazyLoad>
                </div>
            </div>
        </Container>
    );
}
