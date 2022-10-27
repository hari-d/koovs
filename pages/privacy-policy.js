import React from 'react';
import AboutUsLinks from '../components/aboutUs/AboutUsLinks';
import PrivacyPolicy from '../components/aboutUs/PrivacyPolicy';
import Layout from '../components/layout/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <AboutUsLinks />
      <PrivacyPolicy />
    </Layout>
  );
}
