export interface Lesson {
  id: number;
  title: string;
  module: number;
  materials: string[];
  content: string[];
  vocabulary: string[];
  practice: string[];
  answer?: string[];
  quiz: QuizQuestion[];
}

type QuestionType = 'multiple-choice' | 'translation' | 'recitation' | 'matching';

type BaseQuizQuestion = {
  id: number;
  question: string;
  correctAnswer: string | string[];
  explanation?: string;
};

type MultipleChoiceQuestion = BaseQuizQuestion & {
  type: 'multiple-choice' | 'matching';
  options: string[];
};

type OtherQuestion = BaseQuizQuestion & {
  type: 'translation' | 'recitation';
  options?: string[];
};

export type QuizQuestion = MultipleChoiceQuestion | OtherQuestion;

export interface Module {
  id: number;
  title: string;
  description: string;
  days: number[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Foundations of Ecclesiastical Latin",
    description: "Learn pronunciation, basic grammar, nouns, verbs, and essential prayers",
    days: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    id: 2,
    title: "Building Vocabulary and Grammar",
    description: "Expand your knowledge with advanced declensions, verb tenses, and the Rosary",
    days: [9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: 3,
    title: "Intermediate Grammar and Texts",
    description: "Master complex grammar with the Creed, Magnificat, and participles",
    days: [17, 18, 19, 20, 21, 22, 23, 24]
  },
  {
    id: 4,
    title: "Advanced Grammar and Liturgical Texts",
    description: "Study passive voice, subjunctives, and great liturgical texts",
    days: [25, 26, 27, 28, 29, 30, 31, 32]
  },
  {
    id: 5,
    title: "Mastery and Application",
    description: "Apply your knowledge to the Vulgate Bible, Mass, and complete prayers",
    days: [33, 34, 35, 36, 37, 38, 39, 40]
  }
];

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Ecclesiastical Latin and Pronunciation",
    module: 1,
    materials: [
      "Overview of Ecclesiastical Latin: History and use in the Catholic Church",
      "Ecclesiastical Latin pronunciation rules (vowels, consonants, stress)",
      "Common greetings and phrases: Salvete (Hello), Gratia vobis (Grace to you)",
      "Vocabulary: 20 basic words (e.g., Deus – God, ecclesia – church, fides – faith)"
    ],
    content: [
      "Welcome to your journey into Ecclesiastical Latin, the language of the Catholic Church for centuries, used in liturgy, prayers, and sacred texts like the Vulgate Bible. Unlike Classical Latin, which was spoken in ancient Rome, Ecclesiastical Latin adopts a pronunciation influenced by Italian, reflecting its use in the Church’s rituals. Understanding its history helps you appreciate its role in worship. For example, the Mass and prayers like the Pater Noster have been prayed in Latin since the early centuries of Christianity, uniting believers across cultures.",
      
      "Let’s begin with pronunciation, which is key to reading and reciting Latin texts. Ecclesiastical Latin has five vowels: 'a' is pronounced like 'ah' in 'father,' 'e' like 'eh' in 'pet,' 'i' like 'ee' in 'see,' 'o' like 'aw' in 'law,' and 'u' like 'oo' in 'moon.' For instance, 'Deus' (God) sounds like 'DEH-oos.' Consonants are generally pronounced as in English, but with some differences: 'c' before 'e' or 'i' is soft, like 'ch' in 'church,' so 'ecclesia' (church) is pronounced 'eh-KLEH-see-ah.' The letter 'g' is hard, as in 'go,' so 'gratia' (grace) is 'GRAH-tee-ah.' The letter 'v' is pronounced like 'w,' making 'vita' (life) sound like 'WEE-tah.'",
      
      "Stress in Latin words depends on syllable length. In words of two syllables, stress the first: 'pater' (father) is 'PAH-ter.' In words of three or more syllables, stress the second-to-last syllable if it is long (contains a long vowel or ends in a consonant), like 'ecclesia' (eh-KLEH-see-ah); otherwise, stress the third-to-last, as in 'fides' (FEE-des). Practice these rules with words like 'sanctus' (holy, SAHNK-toos) and 'gloria' (glory, GLOH-ree-ah).",
      
      "You’ll also encounter common greetings and phrases used in liturgical settings. 'Salvete' means 'hello' (plural) and is pronounced 'sahl-VEH-teh.' 'Gratia vobis' (grace to you) is 'GRAH-tee-ah WOH-bis.' These phrases set the tone for sacred communication. Your vocabulary includes foundational words like 'Deus' (God), 'fides' (faith), and 'pax' (peace). Try pronouncing them aloud, ensuring each vowel is clear and distinct, as in 'veritas' (truth, weh-REE-tahs)."
    ],
    vocabulary: [
      "Deus - God", "ecclesia - church", "fides - faith", "spes - hope", "caritas - charity",
      "pax - peace", "lux - light", "vita - life", "amor - love", "veritas - truth",
      "gratia - grace", "gloria - glory", "sanctus - holy", "benedictus - blessed",
      "magnus - great", "bonus - good", "verus - true", "novus - new", "antiquus - ancient", "aeternus - eternal"
    ],
    practice: [
      "Read aloud the Pater Noster (Our Father) using the pronunciation guide provided below.",
      "Focus on clear vowel sounds and correct stress.",
      "The full text is:",
      "Pater noster, qui es in caelis, sanctificetur nomen tuum.",
      "Adveniat regnum tuum.",
      "Fiat voluntas tua, sicut in caelo et in terra.",
      "Panem nostrum quotidianum da nobis hodie,",
      "et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris.",
      "Et ne nos inducas in tentationem, sed libera nos a malo.",
      "Pronunciation guide:",
      "'Pater' (PAH-ter), 'noster' (NOHS-ter), 'qui' (kwee), 'es' (ehs), 'caelis' (CHEH-lees),",
      "'sanctificetur' (sahnk-tee-fee-CHEH-toor), 'nomen' (NOH-men), 'tuum' (TOO-oom),",
      "'adveniat' (ahd-VEH-nee-aht), 'regnum' (REHN-yoom), 'fiat' (FEE-aht),",
      "'voluntas' (woh-LOON-tahs), 'sicut' (SEE-koot), 'caelo' (CHEH-loh), 'terra' (TEH-rah),",
      "'panem' (PAH-nem), 'quotidianum' (kwoh-tee-dee-AH-noom), 'hodie' (HOH-dee-eh),",
      "'dimitte' (dee-MEET-teh), 'debita' (DEH-bee-tah), 'dimittimus' (dee-MEET-tee-moos),",
      "'debitoribus' (deh-bee-TOH-ree-boos), 'inducas' (in-DOO-kahs), 'tentationem' (ten-tah-tee-OH-nem),",
      "'libera' (LEE-beh-rah), 'malo' (MAH-loh)."
    ],
    quiz: [
      {
        id: 1,
        question: "How is the vowel 'a' pronounced in Ecclesiastical Latin?",
        type: "multiple-choice",
        options: ["Like 'ay' in 'day'", "Like 'ah' in 'father'", "Like 'a' in 'cat'", "Like 'aw' in 'saw'"],
        correctAnswer: "Like 'ah' in 'father'",
        explanation: "In Ecclesiastical Latin, 'a' is always pronounced like 'ah' in 'father'."
      },
      {
        id: 2,
        question: "Match the Latin word to its English meaning: Deus, ecclesia, fides, pax, gratia",
        type: "matching",
        options: ["God", "church", "faith", "peace", "grace"],
        correctAnswer: ["Deus - God", "ecclesia - church", "fides - faith", "pax - peace", "gratia - grace"],
        explanation: "Match each Latin word to its corresponding English translation."
      },
      {
        id: 3,
        question: "Recite the first line of the Pater Noster",
        type: "recitation",
        correctAnswer: "Pater noster qui es in caelis",
        explanation: "This is the opening line of the Lord's Prayer in Latin."
      }
    ]
  },
  {
    id: 2,
    title: "Basic Grammar – Nouns and Cases",
    module: 1,
    materials: [
      "Introduction to Latin noun declensions (1st and 2nd declensions)",
      "Nominative and accusative cases: Subject and direct object",
      "Vocabulary: 15 nouns from the Latin Mass (e.g., panis – bread, vinum – wine)",
      "Practice: Translate simple phrases from the Mass, e.g., Agnus Dei (Lamb of God)"
    ],
    content: [
      "Latin nouns are the building blocks of sentences, and they change form depending on their role in a sentence, a process called declension. In this lesson, we’ll focus on the first two declensions and the nominative and accusative cases, which are essential for understanding prayers and Mass texts. Declensions are like families of nouns with similar endings. The 1st declension typically includes feminine nouns ending in -a, like 'regina' (queen), while the 2nd declension includes masculine and neuter nouns ending in -us or -um, like 'filius' (son) or 'caelum' (heaven).",
      
      "The nominative case is used for the subject of a sentence—the doer of the action. For example, in 'Regina orat' (The queen prays), 'regina' is nominative because the queen is performing the action. The accusative case is used for the direct object—the receiver of the action. In 'Regina filium spectat' (The queen sees the son), 'filium' is accusative because the son is being seen. For 1st declension nouns, the nominative singular ends in -a (regina), and the accusative singular ends in -am (reginam). For 2nd declension masculine nouns, the nominative singular ends in -us (filius), and the accusative ends in -um (filium). Neuter nouns, like 'caelum,' have the same form in nominative and accusative: 'caelum.'",
      
      "Let’s apply this to Mass phrases. In 'Agnus Dei' (Lamb of God), 'agnus' is nominative (the subject, meaning 'lamb'), and 'Dei' is a form we’ll explore later, but it refers to God. Another example is 'panem nostrum' (our bread) from the Pater Noster, where 'panem' is accusative because it’s the object being requested. Practice declining nouns like 'mater' (mother: mater, materm) and 'vinum' (wine: vinum, vinum) to get comfortable with these endings. Pay attention to gender: 'mater' is feminine (1st declension), while 'filius' is masculine (2nd declension), and 'caelum' is neuter (2nd declension).",
      
      "When translating phrases from the Mass, word order in Latin can differ from English. Latin relies on case endings, not word order, to show meaning. For example, 'Corpus Christi' (Body of Christ) uses 'corpus' in the nominative or accusative (it’s the same for neuter nouns) and 'Christi' to indicate 'of Christ.' Try translating 'Sanguis Christi' (Blood of Christ) by identifying 'sanguis' as nominative (3rd declension, to be covered later) and 'Christi' as a possessive form. This flexibility in word order is common in prayers, so focus on the endings to understand each word’s role."
    ],
    vocabulary: [
      "panis - bread", "vinum - wine", "corpus - body", "sanguis - blood", "aqua - water",
      "ignis - fire", "terra - earth", "caelum - heaven", "agnus - lamb", "pastor - shepherd",
      "regina - queen", "mater - mother", "pater - father", "filius - son", "spiritus - spirit"
    ],
    practice: [
      "Translate the following simple phrases from the Mass into English:",
      "(1) Agnus Dei,",
      "(2) Panem nostrum,",
      "(3) Corpus Christi,",
      "(4) Sanguis Christi,",
      "(5) Aqua vitae.",
      "For each phrase, identify the case (nominative or accusative) of the first noun."
    ],
    answer: [
      "(1) Agnus Dei: Lamb of God, 'agnus' is nominative (subject).",
      "(2) Panem nostrum: Our bread, 'panem' is accusative (direct object).",
      "(3) Corpus Christi: Body of Christ, 'corpus' is nominative or accusative (same for neuter nouns).",
      "(4) Sanguis Christi: Blood of Christ, 'sanguis' is nominative (subject).",
      "(5) Aqua vitae: Water of life, 'aqua' is nominative (subject)."
    ],
    quiz: [
      {
        id: 1,
        question: "What case is used for the subject of a sentence?",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Genitive", "Dative"],
        correctAnswer: "Nominative"
      },
      {
        id: 2,
        question: "Decline 'regina' (queen) in nominative and accusative singular:",
        type: "translation",
        correctAnswer: "regina, reginam",
        explanation: "1st declension nouns end in -a (nom.) and -am (acc.) in singular."
      },
      {
        id: 3,
        question: "Translate: 'Agnus Dei'",
        type: "translation",
        correctAnswer: "Lamb of God"
      }
    ]
  },
  {
    id: 3,
    title: "Verbs and Present Tense",
    module: 1,
    materials: [
      "Introduction to Latin verb conjugations (1st conjugation, present tense)",
      "Verb forms: amo, amas, amat (I love, you love, he/she loves)",
      "Vocabulary: 15 verbs from the Vulgate (e.g., oro – pray, credo – believe)",
      "Practice: Conjugate verbs in Gloria in Excelsis Deo"
    ],
    content: [
      "Verbs are the action words of Latin, and they change forms to show who is acting and when. In this lesson, we’ll focus on the 1st conjugation present tense, which is used for actions happening now. First conjugation verbs typically end in -are in their infinitive form, like 'amare' (to love). The present tense is formed by removing the -re and adding personal endings: -o (I), -as (you singular), -at (he/she/it), -amus (we), -atis (you plural), -ant (they). For example, 'amo' means 'I love,' 'amas' means 'you love,' and 'amant' means 'they love.' Let’s conjugate 'oro' (to pray): oro, oras, orat, oramus, oratis, orant.",
      
      "These endings apply to most 1st conjugation verbs, such as 'credo' (I believe: credo, credas, credat, credamus, credatis, credant). Notice how the stem 'cred-' remains constant, and only the endings change. This pattern is consistent across 1st conjugation verbs, making them predictable. For example, in the Gloria in Excelsis Deo, you’ll see 'laudamus' (we praise), which is the 1st person plural present tense of 'laudare' (to praise). Try conjugating 'do' (to give): do, das, dat, damus, datis, dant.",
      
      "In liturgical texts, verbs often appear in prayers to express actions or states. For instance, 'glorificamus' in the Gloria means 'we glorify,' from 'glorificare.' The present tense here conveys ongoing action, fitting for praising God. Word order in Latin can vary, so focus on the verb ending to identify the subject. For example, 'Deus amat' (God loves) has 'amat' (3rd person singular), indicating 'Deus' as the subject. Compare this to 'Amamus Deum' (We love God), where 'amamus' shows the 1st person plural, and 'Deum' is the accusative object.",
      
      "When reading the Gloria, look for verbs like 'benedicimus' (we bless) and 'adoramus' (we adore). These are all 1st conjugation present tense verbs, and their endings tell you who is performing the action. Practice identifying the subject and verb in phrases like 'Gratias agimus' (We give thanks), where 'agimus' is from 'agere' (to do/give). This will prepare you to conjugate verbs in context and understand their role in sacred texts."
    ],
    vocabulary: [
      "amo - I love", "oro - I pray", "credo - I believe", "spero - I hope", "video - I see",
      "audio - I hear", "venio - I come", "do - I give", "facio - I make", "dico - I say",
      "sum - I am", "habeo - I have", "possum - I can", "volo - I want", "nolo - I don't want"
    ],
    practice: [
      "Conjugate the following 1st conjugation verbs in the present tense:",
      "(1) oro (to pray),",
      "(2) amo (to love),",
      "(3) laudo (to praise).",
      "For each, provide the full conjugation (1st, 2nd, 3rd person singular and plural).",
      "Then, translate the phrase 'Glorificamus te' from the Gloria in Excelsis Deo."
    ],
    answer: [
      "(1) oro: oro, oras, orat, oramus, oratis, orant.",
      "(2) amo: amo, amas, amat, amamus, amatis, amant.",
      "(3) laudo: laudo, laudas, laudat, laudamus, laudatis, laudant.",
      "Translation: 'Glorificamus te' means 'We glorify you.'"
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate 'amo' (I love) in present tense:",
        type: "translation",
        correctAnswer: "amo, amas, amat, amamus, amatis, amant",
        explanation: "1st conjugation present tense endings: -o, -as, -at, -amus, -atis, -ant"
      },
      {
        id: 2,
        question: "What does 'credo' mean?",
        type: "multiple-choice",
        options: ["I pray", "I believe", "I hope", "I love"],
        correctAnswer: "I believe"
      },
      {
        id: 3,
        question: "Translate: 'Glorificamus te'",
        type: "translation",
        correctAnswer: "We glorify you"
      }
    ]
  },
  {
    id: 4,
    title: "Adjectives and Agreement",
    module: 1,
    materials: [
      "Adjective declension and agreement with nouns (gender, number, case)",
      "Vocabulary: 15 adjectives from prayers (e.g., sanctus – holy, beatus – blessed)",
      "Practice: Pair adjectives with nouns in Salve Regina (e.g., Mater misericordiae)"
    ],
    content: [
      "Adjectives in Latin describe nouns and must agree with them in gender (masculine, feminine, neuter), number (singular, plural), and case (e.g., nominative, accusative). This agreement ensures clarity in sentences, especially in prayers like the Salve Regina. Most adjectives follow the 1st and 2nd declension patterns, much like nouns. For example, the adjective 'sanctus' (holy) has forms 'sanctus' (masculine nominative singular), 'sancta' (feminine nominative singular), and 'sanctum' (neuter nominative singular). When paired with a noun, the adjective matches its ending. In 'sancta regina' (holy queen), 'sancta' is feminine nominative singular to agree with 'regina.'",
      
      "Let’s decline an adjective with a noun. Take 'bonus' (good) with 'filius' (son, 2nd declension masculine): 'bonus filius' (good son, nominative singular), 'bonum filium' (good son, accusative singular). For a feminine noun like 'mater' (mother, 1st declension), it’s 'bona mater' (nominative) and 'bonam matrem' (accusative). For a neuter noun like 'caelum' (heaven, 2nd declension), it’s 'bonum caelum' for both nominative and accusative. Notice how the adjective’s ending changes to match the noun’s case, number, and gender.",
      
      "In prayers, adjectives enhance meaning. In the Salve Regina, 'Mater misericordiae' (Mother of mercy) pairs 'mater' (feminine nominative singular) with 'misericordiae,' a noun acting as a complement (we’ll explore this later). Similarly, 'beata virgo' (blessed virgin) uses 'beata' (feminine nominative singular) to agree with 'virgo.' Adjectives like 'omnipotens' (almighty) are trickier because they don’t change form for gender in some cases, but in the nominative singular, they follow the pattern: 'omnipotens Deus' (almighty God, masculine).",
      
      "When analyzing phrases, identify the noun’s gender, number, and case first, then ensure the adjective matches. For example, in 'gloriosus Dominus' (glorious Lord), 'gloriosus' is masculine nominative singular to agree with 'Dominus.' Practice with phrases like 'pulcher pastor' (beautiful shepherd, masculine nominative) or 'sacer ignis' (sacred fire, masculine nominative). This skill will help you understand the rich descriptions in liturgical texts."
    ],
    vocabulary: [
      "sanctus - holy", "beatus - blessed", "misericors - merciful", "omnipotens - almighty",
      "aeternus - eternal", "magnus - great", "bonus - good", "pulcher - beautiful",
      "verus - true", "divinus - divine", "justus - just", "pius - pious",
      "fortis - strong", "sacer - sacred", "gloriosus - glorious"
    ],
    practice: [
      "Pair the following adjectives with the nouns from the Salve Regina, ensuring agreement in gender, number, and case.",
      "Then translate the phrases:",
      "(1) sanctus with regina (nominative singular),",
      "(2) beatus with mater (accusative singular),",
      "(3) gloriosus with virgo (nominative singular),",
      "(4) bonus with spes (nominative singular),",
      "(5) misericors with advocata (accusative singular).",
      "The Salve Regina text for reference: Salve Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve."
    ],
    answer: [
      "(1) sancta regina: holy queen (sancta is feminine nominative singular to agree with regina).",
      "(2) beatam matrem: blessed mother (beatam is feminine accusative singular to agree with matrem).",
      "(3) gloriosa virgo: glorious virgin (gloriosa is feminine nominative singular to agree with virgo).",
      "(4) bona spes: good hope (bona is feminine nominative singular to agree with spes).",
      "(5) misericordem advocatam: merciful advocate (misericordem is feminine accusative singular to agree with advocatam)."
    ],
    quiz: [
      {
        id: 1,
        question: "Decline 'sanctus' (holy) with 'regina' (queen) in nominative singular:",
        type: "translation",
        correctAnswer: "sancta regina",
        explanation: "Adjectives must agree with nouns in gender, number, and case."
      },
      {
        id: 2,
        question: "Translate: 'Mater misericordiae'",
        type: "translation",
        correctAnswer: "Mother of mercy"
      },
      {
        id: 3,
        question: "Match 10 adjectives to their meanings: sanctus, beatus, misericors, etc.",
        type: "matching",
        options: ["holy", "blessed", "merciful", "almighty", "eternal", "great", "good", "beautiful", "true", "divine"],
        correctAnswer: [
          "sanctus - holy", "beatus - blessed", "misericors - merciful", "omnipotens - almighty",
          "aeternus - eternal", "magnus - great", "bonus - good", "pulcher - beautiful",
          "verus - true", "divinus - divine"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "The Lord’s Prayer (Pater Noster)",
    module: 1,
    materials: [
      "Full text of Pater Noster with vocabulary breakdown (e.g., pater – father, caelum – heaven)",
      "Syntax: Word order in Latin prayers",
      "Practice: Memorize and recite Pater Noster"
    ],
    content: [
      "The Pater Noster, or Lord’s Prayer, is one of the most important prayers in Christianity, and learning it in Latin connects you to the Church’s tradition. This lesson explores its text, vocabulary, and syntax, helping you understand how Latin prayers are structured. The full text is: Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Each word’s form and position carries meaning.",
      
      "Let’s break down key vocabulary. 'Pater' (father) is nominative, the subject addressing God. 'Noster' (our) is an adjective agreeing with 'pater' in gender (masculine), number (singular), and case (nominative). 'Qui es in caelis' means 'who are in heaven,' with 'qui' (who) introducing a relative clause, 'es' (you are, 2nd person singular of 'sum'), and 'caelis' (heaven, ablative plural, meaning 'in the heavens'). Verbs like 'sanctificetur' (may it be sanctified) and 'adveniat' (may it come) are in the subjunctive mood, expressing wishes, which we’ll study later. For now, note their role in petitioning God.",
      
      "Latin word order in prayers often emphasizes key ideas. Unlike English, where word order is fixed (subject-verb-object), Latin uses case endings to show relationships, allowing flexibility. In 'Panem nostrum quotidianum da nobis hodie' (Give us this day our daily bread), 'panem' (bread, accusative) is the direct object, 'nostrum' and 'quotidianum' (daily) are adjectives agreeing with 'panem,' 'da' (give, imperative) is the verb, 'nobis' (to us, dative) is the indirect object, and 'hodie' (today) is an adverb. The order highlights 'panem' as the focus of the petition.",
      
      "To memorize the Pater Noster, practice reciting it aloud, using the pronunciation guide from Lesson 1. Focus on the rhythm and flow, as prayers are often chanted. For example, 'fiat voluntas tua' (thy will be done) is pronounced 'FEE-aht woh-LOON-tahs TOO-ah.' Understanding the syntax—how nouns, adjectives, and verbs work together—will make recitation more meaningful. As you memorize, visualize the prayer’s structure: petitions (sanctificetur, adveniat, fiat), requests (da, dimitte, libera), and comparisons (sicut)."
    ],
    vocabulary: [
      "pater - father", "caelum - heaven", "nomen - name", "regnum - kingdom", "voluntas - will",
      "panis - bread", "quotidianus - daily", "debitum - debt", "temptatio - temptation",
      "malum - evil", "noster - our", "qui - who", "es - you are", "fiat - let it be",
      "da - give", "dimitte - forgive", "libera - deliver", "nos - us", "sicut - as", "et - and"
    ],
    practice: [
      "Memorize and recite the Pater Noster aloud, using the pronunciation guide from Lesson 1:",
      "Pater noster, qui es in caelis, sanctificetur nomen tuum.",
      "Adveniat regnum tuum.",
      "Fiat voluntas tua, sicut in caelo et in terra.",
      "Panem nostrum quotidianum da nobis hodie,",
      "et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris.",
      "Et ne nos inducas in tentationem, sed libera nos a malo."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the Pater Noster (full or partial)",
        type: "recitation",
        correctAnswer: "Pater noster, qui es in caelis, sanctificetur nomen tuum...",
        explanation: "Recite as much as memorized, focusing on correct pronunciation."
      },
      {
        id: 2,
        question: "Translate: 'Fiat voluntas tua'",
        type: "translation",
        correctAnswer: "Thy will be done"
      },
      {
        id: 3,
        question: "Match 10 vocabulary words from Pater Noster to their meanings",
        type: "matching",
        options: ["father", "heaven", "name", "kingdom", "will", "bread", "daily", "debt", "temptation", "evil"],
        correctAnswer: [
          "pater - father", "caelum - heaven", "nomen - name", "regnum - kingdom", "voluntas - will",
          "panis - bread", "quotidianus - daily", "debitum - debt", "temptatio - temptation", "malum - evil"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Prepositions and Ablative Case",
    module: 1,
    materials: [
      "Common prepositions in the Mass (e.g., in – in, cum – with)",
      "Ablative case: Usage for place, means, and accompaniment",
      "Vocabulary: 15 prepositional phrases from the Vulgate (e.g., in principio – in the beginning)",
      "Practice: Analyze prepositions in Credo (Creed)"
    ],
    content: [
      "Prepositions in Latin clarify relationships between words, such as location or association, and they often pair with the ablative case in prayers and the Mass. The ablative case has multiple uses, including place ('where' or 'from'), means ('by which'), and accompaniment ('with whom'). Prepositions like 'in' (in, on) and 'cum' (with) typically take the ablative. For example, in 'in caelis' (in the heavens) from the Pater Noster, 'caelis' is the ablative plural of 'caelum' (heaven), indicating location. Similarly, 'cum Maria' (with Mary) uses the ablative 'Maria' to show accompaniment.",
      
      "Let’s explore the ablative’s roles. For place, 'in terra' (on earth) uses the ablative 'terra' to mean 'where.' For means, 'per crucem' (through the cross) shows the instrument of action, with 'crucem' in the accusative (an exception we’ll note later). For accompaniment, 'cum angelis' (with the angels) uses the ablative 'angelis.' Declining nouns in the ablative varies by declension: 1st declension nouns like 'regina' become 'regina' (singular), 2nd declension masculine nouns like 'filius' become 'filio,' and neuter nouns like 'caelum' become 'caelo.'",
      
      "In the Credo, prepositions are common. For example, 'in unum Deum' (in one God) uses 'in' with the accusative 'Deum' (a special case for certain prepositions), but 'ex Maria' (from Mary) uses the ablative 'Maria' to indicate origin. The phrase 'in principio' (in the beginning) from the Vulgate uses the ablative 'principio' for time or circumstance. When analyzing these phrases, identify the preposition, the case of the noun, and the type of relationship (place, means, accompaniment).",
      
      "Practice with phrases like 'de caelo' (from heaven, ablative indicating origin) or 'sine peccato' (without sin, ablative of separation). These constructions are frequent in liturgical texts, where prepositions add precision to prayers. For example, 'pro nobis' (for us) in the Ave Maria uses the ablative 'nobis' to indicate the beneficiary. Mastering these will help you navigate the Credo and other texts with confidence."
    ],
    vocabulary: [
      "in - in", "cum - with", "ex - from", "de - about/of", "sine - without",
      "ad - to/toward", "per - through", "pro - for", "ab - by/from", "sub - under",
      "principio - beginning", "mundo - world", "caelo - heaven", "terra - earth", "aeternitate - eternity"
    ],
    practice: [
      "Identify the preposition and the case of the noun in the following phrases from the Pater Noster and Vulgate:",
      "(1) in caelis,",
      "(2) in terra,",
      "(3) ex Maria,",
      "(4) pro nobis,",
      "(5) in principio.",
      "Then, state whether each ablative indicates place, means, or accompaniment (note: some may use accusative with certain prepositions)."
    ],
    answer: [
      "(1) in caelis: preposition 'in,' noun 'caelis' (ablative), indicates place.",
      "(2) in terra: preposition 'in,' noun 'terra' (ablative), indicates place.",
      "(3) ex Maria: preposition 'ex,' noun 'Maria' (ablative), indicates origin.",
      "(4) pro nobis: preposition 'pro,' noun 'nobis' (ablative), indicates beneficiary.",
      "(5) in principio: preposition 'in,' noun 'principio' (ablative), indicates time/circumstance."
    ],
    quiz: [
      {
        id: 1,
        question: "Which preposition means 'with' in Latin?",
        type: "multiple-choice",
        options: ["in", "cum", "ex", "de"],
        correctAnswer: "cum"
      },
      {
        id: 2,
        question: "Translate: 'In principio'",
        type: "translation",
        correctAnswer: "In the beginning"
      },
      {
        id: 3,
        question: "Decline 'caelum' (heaven) in ablative singular",
        type: "translation",
        correctAnswer: "caelo",
        explanation: "2nd declension neuter nouns take -o in the ablative singular."
      }
    ]
  },
  {
    id: 7,
    title: "The Hail Mary (Ave Maria)",
    module: 1,
    materials: [
      "Full text of Ave Maria with vocabulary (e.g., gratia – grace, Dominus – Lord)",
      "Review noun and adjective agreement in the prayer",
      "Practice: Memorize and recite Ave Maria"
    ],
    content: [
      "The Ave Maria (Hail Mary) is a cornerstone prayer of the Catholic Church, and its Latin text is both beautiful and instructive for learning grammar. The full text is: Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Jesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen. This prayer uses nouns, adjectives, and prepositions you’ve studied, making it a perfect text to apply your knowledge.",
      
      "Start with vocabulary and noun-adjective agreement. 'Maria' (Mary) is a 1st declension feminine noun, nominative singular in 'Ave Maria' (Hail Mary). 'Gratia plena' (full of grace) pairs 'gratia' (grace, feminine nominative singular) with 'plena,' a feminine nominative singular adjective agreeing with 'Maria' implicitly. Similarly, 'benedicta' (blessed, feminine nominative singular) agrees with 'tu' (you, referring to Mary). In 'benedictus fructus' (blessed fruit), 'benedictus' is masculine nominative singular to agree with 'fructus' (fruit, 4th declension, to be covered later).",
      
      "Prepositions and cases are also key. 'Dominus tecum' (the Lord is with you) uses 'tecum,' a combination of 'cum' (with) and 'te' (you, ablative), showing accompaniment. 'In mulieribus' (among women) uses 'in' with the ablative 'mulieribus' (women, 3rd declension plural) to indicate place. 'Pro nobis' (for us) uses the ablative 'nobis' to show the beneficiary. Notice how adjectives like 'sancta' in 'Sancta Maria' (holy Mary) match the noun’s case and gender, reinforcing Lesson 4.",
      
      "The syntax of the Ave Maria is straightforward but flexible, typical of Latin prayers. The first part addresses Mary directly ('Ave Maria'), the second describes her blessings ('benedicta tu'), and the third petitions her ('ora pro nobis'). Memorizing this prayer helps you internalize noun-adjective agreement and case usage. Use the pronunciation guide: 'Ave' (AH-weh), 'gratia' (GRAH-tee-ah), 'benedicta' (beh-neh-DEEK-tah), 'ora' (OH-rah). Recite it slowly to master the rhythm and flow."
    ],
    vocabulary: [
      "ave - hail", "Maria - Mary", "gratia - grace", "plena - full", "Dominus - Lord",
      "tecum - with you", "benedicta - blessed", "mulieribus - women", "fructus - fruit",
      "ventris - womb", "Jesus - Jesus", "sancta - holy", "mater - mother", "Dei - God",
      "ora - pray", "pro - for", "nobis - us", "peccatoribus - sinners", "nunc - now", "hora - hour"
    ],
    practice: [
      "Memorize and recite the Ave Maria aloud, using the pronunciation guide:",
      "Ave Maria, gratia plena, Dominus tecum.",
      "Benedicta tu in mulieribus,",
      "et benedictus fructus ventris tui, Jesus.",
      "Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the Ave Maria (full or partial)",
        type: "recitation",
        correctAnswer: "Ave Maria, gratia plena, Dominus tecum...",
        explanation: "Recite as much as memorized, focusing on correct pronunciation."
      },
      {
        id: 2,
        question: "Translate: 'Gratia plena'",
        type: "translation",
        correctAnswer: "Full of grace"
      },
      {
        id: 3,
        question: "Match 10 vocabulary words from Ave Maria to their meanings",
        type: "matching",
        options: ["hail", "grace", "full", "Lord", "with you", "blessed", "women", "fruit", "womb", "holy"],
        correctAnswer: [
          "ave - hail", "gratia - grace", "plena - full", "Dominus - Lord", "tecum - with you",
          "benedicta - blessed", "mulieribus - women", "fructus - fruit", "ventris - womb", "sancta - holy"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Module 1 Review and Practice",
    module: 1,
    materials: [
      "Review pronunciation, nouns, verbs, adjectives, prepositions, Pater Noster, and Ave Maria",
      "Practice: Translate short excerpts from the Mass and Vulgate",
      "Vocabulary: Review all 100+ words learned so far"
    ],
    content: [
      "This lesson consolidates your knowledge from Module 1, covering pronunciation, 1st and 2nd declension nouns, 1st conjugation verbs in the present tense, adjective agreement, prepositions with the ablative case, and the Pater Noster and Ave Maria. Pronunciation is critical for reciting prayers correctly. Review the vowel sounds: 'a' as 'ah,' 'e' as 'eh,' 'i' as 'ee,' 'o' as 'aw,' 'u' as 'oo.' Consonants like 'c' before 'e' or 'i' are 'ch' (e.g., 'ecclesia,' eh-KLEH-see-ah), and 'v' is 'w' (e.g., 'vita,' WEE-tah). Stress rules—first syllable for two-syllable words, second-to-last if long—apply to words like 'sanctus' (SAHNK-toos).",
      
      "Nouns in the nominative case (e.g., 'agnus,' lamb) act as subjects, while accusative nouns (e.g., 'panem,' bread) are direct objects. Decline 'mater' (mother): nominative 'mater,' accusative 'matrem.' Verbs like 'amo' (I love) follow the pattern: amo, amas, amat, amamus, amatis, amant. Adjectives must match their nouns, as in 'sancta Maria' (holy Mary). Prepositions like 'in' and 'cum' often take the ablative, as in 'in caelis' (in the heavens). Practice these in context with Mass phrases like 'Pax vobis' (Peace be with you), where 'pax' is nominative and 'vobis' is dative (to be covered later).",
      
      "The Pater Noster and Ave Maria use these grammar points. In 'Pater noster,' 'noster' agrees with 'pater' in case, number, and gender. In 'Ave Maria, gratia plena,' 'plena' agrees with 'Maria.' Review the syntax: Latin’s flexible word order relies on endings, not position. For example, 'Panem da' and 'Da panem' both mean 'Give bread,' but the accusative 'panem' clarifies the object. The Vulgate’s 'in principio' (in the beginning) uses the ablative for time. Apply these rules when translating excerpts.",
      
      "Your vocabulary now includes over 100 words, like 'Deus' (God), 'oro' (I pray), and 'gratia' (grace). Revisit the prayers to reinforce these terms. When translating, identify the case, verb form, and agreement. For example, 'Gloria Patri' (Glory to the Father) uses the dative 'Patri' (to be covered later) and nominative 'gloria.' This review prepares you for Module 2’s advanced grammar and prayers."
    ],
    vocabulary: [
      "Deus - God", "ecclesia - church", "fides - faith", "panis - bread", "vinum - wine",
      "amo - I love", "oro - I pray", "credo - I believe", "sanctus - holy", "beatus - blessed",
      "in - in", "cum - with", "pater - father", "caelum - heaven", "gratia - grace"
    ],
    practice: [
      "Translate the following excerpts from the Mass and Vulgate into English, identifying the case or verb form where indicated:",
      "(1) Pax vobis (Mass, identify case of 'pax'),",
      "(2) In principio (Vulgate, identify case of 'principio'),",
      "(3) Sancta Maria (Ave Maria, identify adjective agreement),",
      "(4) Oro pro vobis (Mass, identify verb form),",
      "(5) Fides mea (Vulgate, identify case of 'fides')."
    ],
    answer: [
      "(1) Pax vobis: Peace be with you, 'pax' is nominative (subject).",
      "(2) In principio: In the beginning, 'principio' is ablative (time/circumstance).",
      "(3) Sancta Maria: Holy Mary, 'sancta' agrees with 'Maria' in feminine nominative singular.",
      "(4) Oro pro vobis: I pray for you, 'oro' is 1st person singular present tense.",
      "(5) Fides mea: My faith, 'fides' is nominative (subject)."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate 'oro' (I pray) in present tense",
        type: "translation",
        correctAnswer: "oro, oras, orat, oramus, oratis, orant",
        explanation: "1st conjugation present tense endings: -o, -as, -at, -amus, -atis, -ant"
      },
      {
        id: 2,
        question: "Translate: 'Pax vobis'",
        type: "translation",
        correctAnswer: "Peace be with you"
      },
      {
        id: 3,
        question: "Recite either Pater Noster or Ave Maria",
        type: "recitation",
        correctAnswer: "Pater noster, qui es in caelis... or Ave Maria, gratia plena...",
        explanation: "Choose one prayer and recite as much as memorized."
      }
    ]
  },
  {
    id: 9,
    title: "3rd Declension Nouns",
    module: 2,
    materials: [
      "3rd declension noun patterns (e.g., rex – king, lumen – light)",
      "Vocabulary: 15 nouns from the Vulgate (e.g., verbum – word, pax – peace)",
      "Practice: Identify 3rd declension nouns in Sanctus from the Mass"
    ],
    content: [
      "The 3rd declension is a diverse group of nouns, including masculine, feminine, and neuter nouns, and it’s common in liturgical texts like the Vulgate and the Mass. Unlike the 1st and 2nd declensions, 3rd declension nouns have varied nominative endings but follow predictable patterns in other cases. For example, 'rex' (king, masculine) has nominative singular 'rex' and accusative singular 'regem.' The neuter noun 'lumen' (light) has 'lumen' for both nominative and accusative singular. To identify 3rd declension nouns, look at the genitive singular (ending in -is) in dictionaries, like 'regis' for 'rex' or 'luminis' for 'lumen.'",
      
      "Let’s decline a masculine noun: 'rex' (king) is rex (nominative singular), regem (accusative singular), regis (genitive singular). A feminine noun like 'pax' (peace) is pax, pacem, pacis. A neuter noun like 'verbum' (word) is verbum, verbum, verbi. The key is the stem, found by removing the genitive -is: 'reg-' for 'rex,' 'pac-' for 'pax,' 'verb-' for 'verbum.' In the Sanctus, you’ll see 'Domnus Deus Sabaoth' (Lord God of hosts), where 'Sabaoth' (hosts) is a 3rd declension noun, indeclinable in Latin but treated as nominative.",
      
      "In liturgical texts, 3rd declension nouns often carry significant meaning. For example, 'verbum Dei' (Word of God) uses 'verbum' (nominative or accusative neuter) with 'Dei' (genitive, to be covered later). In 'pax hominibus' (peace to men) from the Gloria, 'pax' is nominative, and 'hominibus' is a 3rd declension dative plural (more on this later). Practice spotting these nouns by their endings and context. For instance, 'nomen' (name) in the Pater Noster is 3rd declension: nomen, nomen, nominis.",
      
      "When analyzing texts, focus on the noun’s role. In 'lumen mundi' (light of the world), 'lumen' is nominative or accusative neuter, and 'mundi' indicates possession. These nouns are trickier than 1st or 2nd declension because of their varied nominative forms, but recognizing the stem and case endings will help. Use your vocabulary, like 'salus' (salvation) or 'virtus' (virtue), to practice declining and identifying these nouns in prayers."
    ],
    vocabulary: [
      "rex - king", "lumen - light", "verbum - word", "pax - peace", "nomen - name",
      "corpus - body", "sanguis - blood", "flumen - river", "tempus - time", "virtus - virtue",
      "lux - light", "salus - salvation", "fons - fountain", "pes - foot", "pars - part"
    ],
    practice: [
      "Identify the 3rd declension nouns in the Sanctus from the Mass and state their case:",
      "Sanctus, sanctus, sanctus Dominus Deus Sabaoth.",
      "Pleni sunt caeli et terra gloria tua.",
      "Hosanna in excelsis.",
      "For reference, the 3rd declension nouns in your vocabulary are:",
      "nomen, corpus, sanguis, flumen, tempus, virtus, lux, salus, fons, pes, pars, pax, verbum, lumen, rex."
    ],
    answer: [
      "In the Sanctus:",
      "(1) Sabaoth (hosts, nominative, indeclinable 3rd declension noun),",
      "(2) gloria (glory, nominative singular, 3rd declension),",
      "(3) terra (earth, nominative singular, 3rd declension)."
    ],
    quiz: [
      {
        id: 1,
        question: "Decline 'rex' (king) in nominative and accusative singular",
        type: "translation",
        correctAnswer: "rex, regem",
        explanation: "3rd declension nouns have varied endings; rex uses -em in accusative."
      },
      {
        id: 2,
        question: "Translate: 'Verbum Dei'",
        type: "translation",
        correctAnswer: "Word of God"
      },
      {
        id: 3,
        question: "Match 10 3rd declension nouns to their meanings",
        type: "matching",
        options: ["king", "light", "word", "peace", "name", "body", "blood", "river", "time", "virtue"],
        correctAnswer: [
          "rex - king", "lumen - light", "verbum - word", "pax - peace", "nomen - name",
          "corpus - body", "sanguis - blood", "flumen - river", "tempus - time", "virtus - virtue"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Imperfect and Future Tenses",
    module: 2,
    materials: [
      "Imperfect tense: amabam (I was loving)",
      "Future tense: amabo (I will love)",
      "Vocabulary: 15 verbs from the Vulgate (e.g., venio – come, dico – say)",
      "Practice: Conjugate verbs in Kyrie Eleison"
    ],
    content: [
      "The imperfect and future tenses expand your ability to express time in Latin verbs, crucial for understanding narratives in the Vulgate and prayers like the Kyrie Eleison. The imperfect tense describes ongoing or repeated past actions, like 'amabam' (I was loving) from 'amare' (to love, 1st conjugation). For 1st conjugation verbs, remove the -re from the infinitive and add endings: -bam, -bas, -bat, -bamus, -batis, -bant. So, 'laudare' (to praise) becomes: laudabam, laudabas, laudabat, laudabamus, laudabatis, laudabant. For 'venio' (to come, 4th conjugation), it’s veniebam, veniebas, veniebat, etc., using -ie- for 4th conjugation.",
      
      "The future tense describes actions that will happen, like 'amabo' (I will love). For 1st and 2nd conjugation verbs, add -bo, -bis, -bit, -bimus, -bitis, -bunt to the stem. For 'amare': amabo, amabis, amabit, amabimus, amabitis, amabunt. For 3rd and 4th conjugation verbs like 'dico' (to say) or 'venio,' the endings are -am, -es, -et, -emus, -etis, -ent, with a vowel change: 'dico' becomes dicam, dices, dicet, etc.; 'venio' becomes veniam, venies, veniet, etc. Practice with 'facio' (to make, 3rd conjugation): faciam, facies, faciet, faciemus, facietis, facient.",
      
      "In the Kyrie Eleison, verbs are often imperatives (commands), like 'miserere' (have mercy), but related verbs in the Vulgate use these tenses. For example, 'dicebam' (I was saying) is imperfect, showing ongoing speech, while 'dicam' (I will say) is future, indicating a future declaration. In prayers, the future tense can express hope or prophecy, as in 'veniet' (he will come) for Christ’s return. The imperfect sets the scene for past events, common in biblical narratives like ‘stabat’ (he/she was standing).",
      
      "When conjugating, identify the verb’s conjugation by its infinitive ending (-are, -ere, -ire). Then apply the correct endings. For example, 'laudo' (I praise, 1st conjugation) in the imperfect is laudabam, and in the future, laudabo. In the Kyrie, focus on understanding verbs in context, even if imperatives dominate. This skill will help you read the Vulgate’s stories and prayers’ petitions with greater depth."
    ],
    vocabulary: [
      "venio - I come", "dico - I say", "facio - I make", "sum - I am", "habeo - I have",
      "possum - I can", "volo - I want", "nolo - I don’t want", "eo - I go", "sto - I stand",
      "duco - I lead", "mitto - I send", "rego - I rule", "laudo - I praise", "vivo - I live"
    ],
    practice: [
      "Conjugate the following verbs in the imperfect and future tenses:",
      "(1) laudo (to praise, 1st conjugation),",
      "(2) venio (to come, 4th conjugation),",
      "(3) dico (to say, 3rd conjugation).",
      "Then, translate 'Miserere mei' from the Kyrie Eleison."
    ],
    answer: [
      "(1) laudo:",
      "Imperfect: laudabam, laudabas, laudabat, laudabamus, laudabatis, laudabant.",
      "Future: laudabo, laudabis, laudabit, laudabimus, laudabitis, laudabunt.",
      "(2) venio:",
      "Imperfect: veniebam, veniebas, veniebat, veniebamus, veniebatis, veniebant.",
      "Future: veniam, venies, veniet, veniemus, venietis, venient.",
      "(3) dico:",
      "Imperfect: dicebam, dicebas, dicebat, dicebamus, dicebatis, dicebant.",
      "Future: dicam, dices, dicet, dicemus, dicetis, dicent.",
      "Translation: 'Miserere mei' means 'Have mercy on me.'"
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate 'venio' (I come) in imperfect and future tenses",
        type: "translation",
        correctAnswer: "Imperfect: veniebam, veniebas, veniebat, veniebamus, veniebatis, veniebant; Future: veniam, venies, veniet, veniemus, venietis, venient",
        explanation: "4th conjugation verbs use -ie- for imperfect and -ia- for future."
      },
      {
        id: 2,
        question: "Translate: 'Miserere mei'",
        type: "translation",
        correctAnswer: "Have mercy on me"
      },
      {
        id: 3,
        question: "Identify the tense of 'dicebam' in Kyrie Eleison",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Future", "Perfect"],
        correctAnswer: "Imperfect"
      }
    ]
  },
  {
    id: 11,
    title: "The Glory Be (Gloria Patri)",
    module: 2,
    materials: [
      "Full text of Gloria Patri with vocabulary (e.g., gloria – glory, saeculum – world/age)",
      "Review verb tenses and noun cases in the prayer",
      "Practice: Memorize and recite Gloria Patri"
    ],
    content: [
      "The Gloria Patri, or Glory Be, is a short but profound prayer praising the Trinity, commonly used in the Rosary and liturgy. Its full text is: Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen. This lesson examines its vocabulary, verb tenses, and noun cases, reinforcing your grammar knowledge. The prayer’s structure is simple, making it ideal for applying concepts like the dative case and verb forms.",
      
      "Key vocabulary includes 'gloria' (glory, 3rd declension feminine nominative singular), 'Patri' (to the Father, dative singular of 'pater'), 'Filio' (to the Son, dative singular of 'filius'), and 'Spiritui Sancto' (to the Holy Spirit, dative singular of 'spiritus' and 'sanctus'). The dative case, used here for indirect objects, indicates to whom glory is given. Adjectives like 'sancto' agree with 'spiritui' in case, number, and gender (masculine dative singular). 'Saeculum' (world/age) appears in the phrase 'in saecula saeculorum' (forever and ever, ablative plural for duration).",
      
      "Verb tenses are prominent. 'Erat' (was, 3rd person singular imperfect of 'sum') and 'est' (is, present tense) contrast past and present states. 'Erit' (will be, future tense) expresses eternity. The phrase 'sicut erat in principio' (as it was in the beginning) uses the imperfect to describe a past state, with 'in principio' (ablative) indicating time. The flexible word order emphasizes 'gloria' at the start, focusing on the act of giving glory.",
      
      "Reciting the Gloria Patri helps you practice pronunciation and grammar. Use: 'Gloria' (GLOH-ree-ah), 'Patri' (PAH-tree), 'sicut' (SEE-koot), 'saecula' (SEH-koo-lah). The prayer’s repetition in the Rosary reinforces its vocabulary and structure. As you memorize, note how cases (dative for 'Patri,' 'Filio') and verb tenses (erat, est, erit) work together to convey timeless praise."
    ],
    vocabulary: [
      "gloria - glory", "patri - father", "filio - son", "spiritui - spirit", "sancto - holy",
      "sicut - as", "erat - was", "est - is", "erit - will be", "saeculum - world/age",
      "in - in", "principio - beginning", "nunc - now", "semper - always", "amen - amen"
    ],
    practice: [
      "Memorize and recite the Gloria Patri aloud:",
      "Gloria Patri, et Filio, et Spiritui Sancto.",
      "Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the Gloria Patri (full or partial)",
        type: "recitation",
        correctAnswer: "Gloria Patri, et Filio, et Spiritui Sancto...",
        explanation: "Recite as much as memorized, focusing on correct pronunciation."
      },
      {
        id: 2,
        question: "Translate: 'Sicut erat in principio'",
        type: "translation",
        correctAnswer: "As it was in the beginning"
      },
      {
        id: 3,
        question: "Match 10 vocabulary words from Gloria Patri to their meanings",
        type: "matching",
        options: ["glory", "father", "son", "spirit", "holy", "as", "was", "is", "will be", "world/age"],
        correctAnswer: [
          "gloria - glory", "patri - father", "filio - son", "spiritui - spirit", "sancto - holy",
          "sicut - as", "erat - was", "est - is", "erit - will be", "saeculum - world/age"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Dative Case and Indirect Objects",
    module: 2,
    materials: [
      "Dative case: Usage for indirect objects and possession",
      "Vocabulary: 15 dative phrases from the Mass (e.g., Domine, non sum dignus – Lord, I am not worthy)",
      "Practice: Analyze dative constructions in Confiteor"
    ],
    content: [
      "The dative case in Latin indicates the indirect object (to/for whom something is given or done) or possession (whose). It’s common in prayers and the Mass, where actions are directed toward God, saints, or others. For 1st declension nouns like 'regina' (queen), the dative singular is 'reginae' (to the queen). For 2nd declension nouns like 'filius' (son), it’s 'filio' (to the son), and for 'caelum' (heaven, neuter), it’s 'caelo.' In 'Domine, non sum dignus' (Lord, I am not worthy), 'Domine' is the dative of 'Dominus,' indicating the Lord as the one addressed.",
      
      "The dative is used for indirect objects in phrases like 'Gratias tibi agimus' (We give thanks to you) from the Gloria, where 'tibi' (to you) is the dative of 'tu.' It also shows possession, as in 'Nomen ei est Jesus' (His name is Jesus), where 'ei' (to him) implies possession. In the Confiteor, 'tibi' and 'vobis' (to you plural) appear in 'Confiteor tibi' (I confess to you), directing the confession to God or the congregation. Practice declining: 'mater' (mother) is 'matri,' 'pater' (father) is 'patri.'",
      
      "In liturgical texts, the dative often pairs with verbs like 'do' (to give) or 'oro' (to pray). For example, 'Ora pro nobis' (Pray for us) in the Ave Maria uses 'nobis' (to us) as the beneficiary of the prayer. Word order is flexible, so 'nobis ora' would mean the same, but the dative ending clarifies the role. In 'Domine, non sum dignus,' 'Domine' is dative, showing the Lord is the one to whom the speaker is not worthy.",
      
      "When analyzing the Confiteor, look for datives like 'Deo' (to God) or 'beatae Mariae' (to blessed Mary). These indicate to whom the confession or action is directed. Practice with phrases like 'mihi pax’ (peace to me) or ‘nobis gloria’ (glory to us). Recognizing the dative will help you understand the relationships in prayers and prepare you for more complex texts."
    ],
    vocabulary: [
      "Domine - Lord", "dignus - worthy", "mihi - to me", "nobis - to us", "tibi - to you",
      "ei - to him/her", "eis - to them", "filius - son", "pater - father", "regina - queen",
      "sanctus - holy", "peccator - sinner", "servus - servant", "mater - mother", "frater - brother"
    ],
    practice: [
      "Identify the dative nouns in the following phrases from the Mass and prayers, and translate:",
      "(1) Domine, non sum dignus (Mass),",
      "(2) Ora pro nobis (Ave Maria),",
      "(3) Gloria Patri (Gloria Patri),",
      "(4) Tibi laus (Mass),",
      "(5) Nobis pax (Vulgate)."
    ],
    answer: [
      "(1) Domine, non sum dignus: 'Domine' (dative of Dominus), Lord, I am not worthy.",
      "(2) Ora pro nobis: 'nobis' (dative of nos), Pray for us.",
      "(3) Gloria Patri: 'Patri' (dative of pater), Glory to the Father.",
      "(4) Tibi laus: 'tibi' (dative of tu), Praise to you.",
      "(5) Nobis pax: 'nobis' (dative of nos), Peace to us."
    ],
    quiz: [
      {
        id: 1,
        question: "Decline 'filius' (son) in dative singular",
        type: "translation",
        correctAnswer: "filio",
        explanation: "2nd declension nouns take -o in the dative singular."
      },
      {
        id: 2,
        question: "Translate: 'Domine, non sum dignus'",
        type: "translation",
        correctAnswer: "Lord, I am not worthy"
      },
      {
        id: 3,
        question: "Identify the dative noun in 'Tibi laus' from Confiteor",
        type: "multiple-choice",
        options: ["laus", "tibi", "Domine", "sum"],
        correctAnswer: "tibi"
      }
    ]
  },
  {
    id: 13,
    title: "2nd Conjugation Verbs",
    module: 2,
    materials: [
      "2nd conjugation verbs (e.g., video – see, moneo – warn)",
      "Vocabulary: 15 verbs from the Vulgate and Mass",
      "Practice: Conjugate verbs in Agnus Dei"
    ],
    content: [
      "Second conjugation verbs in Latin, ending in -ere in the infinitive (e.g., 'videre,' to see), are common in the Vulgate and Mass texts. Their present tense is formed by removing the -re and adding endings: -eo, -es, -et, -emus, -etis, -ent. For 'video' (I see): video, vides, videt, videmus, videtis, vident. Compare this to 1st conjugation’s -o, -as, -at (e.g., 'amo'). The vowel -e- before the ending distinguishes 2nd conjugation. Try 'moneo' (I warn): moneo, mones, monet, monemus, monetis, monent.",
      
      "In the imperfect tense, 2nd conjugation verbs use -ebam, -ebas, -ebat, etc. For 'video': videbam, videbas, videbat, videbamus, videbatis, videbant. The future tense uses -ebo, -ebis, -ebit, etc., so ‘video’ becomes videbo, videbis, videbit, videbimus, videbitis, videbunt. These patterns apply to verbs like 'teneo' (I hold) or 'doceo' (I teach). In the Agnus Dei, verbs like 'tollis' (you take away) are 2nd conjugation, present tense (from 'tollere').",
      
      "These verbs often appear in sacred texts. For example, 'video' (I see) in the Vulgate describes witnessing divine acts, as in 'Vidi Dominum' (I saw the Lord). In the Mass, 'respondeo' (I respond) might be used in dialogues, like ‘Respondeo Amen’ (I respond Amen). The verb’s conjugation tells you the subject and time. In ‘Agnus Dei, qui tollis peccata mundi’ (Lamb of God, who takes away the sins of the world), ‘tollis’ is 2nd person singular present, addressing Christ.",
      
      "Practice conjugating verbs in context. For ‘habeo’ (I have): habeo, habes, habet, habemus, habetis, habent. In the imperfect: habebam, habebas, etc. In the future: habebo, habebis, etc. Recognizing these forms in prayers helps you understand their meaning and structure. Focus on the stem and endings to master 2nd conjugation verbs in liturgical settings."
    ],
    vocabulary: [
      "video - I see", "moneo - I warn", "teneo - I hold", "doceo - I teach", "moveo - I move",
      "jubeo - I order", "timeo - I fear", "debeo - I owe", "habeo - I have", "augeo - I increase",
      "luceo - I shine", "maneo - I remain", "careo - I lack", "respondeo - I respond", "gaudeo - I rejoice"
    ],
    practice: [
      "Conjugate the following 2nd conjugation verbs in the present tense:",
      "(1) video (to see),",
      "(2) moneo (to warn),",
      "(3) habeo (to have).",
      "Then, translate 'Qui tollis peccata mundi' from the Agnus Dei."
    ],
    answer: [
      "(1) video: video, vides, videt, videmus, videtis, vident.",
      "(2) moneo: moneo, mones, monet, monemus, monetis, monent.",
      "(3) habeo: habeo, habes, habet, habemus, habetis, habent.",
      "Translation: 'Qui tollis peccata mundi' means 'Who takes away the sins of the world.'"
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate 'video' (I see) in present tense",
        type: "translation",
        correctAnswer: "video, vides, videt, videmus, videtis, vident",
        explanation: "2nd conjugation present tense endings: -eo, -es, -et, -emus, -etis, -ent"
      },
      {
        id: 2,
        question: "Translate: 'Miserere nobis' from Agnus Dei",
        type: "translation",
        correctAnswer: "Have mercy on us"
      },
      {
        id: 3,
        question: "Identify the verb form in 'Tollis peccata' from Agnus Dei",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Future", "Perfect"],
        correctAnswer: "Present"
      }
    ]
  },
  {
    id: 14,
    title: "The Rosary – Structure and Prayers",
    module: 2,
    materials: [
      "Structure of the Rosary: Mysteries, decades, and prayers (Pater Noster, Ave Maria, Gloria Patri)",
      "Vocabulary: 15 terms related to the Rosary (e.g., mysterium – mystery, decas – decade)",
      "Practice: Recite the prayers of one decade of the Rosary"
    ],
    content: [
      "The Rosary is a meditative prayer central to Catholic devotion, combining vocal and mental prayer through mysteries and repeated prayers. Its structure includes five decades, each with one Pater Noster, ten Ave Marias, and one Gloria Patri, reflecting on a mystery (e.g., Annunciation). In Latin, these prayers are familiar from earlier lessons, but their repetition in the Rosary reinforces vocabulary and grammar. This lesson focuses on the prayers’ roles and key terms related to the Rosary’s structure.",
      
      "Key vocabulary includes 'mysterium' (mystery, 2nd declension neuter, nominative singular), referring to events like the Nativity or Resurrection. 'Decas' (decade, 3rd declension feminine) denotes the ten Ave Marias. The prayers use grammar you’ve studied: in the Pater Noster, 'noster' agrees with 'pater' (nominative masculine singular); in the Ave Maria, 'benedicta' agrees with 'tu' (feminine nominative singular); in the Gloria Patri, 'Patri' and 'Filio' are dative, indicating to whom glory is given.",
      
      "The Rosary’s prayers are recited in a specific order. For one decade, you start with a Pater Noster, followed by ten Ave Marias, and conclude with a Gloria Patri. The Latin text remains consistent, so focus on pronunciation and rhythm: 'Pater' (PAH-ter), 'Ave' (AH-weh), 'Gloria' (GLOH-ree-ah). The dative case is prominent, as in 'ora pro nobis' (pray for us, Ave Maria), where 'nobis' is dative. The verb 'es' (you are) in 'qui es in caelis' (Pater Noster) is present tense, second person singular.",
      
      "Reciting a decade aloud helps internalize the prayers’ flow. The mysteries add context, so when reciting, consider the mystery (e.g., 'nativitas' – Nativity). Practice with one decade, ensuring clear pronunciation and correct case endings. This repetition builds fluency and prepares you for Module 3’s complex texts like the Creed."
    ],
    vocabulary: [
      "mysterium - mystery", "decas - decade", "rosarium - rosary", "nativitas - nativity",
      "resurrectio - resurrection", "annuntiatio - annunciation", "visitatio - visitation",
      "crux - cross", "corona - crown", "gaudium - joy", "dolor - sorrow", "gloria - glory",
      "lumen - light", "preces - prayers", "meditatio - meditation"
    ],
    practice: [
      "Recite one decade of the Rosary in Latin, including one Pater Noster, ten Ave Marias, and one Gloria Patri.",
      "Use the pronunciation guides from Lessons 5, 7, and 11.",
      "For example:",
      "Pater Noster: 'Pater noster, qui es in caelis...'",
      "Ave Maria: 'Ave Maria, gratia plena...'",
      "Gloria Patri: 'Gloria Patri, et Filio...'"
    ],
    quiz: [
      {
        id: 1,
        question: "Recite one decade of the Rosary (Pater Noster, one Ave Maria, Gloria Patri)",
        type: "recitation",
        correctAnswer: "Pater noster, qui es in caelis... Ave Maria, gratia plena... Gloria Patri, et Filio...",
        explanation: "Recite the prayers with correct pronunciation, as practiced in earlier lessons."
      },
      {
        id: 2,
        question: "Translate: 'Ora pro nobis' from the Ave Maria",
        type: "translation",
        correctAnswer: "Pray for us"
      },
      {
        id: 3,
        question: "Match 10 vocabulary words related to the Rosary to their meanings",
        type: "matching",
        options: ["mystery", "decade", "rosary", "nativity", "resurrection", "annunciation", "visitation", "cross", "crown", "joy"],
        correctAnswer: [
          "mysterium - mystery", "decas - decade", "rosarium - rosary", "nativitas - nativity",
          "resurrectio - resurrection", "annuntiatio - annunciation", "visitatio - visitation",
          "crux - cross", "corona - crown", "gaudium - joy"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Adverbs and Comparisons",
    module: 2,
    materials: [
      "Formation and use of adverbs (e.g., sancte – holily, from sanctus)",
      "Comparative and superlative forms (e.g., sanctius – more holy, sanctissimus – most holy)",
      "Vocabulary: 15 adverbs and adjectives from the Vulgate",
      "Practice: Identify adverbs in Salve Regina"
    ],
    content: [
      "Adverbs in Latin describe verbs, adjectives, or other adverbs, often indicating manner, time, or extent. They’re formed from adjectives by adding -e or -iter to the stem. For 1st/2nd declension adjectives like 'sanctus' (holy), remove the ending and add -e: 'sancte' (holily). For 3rd declension adjectives like 'fortis' (strong), add -iter to the stem: 'fortiter' (strongly). In the Salve Regina, 'dulce' (sweetly, from 'dulcis') describes how Mary is 'vita, dulcedo' (life, sweetness). Adverbs don’t change for case or number, unlike adjectives.",
      
      "Comparative adverbs add -ius to the adjective’s stem: 'sanctius' (more holily) from 'sanctus.' Superlative adverbs often use -issime: 'sanctissime' (most holily). Adjectives also have comparative and superlative forms: 'sanctior' (more holy) and 'sanctissimus' (most holy). These forms are common in the Vulgate, emphasizing degrees of quality, as in 'fortior' (stronger) or 'fortissimus' (strongest). In prayers, comparatives like 'maior' (greater, from 'magnus') highlight divine attributes, as in 'maior es tu' (you are greater).",
      
      "In the Salve Regina, adverbs enhance meaning. 'Semper' (always) in 'nunc et semper' (now and always) is an adverb of time. Identifying adverbs involves checking for -e, -iter, or irregular forms like 'bene' (well, from 'bonus'). Practice spotting them in phrases like 'valde gloriosa' (very glorious), where 'valde' (very) modifies the adjective. Comparatives and superlatives appear in the Vulgate, such as 'citius’ (more quickly) or ‘optime’ (best). These forms add depth to liturgical texts.",
      
      "When analyzing texts, distinguish adverbs from adjectives. In 'sancte oras' (you pray holily), 'sancte' is an adverb modifying 'oras,' while in 'sancta Maria,' 'sancta' is an adjective. Practice forming adverbs from adjectives like 'clarus' (bright): 'clare' (brightly), 'clarius' (more brightly), 'clarissime' (most brightly). This skill will help you understand the expressive language of prayers and scripture."
    ],
    vocabulary: [
      "sancte - holily", "fortiter - strongly", "bene - well", "semper - always", "nunc - now",
      "valde - very", "citius - more quickly", "optime - best", "dulce - sweetly", "clare - brightly",
      "maior - greater", "sanctior - more holy", "fortior - stronger", "sanctissimus - most holy",
      "clarissimus - most bright"
    ],
    practice: [
      "Identify the adverbs in the following phrases from the Salve Regina and translate:",
      "(1) Nunc et semper,",
      "(2) Valde gloriosa,",
      "(3) Dulce et spes nostra.",
      "Then, form the comparative and superlative adverbs from the adjective 'clarus' (bright)."
    ],
    answer: [
      "(1) Nunc et semper: Adverb 'nunc' (now), 'semper' (always). Translation: Now and always.",
      "(2) Valde gloriosa: Adverb 'valde' (very). Translation: Very glorious.",
      "(3) Dulce et spes nostra: Adverb 'dulce' (sweetly). Translation: Sweetly and our hope.",
      "Adverb forms from 'clarus': clare (brightly), clarius (more brightly), clarissime (most brightly)."
    ],
    quiz: [
      {
        id: 1,
        question: "Form the adverb from 'sanctus' (holy)",
        type: "translation",
        correctAnswer: "sancte",
        explanation: "1st/2nd declension adjectives form adverbs with -e."
      },
      {
        id: 2,
        question: "Translate: 'Valde gloriosa' from Salve Regina",
        type: "translation",
        correctAnswer: "Very glorious"
      },
      {
        id: 3,
        question: "What is the superlative adverb form of 'clarus' (bright)?",
        type: "multiple-choice",
        options: ["clare", "clarius", "clarissime", "clariter"],
        correctAnswer: "clarissime"
      }
    ]
  },
  {
    id: 16,
    title: "Module 2 Review and Practice",
    module: 2,
    materials: [
      "Review 3rd declension nouns, imperfect/future tenses, dative case, 2nd conjugation verbs, adverbs, Rosary prayers",
      "Practice: Translate excerpts from the Rosary and Vulgate",
      "Vocabulary: Review all 100+ words from Module 2"
    ],
    content: [
      "This lesson reviews Module 2, covering 3rd declension nouns, imperfect and future tenses, dative case, 2nd conjugation verbs, adverbs, and the Rosary prayers (Pater Noster, Ave Maria, Gloria Patri). Third declension nouns like 'rex' (king: rex, regem, regis) and 'lumen' (light: lumen, lumen, luminis) have varied nominative forms but consistent stems. The imperfect tense (e.g., 'laudabam,' I was praising) describes past ongoing actions, while the future tense (e.g., 'laudabo,' I will praise) predicts actions. Second conjugation verbs like 'video' (I see: video, vides, videt) use -eo, -es, -et endings.",
      
      "The dative case, used for indirect objects, appears in phrases like 'Patri' (to the Father) in the Gloria Patri. Adverbs like 'sancte' (holily) and comparatives like 'sanctius' (more holily) modify verbs or adjectives. The Rosary’s structure reinforces these: 'nobis' (to us, dative) in 'ora pro nobis' (Ave Maria), and 'semper' (always, adverb) in the Gloria Patri. Review pronunciation: 'rex' (rehks), 'video' (WIH-deh-oh), 'sancte' (SAHNK-teh).",
      
      "Translating excerpts requires identifying cases, verb forms, and adverbs. In 'verbum Dei' (Word of God, Vulgate), 'verbum' is 3rd declension nominative, and 'Dei' is dative. In 'miserere nobis' (have mercy on us, Rosary), 'miserere' is an imperative, and 'nobis' is dative. Practice with phrases like 'in saecula saeculorum' (forever and ever), where 'saeculorum' is ablative plural (duration). Your vocabulary now exceeds 100 words, including 'mysterium' (mystery) and 'fortiter' (strongly).",
      
      "When translating, note word order flexibility. In 'gloria tibi' (glory to you), 'tibi' is dative, and word order doesn’t change meaning. Review the Rosary prayers to solidify grammar and pronunciation. This prepares you for Module 3’s focus on the Creed and advanced grammar like participles."
    ],
    vocabulary: [
      "rex - king", "lumen - light", "verbum - word", "video - I see", "moneo - I warn",
      "sancte - holily", "semper - always", "mysterium - mystery", "decas - decade",
      "nobis - to us", "tibi - to you", "gloria - glory", "pax - peace", "fortiter - strongly",
      "maior - greater"
    ],
    practice: [
      "Translate the following excerpts from the Rosary and Vulgate, identifying the specified grammar:",
      "(1) In saecula saeculorum (Gloria Patri, identify case),",
      "(2) Verbum Dei (Vulgate, identify case),",
      "(3) Miserere nobis (Rosary, identify verb form),",
      "(4) Sancte oras (Vulgate, identify adverb),",
      "(5) Patri gloria (Gloria Patri, identify case)."
    ],
    answer: [
      "(1) In saecula saeculorum: Forever and ever, 'saeculorum' is ablative plural (duration).",
      "(2) Verbum Dei: Word of God, 'verbum' is nominative, 'Dei' is dative.",
      "(3) Miserere nobis: Have mercy on us, 'miserere' is imperative.",
      "(4) Sancte oras: You pray holily, 'sancte' is an adverb.",
      "(5) Patri gloria: Glory to the Father, 'Patri' is dative, 'gloria' is nominative."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate 'video' (I see) in imperfect tense",
        type: "translation",
        correctAnswer: "videbam, videbas, videbat, videbamus, videbatis, videbant",
        explanation: "2nd conjugation imperfect tense uses -ebam, -ebas, -ebat, etc."
      },
      {
        id: 2,
        question: "Translate: 'In saecula saeculorum' from Gloria Patri",
        type: "translation",
        correctAnswer: "Forever and ever"
      },
      {
        id: 3,
        question: "Identify the case of 'nobis' in 'Ora pro nobis' from Ave Maria",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Dative", "Ablative"],
        correctAnswer: "Dative"
      }
    ]
  },
  {
    id: 17,
    title: "Participles – Present and Perfect",
    module: 3,
    materials: [
      "Present participles (e.g., amans – loving)",
      "Perfect participles (e.g., amatus – loved)",
      "Vocabulary: 15 participles from the Vulgate",
      "Practice: Identify participles in Magnificat"
    ],
    content: [
      "Participles in Latin act as adjectives, describing nouns while carrying verbal meaning. Present participles describe ongoing actions, like 'amans' (loving) from 'amare' (to love, 1st conjugation). They’re formed by adding -ns (nominative) or -nt- (stem) to the verb’s present stem, with 3rd declension endings. For 'amare': amans, amantis (genitive), amantem (accusative). For 'video' (2nd conjugation): videns, videntis, videntem. These agree with nouns in gender, number, and case, as in 'vir amans' (loving man, masculine nominative singular).",
      
      "Perfect participles describe completed actions, like 'amatus' (having been loved) from 'amare.' They use the fourth principal part of the verb (e.g., amatus, -a, -um) and follow 1st/2nd declension endings: 'amatus vir’ (loved man), ‘amata femina’ (loved woman). For ‘video,’ it’s ‘visus, -a, -um’ (having been seen). In the Magnificat, participles are common, like ‘exsultans’ (rejoicing, present participle) or ‘dispersit’ (having scattered, perfect participle from ‘dispergere’).",
      
      "In the Vulgate, participles add vividness. ‘Venientes’ (coming, from ‘venire’) in ‘venientes ad te’ (those coming to you) describes ongoing action. Perfect participles like ‘natus’ (born, from ‘nasci’) in ‘Jesus natus est’ (Jesus was born) indicate completed events. Participles agree with their nouns, so ‘Maria exsultans’ (Mary rejoicing) uses feminine nominative singular. In the Magnificat, ‘exaltavit humiles’ (he has exalted the humble) uses ‘humiles’ (accusative plural) with ‘exaltavit’ (perfect).",
      
      "Practice identifying participles by their endings (-ns/-nt- for present, -us/-a/-um for perfect) and their agreement with nouns. In ‘puer natus’ (boy born), ‘natus’ is masculine nominative singular. This skill is key for Module 3’s complex texts like the Creed, where participles describe divine actions or states."
    ],
    vocabulary: [
      "amans - loving", "videns - seeing", "veniens - coming", "dicens - saying", "audiens - hearing",
      "amatus - loved", "visus - seen", "natus - born", "missus - sent", "factus - made",
      "exsultans - rejoicing", "regnans - reigning", "tenens - holding", "dans - giving", "sperans - hoping"
    ],
    practice: [
      "Identify the participles in the following phrases from the Magnificat and state whether they are present or perfect:",
      "(1) Exsultans exsultavit,",
      "(2) Dispersit superbos,",
      "(3) Fecit potentiam,",
      "(4) Venientes ad eum,",
      "(5) Natus in Bethlehem."
    ],
    answer: [
      "(1) Exsultans exsultavit: ‘exsultans’ is a present participle (rejoicing).",
      "(2) Dispersit superbos: ‘dispersit’ is a perfect participle (having scattered).",
      "(3) Fecit potentiam: no participle, ‘fecit’ is a verb.",
      "(4) Venientes ad eum: ‘venientes’ is a present participle (coming).",
      "(5) Natus in Bethlehem: ‘natus’ is a perfect participle (born)."
    ],
    quiz: [
      {
        id: 1,
        question: "Form the present participle of 'amare' (to love)",
        type: "translation",
        correctAnswer: "amans",
        explanation: "Present participles use -ns or -nt- with the verb’s present stem."
      },
      {
        id: 2,
        question: "Translate: 'Puer natus' from the Vulgate",
        type: "translation",
        correctAnswer: "Boy born"
      },
      {
        id: 3,
        question: "Is ‘exsultans’ in the Magnificat a present or perfect participle?",
        type: "multiple-choice",
        options: ["Present", "Perfect", "Future", "Imperfect"],
        correctAnswer: "Present"
      }
    ]
  },
  {
    id: 18,
    title: "The Creed (Credo)",
    module: 3,
    materials: [
      "Full text of the Nicene Creed with vocabulary (e.g., credo – I believe, omnipotens – almighty)",
      "Analyze participles, dative case, and verb tenses",
      "Practice: Memorize and recite the Credo"
    ],
    content: [
      "The Nicene Creed (Credo) is a statement of faith recited in the Mass, rich in grammar and vocabulary. Its Latin text begins: Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium. This lesson explores its structure, focusing on participles, dative case, and verb tenses. The Creed’s theological depth makes it ideal for applying Module 3’s intermediate grammar.",
      
      "Key vocabulary includes 'credo' (I believe, 2nd conjugation present), 'omnipotens' (almighty, adjective), and 'factor' (maker, 3rd declension). The dative case is frequent, as in ‘in unum Deum’ (in one God), where ‘Deum’ is accusative with ‘in’ (a special use), but ‘Patrem’ (Father) is dative in apposition. Participles appear, like ‘factorem’ (making, present participle from ‘facere’) and ‘natum’ (born, perfect participle from ‘nasci’). Verb tenses include ‘credo’ (present) and ‘est’ (is, from ‘sum’).",
      
      "The Creed’s syntax uses flexible word order. In ‘Patrem omnipotentem’ (Father almighty), ‘omnipotentem’ agrees with ‘Patrem’ (accusative or dative masculine singular). Prepositions like ‘per’ in ‘per quem omnia facta sunt’ (through whom all things were made) take the accusative. Participles like ‘consubstantialem’ (consubstantial) describe Christ’s nature. Practice pronunciation: ‘Credo’ (KREH-doh), ‘omnipotens’ (ohm-nee-POH-tens), ‘natum’ (NAH-toom).",
      
      "Memorizing the Credo reinforces grammar and vocabulary. Focus on the first section: ‘Credo in unum Deum...’ Identify datives (‘Patrem’), participles (‘factorem’), and verbs (‘credo’). The Creed’s repetition in the Mass aids fluency. As you recite, note how participles add descriptive depth, like ‘visibilium omnium’ (of all things visible), where ‘visibilium’ is a participle-adjective."
    ],
    vocabulary: [
      "credo - I believe", "omnipotens - almighty", "factor - maker", "caelum - heaven", "terra - earth",
      "visibilium - visible", "invisibilium - invisible", "natum - born", "consubstantialem - consubstantial",
      "incarnatus - incarnate", "passus - suffered", "resurrexit - he rose", "ascendit - he ascended",
      "judicare - to judge", "venturus - about to come"
    ],
    practice: [
      "Memorize and recite the first section of the Nicene Creed:",
      "Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae,",
      "visibilium omnium et invisibilium."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the first section of the Credo",
        type: "recitation",
        correctAnswer: "Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae...",
        explanation: "Recite with correct pronunciation, as practiced in earlier lessons."
      },
      {
        id: 2,
        question: "Translate: ‘Patrem omnipotentem’",
        type: "translation",
        correctAnswer: "Father almighty"
      },
      {
        id: 3,
        question: "Identify the participle in ‘factorem caeli et terrae’",
        type: "multiple-choice",
        options: ["caeli", "factorem", "terrae", "omnipotentem"],
        correctAnswer: "factorem"
      }
    ]
  },
  {
    id: 19,
    title: "Relative Pronouns",
    module: 3,
    materials: [
      "Relative pronouns (qui, quae, quod – who, which, that)",
      "Vocabulary: 15 relative pronoun phrases from the Vulgate",
      "Practice: Analyze relative clauses in Magnificat"
    ],
    content: [
      "Relative pronouns in Latin (qui, quae, quod) introduce relative clauses, describing or identifying a noun. They agree with their antecedent in gender and number but take their case from their role in the clause. For example, ‘qui’ (nominative masculine singular, who) in ‘Pater qui es in caelis’ (Father who are in heaven) refers to ‘Pater’ (masculine singular) but is nominative as the subject of ‘es.’ Declension: qui (masc. nom. sg.), quae (fem. nom. sg.), quod (neuter nom. sg.); quem (masc. acc. sg.), quam (fem. acc. sg.), quod (neuter acc. sg.).",
      
      "In the Magnificat, relative clauses are common. In ‘quae fecit mihi magna’ (who has done great things for me), ‘quae’ (feminine nominative singular) refers to ‘Dominus’ (implied) and is the subject of ‘fecit.’ The dative ‘mihi’ (to me) shows the indirect object. In ‘qui potens est’ (who is powerful), ‘qui’ is masculine nominative singular, agreeing with ‘Dominus.’ The case of the pronoun depends on its function in the clause, not the antecedent’s case.",
      
      "In the Vulgate, relative pronouns clarify relationships. ‘Liber qui legitur’ (the book which is read) uses ‘qui’ (masculine nominative singular) for ‘liber’ (book). In ‘virgo quae peperit’ (the virgin who gave birth), ‘quae’ is feminine nominative singular for ‘virgo.’ Practice identifying the antecedent and the pronoun’s case. For example, ‘quod vidimus’ (which we saw) uses ‘quod’ (neuter accusative singular) as the object of ‘vidimus.’",
      
      "Relative pronouns are crucial in liturgical texts, adding precision. In the Magnificat, ‘cuius nomen sanctum’ (whose name is holy) uses ‘cuius’ (genitive masculine/feminine singular) to show possession. Practice spotting these in context to understand how they link ideas in prayers and scripture."
    ],
    vocabulary: [
      "qui - who (masc.)", "quae - who/which (fem.)", "quod - which (neuter)", "cui - to whom (dat.)",
      "quem - whom (masc. acc.)", "quam - whom (fem. acc.)", "cuius - whose", "quibus - to whom (pl.)",
      "virgo - virgin", "liber - book", "nomen - name", "sanctum - holy", "potens - powerful",
      "magna - great things", "peperit - gave birth"
    ],
    practice: [
      "Identify the relative pronouns in the following phrases from the Magnificat and state their case and antecedent:",
      "(1) Quae fecit mihi magna,",
      "(2) Qui potens est,",
      "(3) Cuius nomen sanctum,",
      "(4) Quod locutus est,",
      "(5) Quae esurientes implevit."
    ],
    answer: [
      "(1) Quae fecit mihi magna: ‘quae’ (nominative feminine singular, antecedent: Dominus, implied), who has done great things for me.",
      "(2) Qui potens est: ‘qui’ (nominative masculine singular, antecedent: Dominus), who is powerful.",
      "(3) Cuius nomen sanctum: ‘cuius’ (genitive masculine/feminine singular, antecedent: Dominus), whose name is holy.",
      "(4) Quod locutus est: ‘quod’ (nominative/accusative neuter singular, antecedent: something implied), which he has spoken.",
      "(5) Quae esurientes implevit: ‘quae’ (accusative feminine singular, antecedent: esurientes), whom he has filled (the hungry)."
    ],
    quiz: [
      {
        id: 1,
        question: "Decline ‘qui’ for masculine accusative singular",
        type: "translation",
        correctAnswer: "quem",
        explanation: "Relative pronouns agree with their antecedent in gender/number, but their case depends on the clause."
      },
      {
        id: 2,
        question: "Translate: ‘Qui potens est’ from Magnificat",
        type: "translation",
        correctAnswer: "Who is powerful"
      },
      {
        id: 3,
        question: "Identify the case of ‘quae’ in ‘Quae fecit mihi magna’",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Dative", "Ablative"],
        correctAnswer: "Nominative"
      }
    ]
  },
  {
    id: 20,
    title: "The Magnificat",
    module: 3,
    materials: [
      "Full text of the Magnificat with vocabulary (e.g., exsultavit – rejoiced, humiles – humble)",
      "Analyze participles and relative clauses",
      "Practice: Memorize and recite the Magnificat"
    ],
    content: [
      "The Magnificat, Mary’s song of praise from Luke 1:46-55, is a key liturgical text used in Vespers. Its Latin text begins: Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salvatore meo. This lesson explores its vocabulary, participles, and relative clauses, building on Module 3’s grammar. The Magnificat’s poetic structure makes it ideal for studying complex sentences in sacred contexts.",
      
      "Key vocabulary includes ‘magnificat’ (it magnifies, 3rd conjugation present), ‘anima’ (soul, 1st declension), ‘exsultavit’ (has rejoiced, perfect tense), and ‘humiles’ (humble, adjective). Participles like ‘exsultans’ (rejoicing, present) and ‘dispersit’ (having scattered, perfect) describe actions or states. Relative clauses, such as ‘qui potens est’ (who is powerful), use pronouns like ‘qui’ or ‘quae’ to connect ideas. The dative case appears in ‘mihi’ (to me) in ‘quae fecit mihi magna’ (who has done great things for me).",
      
      "The Magnificat’s syntax is rich. In ‘exaltavit humiles’ (he has exalted the humble), ‘exaltavit’ is perfect tense, and ‘humiles’ is accusative plural. Relative clauses add depth, as in ‘cuius nomen sanctum’ (whose name is holy), where ‘cuius’ is genitive. Word order emphasizes key ideas, like ‘anima mea’ (my soul) at the start. Pronunciation: ‘Magnificat’ (mahg-NEE-fee-kaht), ‘exsultavit’ (ek-sool-TAH-weht), ‘humiles’ (HOO-mee-les).",
      
      "Memorizing the Magnificat reinforces grammar and pronunciation. Focus on the first two verses: ‘Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salvatore meo.’ Identify participles, relative pronouns, and cases as you recite. This practice prepares you for Module 4’s advanced grammar and liturgical texts."
    ],
    vocabulary: [
      "magnificat - it magnifies", "anima - soul", "exsultavit - rejoiced", "spiritus - spirit",
      "salvator - savior", "humiles - humble", "dispersit - scattered", "potens - powerful",
      "sanctum - holy", "esurientes - hungry", "implevit - filled", "timor - fear",
      "generatio - generation", "magna - great things", "nomen - name"
    ],
    practice: [
      "Memorize and recite the first two verses of the Magnificat:",
      "Magnificat anima mea Dominum,",
      "et exsultavit spiritus meus in Deo salvatore meo."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the first two verses of the Magnificat",
        type: "recitation",
        correctAnswer: "Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salvatore meo",
        explanation: "Recite with correct pronunciation, as practiced."
      },
      {
        id: 2,
        question: "Translate: ‘Quae fecit mihi magna’",
        type: "translation",
        correctAnswer: "Who has done great things for me"
      },
      {
        id: 3,
        question: "Identify the participle in ‘Exsultans exsultavit’",
        type: "multiple-choice",
        options: ["exsultavit", "anima", "exsultans", "Dominum"],
        correctAnswer: "exsultans"
      }
    ]
  },
  {
    id: 21,
    title: "3rd and 4th Conjugation Verbs",
    module: 3,
    materials: [
      "3rd and 4th conjugation verbs (e.g., rego – rule, audio – hear)",
      "Vocabulary: 15 verbs from the Vulgate and Mass",
      "Practice: Conjugate verbs in Sanctus"
    ],
    content: [
      "Third and 4th conjugation verbs are common in liturgical texts, with distinct patterns. Third conjugation verbs (e.g., ‘rego,’ to rule) end in -ere in the infinitive and use short -o, -is, -it endings in the present: rego, regis, regit, regimus, regitis, regunt. Fourth conjugation verbs (e.g., ‘audio,’ to hear) end in -ire and use -io, -is, -it: audio, audis, audit, audimus, auditis, audiunt. Compare to 1st (‘amo’) and 2nd (‘video’) conjugations.",
      
      "In the imperfect, 3rd conjugation uses -ebam (e.g., ‘regebam,’ I was ruling), while 4th uses -iebam (‘audiebam,’ I was hearing). Future tense for 3rd conjugation uses -am, -es, -et (e.g., ‘regam,’ I will rule); 4th uses -iam, -ies, -iet (‘audiam,’ I will hear). In the Sanctus, verbs like ‘pleni sunt’ (they are full, from ‘esse’) and implied verbs like ‘benedicite’ (bless, imperative) reflect these patterns, though imperatives dominate.",
      
      "In the Vulgate, 3rd conjugation verbs like ‘facio’ (I make: facio, facis, facit) and 4th conjugation verbs like ‘venio’ (I come: venio, venis, venit) describe actions. For example, ‘feci’ (I made, perfect tense from ‘facio’) appears in ‘quae fecit mihi magna’ (Magnificat). Recognizing conjugation by infinitive endings (-ere vs. -ire) helps you conjugate correctly. Practice with ‘mitto’ (3rd, I send: mitto, mittis, mittit) and ‘scio’ (4th, I know: scio, scis, scit).",
      
      "In liturgical texts, these verbs add precision. In ‘qui tollis peccata’ (Sanctus), ‘tollis’ (2nd conjugation, from ‘tollere’) is present tense. Practice conjugating in context to understand their role in prayers. This skill prepares you for Module 4’s passive voice and subjunctives."
    ],
    vocabulary: [
      "rego - I rule", "facio - I make", "mitto - I send", "duco - I lead", "vivo - I live",
      "audio - I hear", "venio - I come", "scio - I know", "invenio - I find", "sentio - I feel",
      "capio - I take", "fugio - I flee", "quaero - I seek", "patior - I suffer", "gradior - I walk"
    ],
    practice: [
      "Conjugate the following verbs in the present tense:",
      "(1) rego (to rule, 3rd conjugation),",
      "(2) audio (to hear, 4th conjugation),",
      "(3) facio (to make, 3rd conjugation).",
      "Then, translate ‘Pleni sunt caeli’ from the Sanctus."
    ],
    answer: [
      "(1) rego: rego, regis, regit, regimus, regitis, regunt.",
      "(2) audio: audio, audis, audit, audimus, auditis, audiunt.",
      "(3) facio: facio, facis, facit, facimus, facitis, faciunt.",
      "Translation: ‘Pleni sunt caeli’ means ‘The heavens are full.’"
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate ‘audio’ (I hear) in present tense",
        type: "translation",
        correctAnswer: "audio, audis, audit, audimus, auditis, audiunt",
        explanation: "4th conjugation present tense uses -io, -is, -it, -imus, -itis, -iunt."
      },
      {
        id: 2,
        question: "Translate: ‘Pleni sunt caeli’ from Sanctus",
        type: "translation",
        correctAnswer: "The heavens are full"
      },
      {
        id: 3,
        question: "Identify the conjugation of ‘facio’ (I make)",
        type: "multiple-choice",
        options: ["1st", "2nd", "3rd", "4th"],
        correctAnswer: "3rd"
      }
    ]
  },
  {
    id: 22,
    title: "Gerunds and Gerundives",
    module: 3,
    materials: [
      "Gerunds (e.g., amandi – of loving)",
      "Gerundives (e.g., amandus – to be loved)",
      "Vocabulary: 15 gerunds/gerundives from the Vulgate",
      "Practice: Analyze gerunds and gerundives in liturgical texts"
    ],
    content: [
      "Gerunds and gerundives are verbal nouns and adjectives, respectively, adding nuance to Latin texts. Gerunds are verbal nouns formed from the verb’s stem, used in cases like genitive or ablative to express action. For ‘amare’ (to love): gerund is ‘amandi’ (of loving, genitive), ‘amando’ (by loving, ablative). They don’t have a nominative case, as infinitives (e.g., ‘amare’) serve that role. Gerunds appear in the Vulgate, like ‘orandi’ (of praying) in ‘tempus orandi’ (a time of praying).",
      
      "Gerundives are adjectives meaning ‘to be [verb]ed,’ formed with -ndus, -nda, -ndum. For ‘amare’: ‘amandus, -a, -um’ (to be loved). They agree with nouns, as in ‘liber legendus’ (a book to be read). In liturgical texts, gerundives express obligation or purpose, like ‘adorandus’ (to be adored) in ‘Deus adorandus est’ (God is to be adored). For ‘venire’ (4th conjugation): ‘veniendi’ (gerund, of coming), ‘veniendus’ (gerundive, to be come).",
      
      "In the Magnificat, gerunds are rare, but gerundives like ‘benedicendus’ (to be blessed) may appear in related texts. In ‘ad laudandum nomen’ (for praising the name), ‘laudandum’ is a gerundive (to be praised) agreeing with ‘nomen.’ Gerunds and gerundives often pair with prepositions: ‘ad orandum’ (for praying, gerund) or ‘ad orandum Deum’ (for God to be prayed to, gerundive). Distinguish them by function: gerunds are nouns, gerundives are adjectives.",
      
      "Practice identifying these in context. In ‘tempus faciendi’ (Vulgate, a time of making), ‘faciendi’ is a gerund (genitive). In ‘puer amandus’ (a boy to be loved), ‘amandus’ is a gerundive. This skill enhances your ability to read complex liturgical texts and prepares you for Module 4’s passive voice."
    ],
    vocabulary: [
      "amandi - of loving", "amandus - to be loved", "videndi - of seeing", "videndus - to be seen",
      "faciendi - of making", "faciendus - to be made", "orandi - of praying", "orandus - to be prayed",
      "veniendi - of coming", "veniendus - to be come", "laudandi - of praising", "laudandus - to be praised",
      "dicendi - of saying", "dicendus - to be said", "audiendi - of hearing"
    ],
    practice: [
      "Identify whether the following are gerunds or gerundives in these Vulgate phrases and translate:",
      "(1) Ad laudandum nomen,",
      "(2) Tempus orandi,",
      "(3) Puer amandus,",
      "(4) Ad faciendum opus,",
      "(5) Liber legendus."
    ],
    answer: [
      "(1) Ad laudandum nomen: ‘laudandum’ is a gerundive (to be praised), For praising the name.",
      "(2) Tempus orandi: ‘orandi’ is a gerund (of praying), A time of praying.",
      "(3) Puer amandus: ‘amandus’ is a gerundive (to be loved), A boy to be loved.",
      "(4) Ad faciendum opus: ‘faciendum’ is a gerundive (to be made), For making the work.",
      "(5) Liber legendus: ‘legendus’ is a gerundive (to be read), A book to be read."
    ],
    quiz: [
      {
        id: 1,
        question: "Form the gerundive of ‘amare’ (to love)",
        type: "translation",
        correctAnswer: "amandus",
        explanation: "Gerundives use -ndus, -nda, -ndum, agreeing with nouns."
      },
      {
        id: 2,
        question: "Translate: ‘Ad laudandum nomen’",
        type: "translation",
        correctAnswer: "For praising the name"
      },
      {
        id: 3,
        question: "Is ‘orandi’ in ‘Tempus orandi’ a gerund or gerundive?",
        type: "multiple-choice",
        options: ["Gerund", "Gerundive", "Participle", "Infinitive"],
        correctAnswer: "Gerund"
      }
    ]
  },
  {
    id: 23,
    title: "Infinitives and Indirect Statements",
    module: 3,
    materials: [
      "Infinitives (e.g., amare – to love, esse – to be)",
      "Indirect statements (e.g., dico eum amare – I say that he loves)",
      "Vocabulary: 15 infinitive phrases from the Vulgate",
      "Practice: Analyze indirect statements in the Creed"
    ],
    content: [
      "Infinitives in Latin express the verb’s action as a concept, like ‘amare’ (to love) or ‘esse’ (to be). They’re used in indirect statements, where a verb like ‘dico’ (I say) introduces a clause with an infinitive. In ‘dico eum amare’ (I say that he loves), ‘eum’ (him, accusative) is the subject of the infinitive ‘amare’ (present tense). Infinitives have present (amare), perfect (amavisse, to have loved), and future (amaturus esse, to be about to love) forms, depending on the time relative to the main verb.",
      
      "In the Creed, indirect statements appear in phrases like ‘credo Christum resurrexisse’ (I believe that Christ has risen), where ‘resurrexisse’ is the perfect infinitive from ‘resurgere.’ The accusative subject (Christum) pairs with the infinitive to show what is believed. In the Vulgate, ‘scio eum venire’ (I know that he is coming) uses ‘venire’ (present infinitive). The infinitive’s tense reflects the action’s time: present for ongoing, perfect for completed, future for anticipated.",
      
      "Infinitives also stand alone, as in ‘orare est amare’ (to pray is to love), where ‘orare’ and ‘amare’ are nominative infinitives acting as subjects. In liturgical texts, infinitives often follow verbs of saying, believing, or knowing. For example, ‘volo te laudare’ (I want you to praise) uses ‘laudare’ with ‘te’ as the accusative subject. Practice identifying the infinitive’s tense and subject in context.",
      
      "In the Creed, look for phrases like ‘venturus est’ (he is about to come), where ‘venturus’ is a future participle with ‘est,’ forming a periphrastic infinitive. This skill helps you parse complex sentences in Module 4’s liturgical texts, where indirect statements describe beliefs or divine actions."
    ],
    vocabulary: [
      "amare - to love", "esse - to be", "venire - to come", "dicere - to say", "scire - to know",
      "laudare - to praise", "orare - to pray", "videre - to see", "audire - to hear", "facere - to make",
      "amavisse - to have loved", "resurrexisse - to have risen", "venturus esse - to be about to come",
      "credere - to believe", "volere - to want"
    ],
    practice: [
      "Identify the infinitive and its tense in the following phrases from the Creed and Vulgate, and translate:",
      "(1) Credo Christum resurrexisse,",
      "(2) Scio eum venire,",
      "(3) Volo te laudare,",
      "(4) Venturus est,",
      "(5) Orare est amare."
    ],
    answer: [
      "(1) Credo Christum resurrexisse: Infinitive ‘resurrexisse’ (perfect), I believe that Christ has risen.",
      "(2) Scio eum venire: Infinitive ‘venire’ (present), I know that he is coming.",
      "(3) Volo te laudare: Infinitive ‘laudare’ (present), I want you to praise.",
      "(4) Venturus est: Infinitive ‘venturus esse’ (future, periphrastic), He is about to come.",
      "(5) Orare est amare: Infinitives ‘orare’ and ‘amare’ (present), To pray is to love."
    ],
    quiz: [
      {
        id: 1,
        question: "Form the perfect infinitive of ‘amare’ (to love)",
        type: "translation",
        correctAnswer: "amavisse",
        explanation: "Perfect infinitives use the perfect stem with -isse."
      },
      {
        id: 2,
        question: "Translate: ‘Scio eum venire’",
        type: "translation",
        correctAnswer: "I know that he is coming"
      },
      {
        id: 3,
        question: "Identify the tense of ‘resurrexisse’ in ‘Credo Christum resurrexisse’",
        type: "multiple-choice",
        options: ["Present", "Perfect", "Future", "Imperfect"],
        correctAnswer: "Perfect"
      }
    ]
  },
  {
    id: 24,
    title: "Module 3 Review and Practice",
    module: 3,
    materials: [
      "Review participles, relative pronouns, gerunds/gerundives, infinitives, 3rd/4th conjugation verbs, Credo, Magnificat",
      "Practice: Translate excerpts from the Creed and Magnificat",
      "Vocabulary: Review all 100+ words from Module 3"
    ],
    content: [
      "This lesson reviews Module 3, covering present and perfect participles (e.g., ‘amans,’ loving; ‘amatus,’ loved), relative pronouns (‘qui,’ ‘quae,’ ‘quod’), gerunds (‘amandi,’ of loving), gerundives (‘amandus,’ to be loved), 3rd/4th conjugation verbs (‘rego,’ ‘audio’), infinitives (‘amare,’ ‘esse’), and the Credo and Magnificat. Participles act as adjectives, agreeing with nouns, as in ‘puer natus’ (boy born). Relative pronouns introduce clauses, like ‘qui potens est’ (who is powerful, Magnificat).",
      
      "Gerunds and gerundives express action or obligation: ‘orandi’ (of praying) vs. ‘orandus’ (to be prayed). Third conjugation verbs (‘facio,’ facio, facis, facit) and 4th (‘audio,’ audio, audis, audit) have distinct endings. Infinitives form indirect statements, like ‘credo Christum resurrexisse’ (I believe Christ has risen). In the Credo, ‘Patrem omnipotentem’ uses the dative, while ‘factorem’ is a participle. The Magnificat’s ‘exsultans exsultavit’ uses a present participle.",
      
      "Practice translating with attention to grammar. In ‘quae fecit mihi magna’ (Magnificat), ‘quae’ is a relative pronoun, ‘fecit’ is perfect tense, ‘mihi’ is dative. In ‘venturus est’ (Credo), ‘venturus’ is a future participle. Pronunciation: ‘qui’ (kwee), ‘amans’ (AH-mahns), ‘audio’ (OW-dee-oh). Your vocabulary includes ‘magnificat,’ ‘exsultavit,’ ‘qui,’ ‘amandus.’ Review the prayers’ rhythm to aid memorization.",
      
      "This review prepares you for Module 4’s passive voice and subjunctives. Translate excerpts by identifying cases, verb forms, participles, and pronouns. For example, ‘natum et invisibilium’ (Credo) uses ‘natum’ (perfect participle) and ‘invisibilium’ (participle-adjective). Mastery of these concepts enhances your ability to read liturgical texts fluently."
    ],
    vocabulary: [
      "amans - loving", "amatus - loved", "qui - who", "quae - which", "quod - that",
      "amandi - of loving", "amandus - to be loved", "rego - I rule", "audio - I hear",
      "magnificat - it magnifies", "exsultavit - rejoiced", "natum - born", "potens - powerful",
      "sanctum - holy", "venire - to come"
    ],
    practice: [
      "Translate the following excerpts from the Credo and Magnificat, identifying the specified grammar:",
      "(1) Qui potens est (Magnificat, identify relative pronoun),",
      "(2) Natum et invisibilium (Credo, identify participle),",
      "(3) Ad laudandum nomen (Vulgate, identify gerundive),",
      "(4) Credo Christum resurrexisse (Credo, identify infinitive),",
      "(5) Exaltavit humiles (Magnificat, identify verb tense)."
    ],
    answer: [
      "(1) Qui potens est: Who is powerful, ‘qui’ is a relative pronoun (nominative masculine singular).",
      "(2) Natum et invisibilium: Born and of invisible things, ‘natum’ is a perfect participle.",
      "(3) Ad laudandum nomen: For praising the name, ‘laudandum’ is a gerundive.",
      "(4) Credo Christum resurrexisse: I believe that Christ has risen, ‘resurrexisse’ is a perfect infinitive.",
      "(5) Exaltavit humiles: He has exalted the humble, ‘exaltavit’ is perfect tense."
    ],
    quiz: [
      {
        id: 1,
        question: "Form the gerund of ‘orare’ (to pray)",
        type: "translation",
        correctAnswer: "orandi",
        explanation: "Gerunds use -ndi in the genitive from the verb’s stem."
      },
      {
        id: 2,
        question: "Translate: ‘Qui potens est’ from Magnificat",
        type: "translation",
        correctAnswer: "Who is powerful"
      },
      {
        id: 3,
        question: "Identify the tense of ‘exaltavit’ in ‘Exaltavit humiles’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Future", "Perfect"],
        correctAnswer: "Perfect"
      }
    ]
  },
  {
    id: 25,
    title: "Passive Voice",
    module: 4,
    materials: [
      "Passive voice for 1st and 2nd conjugation verbs (e.g., amor – I am loved)",
      "Vocabulary: 15 passive verbs from the Mass",
      "Practice: Identify passive verbs in Agnus Dei"
    ],
    content: [
      "The passive voice in Latin indicates that the subject receives the action, unlike the active voice where the subject performs it. For 1st conjugation verbs like ‘amare’ (to love), the present passive uses endings -or, -aris, -atur, -amur, -amini, -antur: ‘amor’ (I am loved), ‘amaris’ (you are loved), ‘amatur’ (he/she is loved). For 2nd conjugation verbs like ‘videre’ (to see): ‘videor’ (I am seen), ‘videris,’ ‘videtur.’ In the imperfect, ‘amabar’ (I was being loved); in the future, ‘amabor’ (I will be loved).",
      
      "In the Mass, passive verbs are common. In the Agnus Dei, ‘tollis’ (you take away, active) could be rephrased passively as ‘peccata tolluntur’ (sins are taken away). In ‘laudatur’ (he is praised), the subject receives the praise. The passive is frequent in liturgical texts to emphasize divine action, as in ‘benedicitur’ (he is blessed) in the Sanctus. Recognize passive endings: -r, -ris, -tur in present; -bar, -baris, -batur in imperfect.",
      
      "In the Vulgate, passive verbs describe God’s actions or effects, like ‘creata sunt’ (they were created) in ‘omnia creata sunt’ (all things were created). For 2nd conjugation, ‘visum est’ (it was seen) from ‘videre’ appears in narratives. Practice conjugating: ‘laudare’ (to praise) in present passive is ‘laudor, laudaris, laudatur.’ The passive voice shifts focus to the recipient, key in prayers where God or saints are acted upon.",
      
      "When analyzing texts, distinguish active from passive. In ‘Deus laudatur’ (God is praised), ‘laudatur’ is passive, unlike ‘Deus laudat’ (God praises, active). This skill is crucial for Module 4’s focus on advanced liturgical texts, where passive constructions highlight divine initiative."
    ],
    vocabulary: [
      "amor - I am loved", "videor - I am seen", "laudor - I am praised", "benedicitur - he is blessed",
      "creatur - he is created", "tollitur - it is taken away", "dicitur - it is said", "auditur - it is heard",
      "mittitur - it is sent", "accipitur - it is received", "amabar - I was being loved", "videbar - I was being seen",
      "laudabitur - he will be praised", "creabatur - he was being created", "tolluntur - they are taken away"
    ],
    practice: [
      "Identify passive verbs in the following phrases from the Mass and Vulgate, and translate:",
      "(1) Peccata tolluntur (Agnus Dei, rephrased),",
      "(2) Deus laudatur (Vulgate),",
      "(3) Creatur mundus (Vulgate),",
      "(4) Benedicitur Dominus (Sanctus),",
      "(5) Dicitur verbum (Vulgate)."
    ],
    answer: [
      "(1) Peccata tolluntur: Passive verb ‘tolluntur’ (present), Sins are taken away.",
      "(2) Deus laudatur: Passive verb ‘laudatur’ (present), God is praised.",
      "(3) Creatur mundus: Passive verb ‘creatur’ (present), The world is created.",
      "(4) Benedicitur Dominus: Passive verb ‘benedicitur’ (present), The Lord is blessed.",
      "(5) Dicitur verbum: Passive verb ‘dicitur’ (present), The word is said."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate ‘laudare’ (to praise) in present passive singular",
        type: "translation",
        correctAnswer: "laudor, laudaris, laudatur",
        explanation: "1st conjugation present passive uses -or, -aris, -atur."
      },
      {
        id: 2,
        question: "Translate: ‘Deus laudatur’",
        type: "translation",
        correctAnswer: "God is praised"
      },
      {
        id: 3,
        question: "Is ‘tolluntur’ in ‘Peccata tolluntur’ active or passive?",
        type: "multiple-choice",
        options: ["Active", "Passive", "Participle", "Infinitive"],
        correctAnswer: "Passive"
      }
    ]
  },
  {
    id: 26,
    title: "Subjunctive Mood – Present",
    module: 4,
    materials: [
      "Present subjunctive for 1st and 2nd conjugation verbs (e.g., amem – I may love)",
      "Vocabulary: 15 subjunctive verbs from the Mass",
      "Practice: Identify subjunctives in Pater Noster"
    ],
    content: [
      "The subjunctive mood in Latin expresses wishes, possibilities, or hypothetical actions, common in prayers like the Pater Noster. For 1st conjugation verbs like ‘amare’ (to love), the present subjunctive changes the stem vowel to -e: amem, ames, amet, amemus, ametis, ament. For 2nd conjugation verbs like ‘videre’ (to see), it uses -ea: videam, videas, videat, videamus, videatis, videant. These contrast with indicative endings (-o, -s, -t).",
      
      "In the Pater Noster, subjunctives express petitions: ‘sanctificetur’ (may it be sanctified, from ‘sanctificare’) and ‘adveniat’ (may it come, from ‘advenire’) are present subjunctives. The subjunctive reflects the prayer’s hopeful tone, asking for divine action. In the Mass, ‘fiat’ (may it be, from ‘fieri’) in ‘fiat voluntas tua’ (thy will be done) is another example. The subjunctive’s vowel change (a to e for 1st, e to ea for 2nd) is key to identification.",
      
      "In the Vulgate, subjunctives express purpose or condition, like ‘orem’ (I may pray) in ‘ut orem’ (so that I may pray). Practice conjugating: ‘laudare’ (to praise) is ‘laudem, laudes, laudet.’ For ‘monere’ (to warn): ‘moneam, moneas, moneat.’ The subjunctive’s use in prayers emphasizes intention or desire, as in ‘benedicat’ (may he bless) in liturgical blessings.",
      
      "When analyzing texts, look for subjunctive endings and context. In ‘fiat lux’ (let there be light, Vulgate), ‘fiat’ is present subjunctive. This mood is central to Module 4’s focus on liturgical texts, where petitions and divine wishes dominate. Practice distinguishing subjunctive from indicative to grasp the text’s tone."
    ],
    vocabulary: [
      "amem - I may love", "videam - I may see", "sanctificetur - may it be sanctified",
      "adveniat - may it come", "fiat - may it be", "laudem - I may praise", "moneam - I may warn",
      "benedicat - may he bless", "orem - I may pray", "credam - I may believe",
      "veniam - I may come", "audiam - I may hear", "faciam - I may make", "regam - I may rule",
      "vivam - I may live"
    ],
    practice: [
      "Identify the present subjunctive verbs in the following phrases from the Pater Noster and translate:",
      "(1) Sanctificetur nomen tuum,",
      "(2) Adveniat regnum tuum,",
      "(3) Fiat voluntas tua,",
      "(4) Dimitte nobis debita,",
      "(5) Ne nos inducas in tentationem."
    ],
    answer: [
      "(1) Sanctificetur nomen tuum: Subjunctive ‘sanctificetur’ (present), May your name be sanctified.",
      "(2) Adveniat regnum tuum: Subjunctive ‘adveniat’ (present), May your kingdom come.",
      "(3) Fiat voluntas tua: Subjunctive ‘fiat’ (present), May your will be done.",
      "(4) Dimitte nobis debita: Subjunctive ‘dimitte’ (present, imperative-like), Forgive us our debts.",
      "(5) Ne nos inducas in tentationem: Subjunctive ‘inducas’ (present), Do not lead us into temptation."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate ‘laudare’ (to praise) in present subjunctive singular",
        type: "translation",
        correctAnswer: "laudem, laudes, laudet",
        explanation: "1st conjugation present subjunctive uses -em, -es, -et."
      },
      {
        id: 2,
        question: "Translate: ‘Sanctificetur nomen tuum’",
        type: "translation",
        correctAnswer: "May your name be sanctified"
      },
      {
        id: 3,
        question: "Identify the mood of ‘fiat’ in ‘Fiat voluntas tua’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Subjunctive"
      }
    ]
  },
  {
    id: 27,
    title: "Subjunctive Mood – Imperfect and Perfect",
    module: 4,
    materials: [
      "Imperfect subjunctive (e.g., amarem – I might love)",
      "Perfect subjunctive (e.g., amaverim – I may have loved)",
      "Vocabulary: 15 subjunctive verbs from the Vulgate",
      "Practice: Analyze subjunctives in Confiteor"
    ],
    content: [
      "The imperfect and perfect subjunctive moods express hypothetical or past possibilities, used in the Vulgate and prayers like the Confiteor. For 1st conjugation verbs like ‘amare’ (to love), the imperfect subjunctive uses the infinitive plus endings: amarem, amares, amaret, amaremus, amaretis, amarent (I might love). For 2nd conjugation like ‘videre’ (to see): viderem, videres, videret. The perfect subjunctive uses the perfect stem plus -erim: ‘amaverim’ (I may have loved), ‘visserim’ (I may have seen).",
      
      "In the Confiteor, subjunctives like ‘rogo’ (I ask, present subjunctive) in ‘rogo vos orare’ (I ask you to pray) express requests. Imperfect subjunctives appear in conditional clauses in the Vulgate, like ‘si amarem’ (if I were loving). Perfect subjunctives describe completed possibilities, as in ‘si amaverim’ (if I have loved). In liturgical texts, subjunctives convey humility or petition, like ‘misereatur’ (may he have mercy) in the Mass.",
      
      "The imperfect subjunctive is formed by adding -m, -s, -t to the infinitive: ‘laudare’ becomes ‘laudarem’ (I might praise). The perfect subjunctive uses -erim, -eris, -erit: ‘laudaverim’ (I may have praised). In the Vulgate, ‘dixerim’ (I may have said, from ‘dicere’) appears in dialogues. Practice conjugating: ‘monere’ (2nd conjugation) is ‘monerem’ (imperfect), ‘monuerim’ (perfect). These forms are less common in prayers but enrich narrative texts.",
      
      "In the Confiteor, look for subjunctives like ‘rogo’ or ‘misereatur.’ The imperfect subjunctive’s hypothetical tone suits confessions or supplications, while the perfect subjunctive reflects completed actions in divine contexts. This skill is key for Module 4’s focus on complex liturgical expressions."
    ],
    vocabulary: [
      "amarem - I might love", "viderem - I might see", "amaverim - I may have loved",
      "visserim - I may have seen", "laudarem - I might praise", "monerem - I might warn",
      "misereatur - may he have mercy", "rogo - I ask", "dixerim - I may have said",
      "fecerim - I may have made", "audiverim - I may have heard", "venerim - I may have come",
      "regarem - I might rule", "fui - I may have been", "crederem - I might believe"
    ],
    practice: [
      "Identify the subjunctive verbs in the following phrases from the Confiteor and Vulgate, and state their tense:",
      "(1) Rogo vos orare,",
      "(2) Misereatur vestri,",
      "(3) Si amarem,",
      "(4) Si dixerim,",
      "(5) Ut laudarem."
    ],
    answer: [
      "(1) Rogo vos orare: Subjunctive ‘rogo’ (present), I ask you to pray.",
      "(2) Misereatur vestri: Subjunctive ‘misereatur’ (present), May he have mercy on you.",
      "(3) Si amarem: Subjunctive ‘amarem’ (imperfect), If I were loving.",
      "(4) Si dixerim: Subjunctive ‘dixerim’ (perfect), If I have said.",
      "(5) Ut laudarem: Subjunctive ‘laudarem’ (imperfect), So that I might praise."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate ‘videre’ (to see) in imperfect subjunctive singular",
        type: "translation",
        correctAnswer: "viderem, videres, videret",
        explanation: "Imperfect subjunctive uses the infinitive with -m, -s, -t."
      },
      {
        id: 2,
        question: "Translate: ‘Misereatur vestri’",
        type: "translation",
        correctAnswer: "May he have mercy on you"
      },
      {
        id: 3,
        question: "Identify the tense of ‘dixerim’ in ‘Si dixerim’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Perfect", "Future"],
        correctAnswer: "Perfect"
      }
    ]
  },
  {
    id: 28,
    title: "Liturgical Texts – Sanctus and Agnus Dei",
    module: 4,
    materials: [
      "Full texts of Sanctus and Agnus Dei with vocabulary (e.g., Sabaoth – hosts, peccata – sins)",
      "Analyze passive voice and subjunctives",
      "Practice: Memorize and recite Sanctus and Agnus Dei"
    ],
    content: [
      "The Sanctus and Agnus Dei are key parts of the Mass, rich in advanced grammar like passive voice and subjunctives. The Sanctus is: Sanctus, sanctus, sanctus Dominus Deus Sabaoth. Pleni sunt caeli et terra gloria tua. Hosanna in excelsis. The Agnus Dei is: Agnus Dei, qui tollis peccata mundi, miserere nobis. Agnus Dei, qui tollis peccata mundi, dona nobis pacem. This lesson explores their vocabulary and structure.",
      
      "Key vocabulary includes ‘Sabaoth’ (hosts, 3rd declension indeclinable), ‘peccata’ (sins, 2nd declension neuter accusative plural), and ‘miserere’ (have mercy, present subjunctive imperative). The passive voice appears in ‘pleni sunt’ (they are filled, from ‘esse’) in the Sanctus, where ‘caeli et terra’ are the subjects receiving the action. Subjunctives like ‘miserere’ (may you have mercy) and ‘dona’ (grant, present subjunctive) in the Agnus Dei express petitions.",
      
      "Relative clauses are prominent, as in ‘qui tollis peccata mundi’ (who takes away the sins of the world), where ‘qui’ is nominative masculine singular, and ‘tollis’ is active (though ‘tolluntur’ could be passive: sins are taken away). The dative ‘nobis’ (to us) in ‘miserere nobis’ indicates the beneficiary. Pronunciation: ‘Sanctus’ (SAHNK-toos), ‘miserere’ (mee-seh-REH-reh), ‘peccata’ (pehk-KAH-tah).",
      
      "Memorizing these texts reinforces grammar and pronunciation. The Sanctus’s repetition of ‘sanctus’ emphasizes holiness, while the Agnus Dei’s petitions use subjunctives for humility. Practice reciting both, noting passive verbs, subjunctives, and relative clauses to prepare for Module 5’s Vulgate and Mass analysis."
    ],
    vocabulary: [
      "sanctus - holy", "Sabaoth - hosts", "pleni - full", "caeli - heavens", "terra - earth",
      "gloria - glory", "hosanna - hosanna", "excelsis - highest", "agnus - lamb", "peccata - sins",
      "miserere - have mercy", "dona - grant", "nobis - to us", "pax - peace", "mundi - world"
    ],
    practice: [
      "Memorize and recite the Sanctus and Agnus Dei:",
      "Sanctus, sanctus, sanctus Dominus Deus Sabaoth...",
      "Agnus Dei, qui tollis peccata mundi..."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the Sanctus or Agnus Dei (full or partial)",
        type: "recitation",
        correctAnswer: "Sanctus, sanctus, sanctus... or Agnus Dei, qui tollis...",
        explanation: "Recite with correct pronunciation, as practiced."
      },
      {
        id: 2,
        question: "Translate: ‘Miserere nobis’ from Agnus Dei",
        type: "translation",
        correctAnswer: "Have mercy on us"
      },
      {
        id: 3,
        question: "Identify the mood of ‘miserere’ in ‘Miserere nobis’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Subjunctive"
      }
    ]
  },
  {
    id: 29,
    title: "Deponent Verbs",
    module: 4,
    materials: [
      "Deponent verbs (e.g., loqui – to speak, sequi – to follow)",
      "Vocabulary: 15 deponent verbs from the Vulgate and Mass",
      "Practice: Identify deponent verbs in liturgical texts"
    ],
    content: [
      "Deponent verbs in Latin have passive forms but active meanings, a unique feature in ecclesiastical texts. For example, ‘loqui’ (to speak, 3rd conjugation deponent) uses passive endings: loquor, loqueris, loquitur, loquimur, loquimini, loquuntur (present tense). Similarly, ‘sequi’ (to follow, 3rd conjugation) follows: sequor, sequeris, sequitur. Unlike regular passive verbs (e.g., ‘amor,’ I am loved), deponents convey active actions like speaking or following.",
      
      "In the Vulgate, deponents like ‘proficisci’ (to set out) appear in narratives, as in ‘profectus est’ (he set out, perfect tense). In the Mass, ‘orare’ (to pray, technically a semi-deponent in some forms) uses ‘oror’ in subjunctive contexts like ‘oror pro vobis’ (I pray for you). Deponents retain passive endings across tenses: imperfect ‘loquebar’ (I was speaking), future ‘loquar’ (I will speak). Their participles, however, have active forms: ‘loquens’ (speaking), ‘secutus’ (having followed).",
      
      "In liturgical texts, deponents add nuance. In ‘sequere me’ (follow me, Vulgate), ‘sequere’ is an imperative deponent. Identifying deponents requires recognizing passive endings with active meanings. For ‘pati’ (to suffer, 3rd conjugation deponent): ‘patior, pateris, patitur’ (I suffer, you suffer, he suffers). Practice spotting these in context, as they’re common in prayers and scripture describing actions of disciples or worshippers.",
      
      "This lesson builds on Module 4’s passive voice, as deponents share similar endings but differ in meaning. In the Confiteor, look for verbs like ‘confiteor’ (I confess, deponent), which uses passive forms (confiteor, confiteris, confitetur). Mastery of deponents enhances your ability to read complex texts in Module 5’s Vulgate and Mass."
    ],
    vocabulary: [
      "loquor - I speak", "sequor - I follow", "patior - I suffer", "confiteor - I confess",
      "proficiscor - I set out", "oror - I pray", "morior - I die", "nascor - I am born",
      "egredior - I go out", "ingredior - I enter", "loquens - speaking", "secutus - having followed",
      "passus - having suffered", "natus - having been born", "gressus - having gone"
    ],
    practice: [
      "Identify the deponent verbs in the following phrases from the Vulgate and Mass, and translate:",
      "(1) Sequere me,",
      "(2) Confiteor tibi,",
      "(3) Profectus est in Galilea,",
      "(4) Patior pro vobis,",
      "(5) Loquens dixit."
    ],
    answer: [
      "(1) Sequere me: Deponent ‘sequere’ (imperative), Follow me.",
      "(2) Confiteor tibi: Deponent ‘confiteor’ (present), I confess to you.",
      "(3) Profectus est in Galilea: Deponent ‘profectus’ (perfect participle), He set out to Galilee.",
      "(4) Patior pro vobis: Deponent ‘patior’ (present), I suffer for you.",
      "(5) Loquens dixit: Deponent ‘loquens’ (present participle), Speaking, he said."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate ‘loqui’ (to speak) in present tense singular",
        type: "translation",
        correctAnswer: "loquor, loqueris, loquitur",
        explanation: "Deponent verbs use passive endings but have active meanings."
      },
      {
        id: 2,
        question: "Translate: ‘Sequere me’",
        type: "translation",
        correctAnswer: "Follow me"
      },
      {
        id: 3,
        question: "Is ‘confiteor’ in ‘Confiteor tibi’ a deponent verb?",
        type: "multiple-choice",
        options: ["Yes", "No", "Participle", "Passive"],
        correctAnswer: "Yes"
      }
    ]
  },
  {
    id: 30,
    title: "Subjunctive in Purpose Clauses",
    module: 4,
    materials: [
      "Purpose clauses with ut/ne + subjunctive (e.g., ut orem – so that I may pray)",
      "Vocabulary: 15 purpose clause phrases from the Vulgate",
      "Practice: Analyze purpose clauses in Mass texts"
    ],
    content: [
      "Purpose clauses in Latin express the intent of an action, using ‘ut’ (so that) or ‘ne’ (lest, so that not) with the subjunctive mood. For example, ‘venio ut orem’ (I come so that I may pray) uses the present subjunctive ‘orem’ (from ‘orare’). The subjunctive reflects the hypothetical nature of the purpose. For negative purpose, ‘ne’ is used, as in ‘laboro ne peccem’ (I work so that I may not sin), with ‘peccem’ (subjunctive of ‘peccare’).",
      
      "In the Mass, purpose clauses appear in prayers like the Confiteor: ‘rogo ut oretis’ (I ask so that you may pray), where ‘oretis’ is present subjunctive. In the Vulgate, ‘dixit ut faceret’ (he spoke so that he might do) uses the imperfect subjunctive ‘faceret’ for past purpose. The tense depends on sequence of tenses: present subjunctive for primary sequence (after present/future verbs), imperfect for secondary (after past verbs).",
      
      "Common verbs in purpose clauses include ‘venire’ (to come: veniam, present subjunctive), ‘facere’ (to do: faciam), and ‘orare’ (to pray: orem). In liturgical texts, purpose clauses emphasize divine intent, as in ‘venit ut salvet’ (he came so that he might save), with ‘salvet’ from ‘salvare.’ Practice identifying ‘ut’ or ‘ne’ and the subjunctive verb’s tense. For example, ‘ut laudemus’ (so that we may praise) uses ‘laudemus’ (present subjunctive).",
      
      "This lesson builds on Module 4’s subjunctive focus, preparing you for Module 5’s complex Vulgate texts. Purpose clauses are key in prayers, showing why actions are performed. In ‘ut glorificetur’ (so that he may be glorified), ‘glorificetur’ is a passive subjunctive, combining earlier lessons on passive voice."
    ],
    vocabulary: [
      "ut - so that", "ne - lest", "orem - I may pray", "peccem - I may sin", "faciam - I may do",
      "veniam - I may come", "salvet - he may save", "laudemus - we may praise", "glorificetur - he may be glorified",
      "vivam - I may live", "credam - I may believe", "audiam - I may hear", "faceret - he might do",
      "veniret - he might come", "oraret - he might pray"
    ],
    practice: [
      "Identify the purpose clauses in the following phrases from the Mass and Vulgate, and translate:",
      "(1) Venio ut orem,",
      "(2) Rogo ut oretis,",
      "(3) Laboro ne peccem,",
      "(4) Dixit ut faceret,",
      "(5) Venit ut salvet."
    ],
    answer: [
      "(1) Venio ut orem: Purpose clause ‘ut orem’ (present subjunctive), I come so that I may pray.",
      "(2) Rogo ut oretis: Purpose clause ‘ut oretis’ (present subjunctive), I ask so that you may pray.",
      "(3) Laboro ne peccem: Purpose clause ‘ne peccem’ (present subjunctive), I work so that I may not sin.",
      "(4) Dixit ut faceret: Purpose clause ‘ut faceret’ (imperfect subjunctive), He spoke so that he might do.",
      "(5) Venit ut salvet: Purpose clause ‘ut salvet’ (present subjunctive), He came so that he might save."
    ],
    quiz: [
      {
        id: 1,
        question: "Form the present subjunctive of ‘orare’ (to pray) for ‘I’",
        type: "translation",
        correctAnswer: "orem",
        explanation: "1st conjugation present subjunctive uses -em for first person singular."
      },
      {
        id: 2,
        question: "Translate: ‘Venio ut orem’",
        type: "translation",
        correctAnswer: "I come so that I may pray"
      },
      {
        id: 3,
        question: "Identify the tense of ‘faceret’ in ‘Dixit ut faceret’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Perfect", "Future"],
        correctAnswer: "Imperfect"
      }
    ]
  },
  {
    id: 31,
    title: "Advanced Liturgical Texts – Gloria and Confiteor",
    module: 4,
    materials: [
      "Full texts of Gloria and Confiteor with vocabulary (e.g., laudamus – we praise, peccavi – I have sinned)",
      "Analyze subjunctives, deponents, and purpose clauses",
      "Practice: Memorize and recite Gloria and Confiteor"
    ],
    content: [
      "The Gloria and Confiteor are central liturgical texts in the Mass, rich in advanced grammar. The Gloria begins: Gloria in excelsis Deo et in terra pax hominibus bonae voluntatis. Laudamus te, benedicimus te, adoramus te. The Confiteor starts: Confiteor Deo omnipotenti... quia peccavi nimis. This lesson explores their vocabulary, subjunctives, deponent verbs, and purpose clauses, building on Module 4’s focus.",
      
      "Key vocabulary includes ‘laudamus’ (we praise, 1st conjugation present), ‘peccavi’ (I have sinned, perfect tense from ‘peccare’), and ‘confiteor’ (I confess, deponent). The Gloria uses active verbs like ‘laudamus’ and subjunctives like ‘sit’ (may there be, in ‘gloria sit’). The Confiteor has deponents like ‘confiteor’ and subjunctives like ‘rogo’ (I ask) in ‘rogo vos orare’ (I ask you to pray). Purpose clauses appear, as in ‘ut oretis’ (so that you may pray).",
      
      "Grammar highlights include deponent verbs (‘confiteor,’ confiteor, confiteris, confitetur) and subjunctives (‘misereatur,’ may he have mercy, in Confiteor). The Gloria’s ‘benedicimus te’ (we bless you) uses active present tense, while ‘peccavi nimis’ (I have sinned greatly) in the Confiteor uses perfect tense. Pronunciation: ‘Gloria’ (GLOH-ree-ah), ‘Confiteor’ (kohn-fee-TEH-ohr), ‘peccavi’ (peh-KAH-wee).",
      
      "Memorizing these texts reinforces Module 4’s grammar. The Gloria’s praise and the Confiteor’s confession use subjunctives and deponents to express humility and petition. Practice reciting both, noting subjunctives (‘sit’), deponents (‘confiteor’), and purpose clauses (‘ut oretis’). This prepares you for Module 5’s Vulgate and Mass analysis."
    ],
    vocabulary: [
      "laudamus - we praise", "benedicimus - we bless", "adoramus - we adore", "peccavi - I have sinned",
      "confiteor - I confess", "rogo - I ask", "misereatur - may he have mercy", "gloria - glory",
      "pax - peace", "voluntas - will", "peccatum - sin", "nimis - greatly", "omnipotens - almighty",
      "sit - may there be", "orare - to pray"
    ],
    practice: [
      "Memorize and recite the first lines of the Gloria and Confiteor:",
      "Gloria in excelsis Deo, et in terra pax hominibus bonae voluntatis.",
      "Laudamus te, benedicimus te, adoramus te, glorificamus te.",
      "",
      "Confiteor Deo omnipotenti, et vobis, fratres, quia peccavi nimis.",
      "Cogitatione, verbo, opere et omissione."
    ],
    quiz: [
      {
        id: 1,
        question: "Recite the first line of the Gloria or Confiteor",
        type: "recitation",
        correctAnswer: "Gloria in excelsis Deo or Confiteor Deo omnipotenti",
        explanation: "Recite with correct pronunciation, as practiced."
      },
      {
        id: 2,
        question: "Translate: ‘Peccavi nimis’ from Confiteor",
        type: "translation",
        correctAnswer: "I have sinned greatly"
      },
      {
        id: 3,
        question: "Is ‘confiteor’ in the Confiteor a deponent verb?",
        type: "multiple-choice",
        options: ["Yes", "No", "Participle", "Subjunctive"],
        correctAnswer: "Yes"
      }
    ]
  },
  {
    id: 32,
    title: "Module 4 Review and Practice",
    module: 4,
    materials: [
      "Review passive voice, subjunctives, deponents, purpose clauses, Sanctus, Agnus Dei, Gloria, Confiteor",
      "Practice: Translate excerpts from Mass texts",
      "Vocabulary: Review all 100+ words from Module 4"
    ],
    content: [
      "This lesson reviews Module 4, covering passive voice (e.g., ‘laudatur,’ he is praised), present and imperfect/perfect subjunctives (‘amem,’ ‘amarem,’ ‘amaverim’), deponent verbs (‘confiteor,’ I confess), purpose clauses (‘ut orem,’ so that I may pray), and the Sanctus, Agnus Dei, Gloria, and Confiteor. Passive voice emphasizes the recipient, as in ‘peccata tolluntur’ (sins are taken away). Subjunctives express wishes or hypotheticals, like ‘sanctificetur’ (may it be sanctified, Pater Noster).",
      
      "Deponents like ‘loquor’ (I speak) use passive forms with active meanings. Purpose clauses with ‘ut’ or ‘ne’ (e.g., ‘ut oretis,’ so that you may pray) are common in the Confiteor. The Gloria’s ‘laudamus’ (we praise) is active, while the Confiteor’s ‘misereatur’ (may he have mercy) is subjunctive. Vocabulary includes ‘Sabaoth’ (hosts), ‘peccavi’ (I have sinned), and ‘glorificetur’ (may he be glorified). Pronunciation: ‘laudatur’ (low-DAH-toor), ‘confiteor’ (kohn-fee-TEH-ohr).",
      
      "Practice translating excerpts, identifying grammar. In ‘miserere nobis’ (Agnus Dei), ‘miserere’ is a subjunctive imperative. In ‘sequere me’ (Vulgate), ‘sequere’ is a deponent imperative. The Sanctus’s ‘pleni sunt’ (they are full) uses passive voice. Your vocabulary now exceeds 100 words, including ‘sanctus,’ ‘pax,’ ‘rogo.’ Review the prayers’ rhythm to solidify memorization.",
      
      "This review prepares you for Module 5’s focus on the Vulgate and Mass. Translate excerpts by noting passive verbs, subjunctives, deponents, and purpose clauses. For example, ‘ut laudemus’ (Gloria) uses a purpose clause with subjunctive ‘laudemus.’ Mastery of these concepts ensures fluency in liturgical texts."
    ],
    vocabulary: [
      "laudatur - he is praised", "amem - I may love", "amarem - I might love", "amaverim - I may have loved",
      "confiteor - I confess", "loquor - I speak", "ut - so that", "orem - I may pray", "sanctificetur - may it be sanctified",
      "miserere - have mercy", "Sabaoth - hosts", "peccavi - I have sinned", "glorificetur - may he be glorified",
      "pax - peace", "sequere - follow"
    ],
    practice: [
      "Translate the following excerpts from the Mass and Vulgate, identifying the specified grammar:",
      "(1) Miserere nobis (Agnus Dei, identify subjunctive),",
      "(2) Sequere me (Vulgate, identify deponent),",
      "(3) Ut laudemus (Gloria, identify purpose clause),",
      "(4) Peccata tolluntur (Agnus Dei, identify passive),",
      "(5) Misereatur vestri (Confiteor, identify subjunctive)."
    ],
    answer: [
      "(1) Miserere nobis: Have mercy on us, ‘miserere’ is a present subjunctive (imperative-like).",
      "(2) Sequere me: Follow me, ‘sequere’ is a deponent imperative.",
      "(3) Ut laudemus: So that we may praise, ‘ut laudemus’ is a purpose clause with present subjunctive.",
      "(4) Peccata tolluntur: Sins are taken away, ‘tolluntur’ is present passive.",
      "(5) Misereatur vestri: May he have mercy on you, ‘misereatur’ is present subjunctive."
    ],
    quiz: [
      {
        id: 1,
        question: "Conjugate ‘loqui’ (to speak) in present tense singular",
        type: "translation",
        correctAnswer: "loquor, loqueris, loquitur",
        explanation: "Deponent verbs use passive endings with active meanings."
      },
      {
        id: 2,
        question: "Translate: ‘Ut laudemus’ from Gloria",
        type: "translation",
        correctAnswer: "So that we may praise"
      },
      {
        id: 3,
        question: "Identify the mood of ‘miserere’ in ‘Miserere nobis’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Subjunctive"
      }
    ]
  },
  {
    id: 33,
    title: "Vulgate Bible – Gospel Excerpts",
    module: 5,
    materials: [
      "Excerpts from the Vulgate Gospels (e.g., John 1:1-5, Luke 2:1-7)",
      "Vocabulary: 20 terms from Gospel texts",
      "Practice: Translate and analyze John 1:1-5"
    ],
    content: [
      "The Vulgate Bible, St. Jerome’s Latin translation, is a cornerstone of ecclesiastical Latin. This lesson focuses on Gospel excerpts, starting with John 1:1-5: In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum... This text is rich in grammar and theology, ideal for applying Module 5’s skills. You’ll analyze verbs, nouns, and prepositional phrases, building on earlier lessons.",
      
      "Key vocabulary includes ‘Verbum’ (Word, 2nd declension neuter), ‘erat’ (was, imperfect of ‘esse’), and ‘lux’ (light, 3rd declension feminine). The passage uses simple past verbs (‘erat,’ was), relative clauses (‘quod factum est,’ which was made), and prepositions (‘apud Deum,’ with God). The imperfect tense in ‘erat’ indicates ongoing past action, while ‘factum est’ (perfect passive) shows completed creation. Word order emphasizes theology: ‘Deus erat Verbum’ (the Word was God).",
      
      "In Luke 2:1-7, terms like ‘natus’ (born, perfect participle) and ‘praecepit’ (he ordered, from ‘praecipere’) appear. Practice translation by identifying cases and verb forms. For example, in ‘lux in tenebris lucet’ (the light shines in the darkness, John 1:5), ‘lucet’ is present tense (3rd conjugation, ‘lucere’), and ‘tenebris’ is ablative plural. Pronunciation: ‘Verbum’ (WEHR-boom), ‘lux’ (looks), ‘erat’ (EH-raht).",
      
      "Translating these excerpts requires synthesizing Module 1-4 grammar: cases, verb tenses, participles, and clauses. John 1:1-5’s repetitive structure aids memorization, while its theological depth reinforces Latin’s expressive power. This prepares you for Module 5’s focus on applying Latin to scripture and liturgy."
    ],
    vocabulary: [
      "Verbum - Word", "erat - was", "lux - light", "tenebris - darkness", "lucet - shines",
      "Deum - God", "principio - beginning", "factum - made", "vita - life", "hominibus - men",
      "natus - born", "praecepit - he ordered", "caesar - emperor", "virgo - virgin", "nativitas - birth",
      "locus - place", "stella - star", "pastor - shepherd", "angelus - angel", "dominus - Lord"
    ],
    practice: [
      "Translate John 1:1-5:",
      "In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.",
      "Hoc erat in principio apud Deum.",
      "Omnia per ipsum facta sunt, et sine ipso factum est nihil quod factum est.",
      "In ipso vita erat, et vita erat lux hominum,",
      "et lux in tenebris lucet, et tenebrae eam non comprehenderunt."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘In principio erat Verbum’ from John 1:1",
        type: "translation",
        correctAnswer: "In the beginning was the Word"
      },
      {
        id: 2,
        question: "Identify the tense of ‘erat’ in ‘Deus erat Verbum’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Perfect", "Future"],
        correctAnswer: "Imperfect"
      },
      {
        id: 3,
        question: "Identify the case of ‘tenebris’ in ‘lux in tenebris lucet’",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Dative", "Ablative"],
        correctAnswer: "Ablative"
      }
    ]
  },
  {
    id: 34,
    title: "Vulgate Bible – Psalms",
    module: 5,
    materials: [
      "Excerpts from Psalms (e.g., Psalm 23:1-4 in Vulgate numbering)",
      "Vocabulary: 20 terms from Psalms",
      "Practice: Translate and analyze Psalm 23:1-4"
    ],
    content: [
      "The Psalms in the Vulgate are poetic and central to liturgy, used in the Divine Office and Mass. This lesson focuses on Psalm 23:1-4 (Vulgate): Dominus regit me, et nihil mihi deerit. In loco pascuae ibi me collocavit... The text is rich in grammar, with verbs, datives, and poetic imagery, ideal for Module 5’s application of Latin skills.",
      
      "Key vocabulary includes ‘regit’ (he rules, 3rd conjugation present), ‘mihi’ (to me, dative), and ‘pascua’ (pasture, 1st declension). The passage uses present tense (‘regit,’ he rules), perfect tense (‘collocavit,’ he has placed), and datives (‘mihi,’ to me). Poetic word order, like ‘nihil mihi deerit’ (nothing will be lacking to me), emphasizes the subject. Relative clauses appear, as in ‘qui convertit animam meam’ (who restores my soul).",
      
      "In Psalm 23, ‘deduxit me’ (he has led me, from ‘deducere’) is perfect tense, and ‘virga tua’ (your rod) uses nominative for possession. Practice translation by identifying verb forms and cases. For example, ‘in loco pascuae’ (in a place of pasture) uses ablative for location. Pronunciation: ‘Dominus’ (DOH-mee-noos), ‘regit’ (REH-geet), ‘pascua’ (PAHS-koo-ah).",
      
      "Translating Psalms requires attention to poetic structure and grammar from Modules 1-4. The repetitive, rhythmic nature of Psalm 23 aids memorization, while its imagery (e.g., ‘valle umbrae mortis,’ valley of the shadow of death) deepens your understanding of Latin’s expressive power in scripture."
    ],
    vocabulary: [
      "regit - he rules", "mihi - to me", "pascua - pasture", "collocavit - he has placed",
      "nihil - nothing", "deerit - it will be lacking", "anima - soul", "convertit - he restores",
      "deduxit - he has led", "virga - rod", "umbra - shadow", "mors - death", "valle - valley",
      "dominus - Lord", "pastor - shepherd", "aquae - waters", "recte - rightly", "confortat - he strengthens",
      "inimicus - enemy", "mensam - table"
    ],
    practice: [
      "Translate Psalm 23:1-4:",
      "Dominus regit me, et nihil mihi deerit.",
      "In loco pascuae ibi me collocavit.",
      "Super aquam refectionis educavit me, animam meam convertit.",
      "Deduxit me super semitas iustitiae, propter nomen suum.",
      "Nam et si ambulavero in medio umbrae mortis, non timebo mala,",
      "quoniam tu mecum es: virga tua et baculus tuus ipsa me consolata sunt."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Dominus regit me’ from Psalm 23:1",
        type: "translation",
        correctAnswer: "The Lord rules me"
      },
      {
        id: 2,
        question: "Identify the tense of ‘collocavit’ in ‘ibi me collocavit’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Perfect", "Future"],
        correctAnswer: "Perfect"
      },
      {
        id: 3,
        question: "Identify the case of ‘mihi’ in ‘nihil mihi deerit’",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Dative", "Ablative"],
        correctAnswer: "Dative"
      }
    ]
  },
  {
    id: 35,
    title: "The Ordinary of the Mass",
    module: 5,
    materials: [
      "Key texts of the Mass Ordinary (Kyrie, Gloria, Credo, Sanctus, Agnus Dei)",
      "Vocabulary: 20 terms from the Mass Ordinary",
      "Practice: Translate and analyze excerpts from the Mass"
    ],
    content: [
      "The Ordinary of the Mass includes fixed texts like the Kyrie, Gloria, Credo, Sanctus, and Agnus Dei, used in every Mass. This lesson synthesizes Module 5’s focus on applying Latin to liturgy, analyzing these texts’ grammar and vocabulary. For example, the Kyrie’s ‘Kyrie eleison’ (Lord, have mercy) uses Greek but integrates with Latin’s ‘miserere’ (subjunctive). The Gloria, Credo, Sanctus, and Agnus Dei were studied in Modules 3-4, now revisited for deeper analysis.",
      
      "Key vocabulary includes ‘Kyrie’ (Lord), ‘eleison’ (have mercy), ‘credo’ (I believe), and ‘Sabaoth’ (hosts). Grammar includes subjunctives (‘miserere,’ have mercy, Agnus Dei), passives (‘pleni sunt,’ they are filled, Sanctus), and relative clauses (‘qui tollis peccata,’ who takes away sins, Agnus Dei). The Credo’s ‘factorem caeli’ (maker of heaven) uses a participle, while the Gloria’s ‘laudamus te’ (we praise you) is active present tense. Pronunciation: ‘Kyrie’ (KEE-ree-eh), ‘eleison’ (eh-LAY-sohn).",
      
      "Practice translating excerpts, noting grammar. In ‘qui sedes ad dexteram Patris’ (Credo, who sits at the right hand of the Father), ‘sedes’ is present indicative, and ‘Patris’ is dative. The Kyrie’s repetitive structure aids memorization, while the Sanctus’s ‘hosanna’ reflects Hebrew influence. These texts combine Module 1-4 skills: cases, verb forms, participles, and subjunctives.",
      
      "Analyzing the Mass Ordinary prepares you for Module 5’s culmination, applying Latin to worship. Recite excerpts to internalize rhythm and grammar, focusing on how subjunctives and passives convey humility and divine action in the liturgy."
    ],
    vocabulary: [
      "Kyrie - Lord", "eleison - have mercy", "gloria - glory", "credo - I believe", "sanctus - holy",
      "Sabaoth - hosts", "pleni - full", "hosanna - hosanna", "agnus - lamb", "peccata - sins",
      "miserere - have mercy", "dona - grant", "pax - peace", "sedes - you sit", "dexteram - right hand",
      "Patris - Father", "laudamus - we praise", "benedicimus - we bless", "adoramus - we adore",
      "factorem - maker"
    ],
    practice: [
      "Translate the following excerpts from the Mass Ordinary, identifying the specified grammar:",
      "(1) Kyrie eleison (Kyrie, identify verb),",
      "(2) Laudamus te (Gloria, identify tense),",
      "(3) Qui tollis peccata (Agnus Dei, identify relative clause),",
      "(4) Pleni sunt caeli (Sanctus, identify passive),",
      "(5) Factorem caeli (Credo, identify participle)."
    ],
    answer: [
      "(1) Kyrie eleison: Lord, have mercy, ‘eleison’ is a verb (Greek, imperative-like).",
      "(2) Laudamus te: We praise you, ‘laudamus’ is present tense.",
      "(3) Qui tollis peccata: Who takes away sins, ‘qui tollis peccata’ is a relative clause.",
      "(4) Pleni sunt caeli: The heavens are full, ‘pleni sunt’ is passive (present).",
      "(5) Factorem caeli: Maker of heaven, ‘factorem’ is a present participle."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Qui tollis peccata’ from Agnus Dei",
        type: "translation",
        correctAnswer: "Who takes away sins"
      },
      {
        id: 2,
        question: "Identify the tense of ‘laudamus’ in ‘Laudamus te’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Perfect", "Future"],
        correctAnswer: "Present"
      },
      {
        id: 3,
        question: "Is ‘pleni sunt’ in ‘Pleni sunt caeli’ passive or active?",
        type: "multiple-choice",
        options: ["Active", "Passive", "Subjunctive", "Infinitive"],
        correctAnswer: "Passive"
      }
    ]
  },
  {
    id: 36,
    title: "Vulgate Bible – Epistles",
    module: 5,
    materials: [
      "Excerpts from Pauline Epistles (e.g., Romans 1:16-17)",
      "Vocabulary: 20 terms from Epistles",
      "Practice: Translate and analyze Romans 1:16-17"
    ],
    content: [
      "The Pauline Epistles in the Vulgate, like Romans 1:16-17, are theological and dense with advanced grammar, ideal for Module 5’s focus on scripture. Romans 1:16-17 reads: Non enim erubesco Evangelium... in quo iustitia Dei revelatur. This lesson analyzes verbs, relative clauses, and prepositional phrases, applying skills from Modules 1-4.",
      
      "Key vocabulary includes ‘Evangelium’ (Gospel, 2nd declension neuter), ‘erubesco’ (I am ashamed, 3rd conjugation inchoative), and ‘iustitia’ (justice, 1st declension). The passage uses present tense (‘revelatur,’ it is revealed, passive), relative clauses (‘in quo,’ in which), and prepositions (‘ex fide,’ from faith). The verb ‘credo’ (I believe) and participles like ‘scriptum’ (written, from ‘scribere’) appear. Word order emphasizes theology: ‘iustitia Dei’ (God’s justice).",
      
      "Practice translation by identifying grammar. In ‘qui credit’ (who believes), ‘qui’ is a relative pronoun, and ‘credit’ is present tense (3rd conjugation). The ablative ‘ex fide’ (from faith) shows manner. Pronunciation: ‘Evangelium’ (eh-wahn-GEH-lee-oom), ‘iustitia’ (yoos-TEE-tee-ah), ‘revelatur’ (reh-weh-LAH-toor). The Epistles’ argumentative style contrasts with the Gospels’ narrative, deepening your Latin analysis.",
      
      "Translating Epistles requires attention to complex clauses and theological terms. Romans 1:16-17’s focus on faith and justice ties to liturgical themes. This practice prepares you for Module 5’s culmination, applying Latin to scripture and Mass with fluency."
    ],
    vocabulary: [
      "Evangelium - Gospel", "erubesco - I am ashamed", "iustitia - justice", "revelatur - it is revealed",
      "fides - faith", "credo - I believe", "scriptum - written", "Dei - of God", "salus - salvation",
      "omnis - all", "qui - who", "vivit - he lives", "iustus - just", "ex - from", "in - in",
      "gratia - grace", "veritas - truth", "peccatum - sin", "redemptio - redemption", "testimonium - testimony"
    ],
    practice: [
      "Translate Romans 1:16-17:",
      "Non enim erubesco Evangelium, virtus enim Dei est in salutem omni credenti, Iudaeo primum et Graeco.",
      "Iustitia enim Dei in eo revelatur ex fide in fidem,",
      "sicut scriptum est: Iustus autem ex fide vivit."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Iustitia Dei revelatur’ from Romans 1:16-17",
        type: "translation",
        correctAnswer: "The justice of God is revealed"
      },
      {
        id: 2,
        question: "Identify the tense of ‘revelatur’ in ‘Iustitia Dei revelatur’",
        type: "multiple-choice",
        options: ["Present", "Imperfect", "Perfect", "Future"],
        correctAnswer: "Present"
      },
      {
        id: 3,
        question: "Identify the case of ‘fide’ in ‘ex fide in fidem’",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Dative", "Ablative"],
        correctAnswer: "Ablative"
      }
    ]
  },
  {
    id: 37,
    title: "Applying Latin to Liturgical Prayers",
    module: 5,
    materials: [
      "Review of major prayers (Pater Noster, Ave Maria, Gloria Patri, Credo, Magnificat)",
      "Vocabulary: 20 terms from prayers",
      "Practice: Translate and recite prayers with analysis"
    ],
    content: [
      "This lesson applies Latin skills to major liturgical prayers: Pater Noster, Ave Maria, Gloria Patri, Credo, and Magnificat, synthesizing Modules 1-4. These prayers, central to Catholic worship, use grammar like subjunctives (‘sanctificetur,’ may it be sanctified, Pater Noster), participles (‘natum,’ born, Credo), and relative clauses (‘quae concepisti,’ who conceived, Ave Maria). This practice deepens fluency in Module 5’s liturgical focus.",
      
      "Key vocabulary includes ‘Pater’ (Father), ‘gratia’ (grace), ‘gloria’ (glory), ‘credo’ (I believe), and ‘exsultavit’ (rejoiced). The Pater Noster uses subjunctives (‘fiat,’ may it be), the Ave Maria has datives (‘nobis,’ to us), and the Credo features participles (‘factorem,’ maker). The Gloria Patri’s ‘sicut erat’ (as it was) uses imperfect tense, and the Magnificat’s ‘qui potens est’ (who is powerful) has a relative clause. Pronunciation: ‘Pater’ (PAH-ter), ‘Ave’ (AH-weh).",
      
      "Practice translating and reciting, noting grammar. In ‘ora pro nobis’ (Ave Maria), ‘ora’ is an imperative, and ‘nobis’ is dative. In ‘exaltavit humiles’ (Magnificat), ‘exaltavit’ is perfect tense. These prayers’ repetitive nature aids memorization, while their grammar reinforces cases, verbs, and clauses. Analyze each prayer to understand how Latin conveys theology and devotion.",
      
      "This lesson prepares you for Module 5’s final lessons, applying Latin to the Mass and scripture. Recite prayers with accurate pronunciation and identify grammar to achieve fluency in liturgical contexts, connecting linguistic mastery to spiritual practice."
    ],
    vocabulary: [
      "Pater - Father", "gratia - grace", "gloria - glory", "credo - I believe", "exsultavit - rejoiced",
      "sanctificetur - may it be sanctified", "fiat - may it be", "natum - born", "factorem - maker",
      "ora - pray", "nobis - to us", "qui - who", "potens - powerful", "humiles - humble", "ave - hail",
      "dominus - Lord", "peccatoribus - sinners", "regnum - kingdom", "voluntas - will", "anima - soul"
    ],
    practice: [
      "Translate and recite excerpts from the following prayers, identifying the specified grammar:",
      "(1) Sanctificetur nomen tuum (Pater Noster, identify subjunctive),",
      "(2) Ora pro nobis (Ave Maria, identify imperative),",
      "(3) Natum et invisibilium (Credo, identify participle),",
      "(4) Sicut erat in principio (Gloria Patri, identify tense),",
      "(5) Qui potens est (Magnificat, identify relative clause)."
    ],
    answer: [
      "(1) Sanctificetur nomen tuum: May your name be sanctified, ‘sanctificetur’ is present subjunctive.",
      "(2) Ora pro nobis: Pray for us, ‘ora’ is an imperative.",
      "(3) Natum et invisibilium: Born and of invisible things, ‘natum’ is a perfect participle.",
      "(4) Sicut erat in principio: As it was in the beginning, ‘erat’ is imperfect tense.",
      "(5) Qui potens est: Who is powerful, ‘qui potens est’ is a relative clause."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Ora pro nobis’ from Ave Maria",
        type: "translation",
        correctAnswer: "Pray for us"
      },
      {
        id: 2,
        question: "Identify the mood of ‘sanctificetur’ in ‘Sanctificetur nomen tuum’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Subjunctive"
      },
      {
        id: 3,
        question: "Identify the participle in ‘Natum et invisibilium’",
        type: "multiple-choice",
        options: ["natum", "et", "invisibilium", "credo"],
        correctAnswer: "natum"
      }
    ]
  },
  {
    id: 38,
    title: "Latin in the Mass – Full Analysis",
    module: 5,
    materials: [
      "Complete Ordinary of the Mass with focus on key prayers",
      "Vocabulary: 20 terms from the Mass",
      "Practice: Translate and analyze key Mass sections"
    ],
    content: [
      "This lesson analyzes the full Ordinary of the Mass (Kyrie, Gloria, Credo, Sanctus, Agnus Dei), applying all grammar from Modules 1-4 to achieve Module 5’s goal of liturgical fluency. Key prayers include the Gloria’s ‘laudamus te’ (we praise you), the Credo’s ‘credo in unum Deum’ (I believe in one God), and the Agnus Dei’s ‘miserere nobis’ (have mercy on us). Each text combines subjunctives, passives, participles, and relative clauses.",
      
      "Key vocabulary includes ‘miserere’ (have mercy, subjunctive), ‘sanctus’ (holy), ‘credo’ (I believe), and ‘peccata’ (sins). Grammar highlights: subjunctives (‘miserere,’ ‘dona,’ grant), passives (‘pleni sunt,’ they are filled, Sanctus), participles (‘factorem,’ maker, Credo), and relative clauses (‘qui tollis peccata,’ who takes away sins, Agnus Dei). The Kyrie’s ‘eleison’ integrates Greek, while the Sanctus’s ‘Sabaoth’ uses Hebrew. Pronunciation: ‘miserere’ (mee-seh-REH-reh), ‘sanctus’ (SAHNK-toos).",
      
      "Practice translating key sections, noting grammar. In ‘qui sedes ad dexteram Patris’ (Credo), ‘sedes’ is present indicative, ‘Patris’ is dative. In ‘hosanna in excelsis’ (Sanctus), ‘excelsis’ is ablative plural. The Mass’s repetitive structure aids memorization, while its grammar showcases Latin’s precision in worship. Analyze each section to understand theological and linguistic depth.",
      
      "This analysis prepares you for Module 5’s final lesson, achieving fluency in the Mass. Recite and translate with attention to grammar, connecting Latin to the liturgy’s spiritual context. Your skills now allow full engagement with the Mass’s texts."
    ],
    vocabulary: [
      "miserere - have mercy", "sanctus - holy", "credo - I believe", "peccata - sins", "gloria - glory",
      "Kyrie - Lord", "eleison - have mercy", "Sabaoth - hosts", "hosanna - hosanna", "excelsis - highest",
      "agnus - lamb", "dona - grant", "pax - peace", "sedes - you sit", "dexteram - right hand",
      "Patris - Father", "laudamus - we praise", "benedicimus - we bless", "factorem - maker", "omnipotens - almighty"
    ],
    practice: [
      "Translate the following excerpts from the Mass Ordinary, identifying the specified grammar:",
      "(1) Miserere nobis (Agnus Dei, identify subjunctive),",
      "(2) Qui sedes ad dexteram Patris (Credo, identify verb tense),",
      "(3) Pleni sunt caeli (Sanctus, identify passive),",
      "(4) Laudamus te (Gloria, identify tense),",
      "(5) Qui tollis peccata (Agnus Dei, identify relative clause)."
    ],
    answer: [
      "(1) Miserere nobis: Have mercy on us, ‘miserere’ is present subjunctive.",
      "(2) Qui sedes ad dexteram Patris: Who sits at the right hand of the Father, ‘sedes’ is present indicative.",
      "(3) Pleni sunt caeli: The heavens are full, ‘pleni sunt’ is present passive.",
      "(4) Laudamus te: We praise you, ‘laudamus’ is present tense.",
      "(5) Qui tollis peccata: Who takes away sins, ‘qui tollis peccata’ is a relative clause."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Pleni sunt caeli’ from Sanctus",
        type: "translation",
        correctAnswer: "The heavens are full"
      },
      {
        id: 2,
        question: "Identify the mood of ‘miserere’ in ‘Miserere nobis’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Subjunctive"
      },
      {
        id: 3,
        question: "Identify the participle in ‘Factorem caeli’",
        type: "multiple-choice",
        options: ["factorem", "caeli", "credo", "omnipotens"],
        correctAnswer: "factorem"
      }
    ]
  },
  {
    id: 39,
    title: "Latin Hymns and Chants",
    module: 5,
    materials: [
      "Excerpts from hymns (e.g., Ave Maris Stella, Pange Lingua)",
      "Vocabulary: 20 terms from hymns",
      "Practice: Translate and recite hymn excerpts"
    ],
    content: [
      "Latin hymns and chants, like Ave Maris Stella and Pange Lingua, are poetic and musical, used in the Divine Office and Mass. This lesson applies Module 5’s skills to these texts, focusing on grammar and vocabulary. Ave Maris Stella begins: Ave, maris stella, Dei mater alma... Pange Lingua starts: Pange, lingua, gloriosi corporis mysterium. Their poetic structure enhances Latin’s expressive power.",
      
      "Key vocabulary includes ‘stella’ (star, 1st declension), ‘mater’ (mother), ‘pange’ (sing, imperative), and ‘mysterium’ (mystery). Grammar includes imperatives (‘pange,’ sing), vocatives (‘maris stella,’ star of the sea), and adjectives (‘gloriosi,’ glorious). Ave Maris Stella uses datives (‘Dei,’ to God) and participles (‘solvens,’ loosening). Pange Lingua has relative clauses (‘quod in cruce,’ which on the cross). Pronunciation: ‘Ave’ (AH-weh), ‘pange’ (PAHN-jeh).",
      
      "Practice translating and reciting, noting grammar. In ‘virgo singularis’ (Ave Maris Stella), ‘singularis’ is an adjective agreeing with ‘virgo’ (nominative feminine). In ‘sanguinisque pretiosi’ (Pange Lingua), ‘pretiosi’ is genitive, describing ‘sanguinis’ (blood). The hymns’ meter aids memorization, while their grammar (subjunctives, participles) reinforces Modules 1-4. Analyze to understand theological imagery.",
      
      "This lesson prepares you for Module 5’s final synthesis, connecting Latin to worship. Recite hymns with accurate pronunciation and analyze grammar to appreciate their poetic and spiritual depth, achieving fluency in ecclesiastical Latin."
    ],
    vocabulary: [
      "stella - star", "mater - mother", "pange - sing", "mysterium - mystery", "gloriosi - glorious",
      "virgo - virgin", "alma - nourishing", "solvens - loosening", "crux - cross", "sanguis - blood",
      "pretiosi - precious", "fides - faith", "salus - salvation", "regis - king", "caelestis - heavenly",
      "hostis - enemy", "nomen - name", "laudes - praises", "corpus - body", "redemptor - redeemer"
    ],
    practice: [
      "Translate and recite excerpts from Ave Maris Stella and Pange Lingua:",
      "(1) Ave, maris stella, Dei mater alma,",
      "(2) Pange, lingua, gloriosi corporis mysterium,",
      "(3) Virgo singularis,",
      "(4) Sanguinisque pretiosi,",
      "(5) Solvens alvus."
    ],
    answer: [
      "(1) Ave, maris stella, Dei mater alma: Hail, star of the sea, nourishing mother of God.",
      "(2) Pange, lingua, gloriosi corporis mysterium: Sing, tongue, the mystery of the glorious body.",
      "(3) Virgo singularis: Singular virgin.",
      "(4) Sanguinisque pretiosi: And of the precious blood.",
      "(5) Solvens alvus: Loosening womb."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Ave, maris stella’",
        type: "translation",
        correctAnswer: "Hail, star of the sea"
      },
      {
        id: 2,
        question: "Identify the case of ‘stella’ in ‘maris stella’",
        type: "multiple-choice",
        options: ["Nominative", "Accusative", "Dative", "Vocative"],
        correctAnswer: "Vocative"
      },
      {
        id: 3,
        question: "Identify the verb form of ‘pange’ in ‘Pange, lingua’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Imperative"
      }
    ]
  },
  {
    id: 40,
    title: "Course Synthesis and Application",
    module: 5,
    materials: [
      "Review all major texts (prayers, Mass, Vulgate, hymns)",
      "Vocabulary: Review all 500+ course terms",
      "Practice: Translate and recite mixed excerpts"
    ],
    content: [
      "This final lesson synthesizes the entire course, applying Latin skills to prayers (Pater Noster, Ave Maria, Credo, Magnificat, Gloria Patri), the Mass Ordinary (Kyrie, Gloria, Credo, Sanctus, Agnus Dei), Vulgate excerpts (John 1, Psalm 23, Romans 1), and hymns (Ave Maris Stella, Pange Lingua). Module 5 culminates in fluency, enabling you to read, translate, and recite ecclesiastical Latin with confidence.",
      
      "Your vocabulary now exceeds 500 words, including ‘Verbum’ (Word), ‘sanctus’ (holy), ‘miserere’ (have mercy), ‘stella’ (star), and ‘iustitia’ (justice). Grammar spans cases (dative ‘nobis’), verb tenses (‘erat,’ was), subjunctives (‘fiat,’ may it be), passives (‘laudatur,’ he is praised), participles (‘natum,’ born), deponents (‘confiteor,’ I confess), and relative clauses (‘qui tollis,’ who takes away). Pronunciation: ‘credo’ (KREH-doh), ‘pange’ (PAHN-jeh).",
      
      "Practice translating and reciting mixed excerpts, identifying grammar. In ‘lux in tenebris lucet’ (John 1), ‘lucet’ is present tense, ‘tenebris’ is ablative. In ‘miserere nobis’ (Agnus Dei), ‘miserere’ is subjunctive. The course’s texts—prayers, Mass, scripture, hymns—use repetitive structures for memorization and theological depth. Analyze each to connect grammar to meaning.",
      
      "This synthesis achieves the course’s goal: fluency in ecclesiastical Latin for worship and scripture. Recite texts with accurate pronunciation, translate with grammatical precision, and appreciate Latin’s role in Catholic tradition. You are now equipped to engage with Latin texts in Mass, prayer, and study."
    ],
    vocabulary: [
      "Verbum - Word", "sanctus - holy", "miserere - have mercy", "stella - star", "iustitia - justice",
      "credo - I believe", "fiat - may it be", "laudatur - he is praised", "natum - born", "confiteor - I confess",
      "qui - who", "lux - light", "pange - sing", "gloria - glory", "pax - peace", "Evangelium - Gospel",
      "regit - he rules", "anima - soul", "peccata - sins", "mysterium - mystery"
    ],
    practice: [
      "Translate and recite the following mixed excerpts, identifying the specified grammar:",
      "(1) Lux in tenebris lucet (John 1, identify tense),",
      "(2) Miserere nobis (Agnus Dei, identify subjunctive),",
      "(3) Qui tollis peccata (Agnus Dei, identify relative clause),",
      "(4) Pange, lingua (Pange Lingua, identify imperative),",
      "(5) Dominus regit me (Psalm 23, identify tense)."
    ],
    answer: [
      "(1) Lux in tenebris lucet: The light shines in the darkness, ‘lucet’ is present tense.",
      "(2) Miserere nobis: Have mercy on us, ‘miserere’ is present subjunctive.",
      "(3) Qui tollis peccata: Who takes away sins, ‘qui tollis peccata’ is a relative clause.",
      "(4) Pange, lingua: Sing, tongue, ‘pange’ is an imperative.",
      "(5) Dominus regit me: The Lord rules me, ‘regit’ is present tense."
    ],
    quiz: [
      {
        id: 1,
        question: "Translate: ‘Lux in tenebris lucet’ from John 1",
        type: "translation",
        correctAnswer: "The light shines in the darkness"
      },
      {
        id: 2,
        question: "Identify the mood of ‘miserere’ in ‘Miserere nobis’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Subjunctive"
      },
      {
        id: 3,
        question: "Identify the verb form of ‘pange’ in ‘Pange, lingua’",
        type: "multiple-choice",
        options: ["Indicative", "Subjunctive", "Imperative", "Infinitive"],
        correctAnswer: "Imperative"
      }
    ]
  }
];
