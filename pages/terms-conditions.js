import React from 'react';
import Layout from '../components/layout/Layout';
import SupportUsLinks from '../components/support/SupportUsLinks';
import TermsandConditions from '../components/support/TermsandConditions';

export default function TermsPage() {
  return (
    <Layout>
      <SupportUsLinks />
      <TermsandConditions />
    </Layout>
  );
}
