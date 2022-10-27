import React from 'react';
import Layout from '../components/layout/Layout';
import Payments from '../components/support/Payments';
import SupportUsLinks from '../components/support/SupportUsLinks';

export default function PaymentsPage() {
  return (
    <Layout>
      <SupportUsLinks />
      <Payments />
    </Layout>
  );
}
