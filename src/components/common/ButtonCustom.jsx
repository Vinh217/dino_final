// eslint-disable-next-line react/prop-types
export default function ButtonCustom({ children, onClick }) {
    return (
        <div className="relative" data-aos="fade-up">
            <a href="javascript:void(0)" className="btn btn-white btn-animate font-wild text-[2rem] font-[700] border-2 border-black" onClick={onClick}>
                {children}
            </a>
        </div>
    );
}
