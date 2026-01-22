import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from '../components/Footer';

import reactIcon from "../assets/react.png";
import bookIcon from "../assets/book.svg";

function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div className="bg-slate-50 py-4 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <Section
            title="¿Qué vas a aprender?"
            items="Cómo funciona React desde cero, cómo crear y reutilizar componentes, organizar un proyecto real y construir una landing page completa."
           image={reactIcon}
          />
          <Section
            title="¿Para quién es este eBook?"
            items="Personas que están empezando con React, desarrolladores que quieren practicar con un proyecto real y quienes prefieren aprender haciendo."
            image={bookIcon}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
