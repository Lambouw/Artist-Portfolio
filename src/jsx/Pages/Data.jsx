import React from 'react';

import '../../dist/data.css';

const Data = () => {
    return (
        <div className="data">
            <h1 className="data--title">Datenschutzerklärung</h1>
            <p className="data--text">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen)
                erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne
                Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p className="data--text">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
                im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter
                Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
                rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
            <p className="data--text">Quelle: <a className="extern" target="_blank" rel="noreferrer" href="http://www.e-recht24.de/muster/datenschutzerklaerung.html">E-Recht24</a></p>
            <h2 className="data--header">Hinweise zur Datenverarbeitung im Zusammenhang mit Google Analytics</h2>
            <p className="data--text">
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche 
                für die Datenverarbeitung auf dieser Website außerhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann 
                erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend 
                "Google" genannt.
            </p>
            <p className="data--text">
                Google Analytics verwendet sog. "Cookies", Textdateien, die auf dem Computer des Seitenbesuchers gespeichert werden und 
                die eine Analyse der Benutzung der Website durch den Seitenbesucher ermöglichen. Die durch das Cookie erzeugten Informationen 
                über die Benutzung dieser Website durch den Seitenbesucher (einschließlich der gekürzten IP-Adresse) werden in der Regel an 
                einen Server von Google übertragen und dort gespeichert.
            </p>
            <p className="data--text">
                Google Analytics wird ausschließlich mit der Erweiterung "_anonymizeIp()" auf dieser Website verwendet. Diese Erweiterung 
                stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und schließt eine direkte Personenbeziehbarkeit aus. Durch 
                die Erweiterung wird die IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen 
                Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle 
                IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von dem 
                entsprechenden Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            </p>
            <p className="data--text">
                Im Auftrag des Seitenbetreibers wird Google die anfallenden Informationen benutzen, um die Nutzung der Website auszuwerten, 
                um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung 
                verbundene Dienstleistungen dem Seitenbetreiber gegenüber zu erbringen (Art. 6 Abs. 1 lit. f DSGVO). Das berechtigte 
                Interesse an der Datenverarbeitung liegt in der Optimierung dieser Website, der Analyse der Benutzung der Website und der 
                Anpassung der Inhalte. Die Interessen der Nutzer werden durch die Pseudonymisierung hinreichend gewahrt.
            </p>
            <p className="data--text">
                Google LLC. bietet eine Garantie auf Basis der Standardvertragsklauseln ein angemessenes Datenschutzniveau einzuhalten. 
                Die gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 50 Monaten 
                automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
            </p>
            <p>
                Die Erfassung durch Google Analytics kann verhindert werden, indem der Seitenbesucher die Cookie-Einstellungen für diese 
                Website anpasst. Der Erfassung und Speicherung der IP-Adresse und der durch Cookies erzeugten Daten kann außerdem jederzeit 
                mit Wirkung für die Zukunft widersprochen werden. Das entsprechende Browser- Plugin kann unter dem folgenden Link 
                heruntergeladen und installiert werden: <a className="extern" target="_blank" rel="noreferrer" href="https://tools.google.com/dlpage/gaoptout" >Google/gaoptout</a>.
            </p>
            <p>
                Der Seitenbesucher kann die Erfassung durch Google Analytics auf dieser Webseite verhindern, indem er auf 
                folgenden <a className="extern" target="_blank" rel="noreferrer" href="https://www.test.de" >Link</a> klickt. Es wird ein Opt-Out-Cookie gesetzt, der die zukünftige Erfassung der #
                Daten beim Besuch dieser Website verhindert.
            </p>
            <p style={{color: 'red'}}>Link = Button benötigt?</p>
            <p className="data--text">
                Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, finden sich in der 
                Datenschutzerklärung von Google (<a className="extern" target="_blank" rel="noreferrer" href="https://policies.google.com/privacy" >Google/Privacy</a>) sowie 
                in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google 
                (<a className="extern" target="_blank" rel="noreferrer" href="https://adssettings.google.com/authenticated" >Google/Authenticated</a>).
            </p>
            <h2 className="data--header">reCAPTCHA</h2>
            <p className="data--text">
                Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst reCAPTCHA des Unternehmens Google LLC (Google). 
                Die Abfrage dient der Unterscheidung, ob die Eingabe durch einen Menschen oder missbräuchlich durch automatisierte, 
                maschinelle Verarbeitung erfolgt. Die Abfrage schließt den Versand der IP-Adresse und ggf. weiterer von Google für den 
                Dienst reCAPTCHA benötigter Daten an Google ein. Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort weiter 
                verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen 
                Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle 
                IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird 
                Google diese Informationen benutzen, um Ihre Nutzung dieses Dienstes auszuwerten. Die im Rahmen von reCaptcha von Ihrem 
                Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Für diese Daten gelten die 
                abweichenden Datenschutzbestimmungen des Unternehmens Google. Weitere Informationen zu den Datenschutzrichtlinien von 
                Google finden Sie unter: <a className="extern" target="_blank" rel="noreferrer" href="https://policies.google.com/privacy?hl=de">Google/Privacy</a>
            </p>
        </div>
    );
};

export default Data;