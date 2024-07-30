import React from 'react';

import '../../dist/about.css';

// import images
import imgIL from '../../assets/images/personal/me.jpg';

const About = () => {
    return (
        <div className="about">
            <h1 className="about--title">Über mich</h1>
            <div className="about--content">
                <img className="about--content--image" alt="Ingrid Lindemann" src={imgIL}></img>
                <div className="about--content--textcontainer">
                    <p>
                        Schon sehr früh im Kunstunterricht entdeckte ich meine Liebe zur Kunst. Auch die Naturwissenschaften übten eine große Faszination auf mich aus, so dass ich mich 
                        letztendlich entschloss Chemie zu studieren. Im Anschluss an das Studium wurde ich größtenteils vom meinen beruflichen Alltag und der Familie in Anspruch genommen. 
                        Als Ausgleich zu den täglichen Anforderungen übte ich verschiedene künstlerische Hobbies aus. In dem Maße, in dem meine Kinder selbständiger wurden, intensivierte 
                        ich meine künstlerische Tätigkeit.
                    </p>
                    <p className="about--content--textcontainer--margintop">
                        Im Herzen leidenschaftliche Bildhauerin, konzentriere ich mich seit 2017 intensiv auf meine künstlerische Tätigkeit. Indem ich zunächst bei einem befreundeten 
                        Bildhauer die Grundlagen der Bildhauerei lernte und anschließend in verschiedenen Kursen am der Kunstschule Unteres Remstal in Waiblingen meine Kenntnisse vertiefte, 
                        schuf ich mir eine Basis, auf der ich meinen bildhauerischen Ausdruck entwickelte.
                    </p>
                    <p className="about--content--textcontainer--margintop">
                        Durch die Freude an der Arbeit mit verschiedenen Materialien und das absichtslose Einlassen auf die dreidimensionale Gestaltung vergleichbar einer Meditation entstehen 
                        vorwiegend weibliche und gerundete Formen.
                    </p>
                    <p className="about--content--textcontainer--margintop">
                        In einer prozessorientierten Fokusarbeit versuche ich mich den erweiterten Dimensionen, dem Bilden und Vergehen von Formen und Strukturen, dem Verwischen und Überlagern 
                        verschiedener Wirklichkeiten, dem daraus entstehenden Widersprüchlichen anzunähern.
                    </p>
                    {/* <p>
                        Geboren und aufgewachsen 1964 in Geisingen, fand ich schon sehr früh im Kunstunterricht meine Liebe zur Kunst. Auch die Naturwissenschaften übten eine große
                        Faszination auf mich aus, so dass ich mich letztendlich entschloss Chemie zu studieren. Im Anschluss an das Studium wurde ich größtenteils vom meinen beruflichen
                        Alltag und der Familie in Anspruch genommen. Als Ausgleich zu den täglichen Anforderungen übte ich verschiedene künstlerische Hobbies aus. In dem Maße, in dem
                        meine Kinder selbständiger wurden, intensivierte ich meine künstlerische Tätigkeit.
                    </p>
                    <p className="about--content--textcontainer--margintop">
                        Im Herzen leidenschaftliche Bildhauerin, konzentriere ich mich seit 2017 intensiv auf meine künstlerische Tätigkeit. Indem ich zunächst bei einem befreundeten
                        Bildhauer die Grundlagen der Bildhauerei lernte und anschließend in verschiedenen Kursen am der Kunstschule Unteres Remstal in Waiblingen meine Kenntnisse
                        vertiefte, schuf ich mir eine Basis, auf der ich meinen bildhauerischen Ausdruck entwickelte.
                    </p>
                    <p className="about--content--textcontainer--margintop">
                        Durch die Freude an der Arbeit mit verschiedenen Materialien und das absichtslose Einlassen auf die dreidimensionale Gestaltung vergleichbar einer Meditation
                        entstehen vorwiegend weibliche und gerundete Formen.
                    </p>
                    <p className="about--content--textcontainer--margintop">
                        In einer prozessorientierten Fokusarbeit versuche ich mich den erweiterten Dimensionen und den Prinzipien des „Stirb und Werde“; dem Bilden und Vergehen von
                        Formen und Strukturen, dem Verwischen und Überlagern verschiedener Wirklichkeiten, dem daraus entstehenden Widersprüchlichen anzunähern.
                    </p> */}
                </div>

            </div>
        </div>
    );
};

export default About;