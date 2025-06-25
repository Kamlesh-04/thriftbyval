'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="p-4 border rounded bg-gray-800 text-white">
            <strong>{product.name}</strong> — ₹{product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
