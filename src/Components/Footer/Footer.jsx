import React, { useEffect, useState } from "react";

function Footer() {
  const [date, setDate] = useState(new Date());

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };



  let time = date.toLocaleTimeString(options);

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  //  console.log(time.slice(0,2));
  // console.log(time.slice(9,11));

  return (
    <footer className="bg-indigo-900 w-full h-[120px] flex items-center justify-center">
      <div
        key={1}
        className="h-full w-full flex flex-col items-center justify-center text-white "
      >
        <h1 className="text-[20px]">{time}</h1>

        <p>{extra}</p>
      </div>
    </footer>
  );
}

export default Footer;
