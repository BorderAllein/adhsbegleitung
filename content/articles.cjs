// Artikel (Stand 09.11.2026). Fakten nur aus den unter "sources" genannten Quellen; Zahlen sind als solche ausgewiesen.
const S = {
  barmer: { t: 'BARMER: ADHS bei Erwachsenen. Ursachen, Symptome und Behandlung', u: 'https://www.barmer.de/gesundheit-verstehen/wissen/krankheiten-a-z/adhs-erwachsene-1071016' },
  ndr: { t: 'NDR Ratgeber Gesundheit: ADHS bei Erwachsenen. Symptome, Diagnostik und Therapie', u: 'https://www.ndr.de/ratgeber/gesundheit/ADHS-bei-Erwachsenen-Symptome-Diagnostik-Therapie,adhs194.html' },
  adhsfrauen: { t: 'ADHS Deutschland e. V.: ADHS bei Frauen und Mädchen', u: 'https://adhs-deutschland.de/adhs-erwachsene/adhs-bei-frauen-und-maedchen' },
  adhsde: { t: 'ADHS Deutschland e. V.: ADHS im Erwachsenenalter', u: 'https://adhs-deutschland.de/adhs-erwachsene/adhs-im-erwachsenenalter' },
  adhsnach: { t: 'ADHS Deutschland e. V.: Nachteilsausgleich bei ADHS', u: 'https://adhs-deutschland.de/adhs-schule-studium-und-ausbildung/nachteilsausgleich-bei-adhs' },
  adhskomor: { t: 'ADHS Deutschland e. V.: Begleiterkrankungen bei ADHS', u: 'https://adhs-deutschland.de/begleitstoerungen/die-begleiterkrankungen-bei-adhs-assoziierte-stoerungen-oder-komorbiditaeten' },
  audhs: { t: 'Apotheken Umschau: AuDHS. Leben mit Autismus und ADHS (20.03.2026)', u: 'https://www.apotheken-umschau.de/gesund-bleiben/psyche/audhs-leben-mit-autismus-und-adhs-1496971.html' },
  adhsinfo: { t: 'adhs.info: ADHS im Erwachsenenalter', u: 'https://www.adhs.info/fuer-erwachsene/adhs-im-erwachsenenalter/' },
};
const A = [];

A.push({
  slug: 'adhs-bei-erwachsenen', cat: 'erkennen', title: 'ADHS bei Erwachsenen: Symptome, Ursachen, Diagnose und Hilfe', readMin: 9,
  desc: 'ADHS bei Erwachsenen verständlich erklärt: typische Symptome, mögliche Ursachen, wie die Diagnose abläuft und welche Hilfen es gibt. Mit Quellen.',
  short: 'ADHS ist eine neuronale Entwicklungsbesonderheit, die in der Kindheit beginnt und bei vielen Erwachsenen bestehen bleibt oder erst spät erkannt wird. Rund 2,5 Prozent der Erwachsenen weltweit sind laut BARMER betroffen. Typisch sind Unaufmerksamkeit, innere Unruhe und Impulsivität. Eine Diagnose stellen Fachleute, Hilfe gibt es durch Psychotherapie, Medikamente, Psychoedukation und Alltagsbegleitung.',
  sections: [
    ['was', 'Was ist ADHS bei Erwachsenen?', `<p>ADHS steht für Aufmerksamkeitsdefizit-Hyperaktivitätsstörung. Sie beginnt in der Kindheit und zählt laut BARMER zu den häufigsten neuronalen Entwicklungsstörungen. Die Symptome bestehen oft bis ins Erwachsenenalter fort oder werden erst spät entdeckt.</p><p>Nach Angaben der BARMER leben rund 2,5 Prozent der Erwachsenen weltweit mit ADHS. Der Name führt leicht in die Irre: Es geht weniger um zu wenig Aufmerksamkeit als um Schwierigkeiten, Aufmerksamkeit, Impulse und Aktivität zu steuern.</p>`],
    ['symptome', 'Typische Symptome im Erwachsenenalter', `<p>ADHS äußert sich bei jedem Menschen anders. Die folgenden Punkte beschreiben typische Anzeichen, die nicht bei allen vorliegen müssen. Üblicherweise werden drei Bereiche unterschieden:</p>
<table><tr><th>Bereich</th><th>Beispiele aus dem Alltag</th></tr>
<tr><td><b>Unaufmerksamkeit</b></td><td>Flüchtigkeitsfehler, kurze Aufmerksamkeitsspanne, Schwierigkeiten beim Organisieren und Priorisieren, geistig anspruchsvolle Aufgaben werden vermieden, Anweisungen werden nicht vollständig ausgeführt, Vergesslichkeit</td></tr>
<tr><td><b>Hyperaktivität</b></td><td>Innere Unruhe und Schwierigkeit, sich zu entspannen, äußere Unruhe (zum Beispiel mit den Fingern trommeln), viel reden und Gespräche dominieren</td></tr>
<tr><td><b>Impulsivität</b></td><td>Neigung zu Gefühlsausbrüchen, unverhältnismäßige Reaktionen in stressigen Situationen, häufiges Unterbrechen oder vorzeitiges Beantworten von Fragen, Ungeduld beim Warten</td></tr></table>
<p>Bei Erwachsenen zeigt sich Hyperaktivität häufig weniger als Herumlaufen, sondern als innere Unruhe. Ebenfalls häufig berichtet werden Schlafstörungen, schnelle Frustration und Selbstzweifel nach wiederholten Misserfolgen (siehe <a href="/artikel/adhs-und-schlaf/">ADHS und Schlaf</a>).</p>`],
    ['ursachen', 'Woher kommt ADHS?', `<p>Laut BARMER werden folgende Faktoren diskutiert: Frühgeburt und andere Komplikationen bei der Geburt, bestimmte Veränderungen im Gehirn, ein veränderter Stoffwechsel der Botenstoffe Dopamin und Noradrenalin sowie genetische Faktoren, die sich als familiäre Häufung durch eine Vielzahl von Risikogenen zeigen. Ausführlicher: <a href="/artikel/adhs-ursachen/">Ursachen von ADHS</a>.</p>`],
    ['diagnose', 'Wie wird ADHS bei Erwachsenen festgestellt?', `<p>Der erste Schritt führt meist in die Hausarztpraxis, die an eine Fachpraxis überweisen kann. Die Diagnose stellen Fachärztinnen und Fachärzte für Psychiatrie oder Neurologie sowie Psychotherapeutinnen und Psychotherapeuten. Voraussetzung sind Anzeichen für die Kernsymptome, ein Beginn bereits in der Kindheit, deutliche Beeinträchtigungen in mehreren Lebensbereichen und der Ausschluss anderer Ursachen. Mehr dazu: <a href="/artikel/adhs-diagnose-erwachsene/">ADHS-Diagnose bei Erwachsenen</a>.</p>`],
    ['hilfe', 'Welche Hilfen gibt es?', `<ul><li><b>Psychotherapie:</b> zum Beispiel Verhaltenstherapie, um Strategien zu erlernen und zu festigen.</li><li><b>Medikamente:</b> können Beschwerden lindern, die Konzentration verbessern und Impulsivität verringern. Sie schlagen laut BARMER bei 60 bis 70 Prozent der Betroffenen gut an. Die Entscheidung liegt bei Ärztinnen und Ärzten (<a href="/artikel/adhs-medikamente-ueberblick/">Überblick</a>).</li><li><b>Psychoedukation und Coaching:</b> Aufklärung über ADHS und Alltagsstrategien. Coaching ersetzt keine Behandlung (<a href="/artikel/coaching-oder-therapie-bei-adhs/">Coaching oder Therapie?</a>).</li></ul>`],
    ['alltag', 'Was im Alltag helfen kann', `<p>Der NDR nennt unter anderem kleinschrittige Ziele, um Überforderung zu verhindern, und eingeplante Pausen. Sport und Hobbys können helfen, überschüssige Energie abzubauen und Erfolgserlebnisse zu schaffen. Konkrete Ideen finden Sie in <a href="/artikel/zeitblindheit-adhs/">Zeitblindheit: Strategien für den Alltag</a>.</p>`],
  ],
  faq: [['Ist ADHS nur eine Kinderkrankheit?', 'Nein. Die Symptome bestehen laut BARMER oft bis ins Erwachsenenalter fort oder werden erst spät entdeckt.'], ['Kann ich mich selbst diagnostizieren?', 'Nein. Eine Diagnose erfordert ausführliche Gespräche, Fragebögen und eine körperliche Untersuchung durch Fachleute. Selbsttests können ein Anlass für eine Abklärung sein, ersetzen sie aber nicht.'], ['Zahlt die Krankenkasse?', 'Laut BARMER übernehmen die gesetzlichen Krankenkassen die Kosten medizinisch notwendiger Behandlungen, sofern eine Diagnose vorliegt und die Abrechnung über zugelassene Ärztinnen, Ärzte oder Psychotherapeutinnen und Psychotherapeuten erfolgt.']],
  sources: [S.barmer, S.ndr, S.adhsde],
  related: ['adhs-diagnose-erwachsene', 'adhs-bei-frauen', 'adhs-ursachen', 'coaching-oder-therapie-bei-adhs'],
});

A.push({
  slug: 'adhs-diagnose-erwachsene', cat: 'diagnose', title: 'ADHS-Diagnose bei Erwachsenen: Wer stellt sie, wie läuft sie ab?', readMin: 7,
  desc: 'Wo bekomme ich eine ADHS-Diagnose als Erwachsener? Anlaufstellen, Ablauf der Diagnostik, Kriterien und was Sie vorbereiten können. Mit Quellen.',
  short: 'Der erste Schritt führt meist in die Hausarztpraxis. Die Diagnose stellen Fachärztinnen und Fachärzte für Psychiatrie, Neurologie oder Psychosomatik oder ADHS-erfahrene Psychotherapeutinnen und Psychotherapeuten. Sie besteht aus ausführlichen Gesprächen, Fragebögen und einer körperlichen Untersuchung.',
  sections: [
    ['anlauf', 'An wen kann ich mich wenden?', `<p>Der NDR empfiehlt Erwachsenen mit Anzeichen für ADHS, sich an einen ADHS-erfahrenen Psychotherapeuten oder eine Psychotherapeutin oder an eine Fachärztin beziehungsweise einen Facharzt für Neurologie, Psychiatrie oder Psychosomatik zu wenden. Laut BARMER führt der erste Schritt meist in die Hausarztpraxis, die an eine Fachpraxis für Psychiatrie, Neurologie oder Psychotherapie überweisen kann.</p><div class="box"><b>Praxistipp:</b> Frage bei der Anmeldung ausdrücklich nach Erfahrung mit ADHS bei Erwachsenen. Nicht jede Praxis bietet die Diagnostik an.</div>`],
    ['ablauf', 'Wie läuft die Diagnostik ab?', `<p>In ausführlichen Gesprächen mit der betroffenen Person und Bezugspersonen sowie mithilfe verschiedener Tests und Fragebögen wird geprüft, ob die Diagnosekriterien für ADHS erfüllt sind (NDR). Laut BARMER gehören dazu ärztliche oder psychotherapeutische Anamnesegespräche, Selbsteinschätzungen, Fragebögen für Angehörige und Tests zu geistigen Fähigkeiten, etwa zu Erinnerungs- und Konzentrationsvermögen.</p><ul><li>Es muss herausgefunden werden, ob Symptome schon vor dem zwölften Lebensjahr bestanden haben (NDR).</li><li>Zur Erfassung der aktuellen Symptomatik kann der von der WHO entwickelte Selbsttest ASRS (Adult ADHD Self-Report Scale) herangezogen werden (NDR).</li><li>Für die Diagnose müssen bei Erwachsenen laut NDR aktuell mindestens fünf Symptome pro Kategorie (Unaufmerksamkeit oder Hyperaktivität/Impulsivität) über mindestens sechs Monate vorhanden sein.</li><li>Eine körperliche Untersuchung dient dem Ausschluss von Erkrankungen wie Schilddrüsenerkrankungen, Epilepsie oder Eisenmangel (NDR).</li></ul>`],
    ['voraus', 'Welche Voraussetzungen müssen erfüllt sein?', `<p>Laut BARMER sind es Anzeichen für die Kernsymptome, der Beginn bereits in der Kindheit, Probleme in mehreren Lebensbereichen mit deutlicher Beeinträchtigung im Sozial- oder Berufsleben und der Ausschluss anderer Ursachen.</p>`],
    ['vorbereiten', 'Wie kann ich mich vorbereiten?', `<ul><li>Notiere konkrete Situationen aus Alltag und Beruf, in denen Dir Dinge schwerfallen.</li><li>Sammle Hinweise aus der Kindheit: Schulzeugnisse, Bemerkungen von Lehrkräften, Erinnerungen von Eltern oder Geschwistern.</li><li>Überlege, welche Bezugsperson Fragen zu Deinem Verhalten beantworten kann.</li><li>Bring eine Liste Deiner Medikamente und bisherigen Diagnosen mit.</li></ul><p>Das sind Anregungen aus der Praxis, keine Vorgaben der Fachleute.</p>`],
    ['kosten', 'Kosten und Wartezeit', `<p>Laut BARMER übernehmen die gesetzlichen Krankenkassen die Kosten medizinisch notwendiger Behandlungen, sofern eine Diagnose vorliegt und die Abrechnung über zugelassene Ärztinnen, Ärzte oder Psychotherapeutinnen und Psychotherapeuten erfolgt. Konkrete Wartezeiten nennt die BARMER nicht. In der Praxis sind sie regional sehr unterschiedlich und teils lang. Für Fragen zur Kostenübernahme der Diagnostik, besonders bei privaten Anbietern, wende Dich vorab an Deine Krankenkasse.</p>`],
  ],
  faq: [['Kann der Hausarzt ADHS diagnostizieren?', 'Die Hausarztpraxis ist meist der erste Schritt und kann überweisen. Die Diagnose selbst stellen laut BARMER Fachärztinnen und Fachärzte sowie Psychotherapeutinnen und Psychotherapeuten.'], ['Reicht ein Online-Test?', 'Nein. Ein Online-Test kann ein Anlass für eine Abklärung sein, ersetzt aber keine Diagnostik.'], ['Muss ich Bezugspersonen mitbringen?', 'Nach Angaben des NDR werden Gespräche auch mit Bezugspersonen geführt, laut BARMER gibt es Fragebögen für Angehörige. Wie das praktisch aussieht, klärt die jeweilige Praxis.']],
  sources: [S.ndr, S.barmer],
  related: ['adhs-bei-erwachsenen', 'adhs-bei-frauen', 'coaching-oder-therapie-bei-adhs'],
});

A.push({
  slug: 'adhs-bei-frauen', cat: 'erkennen', title: 'ADHS bei Frauen: Warum sie oft spät erkannt wird', readMin: 6,
  desc: 'ADHS bei Frauen und Mädchen wird häufig spät erkannt. Gründe, typische Verläufe und was Betroffenen helfen kann. Mit Quellen von ADHS Deutschland.',
  short: 'ADHS wurde lange für ein Jungenthema gehalten. Beide Annahmen, dass ADHS bei Mädchen kaum vorkomme und im Erwachsenenalter verschwinde, gelten laut ADHS Deutschland seit über zehn Jahren als falsch. Bei Frauen wird ADHS häufig erst spät erkannt, oft erst bei Burnout oder Überforderung.',
  sections: [
    ['mythos', 'Ein Mythos hält sich', `<p>ADHS Deutschland e. V. beschreibt, dass lange angenommen wurde, ADHS komme bei Mädchen kaum vor. Das war die Zeit, in der man auch dachte, ADHS verschwinde mit dem Erwachsenenalter. Beide Annahmen gelten seit über zehn Jahren als falsch.</p>`],
    ['gruende', 'Warum Frauen später diagnostiziert werden', `<p>Als Gründe für die spätere Erkennung nennt ADHS Deutschland:</p><ul><li>ein späteres Auftreten,</li><li>subtilere klinische Erscheinungsformen,</li><li>eine geschlechtsspezifische Verzerrung in Bewertungsskalen, die Verhaltensweisen hervorheben, die bei Jungen häufiger vorkommen,</li><li>hohe Funktionalität: Wer in Schule und Studium mit vielen Stärken Schwierigkeiten kompensiert hat, erkennt ADHS schwerer.</li></ul>`],
    ['anlass', 'Wann die Diagnose oft kommt', `<p>Laut ADHS Deutschland wird ADHS bei Frauen oft erst bei einem Burnout oder bei der Frage erkannt, warum der Umgang mit Stress so schlecht gelingt. Viele Frauen werden wegen Angstzuständen, Depressionen, Ess- oder Schlafstörungen sowie Sucht behandelt, ohne dass die zugrunde liegende ADHS bemerkt wird.</p>`],
    ['erleben', 'Wie sich das im Alltag anfühlen kann', `<p>Betroffene berichten von dem Gefühl, ständig auszugleichen: Sie organisieren mit großem Aufwand, kompensieren durch Perfektionismus und erschöpfen innen, während sie nach außen funktionieren. Diese Beschreibungen stammen aus der Begleitungspraxis und sind keine Diagnosekriterien.</p>`],
    ['wege', 'Was Betroffenen helfen kann', `<ul><li>Fachliche Abklärung bei Fachleuten, die ADHS bei Erwachsenen und bei Frauen kennen (<a href="/artikel/adhs-diagnose-erwachsene/">Ablauf der Diagnostik</a>).</li><li>Aufklärung und Austausch, etwa über Selbsthilfegruppen wie ADHS Deutschland.</li><li>Alltagsbegleitung, die an den eigenen Stärken ansetzt und nicht an Defiziten.</li></ul>`],
  ],
  faq: [['Wie erkenne ich ADHS bei mir als Frau?', 'Das kannst Du nicht allein beurteilen. Wenn Du Dich in den Beschreibungen wiederfindest, kann eine fachliche Abklärung Klarheit schaffen.'], ['Ist ADHS bei Frauen seltener?', 'Laut ADHS Deutschland gilt die Annahme, ADHS komme bei Mädchen kaum vor, seit über zehn Jahren als falsch.']],
  sources: [S.adhsfrauen, S.adhsde],
  related: ['adhs-bei-erwachsenen', 'adhs-diagnose-erwachsene', 'audhs-autismus-und-adhs'],
});

A.push({
  slug: 'audhs-autismus-und-adhs', cat: 'gefuehle', title: 'AuDHS: Wenn Autismus und ADHS zusammenkommen', readMin: 6,
  desc: 'AuDHS bedeutet gleichzeitig Autismus und ADHS. Häufigkeit, Gemeinsamkeiten, Unterschiede, Diagnostik und Alltagstipps. Mit Quellen.',
  short: 'AuDHS beschreibt das gleichzeitige Vorliegen von Autismus und ADHS. Es ist keine eigenständige Diagnose. ADHS betrifft laut Apotheken Umschau etwa 2,5 bis 3 Prozent der Erwachsenen, Autismus rund 1 Prozent. Etwa 30 bis 50 Prozent der Menschen mit Autismus erfüllen zusätzlich die Kriterien für ADHS, die Zahlen gehen aber stark auseinander.',
  sections: [
    ['was', 'Was bedeutet AuDHS?', `<p>Fachlich spricht man von einer Komorbidität, also dem gleichzeitigen Auftreten mehrerer Krankheitsbilder. AuDHS ist keine eigenständige Diagnose, wird aber viel diskutiert. Im Alltag zeigt sich oft ein inneres Tauziehen: ein starkes Bedürfnis nach Struktur auf der einen Seite, Impulsivität und Ablenkbarkeit auf der anderen.</p>`],
    ['zahlen', 'Wie häufig ist das?', `<table><tr><th>Gruppe</th><th>Angabe (Apotheken Umschau)</th></tr><tr><td>ADHS bei Erwachsenen</td><td>etwa 2,5 bis 3 Prozent</td></tr><tr><td>Autismus</td><td>rund 1 Prozent</td></tr><tr><td>Menschen mit Autismus, die zusätzlich die Kriterien für ADHS erfüllen</td><td>etwa 30 bis 50 Prozent (Zahlen gehen sehr auseinander)</td></tr></table>`],
    ['gemeinsam', 'Gemeinsamkeiten und Unterschiede', `<p>Beide gelten als neurobiologisch geprägt und stark genetisch beeinflusst. Unterschiede zeigen sich im Sozialen: Autismus geht häufig mit Schwierigkeiten einher, Mimik, Gestik und soziale Regeln zu lesen, während bei ADHS eher Impulsivität im Vordergrund steht. Abhängigkeitserkrankungen treten bei Autismus deutlich seltener auf als bei ADHS.</p>`],
    ['diagnose', 'Diagnostik', `<p>Sie basiert auf ausführlicher Anamnese und standardisierten Fragebögen und bezieht die Kindheitsentwicklung sowie Fremdberichte ein. Die Abgrenzung ist anspruchsvoll, weil sich Symptome überlappen oder verdecken können. Der Fokus liegt auf dem individuellen Funktionsprofil.</p>`],
    ['risiken', 'Risiken und Begleiterkrankungen', `<p>Begleiterkrankungen sind laut Apotheken Umschau sehr häufig, darunter Suchterkrankungen, Depressionen und Angststörungen. Dazu kommen chronische Erschöpfung durch dauerhafte Anpassungsleistungen (Masking) und soziale Missverständnisse, die zu Rückzug führen können.</p>`],
    ['alltag', 'Was im Alltag helfen kann', `<ul><li>Feste Routinen und visuelle Pläne</li><li>Aufgabenlisten, Timer und Erinnerungen</li><li>Reizarme Arbeitsumgebungen statt Großraumbüros</li><li>Klare, direkte Kommunikation</li><li>Regelmäßige Pausen zur Reizregulation</li><li>Bewegung, Schlaf und Achtsamkeit zur Stressreduktion</li></ul>`],
  ],
  faq: [['Ist AuDHS eine eigene Diagnose?', 'Nein. Es beschreibt das gleichzeitige Vorliegen von Autismus und ADHS und ist keine eigenständige Diagnose.'], ['Wer kann AuDHS abklären?', 'Fachleute, die sich mit beiden Themen bei Erwachsenen auskennen. Fragen Sie bei der Anmeldung gezielt nach.']],
  sources: [S.audhs, S.barmer],
  related: ['adhs-bei-erwachsenen', 'adhs-und-schlaf'],
});

A.push({
  slug: 'nachteilsausgleich-adhs', cat: 'arbeit', title: 'Nachteilsausgleich bei ADHS: Was er ist und wie man ihn beantragt', readMin: 7,
  desc: 'Nachteilsausgleich bei ADHS in Schule und Ausbildung: Rechtsgrundlagen, mögliche Maßnahmen, Antrag und Nachweise. Mit Quellen von ADHS Deutschland.',
  short: 'Ein Nachteilsausgleich gleicht Benachteiligungen aus, ohne die fachlichen Anforderungen zu senken. Er wird im Einzelfall bei der Schule oder Ausbildungseinrichtung beantragt und begründet, bei Prüfungen immer vorher. Typisch sind zum Beispiel mehr Zeit oder ein angepasster Arbeitsplatz. Die Regeln unterscheiden sich je nach Bundesland.',
  sections: [
    ['was', 'Was ist ein Nachteilsausgleich?', `<p>Nach Angaben von ADHS Deutschland beruht der Nachteilsausgleich auf der UN-Behindertenrechtskonvention vom 13.12.2006, auf Artikel 3 Absatz 3 Satz 2 des Grundgesetzes („Niemand darf wegen seiner Behinderung benachteiligt werden“) und auf dem SGB IX. Er soll im Sinne der Chancengleichheit Benachteiligungen aufgrund von chronischen Erkrankungen, Beeinträchtigungen oder Behinderungen verringern. Die fachlich-inhaltlichen Leistungsanforderungen werden dabei nicht geringer bemessen. Er unterscheidet sich vom Notenschutz oder einer Anforderungswahl.</p>`],
    ['massnahmen', 'Welche Maßnahmen sind möglich?', `<p>ADHS Deutschland nennt unter anderem:</p><ul><li>Zeitzuschlag bis maximal zur Hälfte der regulären Bearbeitungszeit</li><li>technische und didaktische Hilfsmittel, etwa ein Laptop</li><li>Vorlesen von Aufgabenstellungen oder mündliche statt schriftliche Bearbeitung</li><li>besondere Organisation des Lern- oder Arbeitsplatzes</li><li>individuell gestaltete Pausenregelungen</li><li>quantitativ reduzierte Aufgabenstellungen oder reduzierte Hausaufgaben</li></ul>`],
    ['antrag', 'Wie wird er beantragt?', `<ol><li><b>Antrag stellen:</b> Der Nachteilsausgleich muss im Einzelfall bei der Schule oder Ausbildungseinrichtung beantragt und begründet werden, in der Regel von den Eltern beziehungsweise volljährigen Schülerinnen und Schülern.</li><li><b>Rechtzeitig:</b> Bei Prüfungsleistungen ist er immer vorher zu beantragen.</li><li><b>Nachweise:</b> Arztberichte, psychologische Stellungnahmen oder andere diagnostische Unterlagen können die Begründung stützen. In einigen Bundesländern wird ausdrücklich eine fachärztliche Stellungnahme verlangt oder kann verlangt werden.</li><li><b>Entscheidung:</b> Sie trifft die Schule nach Beratung durch das vorgesehene Gremium, je nach Bundesland auch die Schulleitung oder Schulaufsicht.</li></ol>`],
    ['laender', 'Unterschiede zwischen den Bundesländern', `<p>Die Regelungen stehen in den jeweiligen Schulgesetzen sowie in Ausbildungs- und Prüfungsordnungen. ADHS Deutschland weist darauf hin, dass AD(H)S in Bayern wegen des Kerns der Leistungsanforderungen (Konzentrationsvermögen) nach der dortigen Schulordnung als nicht nachteilsausgleichsfähig gilt. Informieren Sie sich deshalb immer bei der zuständigen Stelle Ihres Bundeslandes.</p>`],
    ['studium', 'Und im Studium?', `<p>Die Quelle behandelt vor allem Schule und Ausbildung. Für Hochschulen gelten eigene Prüfungsordnungen, die häufig Regelungen zum Nachteilsausgleich enthalten. Wende Dich an die Beratungsstelle Deiner Hochschule und an die Prüfungsausschüsse und frage nach Fristen und Nachweisen.</p>`],
  ],
  faq: [['Senkt ein Nachteilsausgleich die Anforderungen?', 'Nein. Laut ADHS Deutschland werden die fachlich-inhaltlichen Leistungsanforderungen nicht geringer bemessen.'], ['Brauche ich dafür eine Diagnose?', 'Nachweise sind in der Regel nötig. In einigen Bundesländern wird ausdrücklich eine fachärztliche Stellungnahme verlangt.']],
  sources: [S.adhsnach],
  related: ['adhs-bei-erwachsenen', 'adhs-diagnose-erwachsene'],
});

A.push({
  slug: 'coaching-oder-therapie-bei-adhs', cat: 'behandlung', title: 'Coaching oder Therapie bei ADHS: Was ist der Unterschied?', readMin: 6,
  desc: 'ADHS-Coaching und Psychotherapie unterscheiden sich in Ziel, Qualifikation und Grenzen. Was Coaching leisten kann und was nicht.',
  short: 'Psychotherapie und ärztliche Behandlung behandeln Erkrankungen und werden von dafür ausgebildeten Fachleuten geleistet. Coaching und Begleitung sind alltagsnah: Struktur, Selbstführung, Gefühle und Beziehungen. Sie können Behandlung sinnvoll ergänzen, aber nicht ersetzen und stellen keine Diagnosen.',
  sections: [
    ['vergleich', 'Der Vergleich auf einen Blick', `<table><tr><th></th><th>Psychotherapie und ärztliche Behandlung</th><th>Coaching und Begleitung</th></tr><tr><td><b>Ziel</b></td><td>Erkrankungen behandeln, Symptome lindern</td><td>Alltag gestalten, Strategien entwickeln, Selbstführung stärken</td></tr><tr><td><b>Wer</b></td><td>Fachärztinnen und Fachärzte, Psychotherapeutinnen und Psychotherapeuten</td><td>Coaches, Mentorinnen und Mentoren, keine geschützte Heilberufsbezeichnung</td></tr><tr><td><b>Diagnose</b></td><td>Ja, im Rahmen der Diagnostik</td><td>Nein</td></tr><tr><td><b>Medikamente</b></td><td>Verordnung durch Ärztinnen und Ärzte</td><td>Keine Empfehlung, keine Verordnung</td></tr><tr><td><b>Kosten</b></td><td>Kassenleistung, wenn eine Diagnose vorliegt (laut BARMER)</td><td>in der Regel Selbstzahlung</td></tr></table>`],
    ['barmer', 'Was Fachquellen zur Behandlung sagen', `<p>Laut BARMER umfasst die Behandlung bei Erwachsenen Psychotherapie (zum Beispiel Verhaltenstherapie), Medikamente und Psychoedukation. Psychoedukation wird dort als Coaching zur Aufklärung über ADHS und Vermittlung von Alltagsstrategien beschrieben.</p>`],
    ['leisten', 'Was Coaching und Begleitung leisten können', `<ul><li>Alltagsstruktur finden, die zu Dir passt</li><li>Zeitgefühl, Aufschieben und Reizüberflutung besser einordnen und steuern</li><li>Intensive Gefühle früher bemerken</li><li>Grenzen setzen und Beziehungen entlasten</li><li>Stärken sichtbar machen, ohne Schwierigkeiten zu verharmlosen</li></ul>`],
    ['nicht', 'Was sie nicht leisten können', `<ul><li>Eine ADHS-Diagnose stellen oder ausschließen</li><li>Medikamente empfehlen oder ersetzen</li><li>Psychotherapie ersetzen, etwa bei Depression oder Angststörung</li><li>Schnelle Lösungen versprechen</li></ul><div class="box box--warn"><b>Bei akuter Krise</b> wende Dich an Ärztinnen, Ärzte, Psychotherapeutinnen, Psychotherapeuten oder die Telefonseelsorge (116 123, kostenlos). Im Notfall: 112.</div>`],
  ],
  faq: [['Kann ich Coaching zusätzlich zur Therapie nutzen?', 'Ja, viele nutzen beides. Sprich offen mit Deiner Therapeutin oder Deinem Therapeuten darüber.'], ['Woran erkenne ich seriöses Coaching?', 'Seriöse Coaches stellen keine Diagnosen, versprechen keine Heilung, empfehlen keine Medikamente und benennen die Grenze zur Therapie klar.']],
  sources: [S.barmer],
  related: ['adhs-bei-erwachsenen', 'adhs-medikamente-ueberblick'],
});

A.push({
  slug: 'adhs-medikamente-ueberblick', cat: 'behandlung', title: 'Medikamente bei ADHS im Erwachsenenalter: ein Überblick', readMin: 5,
  desc: 'Welche Wirkstoffe bei ADHS im Erwachsenenalter zugelassen sind und was dazu gehört. Neutraler Überblick, keine Empfehlung. Mit Quellen.',
  short: 'Medikamente können bei ADHS Beschwerden lindern, die Konzentration verbessern und Impulsivität verringern. Laut BARMER sind Methylphenidat, Lisdexamfetamin und Atomoxetin zugelassen; sie schlagen bei 60 bis 70 Prozent der Betroffenen gut an. Ob und welches Medikament in Frage kommt, entscheiden Ärztinnen und Ärzte.',
  sections: [
    ['info', 'Wichtiger Hinweis', `<div class="box box--warn"><b>Keine Empfehlung:</b> Diese Seite informiert über das, was Fachquellen berichten. Sie gibt keine Empfehlung zu Medikamenten, Dosierungen oder Absetzen. Bitte sprich darüber mit Deiner behandelnden Ärztin oder Deinem Arzt.</div>`],
    ['was', 'Was sagen Fachquellen?', `<p>Die BARMER beschreibt, dass Medikamente Beschwerden lindern, die Konzentration verbessern und die Impulsivität verringern können. Als zugelassene Wirkstoffe werden Methylphenidat, Lisdexamfetamin und Atomoxetin genannt. Nach Angaben der BARMER schlagen Medikamente bei 60 bis 70 Prozent der Betroffenen gut an.</p>`],
    ['kombi', 'Medikamente sind meist nur ein Baustein', `<p>Die Behandlung bei Erwachsenen setzt sich laut BARMER aus Medikamenten und/oder Psychotherapie zusammen, ergänzt durch Psychoedukation. Viele Betroffene kombinieren medizinische Behandlung mit Alltagsstrategien und Begleitung.</p>`],
    ['kosten', 'Kosten', `<p>Gesetzliche Krankenkassen übernehmen laut BARMER die Kosten medizinisch notwendiger Behandlungen, sofern eine Diagnose vorliegt und die Behandlung über zugelassene Ärztinnen, Ärzte oder Psychotherapeutinnen und Psychotherapeuten erfolgt.</p>`],
    ['fragen', 'Fragen, die Du Deiner Ärztin oder Deinem Arzt stellen kannst', `<ul><li>Kommt für mich eine medikamentöse Behandlung in Frage, und warum (nicht)?</li><li>Welche Ziele verfolgen wir, und woran merken wir, ob es hilft?</li><li>Auf welche Nebenwirkungen soll ich achten?</li><li>Wie lange und wie oft sind Kontrolltermine?</li><li>Welche Rolle sollen Psychotherapie und Alltagsstrategien spielen?</li></ul>`],
  ],
  faq: [['Machen Medikamente süchtig?', 'Diese Frage gehört in die ärztliche Beratung, denn sie hängt vom Wirkstoff und der individuellen Situation ab. Lass Dich dazu aufklären.'], ['Brauche ich eine Diagnose für Medikamente?', 'Ja. Laut BARMER setzt die Kostenübernahme eine Diagnose voraus.']],
  sources: [S.barmer],
  related: ['adhs-bei-erwachsenen', 'coaching-oder-therapie-bei-adhs'],
});

A.push({
  slug: 'adhs-und-schlaf', cat: 'alltag', title: 'ADHS und Schlaf: Warum Einschlafen so schwer sein kann', readMin: 5,
  desc: 'Schlafstörungen sind bei Erwachsenen mit ADHS ein häufiges Begleitsymptom. Was bekannt ist und welche Alltagsideen helfen können.',
  short: 'Schlafstörungen gehören laut NDR zu den häufigen Begleitsymptomen bei Erwachsenen mit ADHS: Einschlafprobleme, ruheloser Schlaf oder nächtliches Erwachen. Bei anhaltenden Problemen sollte die Ursache ärztlich abgeklärt werden. Regelmäßige Abläufe und weniger Reize am Abend können im Alltag helfen.',
  sections: [
    ['bekannt', 'Was ist bekannt?', `<p>Der NDR nennt Schlafstörungen als typisches Begleitsymptom bei Erwachsenen mit ADHS. Dazu zählen Einschlafprobleme, ruheloser Schlaf und nächtliches Erwachen. ADHS Deutschland führt unter den Begleiterkrankungen unter anderem Schlafstörungen, die Unfähigkeit, sich zu entspannen, und das Restless-Legs-Syndrom auf.</p>`],
    ['warum', 'Warum Abschalten oft schwerfällt', `<p>Viele Betroffene beschreiben, dass der Kopf abends nicht zur Ruhe kommt. Das passt zu der inneren Unruhe, die bei Erwachsenen häufig an die Stelle äußerer Hyperaktivität tritt. Eine allgemeine Erklärung für jeden Einzelfall gibt es nicht.</p>`],
    ['alltag', 'Ideen für den Abend', `<p>Die folgenden Anregungen stammen aus der Alltagspraxis und sind keine medizinischen Empfehlungen:</p><ul><li>Feste Zeiten für Aufstehen und Zubettgehen, auch am Wochenende</li><li>Abends Bildschirme, Licht und Gespräche reduzieren</li><li>Gedanken vor dem Schlafen aufschreiben und den Zettel weglegen</li><li>Bewegung am Tag, am späten Abend eher ruhig (laut NDR hilft Sport, überschüssige Energie abzubauen)</li><li>Ein kurzes Abendritual, das sich an etwas Bestehendes koppeln lässt</li></ul>`],
    ['arzt', 'Wann ärztlicher Rat sinnvoll ist', `<p>Wenn Schlafprobleme über längere Zeit bestehen, tagsüber stark beeinträchtigen oder von körperlichen Beschwerden begleitet werden, lass sie ärztlich abklären. Schlafstörungen können viele Ursachen haben.</p>`],
  ],
  faq: [['Sind Schlafprobleme ein Beweis für ADHS?', 'Nein. Sie sind häufig, aber nicht spezifisch. Eine Diagnose entsteht aus der gesamten Abklärung.']],
  sources: [S.ndr, S.adhskomor],
  related: ['adhs-bei-erwachsenen', 'zeitblindheit-adhs'],
});

A.push({
  slug: 'zeitblindheit-adhs', cat: 'alltag', title: 'Zeitblindheit bei ADHS: Strategien für den Alltag', readMin: 6,
  desc: 'Zeitblindheit beschreibt, dass Zeit schwer zu fühlen ist. Was damit gemeint ist, was daraus folgt und welche Strategien im Alltag helfen können.',
  short: 'Zeitblindheit ist ein Alltagsbegriff, kein Diagnosekriterium. Gemeint ist, dass Zeit schwer zu spüren ist: Dinge dauern länger oder kürzer als gedacht. Hilfreich können sichtbare Zeit, rückwärts geplante Termine, Puffer und kleine, abgegrenzte Schritte sein.',
  sections: [
    ['was', 'Was ist mit Zeitblindheit gemeint?', `<p>Der Begriff stammt aus dem Austausch von Betroffenen und der Beratungspraxis. Gemeint ist, dass viele Menschen mit ADHS Zeit schlecht fühlen können. Fünf Minuten scheinen lang oder kurz, zwei Stunden sind weg, bevor man es merkt. Zeitblindheit ist kein offizielles Diagnosekriterium. Die Alltagsfolgen sind aber real: Verspätungen, zu knapp geplante Aufgaben und Scham.</p>`],
    ['strategien', 'Strategien, die helfen können', `<ul><li><b>Zeit sichtbar machen:</b> große Uhr, Sanduhr-Timer, Apps mit Balkenanzeige.</li><li><b>Rückwärts planen:</b> Wann muss ich los? Wann muss ich anfangen, mich fertig zu machen?</li><li><b>Puffer einplanen:</b> besser zu viel als zu wenig.</li><li><b>Aufgaben in Blöcke teilen:</b> sichtbarer Anfang, sichtbares Ende, dazwischen Pausen. Auch der NDR nennt kleinschrittige Ziele und eingeplante Pausen.</li><li><b>Erinnerungen nutzen:</b> Timer zum Losgehen, nicht nur zum Termin.</li></ul>`],
    ['anfangen', 'Anfangen erleichtern', `<ul><li>Der erste Schritt ist so klein, dass er fast lächerlich wirkt: Datei öffnen, Teller in die Spüle, einen Satz schreiben.</li><li>Fünf-Minuten-Timer: Wenn Du danach aufhörst, ist das in Ordnung.</li><li>Body-Doubling: gemeinsam mit jemandem arbeiten, der anwesend ist.</li></ul><p>Das sind Alltagsideen aus der Begleitungspraxis. Sie ersetzen keine Behandlung.</p>`],
    ['grenzen', 'Wo diese Tipps an Grenzen stoßen', `<p>Wenn Tipps dauerhaft nicht greifen und Alltag, Beruf oder Beziehungen stark leiden, ist eine fachliche Abklärung sinnvoll (<a href="/artikel/adhs-diagnose-erwachsene/">ADHS-Diagnose bei Erwachsenen</a>).</p>`],
  ],
  faq: [['Ist Zeitblindheit ein Symptom von ADHS?', 'Der Begriff wird im Zusammenhang mit ADHS verwendet, ist aber kein offizielles Diagnosekriterium.']],
  sources: [S.ndr],
  related: ['adhs-und-schlaf', 'adhs-bei-erwachsenen'],
});

A.push({
  slug: 'adhs-ursachen', cat: 'erkennen', title: 'Ursachen von ADHS: Was die Forschung diskutiert', readMin: 5,
  desc: 'Woher kommt ADHS? Genetik, Botenstoffe, Gehirn und weitere Faktoren in verständlicher Zusammenfassung. Mit Quellen.',
  short: 'ADHS hat keine einzelne Ursache. Laut BARMER werden Genetik mit einer Vielzahl von Risikogenen, ein veränderter Stoffwechsel von Dopamin und Noradrenalin, bestimmte Veränderungen im Gehirn sowie Frühgeburt und Komplikationen bei der Geburt als Faktoren genannt.',
  sections: [
    ['faktoren', 'Die genannten Faktoren', `<ul><li><b>Genetik:</b> Es zeigt sich eine familiäre Häufung durch eine Vielzahl von Risikogenen.</li><li><b>Botenstoffe:</b> Der Stoffwechsel von Dopamin und Noradrenalin ist verändert.</li><li><b>Gehirn:</b> Bestimmte Veränderungen im Gehirn werden beschrieben.</li><li><b>Geburt:</b> Frühgeburt und andere Komplikationen bei der Geburt.</li></ul>`],
    ['einordnung', 'Wie ist das einzuordnen?', `<p>ADHS zählt nach Angaben der BARMER zu den neuronalen Entwicklungsstörungen. Die genannten Faktoren wirken zusammen, und nicht jeder Faktor trifft auf jede Person zu. Mangelnde Disziplin oder Erziehung werden darin nicht als Ursache genannt.</p>`],
    ['folgen', 'Warum das wichtig ist', `<p>Wer versteht, dass ADHS eine neuronale Entwicklungsbesonderheit ist, kann Schwierigkeiten anders einordnen und Hilfe suchen, ohne sich dafür zu schämen. Mehr zur Abklärung: <a href="/artikel/adhs-diagnose-erwachsene/">ADHS-Diagnose bei Erwachsenen</a>.</p>`],
  ],
  faq: [['Ist ADHS vererbbar?', 'Laut BARMER zeigt sich eine familiäre Häufung durch eine Vielzahl von Risikogenen.']],
  sources: [S.barmer],
  related: ['adhs-bei-erwachsenen', 'adhs-diagnose-erwachsene'],
});

const CATS = [
  { slug: 'erkennen', name: 'ADHS erkennen', icon: 'E', desc: 'Symptome, Ursachen und Erscheinungsformen bei Erwachsenen, Frauen und Männern.' },
  { slug: 'diagnose', name: 'Diagnose und Abklärung', icon: 'D', desc: 'Wer die Diagnose stellt, wie sie abläuft, was sie kostet und wie Sie sich vorbereiten.' },
  { slug: 'behandlung', name: 'Behandlung und Hilfe', icon: 'B', desc: 'Psychotherapie, Medikamente, Psychoedukation und Coaching im Überblick und im Vergleich.' },
  { slug: 'alltag', name: 'Alltag und Selbstmanagement', icon: 'A', desc: 'Zeit, Struktur, Schlaf und Reize: Strategien, die im Alltag funktionieren können.' },
  { slug: 'gefuehle', name: 'Gefühle und Psyche', icon: 'G', desc: 'Emotionen, Begleiterkrankungen, Autismus und Hochsensibilität.' },
  { slug: 'beziehung', name: 'Beziehung und Familie', icon: 'F', desc: 'Partnerschaft, Angehörige und Eltern. Orientierung und gute Anlaufstellen.' },
  { slug: 'arbeit', name: 'Arbeit und Studium', icon: 'W', desc: 'Beruf, Ausbildung, Studium und Nachteilsausgleich.' },
  { slug: 'recht', name: 'Recht und Praxis', icon: 'R', desc: 'Krankenkasse, Anträge und Ansprüche: verständlich erklärt.' },
];
const GLOSS = [
  ['ADHS', 'Aufmerksamkeitsdefizit-Hyperaktivitätsstörung. Eine neuronale Entwicklungsbesonderheit, die in der Kindheit beginnt und bis ins Erwachsenenalter bestehen kann.'],
  ['ADS', 'Umgangssprachlich für ADHS ohne ausgeprägte Hyperaktivität (überwiegend unaufmerksame Erscheinungsform). Fachlich gilt heute meist die Bezeichnung ADHS.'],
  ['AuDHS', 'Gleichzeitiges Vorliegen von Autismus und ADHS. Keine eigenständige Diagnose.'],
  ['Komorbidität', 'Gleichzeitiges Auftreten mehrerer Erkrankungen, zum Beispiel ADHS und Depression.'],
  ['Psychoedukation', 'Aufklärung über ein Krankheitsbild und Vermittlung von Alltagsstrategien.'],
  ['Impulsivität', 'Handeln oder Sprechen, bevor die Folgen bedacht werden, zum Beispiel Unterbrechen oder spontane Entscheidungen.'],
  ['Hyperfokus', 'Sehr intensive Konzentration auf eine Sache, bei der andere Dinge ausgeblendet werden. Kein Diagnosekriterium.'],
  ['Zeitblindheit', 'Alltagsbegriff dafür, dass Zeit schwer zu fühlen und einzuschätzen ist. Kein Diagnosekriterium.'],
  ['Emotionsregulation', 'Die Fähigkeit, Gefühle wahrzunehmen, einzuordnen und mit ihnen umzugehen.'],
  ['Neurodivergenz', 'Sammelbegriff für Menschen, deren Denken, Fühlen und Wahrnehmen von der typischen Entwicklung abweicht, zum Beispiel bei ADHS oder Autismus.'],
  ['Masking', 'Verbergen oder Ausgleichen von Besonderheiten, um nach außen angepasst zu wirken. Kann zu dauerhafter Erschöpfung führen.'],
  ['Body-Doubling', 'Gemeinsam mit einer anwesenden Person arbeiten, um leichter anzufangen und dranzubleiben. Eine Alltagsstrategie.'],
  ['Nachteilsausgleich', 'Maßnahme, die Benachteiligungen aufgrund von Beeinträchtigungen ausgleicht, ohne die fachlichen Anforderungen zu senken.'],
  ['Anamnese', 'Das ärztliche oder psychotherapeutische Gespräch über Vorgeschichte und Beschwerden.'],
  ['Methylphenidat', 'Einer der zugelassenen Wirkstoffe bei ADHS. Die Verordnung erfolgt ärztlich.'],
  ['Verhaltenstherapie', 'Eine Form der Psychotherapie, in der Strategien erlernt und gefestigt werden.'],
];
const { A2, S2 } = require('./articles2.cjs');
const { A3, S3 } = require('./articles3.cjs');
const today = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
const ALL = A.concat(A2, A3).filter((a) => !a.publishedAt || a.publishedAt <= today);
module.exports = { A: ALL, CATS, GLOSS, S: { ...S, ...S2, ...S3 } };
