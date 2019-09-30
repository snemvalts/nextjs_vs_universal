import Link from 'next/link'
import Head from 'next/head'


const About = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="description" />
        </Head>
      <div>
        <Link href='/'><a>Home</a></Link>
      </div>
      <p>About</p>
      <p>about us</p>
    </div>
  );
}

export default About;
