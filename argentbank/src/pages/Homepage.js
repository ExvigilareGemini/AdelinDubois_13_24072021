import React from "react";
import FeatureItem from "../components/Homepage/FeatureItem";
import { featureDatas } from "../data/feature-item";
import Hero from "../components/Homepage/Hero";

export default function homepage() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featureDatas.map((obj, index )=> {
          return <FeatureItem key={index} icon={obj.icon} title={obj.title} text={obj.text} />
        })}
      </section>
    </main>
  );
}
