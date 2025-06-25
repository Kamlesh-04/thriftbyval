import React from 'react';

type Params = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Params) {
  const { id } = params;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Product #{id}</h1>
      <p>This is a placeholder for product {id}.</p>
    </main>
  );
}
