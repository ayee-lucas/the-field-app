/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import example from '@/public/images/Background/dunk.jpeg';
import { montserrat } from '@/app/fonts';
import PostBarCard from './PostBarCard';

const cardData = [
  {
    title: 'NBA',
    desc: 'In-Season Tournament: West Group A preview',
    img: example.src,
  },
  {
    title: 'Tansfer talk',
    desc: 'Liverpool a shock loan option for Mbappe',
    img: 'https://arena-cdn-g.imgix.net/site-media/6397b1255370f07879b122a457bf528aef257af2dcb15c39ddeead5a.jpg?w=1280&fit=fillmax&auto=format,compress&fm=undefined',
  },
  {
    title: 'NBA Power Rankings',
    desc: 'What has changed this summer?',
    img: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0718%2Fnba_power_rankings_16x9.jpg&w=570&format=jpg',
  },
  {
    title: '3-0',
    desc: 'Barcelona pull away from Real Madrid in feisty Dallas Clasico',
    img: 'https://a.espncdn.com/photo/2023/0729/r1203818_1296x729_16-9.jpg',
  },
];

export default function FeedBar() {
  return (
    <div
      className={`w-full flex flex-col gap-2 items-start justify-center py-5 bg-transparent ${montserrat.variable}`}
    >
      <h1 className="text-xl font-bold font-montserrat">
        <span className="text-fieldGreen">T</span>RENDING 📈{' '}
      </h1>
      <div className="w-full flex items-center justify-between gap-2 overflow-x-auto">
        {cardData.map((data) => (
          <PostBarCard title={data.title} desc={data.desc} img={data.img} />
        ))}
      </div>
    </div>
  );
}
