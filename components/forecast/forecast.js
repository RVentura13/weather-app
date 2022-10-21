import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="text-2xl font-bold">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="bg-[#f5f5f5] rounded-2xl h-10 m-1 flex items-center cursor-pointer text-sm py-1 px-5">
                  <img
                    className="w-10"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className="text-[#212121] flex-1 font-semibold ml-4 cursor-pointer">
                    {forecastDays[idx]}
                  </label>
                  <label className="flex-1 mr-4 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-[#757575]">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className=" grid gap-y-0 gap-x-4 flex-1 grid-cols-2 py-1 px-4">
                <div className="flex items-center h-8 justify-between">
                  <label className="text-[#212121]">Pressure:</label>
                  <label className="text-[#757575]">
                    {item.main.pressure}hPa
                  </label>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <label className="text-[#212121]">Humidity:</label>
                  <label className="text-[#757575]">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <label className="text-[#212121]">Clouds:</label>
                  <label className="text-[#757575]">{item.clouds.all}%</label>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <label className="text-[#212121]">Wind Speed:</label>
                  <label className="text-[#757575]">{item.wind.speed}m/s</label>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <label className="text-[#212121]">Sea level:</label>
                  <label className="text-[#757575]">
                    {item.main.sea_level}m
                  </label>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <label className="text-[#212121]">Feels like:</label>
                  <label className="text-[#757575]">
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
