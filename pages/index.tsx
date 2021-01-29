import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import React from 'react';
import Contact from '../components/Contact';

export default function Home() {
  const techs = ['Next.js ', 'Tailwind'];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Navbar />
        <Hero />
      </Wrapper>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
