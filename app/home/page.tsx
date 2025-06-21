'use client'; // if you use client hooks like useRouter

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
    router.refresh();
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleHomeClick}>Go to Root and Refresh</button>
    </div>
  );
}
