import React from 'react';
import AboutUs from '../components/aboutUs/AboutUs';
import Layout from '../components/layout/Layout';
import AboutUsLinks from '../components/aboutUs/AboutUsLinks';

export default function AboutUsPage() {
  return (
    <Layout>
      <AboutUsLinks />
      <AboutUs />
    </Layout>
  );
}
