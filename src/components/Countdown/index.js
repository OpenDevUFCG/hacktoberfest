import { useEffect, useState } from "react";
import { Wrapper, Text } from "./styles";

export const Countdown = () => {
  const [intervalInSeconds, setIntervalInSeconds] = useState(0);

  const eventDate = new Date("2022-10-22T08:00:00");
  const currentDate = new Date();
  const intervalBetween = eventDate - currentDate;

  useEffect(() => {
    if (intervalBetween <= 0) return;

    const interval = setInterval(() => {
      const milliseconds = Math.max(intervalBetween, 0); // ensure time countdown didn`t become negative

      const seconds = Math.floor(milliseconds / 1000);

      setIntervalInSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [intervalBetween]);

  const calculateTimes = () => {
    const days = Math.floor(intervalInSeconds / (3600 * 24));
    const hours = Math.floor((intervalInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor(((intervalInSeconds % (3600 * 24)) % 3600) / 60);
    const seconds = Math.floor(((intervalInSeconds % (3600 * 24)) % 3600) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const fillWithZeros = (value) => {
    return value < 10 ? "0" + value : value;
  };

  const renderTimer = () => {
    const { days, hours, minutes, seconds } = calculateTimes();

    const daysWithZeros = fillWithZeros(days);
    const hoursWithZeros = fillWithZeros(hours);
    const minutesWithZeros = fillWithZeros(minutes);
    const secondsWithZeros = fillWithZeros(seconds);

    return `${daysWithZeros}:${hoursWithZeros}:${minutesWithZeros}:${secondsWithZeros}`;
  };

  return (
    <Wrapper>
      {intervalBetween > 0 ? (
        <Text>inicia em: {renderTimer()}</Text>
      ) : (
        <Text>o evento comecou!</Text>
      )}
    </Wrapper>
  );
};
