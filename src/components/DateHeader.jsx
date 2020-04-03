import React, { useState, useRef } from "react";
import styled from "styled-components";

const DateHeaderBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;

const DateHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const dayRef = useRef();
  const trackTime = () => {
    setCurrentTime(new Date().toLocaleString());
  };
  setInterval(() => trackTime(), 1000);

  const day = new Date().toLocaleString("ko-KR", { weekday: "long" });

  return (
    <DateHeaderBlock>
      <h1 ref={dayRef}>{currentTime}</h1>
      <div className="day">{day}</div>
    </DateHeaderBlock>
  );
};

export default DateHeader;
