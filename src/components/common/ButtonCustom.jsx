// eslint-disable-next-line react/prop-types
export default function ButtonCustom({ children, onClick }) {
    return (
        <div className="relative" data-aos="fade-up">
            <a href="#" className="btn btn-white btn-animate font-roboto text-[1.8rem] font-[700] border-2 border-black" onClick={onClick}>
                {children}
            </a>
        </div>
    );
}
