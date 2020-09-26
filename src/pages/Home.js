import React, { useContext } from 'react';
import CategorySlider from '../components/CategorySlider';
import MainCarousel from '../components/MainCarousel';

import Slides from '../components/Slides';
import { DataProvider } from '../contexts/DataContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TopDeals from '../components/TopDeals';

export default function Home() {
  const { data, fashionData, categories, topDeals } = useContext(DataProvider);

  const fashionSettings = {
    height: '64',
  };
  const settings = {
    height: '32',
  };

  return (
    <div className="">
      <MainCarousel data={data} />
      <div className="mr-4 ml-4 mt-4">
        <TopDeals data={topDeals} />
        <CategorySlider data={categories} />
        <Slides data={data} settings={settings} />
        <Slides data={fashionData} settings={fashionSettings} />
      </div>
    </div>
  );
}
