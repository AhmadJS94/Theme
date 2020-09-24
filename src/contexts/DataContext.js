import React, { createContext } from 'react';
import photo1 from '../assets/1.gif';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
import photo4 from '../assets/4.gif';
import photo5 from '../assets/5.png';
import photo6 from '../assets/6.gif';
import photo7 from '../assets/7.png';
export const DataProvider = createContext();
export default function DataContext({ children }) {
  const data = [
    {
      url: photo1,
      // 'https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
      title: 'Something 0',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url: photo2,
      // 'https://images.unsplash.com/photo-1506825449288-a4ed72ae9a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 1',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url: photo3,
      // 'https://images.unsplash.com/photo-1520288366719-b7df7237b0d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 2',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url: photo4,
      title: 'Something 3',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url: photo5,
      title: 'Something 4',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url: photo6,
      title: 'Something 5',
      description: 'lorem Ipsum sit amet ho no',
      price: '48',
    },
    {
      url: photo7,
      title: 'Something 6',
      description: 'lorem Ipsum hakoona matata lorem ipsum ja ja ja okau fd',
      price: '48',
    },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1592372721014-588a9b5198d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //   title: 'Something 7',
    //   description: 'lorem Ipsum',
    //   price: '48',
    // },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1593412578702-3332c86f3db3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //   title: 'Something 8',
    //   description: 'lorem Ipsum sit amet ',
    //   price: '48',
    // },
  ];
  const categories = [
    {
      url:
        'https://images.unsplash.com/photo-1548549557-dbe9946621da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Fashion',
    },
    {
      url:
        'https://images.unsplash.com/photo-1556594472-e9b933db923c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Appliances',
    },
    {
      url:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Kitchen',
    },
    {
      url:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Electronics',
    },
    {
      url:
        'https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Toys & games',
    },
    {
      url:
        'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Groceries',
    },
    {
      url:
        'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Sports & outdoors',
    },
    {
      url:
        'https://images.unsplash.com/photo-1527620743113-fac8dd0f8d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Baby essentials',
    },
    {
      url:
        'https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Mobiles',
    },
  ];
  const fashionData = [
    {
      url:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 0',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 1',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 2',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 3',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 4',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 5',
      description: 'lorem Ipsum sit amet ho no',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 6',
      description: 'lorem Ipsum hakoona matata lorem ipsum ja ja ja okau fd',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 7',
      description: 'lorem Ipsum',
      price: '48',
    },
    {
      url:
        'https://images.unsplash.com/photo-1521722776011-39ec91e0c14b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Something 8',
      description: 'lorem Ipsum sit amet ',
      price: '48',
    },
  ];
  return (
    <DataProvider.Provider value={{ data, fashionData, categories }}>
      {children}
    </DataProvider.Provider>
  );
}
