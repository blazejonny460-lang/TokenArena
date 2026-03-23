import React, { useEffect, useState } from 'react';

const MiniClock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
      };
      setTime(now.toLocaleTimeString([], options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div style={{ color: 'neon green', backgroundColor: 'black', fontSize: '24px' }}>{time}</div>;
};

export default MiniClock;