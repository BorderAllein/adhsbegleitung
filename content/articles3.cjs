// Artikel-Batch 3 (vorbereitet 09.11.2026, Veröffentlichung Mo/Mi/Fr über publishedAt).
const S3 = {
  barmer: { t: 'BARMER: ADHS bei Erwachsenen. Ursachen, Symptome und Behandlung', u: 'https://www.barmer.de/gesundheit-verstehen/wissen/krankheiten-a-z/adhs-erwachsene-1071016' },
  ndr: { t: 'NDR Ratgeber Gesundheit: ADHS bei Erwachsenen. Symptome, Diagnostik und Therapie', u: 'https://www.ndr.de/ratgeber/gesundheit/ADHS-bei-Erwachsenen-Symptome-Diagnostik-Therapie,adhs194.html' },
  adhskomor: { t: 'ADHS Deutschland e. V.: Begleiterkrankungen bei ADHS', u: 'https://adhs-deutschland.de/begleitstoerungen/die-begleiterkrankungen-bei-adhs-assoziierte-stoerungen-oder-komorbiditaeten' },
  au: { t: 'Apotheken Umschau: ADHS bei Erwachsenen. Symptome, Behandlung und Alltagshilfe (15.07.2026)', u: 'https://www.apotheken-umschau.de/krankheiten-symptome/psychische-krankheiten/adhs-bei-erwachsenen-symptome-behandlung-und-hilfe-im-alltag-1549281.html' },
  zdf: { t: 'ZDFheute: ADHS und ADS im Job. Pomodoro und andere Techniken (28.11.2024)', u: 'https://www.zdfheute.de/ratgeber/adhs-ads-aufmerksamkeit-konzentration-pomodoro-timer-100.html' },
  aoksh: { t: 'AOK-Bundesverband: Selbsthilfe bei AD(H)S-Diagnose im Erwachsenenalter (2025)', u: 'https://www.aok.de/pp/selbsthilfe/inkontakt/adhs-erwachsene/' },
  aokgg: { t: 'AOK-Bundesverband, G+G: Gesund arbeiten mit ADHS (27.01.2026)', u: 'https://www.aok.de/pp/gg/gesundheitssystem/adhs/' },
  arzteblatt: { t: 'Ivanova M et al.: Inzidenz von AD(H)S-Spektrum-Störungen bei Erwachsenen. Deutsches Ärzteblatt International 2025;122:697-8', u: 'https://www.aerzteblatt.de/archiv/inzidenz-von-adhs-spektrum-stoerungen-bei-erwachsenen-22c4cb5b-38c9-4d19-baa1-70bbc8c595b3' },
  partnerbro: { t: 'ADHS Deutschland e. V.: ADHS und Partnerschaft (Broschüre)', u: 'https://www.adhs.info/fileadmin/redakteure/ADHS-Infoportal/Fuer-Angehoerige/Partner/Broschuere_ADHSDeu_Partner.pdf' },
};
const A3 = [];

A3.push({
  slug: 'adhs-und-depression-angst', cat: 'gefuehle', publishedAt: '2026-11-11', title: 'ADHS und Depression, Angst: Warum sie so oft zusammen auftreten', readMin: 6,
  desc: 'Bei Erwachsenen mit ADHS kommen Depressionen und Angststörungen häufig vor. Was Zahlen, Gründe und die Bedeutung der Abklärung nach ADHS Deutschland und NDR sagen.',
  short: 'Erwachsene mit ADHS haben häufig weitere seelische Erkrankungen. ADHS Deutschland nennt Angststörungen und Depressionen bei bis zu 50 Prozent. Als Gründe gelten eine erhöhte Verletzlichkeit, genetische Faktoren und viele negative Erfahrungen. Wichtig ist, dass beides erkannt und behandelt wird, sonst bleibt die ADHS oft unentdeckt.',
  sections: [
    ['zahlen', 'Wie häufig sind Begleiterkrankungen?', `<p>Nach ADHS Deutschland treten <b>Angststörungen und/oder Depressionen bei bis zu 50 Prozent</b> der Erwachsenen mit ADHS auf. Die Apotheken Umschau nennt zusätzlich, dass 80 Prozent der Betroffenen mindestens eine weitere seelische Erkrankung entwickeln und 50 Prozent zwei oder mehr. Rund 3 Prozent der Erwachsenen sind laut Apotheken Umschau von ADHS betroffen. Der NDR schreibt, dass viele Erwachsene mit ADHS Misserfolge erleben und an Selbstzweifeln leiden und deshalb vermehrt Depressionen oder Angststörungen entwickeln.</p>`],
    ['gruende', 'Warum entsteht diese Verbindung?', `<p>ADHS Deutschland nennt mehrere Erklärungen:</p><ul><li><b>Verletzlichkeit:</b> Menschen mit ADHS sind vulnerabler.</li><li><b>Genetik:</b> Es gibt genetische Gründe.</li><li><b>Viele negative Erfahrungen</b> in der Kindheit, Ablehnung, eigenes Versagen und Stress. Sie können ein stabiles Selbstwertgefühl verhindern, Selbstzweifel und Unsicherheit gelten als Risikofaktor für Ängste und Depressionen.</li><li><b>Symptomverschiebung:</b> Die Beschwerden verändern sich im Lauf des Lebens, sodass der Zusammenhang mit ADHS nicht mehr erkannt wird.</li></ul>`],
    ['abklaerung', 'Warum die Abklärung wichtig ist', `<p>ADHS Deutschland beschreibt: Oft werden im Erwachsenenalter nur die Begleiterkrankungen festgestellt, und die zugrunde liegende ADHS bleibt unerkannt. Dann bleiben die ADHS-Symptome unbehandelt, und möglicherweise lassen sich auch Angst und Depression nicht zufriedenstellend behandeln. Sowohl die Begleiterkrankungen als auch die ADHS müssen gesondert behandelt werden. Die Apotheken Umschau weist außerdem darauf hin, dass im Erwachsenenalter die Symptome der begleitenden Störungen teils deutlicher werden können als die der ADHS selbst.</p><p>Wie eine Abklärung abläuft, erklärt <a href="/artikel/adhs-diagnose-erwachsene/">ADHS-Diagnose bei Erwachsenen</a>. Eine erste Orientierung gibt der <a href="/adhs-test/">ADHS-Test</a>.</p>`],
    ['hilfe', 'Wann Hilfe wichtig ist', `<p>Bei anhaltend gedrückter Stimmung, starker Angst oder Gedanken, sich das Leben zu nehmen, such bitte ärztliche oder psychotherapeutische Hilfe. Die Telefonseelsorge ist kostenlos unter 116 123 erreichbar, im Notfall gilt 112. Begleitung im Alltag, zum Beispiel durch <a href="/begleitung/">Angie</a>, ersetzt keine Behandlung.</p>`],
  ],
  faq: [
    ['Ist Depression bei ADHS eine Folge der ADHS?', 'Die Quellen beschreiben einen Zusammenhang, der unter anderem durch viele negative Erfahrungen und erhöhte Verletzlichkeit erklärt wird. Im Einzelfall klären das Fachleute.'],
    ['Reicht es, die Depression zu behandeln?', 'Laut ADHS Deutschland müssen Begleiterkrankungen und ADHS jeweils gesondert behandelt werden. Wird nur die Begleiterkrankung erkannt, bleibt die ADHS oft unbehandelt.'],
  ],
  sources: [S3.adhskomor, S3.au, S3.ndr],
  related: ['adhs-diagnose-erwachsene', 'adhs-und-schlaf', 'audhs-autismus-und-adhs'],
});

A3.push({
  slug: 'adhs-diagnosen-nehmen-zu', cat: 'erkennen', publishedAt: '2026-11-13', title: 'Immer mehr ADHS-Diagnosen bei Erwachsenen: Was dahintersteckt', readMin: 5,
  desc: 'Zwischen 2015 und 2024 hat sich die Zahl der ADHS-Erstdiagnosen bei Erwachsenen in Deutschland verdreifacht. Was die Auswertung zeigt und wie sie eingeordnet wird.',
  short: 'Eine Auswertung bundesweiter Abrechnungsdaten zeigt: Zwischen 2015 und 2024 hat sich die Diagnosehäufigkeit von ADHS bei Erwachsenen etwa verdreifacht, besonders bei unter 40-Jährigen und jungen Frauen. Die Autorinnen und Autoren gehen davon aus, dass viele schon früher Symptome hatten, die erst spät erkannt wurden.',
  sections: [
    ['studie', 'Was die Auswertung zeigt', `<p>Das Deutsche Ärzteblatt veröffentlichte 2025 eine Analyse bundesweiter vertragsärztlicher Abrechnungsdaten der gesetzlichen Krankenversicherung für 2015 bis 2024 (Ivanova et al.). Der AOK-Bundesverband fasst die Ergebnisse so zusammen:</p><ul><li>Die Diagnosehäufigkeit von ADHS im Erwachsenenalter hat sich in diesem Zeitraum <b>etwa verdreifacht</b>.</li><li>Männer waren über den gesamten Zeitraum häufiger betroffen als Frauen, der Unterschied hat sich zuletzt aber stark verringert.</li><li>Am häufigsten wurde bei jungen Erwachsenen unter 40 Jahren diagnostiziert, besonders stark stieg die Zahl bei jungen Frauen.</li></ul>`],
    ['deutung', 'Wie wird das gedeutet?', `<p>Laut AOK-Beitrag gehen die Autorinnen und Autoren davon aus, dass viele Betroffene schon in früheren Lebensphasen Symptome hatten, die erst später erkannt wurden. Als Gründe nennen sie eine gestiegene Aufmerksamkeit für ADHS in der Bevölkerung und zusätzliche psychische Belastungen durch die Corona-Pandemie.</p><p>Die Zahlen belegen also vor allem, dass mehr Erwachsene diagnostiziert werden. Sie sagen nichts darüber, ob ADHS tatsächlich häufiger geworden ist.</p>`],
    ['bedeutung', 'Was das für Betroffene bedeutet', `<p>Mehr Aufmerksamkeit kann helfen, dass Frauen und Menschen mit unauffälligen Verläufen früher erkannt werden, mehr dazu in <a href="/artikel/adhs-bei-frauen/">ADHS bei Frauen</a>. Wer eine Abklärung sucht, findet Orientierung in <a href="/artikel/adhs-und-krankenkasse/">ADHS und Krankenkasse</a> und im <a href="/adhs-test/">ADHS-Test</a>.</p>`],
    ['arbeit', 'Auswirkungen im Berufsleben', `<p>Der AOK-Beitrag „Gesund arbeiten mit ADHS“ betont, dass der Anstieg ADHS zunehmend zu einem Thema im Erwerbsleben macht, mit Bedarf an Betrieblichem Gesundheitsmanagement und sensibilisierten Führungskräften. Dazu mehr in <a href="/artikel/adhs-im-beruf/">ADHS im Beruf</a>.</p>`],
  ],
  faq: [
    ['Gibt es wirklich mehr Menschen mit ADHS?', 'Die Auswertung zeigt mehr Diagnosen, nicht mehr Erkrankte. Die Autorinnen und Autoren vermuten, dass viele Betroffene früher nicht erkannt wurden.'],
    ['Warum steigen die Diagnosen bei Frauen besonders stark?', 'Die Quellen nennen eine gestiegene Aufmerksamkeit für ADHS. Bei Frauen wird ADHS häufig später erkannt, siehe den Artikel zu ADHS bei Frauen.'],
  ],
  sources: [S3.arzteblatt, S3.aoksh, S3.aokgg, S3.au],
  related: ['adhs-bei-frauen', 'adhs-diagnose-erwachsene', 'adhs-im-beruf'],
});

A3.push({
  slug: 'adhs-selbsthilfe-erwachsene', cat: 'behandlung', publishedAt: '2026-11-16', title: 'Selbsthilfe bei ADHS: Was Gruppen und Beratung leisten', readMin: 5,
  desc: 'Selbsthilfegruppen, Beratung und Online-Programme können bei ADHS im Erwachsenenalter unterstützen. Was AOK, NDR und ADHS Deutschland dazu schreiben.',
  short: 'Selbsthilfeangebote können Erwachsenen mit ADHS helfen, die Diagnose besser zu verstehen und im Alltag damit umzugehen. ADHS Deutschland bietet Selbsthilfegruppen und Beratung an. Selbsthilfe ersetzt keine Behandlung, ergänzt sie aber.',
  sections: [
    ['wozu', 'Wozu Selbsthilfe?', `<p>Nach dem AOK-Bundesverband können Selbsthilfeangebote Betroffenen helfen, die Diagnose besser zu verstehen und im Alltag damit umzugehen. Der NDR schreibt, dass Betroffene in der Psychotherapie, bei Aufklärungsschulungen und in Selbsthilfegruppen Strategien lernen, um den Alltag besser zu bewältigen. Auch Freunde und Familie können mehr Verständnis aufbringen, wenn sie über ADHS Bescheid wissen.</p>`],
    ['angebote', 'Welche Angebote es gibt', `<ul><li><b>ADHS Deutschland e. V.:</b> als Selbsthilfeorganisation mit Selbsthilfegruppen, Telefonberatung, E-Mail-Beratung und Fortbildungen</li><li><b>Online-Programme:</b> zum Beispiel das ADHS-Elterntraining der AOK mit Erklärvideos und Übungen, gedacht für Familien (siehe <a href="/artikel/adhs-kind-eltern-familie/">ADHS beim Kind</a>)</li><li><b>Information und Aufklärung:</b> Der AOK-Beitrag nennt unter anderem ein Filmprojekt von ADHS Deutschland zur maskierten ADHS bei Frauen</li></ul>`],
    ['grenzen', 'Was Selbsthilfe nicht ersetzt', `<p>Selbsthilfe ersetzt keine Diagnose und keine Behandlung. Der NDR nennt Psychoedukation als Grundbaustein, bei Erwachsenen mit ADHS sind Psychotherapie und Medikamente wissenschaftlich belegt wirksam. Mehr dazu in <a href="/artikel/coaching-oder-therapie-bei-adhs/">Coaching oder Therapie bei ADHS</a> und <a href="/artikel/adhs-medikamente-ueberblick/">ADHS-Medikamente im Überblick</a>.</p>`],
    ['finden', 'Wie Du eine Gruppe findest', `<p>Die hier genutzten Quellen nennen keine Suchwege. Eine erste Anlaufstelle ist die Selbsthilfeorganisation ADHS Deutschland, auch Krankenkassen und örtliche Selbsthilfekontaktstellen helfen bei der Suche (Hinweis der Redaktion). Wenn Du lieber eins zu eins sprichst, findest Du bei <a href="/begleitung/">Angie</a> Begleitung. Das Erstgespräch ist kostenlos.</p>`],
  ],
  faq: [
    ['Muss ich eine Diagnose haben, um zur Selbsthilfe zu gehen?', 'Das entscheidet die jeweilige Gruppe. Viele Angebote richten sich an Betroffene mit und ohne gesicherte Diagnose. Frag bei der Gruppe nach.'],
    ['Kann Selbsthilfe Medikamente oder Therapie ersetzen?', 'Nein. Sie ergänzt die Behandlung und hilft im Alltag.'],
  ],
  sources: [S3.aoksh, S3.ndr, S3.partnerbro],
  related: ['coaching-oder-therapie-bei-adhs', 'adhs-kind-eltern-familie', 'adhs-partnerschaft'],
});

A3.push({
  slug: 'adhs-konzentration-arbeitstechniken', cat: 'alltag', publishedAt: '2026-11-18', title: 'Konzentration bei ADHS: Pomodoro, Listen und weitere Techniken', readMin: 6,
  desc: 'Konzentration und Struktur im Alltag und Job bei ADHS: Pomodoro-Technik, To-do-Listen, Erinnerungen, Notizen und Hyperfokus nach ZDFheute und Apotheken Umschau.',
  short: 'Erwachsene mit ADHS haben oft Mühe, schwierige oder langweilige Aufgaben anzufangen und abzuschließen. Hilfreich können To-do-Listen, Erinnerungen, die Pomodoro-Technik, Notizen und ein reizarmer Arbeitsplatz sein. Ob man etwas ändert, hängt vom Leidensdruck ab.',
  sections: [
    ['schwierigkeit', 'Wo es hakt', `<p>Laut ZDFheute (Gespräch mit Fachärztin Astrid Neuy-Lobkowicz, ADHS-Zentrum München) leiden Betroffene im Arbeitsalltag häufig unter Konzentrationsschwierigkeiten, unzureichender Strukturierung und fehlendem Zeitmanagement. Viele haben Probleme, Aufgaben anzufangen oder zu erledigen, die ihnen schwierig oder langweilig erscheinen. Trotz Plan lassen sie sich von abschweifenden Gedanken ablenken. Die Apotheken Umschau beschreibt zudem „Spaghetti im Kopf“, Gedankennebel und das Gefühl, Dinge nicht zu Ende zu bringen.</p>`],
    ['techniken', 'Techniken, die helfen können', `<ul><li><b>Pomodoro-Technik:</b> 25 Minuten arbeiten, 5 Minuten Pause. Sie wurde nicht speziell für ADHS entwickelt, kann aber helfen. Ein Timer sorgt dafür, dass es bei fünf Minuten bleibt (ZDFheute).</li><li><b>To-do-Listen</b> konsequent führen, als Grundstruktur (ZDFheute)</li><li><b>Erinnerungen:</b> als Faustregel einen Tag und eine Stunde vor wichtigen Terminen (ZDFheute). Die Apotheken Umschau rät, Termine sofort ins Handy einzutragen.</li><li><b>Mindmaps</b> ordnen Aufgaben nach Themenfeldern (ZDFheute)</li><li><b>Laut aussprechen,</b> was man als Nächstes tut</li><li><b>Gedanken festhalten:</b> Notiz-App, Heft oder Diktierfunktion, damit sie nicht von der Aufgabe abbringen</li><li><b>Salamitaktik:</b> große Aufgaben in kleine Schritte zerlegen (Apotheken Umschau)</li><li><b>Timer</b> bei wiederkehrenden Aufgaben, um ein Gefühl für die Dauer zu bekommen</li></ul>`],
    ['umgebung', 'Umgebung', `<p>Nach ZDFheute helfen ein ordentlicher, leiser Arbeitsplatz, das Handy wegzulegen, das E-Mail-Postfach zu schließen und bei Lärm Noise-Cancelling-Kopfhörer. Der NDR empfiehlt, den Schreibtisch zur Wand statt zum Fenster zu stellen.</p>`],
    ['hyperfokus', 'Hyperfokus: die andere Seite', `<p>Laut ZDFheute sind Menschen mit ADHS oft kreativ und können sich gut in Aufgaben vertiefen. Wenn die Spannung steigt, bekommen viele einen klaren Kopf und einen guten Überblick. Die Apotheken Umschau nennt den Hyperfokus als eine der Stärken, die bei ADHS ausgeprägter sein können.</p>`],
    ['leidensdruck', 'Muss ich überhaupt etwas ändern?', `<p>Psychotherapeut Umut Özdemir sagt im ZDFheute-Beitrag: Ob und was man ändern sollte, hängt vom Leidensdruck ab. Wenn es funktioniert, Aufgaben last-minute zu erledigen, sei das auch in Ordnung. Entscheidend sei die persönliche Kosten-Nutzen-Rechnung. Mehr Alltagsideen findest Du in <a href="/artikel/zeitblindheit-adhs/">Zeitblindheit bei ADHS</a> und <a href="/artikel/adhs-im-beruf/">ADHS im Beruf</a>.</p>`],
  ],
  faq: [
    ['Hilft die Pomodoro-Technik bei ADHS?', 'Laut ZDFheute wurde sie nicht speziell für ADHS entwickelt, kann aber hilfreich sein. Wichtig ist, sie als Angebot auszuprobieren und anzupassen.'],
    ['Was tun, wenn ich nicht anfangen kann?', 'Die Quellen nennen kleine Schritte, Listen, Timer und das laute Aussprechen des nächsten Schritts. Wenn es dauerhaft belastet, lohnt sich Unterstützung.'],
  ],
  sources: [S3.zdf, S3.au, S3.ndr],
  related: ['zeitblindheit-adhs', 'adhs-im-beruf', 'adhs-und-schlaf'],
});

A3.push({
  slug: 'adhs-emotionen-reizbarkeit', cat: 'gefuehle', publishedAt: '2026-11-20', title: 'ADHS und Gefühle: Warum Emotionen so intensiv sein können', readMin: 5,
  desc: 'Schnell gekränkt, schnell überwältigt: Emotionale Dysregulation bei ADHS. Was Apotheken Umschau, NDR und ADHS Deutschland dazu schreiben und was im Alltag helfen kann.',
  short: 'Viele Erwachsene mit ADHS erleben Gefühle sehr intensiv: schnell gekränkt, schnelle Stimmungswechsel, heftige Reaktionen. Fachleute sprechen von emotionaler Dysregulation. Entspannungsübungen, Bewegung und Verständnis im Umfeld können helfen, Behandlung und Therapie ergänzen das.',
  sections: [
    ['beschreibung', 'Was beschrieben wird', `<p>Die Apotheken Umschau beschreibt emotionale Dysregulation bei ADHS: Betroffene fühlen sich schnell gekränkt, verletzt oder angegriffen und sind „immer so ein Stück drüber“. Sie nennt außerdem impulsive Stimmungswechsel und emotionale Ausbrüche, und ein höheres Risiko für Partnerschaftskonflikte. ADHS Deutschland führt in der Partnerschaftsbroschüre schnelle Stimmungswechsel, hohe Empfindlichkeit und heftige emotionale Überreaktionen unter den typischen Schwierigkeiten auf.</p><p>Wichtig: Das sind Beschreibungen typischer Erfahrungen. Nicht jeder Mensch mit ADHS erlebt das, und nicht jede intensive Gefühlslage ist ADHS.</p>`],
    ['hintergrund', 'Mögliche Zusammenhänge', `<p>Der NDR schreibt, dass viele Erwachsene mit ADHS Misserfolge erleben und Selbstzweifel entwickeln. ADHS Deutschland nennt viele negative Erfahrungen und Ablehnung in der Kindheit als Faktor, der ein stabiles Selbstwertgefühl erschweren kann. Beides kann also zusammenhängen, mehr dazu in <a href="/artikel/adhs-und-depression-angst/">ADHS und Depression, Angst</a>.</p>`],
    ['alltag', 'Was im Alltag helfen kann', `<ul><li><b>Achtsamkeits- und Atemübungen:</b> Laut NDR helfen sie vielen Betroffenen, Anspannung und Impulsivität zu reduzieren.</li><li><b>Sport und Hobbys:</b> Sie bauen überschüssige Energie ab und schaffen Erfolgserlebnisse (NDR). Die Apotheken Umschau nennt Beispiele wie Sport oder Yoga zur Verringerung von Impulsivität.</li><li><b>Auszeit nehmen,</b> wenn Emotionen hochkochen, statt weiter zu diskutieren (ADHS Deutschland, für Beziehungen)</li><li><b>Ich-Botschaften</b> statt Vorwürfen</li><li><b>Umfeld einbeziehen:</b> Wenn Familie und Freunde Bescheid wissen, können sie mehr Verständnis zeigen (NDR)</li></ul>`],
    ['hilfe', 'Wann Unterstützung sinnvoll ist', `<p>Wenn Gefühle Dich oder Deine Beziehungen stark belasten, kann Psychotherapie helfen. Laut NDR lernen Betroffene in der Psychotherapie Strategien für den Alltag. Persönliche Begleitung bei <a href="/begleitung/">Angie</a> ersetzt sie nicht. Bei akuter Krise: Telefonseelsorge 116 123, Notruf 112. Zum Thema Beziehungen: <a href="/artikel/adhs-partnerschaft/">ADHS in der Partnerschaft</a>.</p>`],
  ],
  faq: [
    ['Was ist emotionale Dysregulation?', 'Der Begriff beschreibt, dass Gefühle besonders schnell und intensiv auftreten und schwer zu steuern sind, zum Beispiel schnelles Gekränktsein. Er ist kein eigenes Diagnosekriterium, wird aber bei ADHS beschrieben.'],
    ['Ist jede Wut oder Reizbarkeit ADHS?', 'Nein. Gefühlsausbrüche können viele Ursachen haben. Bei starker Belastung gehört die Abklärung in Fachhände.'],
  ],
  sources: [S3.au, S3.ndr, S3.adhskomor, S3.partnerbro],
  related: ['adhs-und-depression-angst', 'adhs-partnerschaft', 'audhs-autismus-und-adhs'],
});

A3.push({
  slug: 'adhs-und-sucht', cat: 'erkennen', publishedAt: '2026-11-23', title: 'ADHS und Sucht: Was bekannt ist und wo es Hilfe gibt', readMin: 5,
  desc: 'Bei Erwachsenen mit ADHS kommen Suchterkrankungen häufiger vor. Was ADHS Deutschland und NDR zu Zusammenhang, Risiko und Hilfe schreiben.',
  short: 'Suchterkrankungen kommen bei Erwachsenen mit ADHS häufig vor. ADHS Deutschland nennt, dass 20 bis 30 Prozent der Suchtpatienten eine unerkannte ADHS haben, und erklärt Suchtmittel als gescheiterte Selbstbehandlung. Wichtig ist, beides zu erkennen und zu behandeln.',
  sections: [
    ['zusammenhang', 'Was bekannt ist', `<p>Der NDR nennt Alkohol- und Drogenmissbrauch als häufige Begleiterkrankungen bei Erwachsenen mit ADHS. ADHS Deutschland beschreibt als Suchtentwicklung unter anderem erheblichen Nikotinmissbrauch, aber auch Ess-, Kauf-, Spiel-, Computer- und Internetsucht. Nach den Angaben des Vereins haben <b>20 bis 30 Prozent der Suchtpatienten eine unerkannte ADHS</b>.</p>`],
    ['gruende', 'Wie der Zusammenhang erklärt wird', `<p>ADHS Deutschland beschreibt Suchtmittelmissbrauch als <b>gescheiterte Selbstbehandlung</b>. Nikotin beispielsweise greife am Dopamintransporter an und korrigiere das zugrunde liegende Dopamindefizit. Eine allgemeine Erklärung für jeden Einzelfall gibt es nicht.</p>`],
    ['abklaerung', 'Warum beides erkannt werden sollte', `<p>Laut ADHS Deutschland werden oft nur die Begleiterkrankungen erkannt, und die ADHS bleibt unbehandelt. Sowohl die Suchterkrankung als auch die ADHS müssen gesondert behandelt werden, der Verein nennt leitliniengerechte Behandlung und die richtige Diagnose als Voraussetzung für den Erfolg. Mehr zur Abklärung: <a href="/artikel/adhs-diagnose-erwachsene/">ADHS-Diagnose bei Erwachsenen</a> und <a href="/artikel/adhs-und-krankenkasse/">ADHS und Krankenkasse</a>.</p>`],
    ['hilfe', 'Wo es Hilfe gibt', `<p>Bei Suchtproblemen helfen Hausarztpraxen, Suchtberatungsstellen und Psychotherapeutinnen und Psychotherapeuten (Hinweis der Redaktion, die Quellen nennen keine Stellen). Bei akuter Krise erreichst Du die Telefonseelsorge kostenlos unter 116 123, im Notfall den Notruf 112. Persönliche Begleitung durch <a href="/begleitung/">Angie</a> ersetzt keine Behandlung.</p>`],
  ],
  faq: [
    ['Haben alle Menschen mit ADHS ein Suchtrisiko?', 'Nein. Die Quellen beschreiben ein erhöhtes Risiko, nicht, dass jede betroffene Person Suchtprobleme entwickelt.'],
    ['Soll ich bei Sucht zuerst die ADHS behandeln lassen?', 'Das entscheiden Fachleute im Einzelfall. ADHS Deutschland betont, dass beide Erkrankungen gesondert und leitliniengerecht behandelt werden müssen.'],
  ],
  sources: [S3.adhskomor, S3.ndr],
  related: ['adhs-und-depression-angst', 'adhs-medikamente-ueberblick', 'adhs-diagnose-erwachsene'],
});

module.exports = { A3, S3 };
