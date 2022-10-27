import React from 'react';
import AboutUsLinks from '../components/aboutUs/AboutUsLinks';
import Careers from '../components/aboutUs/Careers';
import Layout from '../components/layout/Layout';

export default function CareersPage() {
  return (
    <Layout>
      <AboutUsLinks />
      <Careers />
    </Layout>
  );
}
