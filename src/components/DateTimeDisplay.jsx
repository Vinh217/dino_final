// eslint-disable-next-line react/prop-types
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <div className="text-[40px]">{value}</div>
      <div className="text-text-white text-[14px] uppercase">{type}</div>
    </div>
  );
};

export default DateTimeDisplay;
