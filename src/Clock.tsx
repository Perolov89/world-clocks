import { useState, useLayoutEffect } from 'react';

type SetTimeZone = {
  tmz: string;
};

const Clock = (props: SetTimeZone) => {
  const event = new Date();
  const getTimeZone = event
    .toLocaleString('en-GB', { timeZone: props.tmz })
    .slice(12);
  const [dateState, newDateState] = useState(getTimeZone);
  useLayoutEffect(() => {
    setInterval(() => {
      newDateState((dateState) => dateState + getTimeZone);
    }, 1000);
  }, []);

  return (
    <p data-testid="clockComponent">
      {props.tmz} : {getTimeZone}
    </p>
  );
};

export default Clock;

// clear history to make it work when refresh.  clearInterval
