import React from 'react';
import Body from '../components/layout/Body';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import TopHeader from '../components/layout/TopHeader';

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
