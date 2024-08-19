import LazyLoad from 'react-lazyload';
import Paragraph from './Paragraph';

// eslint-disable-next-line react/prop-types
export default function Card({ icon, title, followers, isShowIcon }) {
    return (
        <div className="flex h-[104px] min-w-[300px] items-end rounded-[8px] bg-white p-[24px] justify-between">
            <div className='flex items-center gap-[24px] h-full'>
                <div className="flex w-full max-w-[56px]">
                    <LazyLoad height={200} once>
                        <img
                            src={`/assets/${icon}`}
                            alt={icon}
                            className="w-full shrink-0"
                        />
                    </LazyLoad>
                </div>
                <div>
                    <div className="text-[20px] font-[600]">{title}</div>
                    <Paragraph classes={'mt-[4px]'}>{followers}</Paragraph>
                </div>
            </div>

            {
                isShowIcon && (
                    <div className="flex w-full max-w-[24px] cursor-pointer">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/arrow-up.svg"
                                alt={icon}
                                className="w-full shrink-0"
                            />
                        </LazyLoad>
                    </div>
                )
            }
        </div>
    );
}
