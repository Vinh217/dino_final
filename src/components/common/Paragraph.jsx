
// eslint-disable-next-line react/prop-types
export default function Paragraph({ children, classes }) {
    return (
        <div className={`${classes ? classes: ''} text-[1.4rem] md:text-[2.8rem] font-poppins not-italic font-[400]`}>
            { children }
        </div>
    );
}
