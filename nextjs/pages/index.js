import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };

  return (
        <div>
          <Head>
            <title>Home</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="description" />
          </Head>

          <div>
            <Link href='/about/'><a>About</a></Link>
          </div>

          <p>Hello Next.js</p>
          <p>Value: {number}</p>
          <button onClick={increment}>increment</button>
        </div>
  );
}

export default Index;
