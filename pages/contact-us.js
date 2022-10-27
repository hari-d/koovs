import React from 'react';
import AboutUsLinks from '../components/aboutUs/AboutUsLinks';
import ContactUs from '../components/aboutUs/ContactUs';
import Layout from '../components/layout/Layout';

export default function ContactUsPage() {
  return (
    <Layout>
      <AboutUsLinks />
      <ContactUs />
    </Layout>
  );
}
