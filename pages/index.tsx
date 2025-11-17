import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SAMPLE_LISTINGS } from '../constants';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">ALX Listing App</h1>
          <div className="flex gap-2">
            <Button variant="ghost">Sign in</Button>
            <Button variant="primary">Create Listing</Button>
          </div>
        </header>


        <section>
          <h2 className="text-xl font-semibold mb-4">Featured listings</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_LISTINGS.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                location={item.location}
                price={item.price}
                imageSrc={item.imageSrc}
                primaryLabel="View"
                onPrimaryClick={() => alert(`Open ${item.title}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
