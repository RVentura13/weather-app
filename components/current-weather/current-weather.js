import React from "react";

const CurrentWeather = ({data}) => {
  return (
    <div className="w-[300px] rounded-lg shadow-lg bg-[#333]/80 text-[#fff] mt-5 mx-auto px-5 pb-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg leading-none m-0 tracking-widest">
            {data.city}
          </p>
          <p className="font-normal text-sm leading-none m-0">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="w-[100px]"></img>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-7xl w-auto tracking-[-5px] my-3">{Math.round(data.main.temp)}°C</p>
        <div className="w-full pl-5">
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Details</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Feels like</span>
            <span className="text-right font-semibold text-xs">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Wind</span>
            <span className="text-right font-semibold text-xs">{data.wind.speed}m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Humidity</span>
            <span className="text-right font-semibold text-xs">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Pressure</span>
            <span className="text-right font-semibold text-xs">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
