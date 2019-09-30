import { useState } from 'react';
import Head from 'next/head'

const Index = () => {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };

  return (
        <div>
          <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="description" />
          </Head>
          <p>Hello Next.js</p>
          <p>Value: {number}</p>
          <button onClick={increment}>increment</button>
        </div>
  );
}

export default Index;