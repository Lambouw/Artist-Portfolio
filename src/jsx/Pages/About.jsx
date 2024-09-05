import React from "react";

import "../../dist/about.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about--title">Über mich</h1>
      <div className="about--content">
        <img
          className="about--content--image"
          alt="Ingrid Lindemann"
          src="/images/personal/me.jpg"
        ></img>
        <div className="about--content--textcontainer">
          <p className="about--content--textcontainer--margintop">
            Meine Leidenschaft für die Bildhauerei habe ich bereits in meiner
            Kindheit entdeckt, als ich erste Versuche mit Ton Modelliermassen
            und verschiedenen anderen Materialien unternahm. Diese frühe
            Faszination für das dreidimensionale Gestalten hat mich bis heute
            begleitet und ist zu einem zentralen Bestandteil meines Lebens
            geworden.
          </p>
          <p className="about--content--textcontainer--margintop">
            Ein wichtiger Teil meiner künstlerischen Ausbildung fand in Kursen
            und der Bildhauerklasse an der Kunstschule „Unteres Remstal“ in
            Waiblingen statt, wo sowohl ich meinen eigenen Stil entwickeln als
            auch mein handwerkliches Können und meine künstlerische
            Ausdruckskraft weiterentwickeln konnte. Diese fundierte Ausbildung
            legte den Grundstein für meine Arbeit und half mir, eine solide
            Basis an Techniken und Fertigkeiten zu erlangen.
          </p>
          <p className="about--content--textcontainer--margintop">
            In meinen Arbeiten lege ich besonderen Wert auf die Erforschung von
            Formen, Materialien und Strukturen, die die menschliche Erfahrung in
            all ihren Facetten widerspiegeln. Ich arbeite gerne mit
            unterschiedlichen Materialien wie Stein, Ton und Holz, um die
            Vielseitigkeit und Ausdruckskraft der Bildhauerei auszuschöpfen.
            Dabei inspiriert mich besonders der Dialog zwischen Form und Raum
            sowie die emotionale Resonanz, die Skulpturen bei den Betrachtern
            auslösen können.
          </p>
          <p className="about--content--textcontainer--margintop">
            Meine Werke wurden bereits in zwei Galerien ausgestellt, und ich
            hatte die Ehre, an verschiedenen Gemeinschaftsausstellungen
            teilzunehmen. Besonders hervorheben möchte ich meine mehrmalige
            Teilnahme am Symposium von Michael Schützenberger, wo ich die
            Möglichkeit hatte, mich intensiv mit anderen renommierten Künstlern
            auszutauschen. Diese wiederholte Teilnahme hat mir nicht nur
            geholfen, mein künstlerisches Können zu verfeinern, sondern auch
            mein Netzwerk in der Kunstszene erweitert.
          </p>
          <p className="about--content--textcontainer--margintop">
            Zusätzlich habe ich an mehreren Kursen und Symposien von Ebba Kaynak
            teilgenommen, die meine kreative Entwicklung maßgeblich beeinflusst
            haben. Diese Erfahrung hat mir neue Techniken und Ansätze eröffnet,
            die ich in meine eigene Arbeit integriert habe.
          </p>
          <p className="about--content--textcontainer--margintop">
            Erst vor kurzem durfte ich einen besonderen Erfolg feiern: Bei einer
            Ausstellung der Firma Catalent Pharma Solutions habe ich den ersten
            Preis gewonnen. Diese Auszeichnung hat mir nicht nur Bestätigung,
            sondern auch zusätzliche Motivation gegeben, meinen künstlerischen
            Weg weiter zu verfolgen.
          </p>
          <p>
            Schon sehr früh im Kunstunterricht entdeckte ich meine Liebe zur
            Kunst. Auch die Naturwissenschaften übten eine große Faszination auf
            mich aus, so dass ich mich letztendlich entschloss Chemie zu
            studieren. Im Anschluss an das Studium wurde ich größtenteils vom
            meinen beruflichen Alltag und der Familie in Anspruch genommen. Als
            Ausgleich zu den täglichen Anforderungen übte ich verschiedene
            künstlerische Hobbies aus. In dem Maße, in dem meine Kinder
            selbständiger wurden, intensivierte ich meine künstlerische
            Tätigkeit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
