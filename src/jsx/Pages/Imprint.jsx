import React from "react";

import "../../styles/css/imprint.css";

const Imprint = () => {
  return (
    <div className="outer">
      <div className="imprint">
        <h1 className="imprint--title">Impressum</h1>
        <section className="imprint--contact">
          <h2 className="imprint--header">Angaben gemäß § 5 TMG:</h2>

          <p className="imprint--header-small">
            Name und Anschrift der Künstlerin:
          </p>

          <p>Ingrid Lindemann</p>
          <p>Loeweweg 3</p>
          <p>71397 Leutenbach</p>
          <p>Deutschland</p>

          <p className="imprint--header-small">Kontakt:</p>

          <p>
            E-Mail:&nbsp;
            <a className="extern" href="mailto:kunst@ilindemann.com">
              kunst@ilindemann.com
            </a>
          </p>

          <p className="imprint--header-small">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </p>

          <p>Ingrid Lindemann</p>
          <p>Loeweweg 3</p>
          <p>71397 Leutenbach</p>
          <p>Deutschland</p>

          <p>
            Quelle:&nbsp;
            <a
              className="extern"
              target="_blank"
              rel="noreferrer"
              href="https://www.e-recht24.de"
            >
              E-Recht24
            </a>
          </p>
        </section>
        <h2 className="imprint--header">Haftung für Inhalte:</h2>
        <p className="imprint--text margin-bottom">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p className="imprint--text">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h2 className="imprint--header">Haftung für Links:</h2>
        <p className="imprint--text margin-bottom">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="imprint--text">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2 className="imprint--header">Urheberrecht:</h2>
        <p className="imprint--text margin-bottom">
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung der Künstlerin. Downloads und Kopien dieser Seite sind nur
          für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="imprint--text">
          Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  );
};

export default Imprint;
