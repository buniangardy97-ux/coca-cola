/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import CokeCanVisualizer from './components/CokeCanVisualizer';
import SustainabilityDashboard from './components/SustainabilityDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-ice-white font-sans selection:bg-coke-red selection:text-ice-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <CokeCanVisualizer />
        <SustainabilityDashboard />
      </main>
    </div>
  );
}
