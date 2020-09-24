import React, { useContext } from 'react';
import CategorySlider from '../components/CategorySlider';
import MainCarousel from '../components/MainCarousel';

import Slides from '../components/Slides';
import { DataProvider } from '../contexts/DataContext';

export default function Home() {
  const { data, fashionData, categories } = useContext(DataProvider);

  const fashionSettings = {
    height: '64',
  };
  const settings = {
    height: '32',
  };

  return (
    <div className="font-body antialiased">
      <MainCarousel data={data} />
      <div className="mr-4 ml-4 mt-4">
        <CategorySlider data={categories} />
        <Slides data={data} settings={settings} />
        <Slides data={fashionData} settings={fashionSettings} />
      </div>
    </div>
  );
}
