import { NextPage } from 'next';
import { memo } from 'react';

import { AppLink, AppLinkTheme } from '@/components/appLink/AppLink';
import { HeaderColor, Headline, HeadlineSize } from '@/components/headline/Headline';
import { Text } from '@/components/text/Text';

import styles from './LegalNoticePage.module.scss';

interface LegalNoticePageProps {
    className?: string;
}

const LegalNoticePage: NextPage<LegalNoticePageProps> = (props) => {
    const { className } = props;

    return (
        <section className={styles.legalNotice}>
            <Headline className={styles.title} size={HeadlineSize.L} headline='h1' headerColor={HeaderColor.SECONDARY}>
                Datenschutz&shy;erkl&auml;rung
            </Headline>
            <Headline className={styles.title} size={HeadlineSize.M} headline='h2' headerColor={HeaderColor.SECONDARY}>
                1. Datenschutz auf einen Blick
            </Headline>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Allgemeine Hinweise
            </Headline>
            <Text>
                Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren Textersonenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.

            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Datenerfassung auf dieser Website
            </Headline>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h4' headerColor={HeaderColor.SECONDARY}>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</Headline>
            <Text>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h4' headerColor={HeaderColor.SECONDARY}>Wie erfassen wir Ihre Daten?</Headline>
            <Text>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei   kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </Text>
            <Text>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h4' headerColor={HeaderColor.SECONDARY}>Wof&uuml;r nutzen wir Ihre Daten?</Headline>
            <Text>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h4' headerColor={HeaderColor.SECONDARY}>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</Headline>
            <Text>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
            </Text>
            <Text>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.M} headline='h2' headerColor={HeaderColor.SECONDARY}>2. Hosting</Headline>
            <Text>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Amazon Web Services (AWS)
            </Headline>
            <Text>
                Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxemburg (nachfolgend AWS).
            </Text>
            <Text>
                Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von AWS verarbeitet. Hierbei k&ouml;nnen auch personenbezogene Daten an das Mutterunternehmen von AWS in die USA &uuml;bermittelt werden. Die Daten&uuml;bertragung in die USA wird auf die EU-Standardvertragsklauseln gest&uuml;tzt. Details finden Sie hier: <AppLink theme={AppLinkTheme.SECONDARY} href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/" blank rel="noopener noreferrer">https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/</AppLink>.
            </Text>
            <Text>
                Weitere Informationen entnehmen Sie der Datenschutzerkl&auml;rung von AWS: <AppLink theme={AppLinkTheme.SECONDARY} href="https://aws.amazon.com/de/privacy/?nc1=f_pr" blank rel="noopener noreferrer">https://aws.amazon.com/de/privacy/?nc1=f_pr</AppLink>.
            </Text>
            <Text>
                Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </Text>
            <Text>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <AppLink theme={AppLinkTheme.SECONDARY} href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000TOWQAA4&status=Active" blank rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000TOWQAA4&status=Active</AppLink>
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Auftragsverarbeitung
            </Headline>
            <Text>Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.

            </Text>
            <Headline className={styles.title} size={HeadlineSize.M} headline='h2' headerColor={HeaderColor.SECONDARY}>
                3. Allgemeine Hinweise und Pflicht&shy;informationen
            </Headline>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Datenschutz
            </Headline>
            <Text>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
            </Text>
            <Text>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
            </Text>
            <Text>
                Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Hinweis zur verantwortlichen Stelle
            </Headline>
            <Text>
                Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:
            </Text>
            <Text>
                Muslim Zamukaev<br />
                Eichhorster Weg 34, 13435 Berlin
            </Text>

            <Text>
                Telefon: +4915236933626<br />
                E-Mail: zamukaev.muslim@gmail.com
            </Text>
            <Text>
                Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet
            </Text>

            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Speicherdauer
            </Headline>
            <Text>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
            </Headline>
            <Text>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Empfänger von personenbezogenen Daten
            </Headline>
            <Text>Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </Headline>
            <Text>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </Headline>
            <Text>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </Text>
            <Text>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</Headline>
            <Text>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
            </Headline>
            <Text>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Auskunft, Berichtigung und L&ouml;schung
            </Headline>
            <Text>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Recht auf Einschr&auml;nkung der Verarbeitung
            </Headline>
            <Text>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
            </Text>
            <ul>
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.
                </li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
            </ul>
            <Text>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}
            >
                SSL- bzw. TLS-Verschl&uuml;sselung
            </Headline>
            <Text>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </Text>
            <Text>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Widerspruch gegen Werbe-E-Mails
            </Headline>
            <Text>
                Der Nutzung von im Rahmen der Impressumspflicht ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht ausdr&uuml;cklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.

            </Text>
            <Headline className={styles.title} size={HeadlineSize.M} headline='h2' headerColor={HeaderColor.SECONDARY}
            >
                4. Datenerfassung auf dieser Website
            </Headline>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Kontaktformular
            </Headline>
            <Text>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</Text>
            <Text>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </Text>
            <Text>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
            </Text>
            <Headline className={styles.title} size={HeadlineSize.s} headline='h3' headerColor={HeaderColor.SECONDARY}>
                Anfrage per E-Mail, Telefon oder Telefax
            </Headline>
            <Text>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </Text>
            <Text>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </Text>
            <Text>
                Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
            </Text>
            <Text>
                Quelle: <AppLink theme={AppLinkTheme.SECONDARY} href="https://www.e-recht24.de">https://www.e-recht24.de</AppLink>
            </Text>
        </section>
    );
}

export default memo(LegalNoticePage);