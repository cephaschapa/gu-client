import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  ClockIcon,
  CloudIcon,
  CollectionIcon,
  LocationMarkerIcon,
  MicrophoneIcon,
  SaveIcon,
  SearchIcon,
  SunIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

import moment from 'moment';
const WeatherCard = ({ day, data, location, current }) => {
  const router = useRouter();
  const [curr, setCurr] = useState();
  useEffect(() => {
    const date = new Date();
    const dayofweek = date.getDay();
    setCurr(dayofweek);
    // setDay(dayofweek)
  }, []);

  return (
    <div className="flex justify-between px-3 items-center h-32 w-full bg-gray-100 rounded-2xl">
      {
        //data.current.weather[0].icon
        current == curr ? (
          <>
            <div className="flex  justify-center items-center">
              {data ? (
                <Image
                  src={`/icons/${data?.current.weather[0].icon}.png`}
                  height={80}
                  width={80}
                  className=""
                />
              ) : (
                <CloudIcon className="h-20 w-20 text-gray-700 animate-pulse" />
              )}
              <div className="text-sm text-gray-500 font-bold">
                <p>{day.toUpperCase()}</p>
                <span className="text-xs font-normal">
                  {data?.current.weather[0].description}
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-3 items-end">
              <div className="flex items-center space-x-3 text-4xl text-gray-600">
                <span className="font-bold text-gray-600">
                  {Math.ceil(data?.current.temp - 273.15)}
                </span>
                <sup>o</sup>C
                <ArrowRightIcon
                  onClick={() => {
                    router.push({
                      pathname: 'weather/detailed',
                      query: {
                        lat: location.lat,
                        lon: location.lon,
                      },
                    });
                  }}
                  className="h-8 w-8 bg-gray-600 text-white rounded-full p-1"
                />
              </div>
              <div className="flex flex-col justify-end items-end space-y-1">
                <div className="flex space-x-2">
                  <LocationMarkerIcon className="h-6 w-6" />
                  <span className="font-bold pr-2">{location.city},</span>{' '}
                  {location.country}
                </div>
                <div className="flex space-x-2 text-xs  items-center text-gray-400">
                  <ClockIcon className="h-3 w-3" />
                  <span className="font-bold pr-2">Updated -</span>
                  {moment.unix(data?.current.dt).fromNow()}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center border">
              {data ? (
                <Image
                  src={`/icons/${data?.daily[current].weather[0].icon}.png`}
                  height={80}
                  width={80}
                />
              ) : (
                <CloudIcon className="h-20 w-20 text-gray-700" />
              )}
              <div className="text-sm text-gray-500 font-bold">
                <p className="text">{day}</p>
                {data ? (
                  <span className="text-xs font-normal">
                    {(data?.daily[
                      current
                    ].weather[0].description).toUpperCase()}
                  </span>
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-3 items-end">
              <div className="text-2xl text-gray-600">
                <span className="font-bold text-blue-600">
                  {Math.ceil(data?.daily[current].temp.min - 273.15)}
                </span>
                <sup>o</sup>C{' '}
                <span className="font-bold text-yellow-600">
                  {Math.ceil(data?.daily[current].temp.max - 273.15)}
                </span>
                <sup>o</sup>C{' '}
              </div>
              <div className="flex flex-col justify-end items-end space-y-1">
                <div className="flex space-x-2">
                  <LocationMarkerIcon className="h-6 w-6" />
                  <span className="font-bold pr-2">{location.city},</span>{' '}
                  {location.country}
                </div>
                <div className="flex space-x-2 text-xs  items-center text-gray-400">
                  <ClockIcon className="h-3 w-3" />
                  <span className="font-bold pr-2">Updated -</span>
                  {moment.unix(data?.current.dt).fromNow()}
                </div>
              </div>
            </div>
            {/*  */}
          </>
        )
      }
    </div>
  );
};
export default WeatherCard;
