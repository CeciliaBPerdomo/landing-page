import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Section
        title="¿Qué vas a aprender?"
        items={[
          "Cómo funciona React desde cero",
          "Crear y reutilizar componentes",
          "Organizar un proyecto real",
          "Construir una landing page completa",
        ]}
      />

      <Section
        title="¿Para quién es este eBook?"
        items={[
          "Personas que están empezando con React",
          "Desarrolladores que quieren practicar con un proyecto real",
          "Quienes quieren entender componentes sin complicaciones",
          "Personas que prefieren aprender haciendo",
        ]}
      />

      <Footer />
    </>
  );
}

export default Home;
