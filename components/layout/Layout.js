import React from 'react';
import Footer from './Footer';
import Header from './Header';
import TopHeader from './TopHeader';

export default function Layout({ children }) {
  return (
    <div>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
