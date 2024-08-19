import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        className="countdown-link text-black"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <div className='mt-[10px]'>:</div>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <div className='mt-[10px]'>:</div>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <div className='mt-[10px]'>:</div>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
