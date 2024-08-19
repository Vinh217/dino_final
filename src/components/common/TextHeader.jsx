
// eslint-disable-next-line react/prop-types
export default function TextHeader({ children, classes }) {
    return (
        <div className={`${classes ? classes: ''} uppercase text-[4rem] md:text-[10rem] font-wild not-italic font-[700]`}>
            { children }
        </div>
    );
}
