// Netzwerk-Verlinkung: pro Artikel 1 bis 4 thematisch passende Links auf unsere anderen Portale.
// Regeln siehe strategie/NETZWERK-VERLINKUNG.md. Nur Seiten, die es gibt (HTTP 200), beschreibende Linktexte.
const O = 'https://guidanceobservatory.com/analyses/';
const CG = 'https://cogether.de/wissen/';
const GK = 'https://gedankenkotze.de/';
const BL = 'https://xn--borderlinefralle-tzb.de/artikel/';
const o = (slug, t) => ({ p: 'Guidance Observatory', t, u: O + slug + '/' });
const c = (slug, t) => ({ p: 'CoGether Wissen', t, u: CG + slug + '/' });
const g = (path, t) => ({ p: 'Podcast Gedankenkotze', t, u: GK + path });
const b = (slug, t) => ({ p: 'Borderline für alle', t, u: BL + slug + '/' });

const NET = {
  'adhs-bei-erwachsenen': [
    o('adhs-bei-erwachsenen-wie-haeufig-ist-es-was-eine-meta-analyse-zeigt', 'Wie häufig ist ADHS bei Erwachsenen? Was eine Meta-Analyse zeigt'),
    g('adhs-podcast/', 'Der ADHS-Podcast mit Angie: alle Folgen zum Thema'),
    c('adhs-bei-erwachsenen-symptome-diagnose-behandlung-alltag', 'ADHS bei Erwachsenen: Symptome, Diagnose, Behandlung, Alltag'),
  ],
  'adhs-diagnose-erwachsene': [
    c('adhs-test-erwachsene-habe-ich-adhs-anzeichen-selbsttest-und-diagnose', 'ADHS-Test für Erwachsene: Anzeichen, Selbsttest und Diagnose'),
    c('adhs-behandlung-bei-erwachsenen-medikamente-therapie-und-coaching-im-ueberblick', 'ADHS-Behandlung bei Erwachsenen im Überblick'),
    o('behandlungsluecke-bei-psychischen-stoerungen-was-deutsche-erhebungen-zeigen', 'Behandlungslücke bei psychischen Störungen: Daten aus Deutschland'),
    g('start-hier/', 'Gedankenkotze: die besten Einstiegsfolgen'),
  ],
  'adhs-bei-frauen': [
    c('adhs-bei-frauen-in-den-wechseljahren-wenn-konzentration-reizbarkeit-und-innere-unruhe-ploetzlich-staerker-werden', 'ADHS bei Frauen in den Wechseljahren'),
    g('thema/maskieren/', 'Podcast-Folgen zu Maskieren und Anpassung'),
    o('camouflaging-bei-autismus-was-die-forschung-ueber-anpassung-und-erschoepfung-zeigt', 'Camouflaging: was die Forschung über Anpassung und Erschöpfung zeigt'),
  ],
  'audhs-autismus-und-adhs': [
    o('camouflaging-bei-autismus-was-die-forschung-ueber-anpassung-und-erschoepfung-zeigt', 'Camouflaging bei Autismus: Anpassung und Erschöpfung'),
    c('autismus-bei-erwachsenen-anzeichen-selbsttest-diagnose-und-was-im-alltag-hilft', 'Autismus bei Erwachsenen: Anzeichen, Selbsttest, Diagnose'),
    g('thema/maskieren/', 'Podcast-Folgen zu Maskieren und Anpassung'),
  ],
  'nachteilsausgleich-adhs': [
    o('adhs-und-arbeit-was-eine-who-erhebung-in-zehn-laendern-zeigt', 'ADHS und Arbeit: was eine WHO-Erhebung in zehn Ländern zeigt'),
    c('erwerbsminderungsrente-psychische-erkrankung-2026-antrag-voraussetzungen', 'Erwerbsminderungsrente bei psychischer Erkrankung: Antrag und Voraussetzungen'),
  ],
  'coaching-oder-therapie-bei-adhs': [
    c('coaching-oder-therapie-unterschied-und-grenzen', 'Coaching oder Therapie: Unterschied und Grenzen'),
    c('mentoring-oder-coaching-unterschiede-beispiele-und-wie-du-entscheidest', 'Mentoring oder Coaching: Unterschiede und Entscheidungshilfe'),
    o('neurodivergenz-in-der-begleitung', 'Neurodivergenz in der Begleitung (Fachbeitrag)'),
  ],
  'adhs-medikamente-ueberblick': [
    c('adhs-behandlung-bei-erwachsenen-medikamente-therapie-und-coaching-im-ueberblick', 'ADHS-Behandlung bei Erwachsenen im Überblick'),
    o('behandlungsluecke-bei-psychischen-stoerungen-was-deutsche-erhebungen-zeigen', 'Behandlungslücke bei psychischen Störungen'),
    g('adhs-podcast/', 'Der ADHS-Podcast mit Angie'),
  ],
  'adhs-und-schlaf': [
    c('abends-nicht-abschalten-koennen-gedankenkreisen-unruhe-und-leere', 'Abends nicht abschalten können: Gedankenkreisen und Unruhe'),
    c('gruebeln-stoppen-wie-du-das-gedankenkarussell-unterbrichst-und-wieder-klarer-denken-kannst', 'Grübeln stoppen: das Gedankenkarussell unterbrechen'),
    g('thema/erschoepfung/', 'Podcast-Folgen zu Erschöpfung'),
    o('gedankenwandern-und-wohlbefinden-was-eine-handy-studie-zeigt', 'Gedankenwandern und Wohlbefinden: was eine Handy-Studie zeigt'),
  ],
  'zeitblindheit-adhs': [
    c('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren: Struktur, Zeitblindheit, Reizüberflutung'),
    o('prokrastination-was-691-korrelationen-zeigen', 'Prokrastination: was 691 Korrelationen zeigen'),
    o('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen'),
    g('thema/alltag/', 'Podcast-Folgen zum Alltag mit ADHS'),
  ],
  'adhs-ursachen': [
    o('adhs-bei-erwachsenen-wie-haeufig-ist-es-was-eine-meta-analyse-zeigt', 'ADHS bei Erwachsenen: wie häufig ist es?'),
    c('adhs-bei-erwachsenen-symptome-diagnose-behandlung-alltag', 'ADHS bei Erwachsenen: Symptome, Diagnose, Behandlung, Alltag'),
    g('adhs-podcast/', 'Der ADHS-Podcast mit Angie'),
  ],
  'me-cfs-erklaert': [
    g('thema/erschoepfung/', 'Podcast-Folgen über Erschöpfung und Funktionieren'),
  ],
  'fibromyalgie-erklaert': [
    g('thema/erschoepfung/', 'Podcast-Folgen über Erschöpfung und Funktionieren'),
  ],
  'adhs-partnerschaft': [
    c('partner-mit-adhs-beziehung-verstehen-und-was-angehoerigen-hilft', 'Partner mit ADHS: Beziehung verstehen und was Angehörigen hilft'),
    c('adhs-partner-streit-eskalation-verstehen-und-beenden', 'ADHS und Streit in der Partnerschaft: Eskalation verstehen und beenden'),
    c('emotionale-intelligenz-in-der-beziehung-konflikte-naehe-und-gespraeche', 'Emotionale Intelligenz in der Beziehung'),
    g('thema/beziehungen/', 'Podcast-Folgen zu Beziehungen'),
  ],
  'adhs-kind-eltern-familie': [
    c('angehoerige-und-eigene-grenzen-wenn-helfen-zur-dauerlast-wird', 'Angehörige und eigene Grenzen: wenn Helfen zur Dauerlast wird'),
    g('thema/beziehungen/', 'Podcast-Folgen zu Beziehungen'),
  ],
  'adhs-im-beruf': [
    o('adhs-und-arbeit-was-eine-who-erhebung-in-zehn-laendern-zeigt', 'ADHS und Arbeit: was eine WHO-Erhebung in zehn Ländern zeigt'),
    o('mikropausen-bei-der-arbeit-was-eine-meta-analyse-zu-erholung-zeigt', 'Mikropausen bei der Arbeit: was eine Meta-Analyse zeigt'),
    c('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren'),
  ],
  'adhs-grad-der-behinderung': [
    b('gdb-schwerbehindertenausweis-borderline', 'Grad der Behinderung und Schwerbehindertenausweis (Beispiel Borderline)'),
    c('erwerbsminderungsrente-psychische-erkrankung-2026-antrag-voraussetzungen', 'Erwerbsminderungsrente bei psychischer Erkrankung'),
    c('grundsicherung-2026-psychische-erkrankung-jobcenter-rechte', 'Grundsicherung 2026 bei psychischer Erkrankung: Rechte'),
  ],
  'adhs-und-krankenkasse': [
    b('therapieplatz-finden', 'Therapieplatz finden: Wege und Anlaufstellen'),
    c('gkv-beitragssatzstabilisierungsgesetz-psychotherapie-was-aendert-sich', 'Was sich in der Psychotherapie-Versorgung ändern kann'),
    o('behandlungsluecke-bei-psychischen-stoerungen-was-deutsche-erhebungen-zeigen', 'Behandlungslücke bei psychischen Störungen'),
  ],
  'adhs-und-depression-angst': [
    c('depression-erkennen-anzeichen-hintergruende-und-wann-du-hilfe-suchen-solltest', 'Depression erkennen: Anzeichen und wann Hilfe sinnvoll ist'),
    o('ruminieren-was-die-forschung-ueber-gruebeln-und-depression-zeigt', 'Grübeln und Depression: was die Forschung zeigt'),
    o('selbstmitgefuehl-und-psychische-belastung', 'Selbstmitgefühl und psychische Belastung'),
    g('thema/gefuehle/', 'Podcast-Folgen über Gefühle'),
  ],
  'adhs-diagnosen-nehmen-zu': [
    o('adhs-bei-erwachsenen-wie-haeufig-ist-es-was-eine-meta-analyse-zeigt', 'Wie häufig ist ADHS bei Erwachsenen?'),
    o('behandlungsluecke-bei-psychischen-stoerungen-was-deutsche-erhebungen-zeigen', 'Behandlungslücke bei psychischen Störungen'),
    c('adhs-test-erwachsene-habe-ich-adhs-anzeichen-selbsttest-und-diagnose', 'ADHS-Test für Erwachsene'),
  ],
  'adhs-selbsthilfe-erwachsene': [
    b('selbsthilfe-beratung-angehoerige', 'Selbsthilfe und Beratung für Angehörige'),
    o('stigma-und-hilfesuche-was-144-studien-zeigen', 'Stigma und Hilfesuche: was 144 Studien zeigen'),
    g('start-hier/', 'Gedankenkotze: Einstiegsfolgen'),
  ],
  'adhs-konzentration-arbeitstechniken': [
    o('prokrastination-was-691-korrelationen-zeigen', 'Prokrastination: was 691 Korrelationen zeigen'),
    o('mikropausen-bei-der-arbeit-was-eine-meta-analyse-zu-erholung-zeigt', 'Mikropausen bei der Arbeit'),
    c('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren'),
    o('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen'),
  ],
  'adhs-emotionen-reizbarkeit': [
    o('emotionsregulation-welche-strategien-wirken', 'Emotionsregulation: welche Strategien wirken'),
    c('adhs-und-gefuehle-warum-emotionen-so-intensiv-sind-und-was-hilft', 'ADHS und Gefühle: warum Emotionen so intensiv sind'),
    g('thema/gefuehle/', 'Podcast-Folgen über Gefühle'),
  ],
  'adhs-und-sucht': [
    o('stigma-und-hilfesuche-was-144-studien-zeigen', 'Stigma und Hilfesuche: was 144 Studien zeigen'),
    g('adhs-podcast/', 'Der ADHS-Podcast mit Angie'),
  ],
};
module.exports = { NET };
