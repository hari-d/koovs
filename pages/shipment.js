import React from 'react';
import Layout from '../components/layout/Layout';
import Shipment from '../components/support/Shipment';
import SupportUsLinks from '../components/support/SupportUsLinks';

export default function ShipmentPage() {
  return (
    <Layout>
      <SupportUsLinks />
      <Shipment />
    </Layout>
  );
}
