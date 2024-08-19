import Card from "./common/Card";
import Paragraph from "./common/Paragraph";
import TextHeader from "./common/TextHeader";

export default function Social() {
    const socials = [
        {
            icon: 'fb.png',
            title: 'Facebook',
            followers: '321,498 Follower',
        },
        {
            icon: 'twitter.png',
            title: 'Twitter',
            followers: '321,498 Follower',
        },
        {
            icon: 'instagram.png',
            title: 'Instagram',
            followers: '321,498 Follower',
        },
        {
            icon: 'tele.png',
            title: 'Telegram',
            followers: '321,498 Follower',
        },
        {
            icon: 'youtube.png',
            title: 'YouTube',
            followers: '321,498 Follower',
        },
        {
            icon: 'tiktok.png',
            title: 'TikTok',
            followers: '321,498 Follower',
        },
    ];

    const supports = [
        {
            icon: 'fb.png',
            title: '24/7 Chat Support',
            followers:
                'Get 24/7 chat support with our friendly customer service agents at your service.',
        },
        {
            icon: 'fb.png',
            title: 'FAQs',
            followers:
                'View FAQs for detailed instructions on specific features.',
        },
        {
            icon: 'tele.png',
            title: 'Telegram',
            followers:
                'Stay up to date with the latest stories and commentary.',
        },
    ];
    return (
        <div className="w-full bg-bg-primary px-[16px] py-[50px] md:px-[130px]">
            <div>
                <div
                    className={`font-poppins text-[4rem] font-[700] not-italic`}
                >
                    Join the{' '}
                    <span className="font-poppins text-[4rem] font-[700] not-italic text-[#51DA3F]">
                        Dino
                    </span>{' '}
                    Community
                </div>
                <Paragraph classes={'mt-[8px] max-w-[650px]'}>
                    Join the dino-mite revolution by following us on our social
                    media platforms, sharing our memes, and contributing your
                    own creations. Whether you’re a paleontology buff or just
                    someone who loves a good laugh, Project Dino welcomes
                    everyone to the prehistoric party.
                </Paragraph>
            </div>
            <div className="grid w-full grid-cols-1 gap-[30px] pb-[60px] pt-[30px] sm:grid-cols-2 lg:grid-cols-3">
                {socials.map((s, index) => (
                    <Card
                        key={index}
                        icon={s.icon}
                        title={s.title}
                        followers={s.followers}
                        isShowIcon={true}
                    />
                ))}
            </div>
            <TextHeader>Need help ?</TextHeader>
            <div id="faq" className="grid w-full grid-cols-1 gap-[30px] py-[30px] sm:grid-cols-2 lg:grid-cols-3">
                {supports.map((s, index) => (
                    <Card
                        key={index}
                        icon={s.icon}
                        title={s.title}
                        followers={s.followers}
                    />
                ))}
            </div>
        </div>
    );
}
