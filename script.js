const translations = {
    ar: {
        title: "🔥 أركيد الأفلام العربي والأسطوري 🔥",
        timer: "الوقت المتبقي",
        lives: "المحاولات",
        score: "النقاط",
        placeholder: "خمن اسم الفيلم هنا...",
        btnText: "تحقق",
        hintBtnText: "تلميح (100🪙)",
        skipText: "تخطي (80🪙)",
        noInput: "اكتب اسم الفيلم أولاً!",
        correct: "🎉 عبقري! إجابة صحيحة +100 نقطة! 🚀",
        wrong: "❌ إجابة خاطئة! حاول مجدداً",
        outOfLives: "💔 قلوبك خلصت! الإجابة الصحيحة كانت: ",
        skipped: "👀 تم تخطي السؤال. الإجابة الصحيحة: ",
        gameOver: "⏱️ انتهت اللعبة! مجموع نقاطك: ",
        restartBtn: "🔄 العب من جديد",
        formTitle: "👋 تسجيل الدخول / لاعب جديد",
        namePlaceholder: "اكتب اسمك هنا...",
        agePlaceholder: "اكتب عمرك...",
        startBtn: "دخول والبدء 🚀",
        fillAlert: "يرجى كتابة الاسم والعمر بشكل صحيح!",
        switchUserBtn: "👤 تغيير اللاعب"
    },
    en: {
        title: "🔥 Movie Arcade Challenge 🔥",
        timer: "Time Left",
        lives: "Lives",
        score: "Score",
        placeholder: "Guess movie from emojis...",
        btnText: "Check",
        hintBtnText: "Hint (100🪙)",
        skipText: "Skip (80🪙)",
        noInput: "Type a movie name first!",
        correct: "🎉 Genius! Correct answer +100 Points! 🚀",
        wrong: "❌ Wrong Answer! Try again",
        outOfLives: "💔 You ran out of lives! The correct answer was: ",
        skipped: "👀 Movie skipped. The correct answer was: ",
        gameOver: "⏱️ Game Over! Final score: ",
        restartBtn: "🔄 Play Again",
        formTitle: "👋 Login / New Player",
        namePlaceholder: "Enter your name...",
        agePlaceholder: "Enter your age...",
        startBtn: "Login & Play 🚀",
        fillAlert: "Please enter a valid name and age!",
        switchUserBtn: "👤 Switch Player"
    }
};

const databaseAr = [
    { hints: ["👥", "💰", "🚔"], answer: "ولاد رزق", extraHint: "أعظم فيلم أكشن مصري عن 5 أخوات" },
    { hints: ["🐘", "💊", "👁️"], answer: "الفيل الأزرق", extraHint: "كريم عبد العزيز وغرفة رقم 7" },
    { hints: ["🏝️", "🤠", "🔫"], answer: "الجزيرة", extraHint: " منصور الحفني" },
    { hints: ["🕶️", "👮", "😂"], answer: "البدلة", extraHint: "تامر حسني وأكرم حسني متنكرين كضباط" },
    { hints: ["🎓", "😂", "🇺🇸"], answer: "صعيدي في الجامعة الأمريكية", extraHint: "خلف الدهشوري خلف" },
    { hints: ["🕶️", "🦾", "⚡"], answer: "إبراهيم الأبيض", extraHint: "فيلم أكشن مصري شهير عن المناطق الشعبية" },
    { hints: ["🦅", "🏢", "👮‍♂️"], answer: "الخلية", extraHint: "أحمد عز ضابط قوات خاصة" },
    { hints: ["🇪🇬", "✈️", "😂"], answer: "عسل إسود", extraHint: "مصري مغترب يعود لبلده" },
    { hints: ["👴", "🏺", "🧞‍♂️"], answer: "طير إنت", extraHint: "الدكتور بهيج والسبع شخصيات" },
    { hints: ["🤠", "🤠", "🐎"], answer: "شمس الزناتي", extraHint: "عادل إمام يحمي الواحة" },
    { hints: ["🐑", "🐺", "🔪"], answer: "بوحة", extraHint: "تصبح على خير يا فندم" },
    { hints: ["🍔", "😂", "❤️"], answer: "X لارج", extraHint: "أحمد حلمي والوزن الزائد" },
    { hints: ["💎", "🤵", "🎰"], answer: "كازابلانكا", extraHint: "أمير كرارة ومعارك طاحنة" },
    { hints: ["🎓", "👨‍🏫", "🏫"], answer: "الناظر", extraHint: "صلاح الدين وعاطف واللمبي" },
    { hints: ["🤦‍♂️", "🚗", "💼"], answer: "غبي منه فيه", extraHint: "سلطان والمعلم ضبش" },
    { hints: ["🇪🇬", "⚔️", "🏜️"],answer: "الممر",extraHint: "يتناول بطولات الجيش المصري بعد نكسة 1967."},
    { hints: ["🎤", "🎶", "💖"], answer: "بحبك", extraHint: "تامر حسني بين حب قديم وحب جديد." },
    { hints: ["👰", "🤵", "💍"], answer: "عروستي", extraHint: "رومانسية وكوميديا بين شاب وفتاة قبل الزواج." },
    { hints: ["👨‍👦", "🏠", "😂"], answer: "تسليم أهالي", extraHint: "دنيا سمير غانم وهشام ماجد في كوميديا اجتماعية." },
    { hints: ["🏎️", "🚓", "🔥"], answer: "موسى", extraHint: "شاب يخترع أول روبوت مصري." },
    { hints: ["🚌", "👨", "😂"], answer: "واحد تاني", extraHint: "أحمد حلمي يكتشف شخصية مختلفة بداخله." },
    { hints: ["🧠", "😵", "💊"], answer: "كيرة والجن", extraHint: "عن مقاومة الاحتلال الإنجليزي وثورة 1919." },
    { hints: ["👨‍⚖️", "⚖️", "🏛️"], answer: "ولاد العم", extraHint: "عملية مخابرات مصرية لاستعادة أسرة من إسرائيل." },
    { hints: ["🚂", "💰", "🔫"], answer: "تراب الماس", extraHint: "جريمة غامضة وسلسلة اغتيالات مأخوذة عن رواية أحمد مراد." },
    { hints: ["🎭", "🧑‍🏫", "😂"], answer: "مرعي البريمو", extraHint: "محمد هنيدي يعمل في تجارة البطيخ وتحدث له مواقف كوميدية." },
    { hints: ["💼", "🕵️", "🔫"], answer: "ولاد رزق 2", extraHint: "الإخوة يعودون لتنفيذ عملية سرقة خطيرة." },
    { hints: ["👬", "💎", "💥"], answer: "ولاد رزق 3", extraHint: "مهمة عالمية مليئة بالأكشن والمفاجآت." },
    { hints: ["🏖️", "😂", "❤️"], answer: "البعبع", extraHint: "أمير كرارة وياسمين صبري في مطاردة كوميدية." },
    { hints: ["👨‍⚕️", "🧠", "😱"], answer: "الفيل الأزرق 2", extraHint: "عودة الدكتور يحيى لمواجهة قوى غامضة جديدة." },
    { hints: ["🎤", "👩", "❤️"], answer: "مش أنا", extraHint: "تامر حسني يعاني من حالة نفسية غريبة." },
    { hints: ["🏫", "👨‍🎓", "😂"], answer: "عمر وسلمى", extraHint: "تامر حسني ومي عز الدين في قصة حب كوميدية." },
    { hints: ["👮", "🚨", "🏃"], answer: "أولاد حريم كريم", extraHint: "استكمال أحداث فيلم حريم كريم بعد سنوات." },
    { hints: ["👨", "🛡️", "⚔️"], answer: "السرب", extraHint: "يحكي بطولات القوات الجوية المصرية ضد الإرهاب." },
    { hints: ["🚕", "😂", "👨"], answer: "كباريه", extraHint: "تدور الأحداث داخل ملهى ليلي في ليلة واحدة." },
    { hints: ["💰", "🏦", "🔫"], answer: "مافيا", extraHint: "أحمد السقا يواجه عصابة دولية." },
    { hints: ["👨‍⚕️", "❤️", "🏥"], answer: "هيبتا", extraHint: "فيلم رومانسي يشرح مراحل الحب السبع." },
    { hints: ["🧳", "✈️", "😂"], answer: "لف ودوران", extraHint: "أحمد حلمي يقضي إجازة مليئة بالمواقف الكوميدية." },
    { hints: ["👨‍🎤", "🎶", "💖"], answer: "نور عيني", extraHint: "تامر حسني يقع في حب فتاة كفيفة." },
    { hints: ["🚔", "💣", "🔥"], answer: "هروب اضطراري", extraHint: "أمير كرارة يهرب بعد اتهامه بجريمة قتل." },
    { hints: ["👨‍👩‍👧", "🏖️", "😂"], answer: "جوازة ميري", extraHint: "كوميديا عن شاب وفتاة يتزوجان لحل مشكلة." },
    { hints: ["🏫", "🎓", "😂"], answer: "همام في أمستردام", extraHint: "محمد هنيدي يسافر إلى هولندا بحثًا عن المستقبل." },
    { hints: ["💍", "😂", "👰"], answer: "عريس من جهة أمنية", extraHint: "عادل إمام يحاول ابعاد العرسان." },
    { hints: ["🚓", "👮", "💥"], answer: "الرهينة", extraHint: "أحمد عز يدخل في عملية إنقاذ خطيرة." },
    { hints: ["🏍️", "🔫", "💰"], answer: "حرب كرموز", extraHint: "أمير كرارة يواجه جنود الاحتلال الإنجليزي." },
    { hints: ["👨‍🎤", "🎸", "❤️"], answer: "أهواك", extraHint: "تامر حسني يقع في حيرة بين امرأتين." },
    { hints: ["💊", "🧠", "😱"], answer: "122", extraHint: "أحداث مرعبة داخل مستشفى بعد حادث غامض." },
    { hints: ["⚖️", "👨‍⚖️", "🔪"], answer: "صاحب المقام", extraHint: "دراما تجمع بين الواقع والروحانيات." },
    { hints: ["🏥", "👨‍⚕️", "💔"], answer: "آسف على الإزعاج", extraHint: "أحمد حلمي يعاني من اضطراب نفسي مؤثر." },
    { hints: ["🎭", "😂", "👮"], answer: "الأنس والنمس", extraHint: "محمد هنيدي يواجه مخلوقات من عالم الجن." },
    { hints: ["⚖️", "👨‍⚖️", "💰"], answer: "الكنز", extraHint: "رحلة بين عصور مختلفة بحثًا عن كنز غامض." },
    { hints: ["💰", "👨‍👩‍👦", "😂"], answer: "الحرب العالمية الثالثة", extraHint: "ثلاثة شباب يعملون داخل متحف وتتحرك التماثيل." },
    { hints: ["👨‍👦", "🏃", "🚓"], answer: "تيتو", extraHint: "أحمد السقا يجسد شابًا هاربًا من ماضيه." },
    { hints: ["🕵️‍♂️", "🏢", "🕶️"], answer: "السفارة في العمارة", extraHint: "عادل إمام يكتشف أن سفارة إسرائيل في نفس عمارته" },
    { hints: ["🚢", "🌊", "😂"], answer: "أمير البحار", extraHint: "محمد هنيدي وقبطان السفينة وقراصنة الصومال" },
    { hints: ["🇪🇬", "🇨🇳", "🥋"], answer: "فول الصين العظيم", extraHint: "محمود الشرقاوي يشارك في مسابقة طبخ وألعاب قتالية" },
    { hints: ["👳‍♂️", "🕌", "😂"], answer: "مرجان أحمد مرجان", extraHint: "رجل أعمال يدخل الجامعة مع أولاده بالفلوس" },
    { hints: ["👨‍⚖️", "⚖️", "📜"], answer: "ضد الحكومة", extraHint: "أحمد زكي ومقولته الشهيرة أغيثونا هل من مغيث" },
    { hints: ["👳‍♂️", "🇸🇦", "😂"], answer: "عسكر في المعسكر", extraHint: "خضر وحسنين والثأر القديم في الصعيد" },
    { hints: ["🏫", "👩‍🏫", "❤️"], answer: "الثلاثة يشتغلونها", extraHint: "ياسمين عبد العزيز والدحيحة التي تنخدع باستغلال الرجال" },
    { hints: ["🏛️", "📄", "🔥"], answer: "الإرهاب والكباب", extraHint: "عادل إمام يتورط في احتجاز رهائن في مجمع التحرير" },
    { hints: ["👮‍♂️", "🏃‍♂️", "😂"], answer: "وش إجرام", extraHint: "طه وسليمان ووالده وطه عايز يشتغل في الأمن" },
    { hints: ["👨‍👩‍👧‍👦", "🏖️", "😂"], answer: "مطب صناعي", extraHint: "أحمد حلمي ميمو ورعايته لأطفال حبيبة" },
    { hints: ["👳‍♂️", "🔫", "💍"], answer: "كدة رضا", extraHint: "ثلاثة توائم سمسم وبينو وبرنس يخدعون الفتاة" },
    { hints: ["👨‍⚕️", "💊", "😂"], answer: "الدادة دودي", extraHint: "ياسمين عبد العزيز مع أطفال دكتور صابر الشقياء" },
    { hints: ["👰", "🤵", "😂"], answer: "عصابة عظيمة", extraHint: "إسعاد يونس وعصابة العجائز لتغيير واقعهم" },
    { hints: ["👨‍✈️", "✈️", "😂"], answer: "كابتن مصر", extraHint: "محمد إمام وفريق كرة القدم داخل السجن" },
    { hints: ["🕵️‍♂️", "💼", "🏢"], answer: "سالم أبو أخته", extraHint: "محمد رجب بائع متجول يرعى أخته" },
    { hints: ["👴", "👰", "😂"], answer: "زهايمر", extraHint: "عادل إمام وأولاده يحاولون إثبات مرضه بالطمع" },
    { hints: ["👨‍🎤", "🎶", "💔"], answer: "عندليب الدقي", extraHint: "محمد هنيدي فوزي ومأساة الغناء وثروة شقيقه" },
    { hints: ["🏢", "🔥", "🔫"], answer: "عمارة يعقوبيان", extraHint: "دراما تناقش مجتمع القاهرة من خلال سكان عمارة واحدة" },
    { hints: ["👰", "💍", "💔"], answer: "ساعة ونصف", extraHint: "قصص متعددة للركاب داخل قطار الصعيد قبل الكارثة" },
    { hints: ["👨‍🍳", "🍲", "❤️"], answer: "طباخ الريس", extraHint: "متولي الطباخ الذي ينقل نبض الشارع لرئيس الجمهورية" },
    { hints: ["👨‍👩‍👧", "👨‍👦", "😂"], answer: "حلم عزيز", extraHint: "أحمد عز يرى والده في المنام ويحدد له موعد وفاته" },
    { hints: ["👳‍♂️", "🕋", "😂"], answer: "اللي بالي بالك", extraHint: "اللمبي وضباط السجن وسجين يتغير عقله" },
    { hints: ["👨‍💼", "👔", "😂"], answer: "سمير وشهير وبهير", extraHint: "ثلاثة إخوة يسافرون عبر الزمن إلى فترة السبعينيات" },
    { hints: ["👨‍🌾", "🌾", "⚖️"], answer: "الأرض", extraHint: "محمود المليجي وأبو سويلم والدفاع عن الأرض" },
    { hints: ["🚌", "👨‍👩‍👧‍👦", "😂"], answer: "صاحب صاحبه", extraHint: "محمد هنيدي وأشرف عبد الباقي وعارية المعارة" },
    { hints: ["🚔", "👮‍♂️", "🏃‍♂️"], answer: "المصلحة", extraHint: "أحمد السقا ضابط الشرطة وأحمد عز تجارة المخدرات" },
    { hints: ["👰", "💍", "🚨"], answer: "حريم كريم", extraHint: "مصطفى قمر ومتاعب الحب والنساء" },
    { hints: ["👨‍🍳", "🍕", "❤️"], answer: "يا أنا يا خالتي", extraHint: "تيمور وزاهية وسحر الدجل والشعوذة" },
    { hints: ["👳‍♂️", "🔫", "🌴"], answer: "عصابة الدكتور عمر", extraHint: "مصطفى قمر وعلاج المرضى بأساليب مبتكرة" },
    { hints: ["👨‍🏫", "🏫", "⚽"], answer: "الرجل الأبيض المتوسط", extraHint: "أحمد آدم ومفاوضات خطف الخبير الأجنبي" },
    { hints: ["🕵️‍♂️", "🏢", "💼"], answer: "واحد من الناس", extraHint: "كريم عبد العزيز والانتقام لمقتل زوجته" },
    { hints: ["👮‍♂️", "🕵️‍♂️", "🏢"], answer: "خارج على القانون", extraHint: "كريم عبد العزيز وتجارة السلاح والهروب" },
    { hints: ["🥊", "🤼‍♂️", "😂"], answer: "حلم العمر", extraHint: "حمادة هلال ومشواره للوصول لبطولة العالم في البوكس" },
    { hints: ["👰", "💍", "😂"], answer: "جاي في السريع", extraHint: "ماجد الكدواني ورغبة الزواج السريع من أجل علاج والده" },
    { hints: ["👨‍💼", "💼", "😂"], answer: "علي سبايسي", extraHint: "حكيم وطبيب العلاج بالموسيقى" },
    { hints: ["🏢", "💸", "😂"], answer: "على جثتي", extraHint: "أحمد حلمي يرى مواقف الجميع منه بعد غيبوبته" },
    { hints: ["👨‍👩‍👦", "🚗", "😂"], answer: "غش الزوجية", extraHint: "رامز جلال يكتشف أن زوجته لاعبة كرة قدم قوية" },
    { hints: ["👰", "🤵", "😂"], answer: "المشخصاتي", extraHint: "تامر عبد المنعم وتقليد الممثلين والشخصيات العامة" },
    { hints: ["👨‍⚕️", "🧠", "😂"], answer: "شبه منحرف", extraHint: "رامز جلال والعمل مع خاله وإتقان أساليب السرقة" },
    { hints: ["👳‍♂️", "🏛️", "😂"], answer: "كتكوت", extraHint: "كتكوت أبو الليل والتشابه مع الإرهابي الدولي" },
    { hints: ["👨‍⚕️", "😱", "🩸"], answer: "45 يوم", extraHint: "أحمد الفيشاوي وقضية قتل والديه والتحقيق النفسي" },
    { hints: ["👨‍👩‍👧", "🏖️", "😂"], answer: "سيب وأنا أسيب", extraHint: "ماجد الكدواني وعزة بهاء والأطفال ومقالب الساحل" },
    { hints: ["👰", "🤵", "❤️"], answer: "احكي يا شهرزاد", extraHint: "منى زكي وقصص قضايا المرأة والمشاكل الاجتماعية" },
    { hints: ["👴", "👑", "🗡️"], answer: "حين ميسرة", extraHint: "سمية الخشاب وعمرو سعد وحياة العشوائيات القاسية" },
    { hints: ["👨‍👩‍👦", "🏠", "😱"], answer: "دكان شحاتة", extraHint: "عمرو سعد ومحمود حميدة وصراع الإخوة على الدكان" },
    { hints: ["👨‍⚖️", "⚖️", "🏛️"], answer: "الأفوكاتو", extraHint: "عادل إمام حسن سبانخ والمحاماة الملتوية" },
    { hints: ["👳‍♂️", "🕌", "📜"], answer: "الكيت كات", extraHint: "محمود عبد العزيز الشيخ حسني الفاقد للبصر الذي يسوق الموتوسيكل" },
    { hints: ["👨‍👩‍👧‍👦", "🏠", "💔"], answer: "بداية ونهاية", extraHint: "عمر الشريف وسناء جميل ومأساة أسرة بعد وفاة المعيل" },
    { hints: ["🎬", "🎥", "😂"], answer: "إسماعيل يس في الجيش", extraHint: "إسماعيل يس والشاويش عطية في التدريب العسكري" },
    { hints: ["👨‍⚕️", "🧠", "😱"], answer: "الهروب", extraHint: "أحمد زكي ومطاردة الشرطة في محافظات مصر" }
];

const databaseEn = [
    { hints: ["🕵️‍♂️", "🏢", "🕶️"], answer: "The Matrix", extraHint: "Keanu Reeves Sci-Fi masterpiece" },
    { hints: ["🛳️", "🥶", "💎"], answer: "Titanic", extraHint: "Famous romantic tragedy on a sinking ocean liner" },
    { hints: ["🦇", "🃏", "🏙️"], answer: "The Dark Knight", extraHint: "Batman vs Joker" },
    { hints: ["🦖", "🏞️", "🚙"], answer: "Jurassic Park", extraHint: "Dinosaurs run amok on an island" },
    { hints: ["🧠", "💭", "🌀"], answer: "Inception", extraHint: "Dreams within dreams" },
    { hints: ["🌌", "🚀", "⏳"], answer: "Interstellar", extraHint: "Space travel through a wormhole" },
    { hints: ["🔵", "🏹", "🪐"], answer: "Avatar", extraHint: "Blue aliens defending Pandora" },
    { hints: ["🥊", "🥩", "🔔"], answer: "Rocky", extraHint: "Underdog boxer gets a shot at the world title" },
    { hints: ["🍫", "🏭", "🎫"], answer: "Charlie and the Chocolate Factory", extraHint: "Willy Wonka and the golden tickets" },
    { hints: ["🦈", "🏖️", "🚤"], answer: "Jaws", extraHint: "A giant Great White shark attacks a beach town" },
    { hints: ["🧙‍♂️", "💍", "🌋"], answer: "The Lord of the Rings", extraHint: "Journey to destroy the One Ring in Mordor" },
    { hints: ["🤡", "🎈", "🌧️"], answer: "It", extraHint: "A terrifying shape-shifting clown named Pennywise" },
    { hints: ["👽", "🚲", "🌕"], answer: "E.T.", extraHint: "A boy helps a friendly alien return home" },
    { hints: ["⚡", "🏎️", "🕰️"], answer: "Back to the Future", extraHint: "Marty McFly travels back in time with a DeLorean" },
    { hints: ["🦁", "👑", "🌅"], answer: "The Lion King", extraHint: "Live-action adaptation of Simba's journey" },
    { hints: ["🪓", "🏨", "❄️"], answer: "The Shining", extraHint: "Jack Torrance slowly goes insane in an isolated hotel" },
    { hints: ["🤵", "🍸", "🔫"], answer: "Casino Royale", extraHint: "James Bond plays high-stakes poker" },
    { hints: ["🧟", "🌆", "🐕"], answer: "I Am Legend", extraHint: "Will Smith as a lone survivor in a mutated New York" },
    { hints: ["👻", "🚫", "🔫"], answer: "Ghostbusters", extraHint: "Scientists catching ghosts in New York" },
    { hints: ["🏴‍☠️", "⚓", "⚔️"], answer: "Pirates of the Caribbean", extraHint: "Captain Jack Sparrow and the Curse of the Black Pearl" },
    { hints: ["🦍", "🏙️", "✈️"], answer: "King Kong", extraHint: "Giant ape brought to New York City" },
    { hints: ["🎩", "🦯", "🕴️"], answer: "The Godfather", extraHint: "Mafia dynasty of the Corleone family" },
    { hints: ["🏃‍♂️", "🍫", "🪶"], answer: "Forrest Gump", extraHint: "Life is like a box of chocolates" },
    { hints: ["👽", "🚀", "🥚"], answer: "Alien", extraHint: "A lethal creature hunts a spaceship crew" },
    { hints: ["🕶️", "💼", "👽"], answer: "Men in Black", extraHint: "Secret agency monitoring alien activity on Earth" },
    { hints: ["🔪", "🚿", "🔪"], answer: "Psycho", extraHint: "Alfred Hitchcock classic at the Bates Motel" },
    { hints: ["🌋", "🦖", "🦍"], answer: "Godzilla vs. Kong", extraHint: "Clash of giant titans" },
    { hints: ["🤖", "💀", "🕶️"], answer: "The Terminator", extraHint: "Cyborg assassin sent back in time to kill Sarah Connor" },
    { hints: ["🎒", "🎓", "🧠"], answer: "Good Will Hunting", extraHint: "A janitor at MIT who is a math genius" },
    { hints: ["🏎️", "🏎️", "🏁"], answer: "Fast and Furious", extraHint: "Street racing, high-speed heists, and family" },
    { hints: ["🎭", "🃏", "🤡"], answer: "Joker", extraHint: "Arthur Fleck transforms into an iconic villain" },
    { hints: ["🧼", "🥊", "🤫"], answer: "Fight Club", extraHint: "First rule: You do not talk about it" },
    { hints: ["🧙‍♂️", "🧹", "⚡"], answer: "Harry Potter", extraHint: "The boy who lived goes to Hogwarts" },
    { hints: ["🏛️", "⚔️", "🛡️"], answer: "Gladiator", extraHint: "Maximus seeks vengeance against the Roman Emperor" },
    { hints: ["👨‍🚀", "🥔", "🔴"], answer: "The Martian", extraHint: "Astronaut stranded alone on Mars" },
    { hints: ["👨‍👦", "💼", "🛌"], answer: "The Pursuit of Happyness", extraHint: "A struggling salesman tries to build a better life for his son" },
    { hints: ["🪞", "🩰", "🦢"], answer: "Black Swan", extraHint: "A ballerina loses her sanity striving for perfection" },
    { hints: ["🔫", "💼", "💃"], answer: "Pulp Fiction", extraHint: "Quentin Tarantino crime classic" },
    { hints: ["🏦", "🎭", "💵"], answer: "Inside Man", extraHint: "Clever bank heist with hostages in Manhattan" },
    { hints: ["🐕", "🔫", "✏️"], answer: "John Wick", extraHint: "Retired hitman seeks vengeance over his puppy" },
    { hints: ["🏝️", "🏐", "🧔"], answer: "Cast Away", extraHint: "Tom Hanks stranded on an island with Wilson" },
    { hints: ["✈️", "🕶️", "🛩️"], answer: "Top Gun", extraHint: "Maverick at the US Navy fighter pilot school" },
    { hints: ["🏰", "🥀", "👹"], answer: "Beauty and the Beast", extraHint: "Live-action fairytale about Belle and the Beast" },
    { hints: ["🐺", "📈", "💵"], answer: "The Wolf of Wall Street", extraHint: "Jordan Belfort's rise and fall in stock trading" },
    { hints: ["🏢", "💥", "🦶"], answer: "Die Hard", extraHint: "John McClane fights terrorists in Nakatomi Plaza" },
    { hints: ["🗝️", "🚪", "👨‍👩‍👧"], answer: "Panic Room", extraHint: "Mother and daughter hide from intruders in a fortified room" },
    { hints: ["🔮", "🪄", "🎩"], answer: "The Prestige", extraHint: "Rival magicians obsession with the ultimate illusion" },
    { hints: ["🏎️", "🏎️", "🏎️"], answer: "Ford v Ferrari", extraHint: "Designing a revolutionary race car for the 1966 Le Mans" },
    { hints: ["🏡", "❄️", "👶"], answer: "Home Alone", extraHint: "Kevin McCallister defends his home against burglars" },
    { hints: ["🚂", "❄️", "🏔️"], answer: "The Polar Express", extraHint: "A magical train ride to the North Pole on Christmas Eve" },
    { hints: ["🏎️", "💥", "⏳"], answer: "Speed", extraHint: "A bus will explode if its speed drops below 50 mph" },
    { hints: ["🛸", "🌽", "🛸"], answer: "Signs", extraHint: "Mysterious crop circles appear on a family farm" },
    { hints: ["🏹", "🎯", "🔥"], answer: "The Hunger Games", extraHint: "Katniss Everdeen fights for survival in a televised arena" },
    { hints: ["🧠", "💊", "⚡"], answer: "Limitless", extraHint: "A mysterious pill unlocks 100% of brain capacity" },
    { hints: ["🏨", "🛎️", "💼"], answer: "The Grand Budapest Hotel", extraHint: "The adventures of a legendary concierge and his lobby boy" },
    { hints: ["💼", "📱", "👠"], answer: "The Devil Wears Prada", extraHint: "A young assistant works for a ruthless fashion magazine editor" },
    { hints: ["🧗‍♂️", "🪨", "⏱️"], answer: "127 Hours", extraHint: "A mountain climber gets trapped under a boulder in Utah" },
    { hints: ["🏎️", "🎧", "💵"], answer: "Baby Driver", extraHint: "A talented getaway driver relies on his personal soundtrack" },
    { hints: ["🎭", "📺", "⛵"], answer: "The Truman Show", extraHint: "A man discovers his entire life is a reality TV show" },
    { hints: ["🚢", "🌊", "🛶"], answer: "Life of Pi", extraHint: "A young boy survives at sea on a lifeboat with a Bengal tiger" },
    { hints: ["🕵️‍♂️", "🔍", "🕵️‍♂️"], answer: "Sherlock Holmes", extraHint: "Robert Downey Jr. solves mysteries in Victorian London" },
    { hints: ["🧟‍♂️", "🔫", "🎡"], answer: "Zombieland", extraHint: "Survivors travel across America in a zombie apocalypse" },
    { hints: ["🏛️", "👨‍🏫", "🔍"], answer: "The Da Vinci Code", extraHint: "Robert Langdon decodes secrets hidden in famous artwork" },
    { hints: ["🛸", "🏜️", "💥"], answer: "Independence Day", extraHint: "Humanity fights back against a massive alien invasion" },
    { hints: ["🎭", "🎭", "🗡️"], answer: "V for Vendetta", extraHint: "A masked freedom fighter tries to overthrow a fascist regime" },
    { hints: ["📦", "⏳", "✉️"], answer: "The Lake House", extraHint: "Two people communicate through a mailbox across different years" },
    { hints: ["🎒", "🌄", "🐻"], answer: "Into the Wild", extraHint: "A young man leaves society behind to live in the Alaskan wilderness" },
    { hints: ["🔫", "🎯", "🌿"], answer: "Predator", extraHint: "An elite military team is hunted by an alien creature in the jungle" },
    { hints: ["🕵️‍♂️", "🗡️", "🏰"], answer: "Knives Out", extraHint: "Detective Benoit Blanc investigates a wealthy family's patriarch death" }
];

const databaseAnime = [
    { hints: ["👦", "🦊", "🍜"], answer: "Naruto", extraHint: "Hidden Leaf Village Ninja" },
    { hints: ["🏴‍☠️", "👒", "⚓"], answer: "One Piece", extraHint: "Monkey D. Luffy Straw Hat" },
    { hints: ["🧱", "🛡️", "👧"], answer: "Demon Slayer", extraHint: "Tanjiro and Nezuko" },
    { hints: ["👊", "👨‍🦲", "🟡"], answer: "One Punch Man", extraHint: "Saitama hero for fun" },
    { hints: ["⚔️", "🤖", "🛡️"], answer: "Attack on Titan", extraHint: "Eren Yeager against titans" },
    { hints: ["📓", "🍎", "🖊️"], answer: "Death Note", extraHint: "Light Yagami finds a notebook that can kill anyone" },
    { hints: ["🐉", "🔴", "🥋"], answer: "Dragon Ball Z", extraHint: "Goku defends the Earth against powerful cosmic threats" },
    { hints: ["🏫", "💥", "🥦"], answer: "My Hero Academia", extraHint: "Deku attends a high school for superhero training" },
    { hints: ["👁️", "☕", "🩺"], answer: "Tokyo Ghoul", extraHint: "Ken Kaneki becomes half-human half-ghoul after a surgery" },
    { hints: ["⛓️", "👨‍🔬", "🤖"], answer: "Fullmetal Alchemist", extraHint: "Two brothers use alchemy to recover their missing bodies" },
    { hints: ["🪓", "🪚", "🐕"], answer: "Chainsaw Man", extraHint: "Denji merges with his pet devil Pochita" },
    { hints: ["🏀", "🔴", "👟"], answer: "Kuroko's Basketball", extraHint: "The phantom sixth man plays high school basketball" },
    { hints: ["🎩", "🧛‍♂️", "🔫"], answer: "Hellsing", extraHint: "The vampire Alucard fights supernatural monsters" },
    { hints: ["🏐", "🐱", "🦅"], answer: "Haikyuu", extraHint: "Shoyo Hinata strives to become a top volleyball player" },
    { hints: ["🗡️", "🥷", "⚡"], answer: "Bleach", extraHint: "Ichigo Kurosaki gains the powers of a Soul Reaper" },
    { hints: ["🕶️", "👨‍🏫", "🔮"], answer: "Jujutsu Kaisen", extraHint: "Yuji Itadori swallows a cursed finger to gain power" },
    { hints: ["🎮", "⚔️", "🏰"], answer: "Sword Art Online", extraHint: "Players get trapped inside a Virtual Reality MMORPG" },
    { hints: ["👧", "🐷", "🐉"], answer: "Spirited Away", extraHint: "Chihiro enters a world ruled by spirits and gods" },
    { hints: ["👨‍👩‍👧", "🕶️", "🕵️‍♂️"], answer: "Spy x Family", extraHint: "A spy, an assassin, and a telepath form a fake family" },
    { hints: ["🐺", "🏹", "🌲"], answer: "Princess Mononoke", extraHint: "Ashitaka gets caught in a war between humans and forest gods" },
    { hints: ["🥊", "👑", "🔥"], answer: "Hajime no Ippo", extraHint: "A bullied high school boy becomes a professional boxer" },
    { hints: ["👩‍🎤", "🎹", "🌸"], answer: "Your Lie in April", extraHint: "A pianist loses his ability to hear the piano until he meets a violinist" },
    { hints: ["🚀", "🎷", "🐶"], answer: "Cowboy Bebop", extraHint: "Bounty hunters traveling through space on the Bebop ship" },
    { hints: ["⏳", "📱", "🧪"], answer: "Steins;Gate", extraHint: "Rintaro Okabe accidentally discovers how to send messages to the past" },
    { hints: ["🤖", "👁️", "🍇"], answer: "Code Geass", extraHint: "Lelouch receives the power of Geass to rebel against Britannia" },
    { hints: ["⚔️", "🪵", "📜"], answer: "Vinland Saga", extraHint: "Thorfinn seeks revenge against the warrior who killed his father" },
    { hints: ["👁️", "🧠", "🦠"], answer: "Parasyte", extraHint: "Shinichi's right hand gets infected by an alien parasite" },
    { hints: ["🧛‍♂️", "🏹", "✨"], answer: "JoJo's Bizarre Adventure", extraHint: "The Joestar bloodline fights supernatural villains across generations" },
    { hints: ["🗡️", "🌸", "❌"], answer: "Rurouni Kenshin", extraHint: "A former legendary assassin wanders feudal Japan with a reverse-blade sword" },
    { hints: ["🏫", "🐙", "🔪"], answer: "Assassination Classroom", extraHint: "Students try to assassinate their octopus-like alien teacher Korosensei" },
    { hints: ["🌌", "🤖", "🌀"], answer: "Gurren Lagann", extraHint: "Kamina and Simon drill to the heavens in giant mechs" },
    { hints: ["🎲", "👑", "♠️"], answer: "No Game No Life", extraHint: "Sora and Shiro get summoned to a world where everything is decided by games" },
    { hints: ["☄️", "🎀", "📱"], answer: "Your Name", extraHint: "Two teenagers swap bodies mysteriously across different timelines" },
    { hints: ["🪶", "🏰", "🧹"], answer: "Howl's Moving Castle", extraHint: "Sophie gets cursed by a witch and finds refuge in Howl's magical castle" },
    { hints: ["🏎️", "⛰️", "🏁"], answer: "Initial D", extraHint: "Takumi Fujiwara delivers tofu in an AE86 and becomes a drift legend" },
    { hints: ["🎴", "🌸", "👧"], answer: "Cardcaptor Sakura", extraHint: "Sakura must collect magical Clow Cards released in her town" },
    { hints: ["👑", "🐜", "⚡"], answer: "Hunter x Hunter", extraHint: "Gon Freecss trains to become a Hunter and find his father" },
    { hints: ["📜", "⛩️", "🐺"], answer: "Inuyasha", extraHint: "Kagome travels to ancient Japan and joins a half-demon to find jewel shards" },
    { hints: ["🐱", "🤖", "🚪"], answer: "Doraemon", extraHint: "A robotic cat from the future helps a young boy named Nobita" },
    { hints: ["🔮", "👸", "🌙"], answer: "Sailor Moon", extraHint: "Usagi Tsukino transforms into a magical warrior protecting the universe" },
    { hints: ["🎸", "☕", "🏫"], answer: "K-On!", extraHint: "Four high school girls join the light music club to save it from closing" },
    { hints: ["🐺", "🍎", "🌾"], answer: "Spice and Wolf", extraHint: "A traveling merchant travels with Holo, a wise wolf deity" },
    { hints: ["🤖", "👼", "🧬"], answer: "Neon Genesis Evangelion", extraHint: "Teens pilot giant Evangelion mechs to fight mysterious Angels" },
    { hints: ["🍜", "🏫", "👨‍🍳"], answer: "Food Wars", extraHint: "Yukihira Soma competes in intense cooking battles at an elite culinary academy" },
    { hints: ["🏰", "🕊️", "🌳"], answer: "Castle in the Sky", extraHint: "Two kids search for the legendary floating island of Laputa" },
    { hints: ["🎮", "👾", "🏢"], answer: "Overlord", extraHint: "A gamer gets trapped as his powerful undead avatar in a new world" },
    { hints: ["👧", "🧒", "🌻"], answer: "Anohana", extraHint: "A group of childhood friends reconnect to fulfill the ghost of their late friend's wish" },
    { hints: ["🩸", "🗡️", "🥷"], answer: "Dororo", extraHint: "Hyakkimaru kills demons to reclaim his missing body parts stolen by 12 demons" },
    { hints: ["👑", "🛡️", "🦝"], answer: "The Rising of the Shield Hero", extraHint: "Naofumi is summoned as the Shield Hero and falsely accused in a fantasy world" },
    { hints: ["🪓", "🏹", "❄️"], answer: "Golden Kamuy", extraHint: "A veteran searches for hidden Ainu gold in Hokkaido with an Ainu girl" },
    { hints: ["🎪", "🤹", "🃏"], answer: "Black Butler", extraHint: "Ciel Phantomhive makes a pact with a demon butler named Sebastian" },
    { hints: ["💀", "🕶️", "👑"], answer: "Soul Eater", extraHint: "Students at the Meister Academy collect evil souls using weapon partners" },
    { hints: ["🔥", "👨‍🚒", "👿"], answer: "Fire Force", extraHint: "Special Fire Force Company 8 fights human combustion infernals" },
    { hints: ["🧠", "🌱", "🤖"], answer: "Dr. Stone", extraHint: "Senku uses science to rebuild human civilization after everyone turns to stone" },
    { hints: ["🔮", "🏰", "⚔️"], answer: "Fairy Tail", extraHint: "Natsu and Lucy embark on magical quests with their guild" },
    { hints: ["🎮", "👾", "🧙‍♂️"], answer: "Log Horizon", extraHint: "Thirty thousand Japanese gamers get transported into the MMORPG Elder Tale" },
    { hints: ["👧", "🎧", "🔊"], answer: "Serial Experiments Lain", extraHint: "Lain explores the Wired, a global communication network blurrying reality" },
    { hints: ["🐉", "👧", "🧹"], answer: "Miss Kobayashi's Dragon Maid", extraHint: "A dragon named Tohru comes to live with an office worker as her maid" },
    { hints: ["🏫", "🧧", "🃏"], answer: "Kakegurui", extraHint: "Hyakkaou Private Academy where student hierarchy is decided by high-stakes gambling" },
    { hints: ["🎭", "🎭", "🎤"], answer: "Oshi no Ko", extraHint: "Twin siblings navigate the dark side of the Japanese entertainment industry" },
    { hints: ["🗡️", "🐉", "🛡️"], answer: "Seven Deadly Sins", extraHint: "Meliodas and his disbanded order of knights fight to free the kingdom" },
    { hints: ["🪓", "🐺", "🛡️"], answer: "Goblin Slayer", extraHint: "A quiet warrior dedicates his life to eradicating all goblins" },
    { hints: ["🎸", "👧", "🎤"], answer: "Bocchi the Rock!", extraHint: "An extremely socially anxious girl joins a rock band" },
    { hints: ["🧟", "🎤", "🎀"], answer: "Zombie Land Saga", extraHint: "Girls brought back as zombies form an idol group to save Saga prefecture" },
    { hints: ["⚔️", "🛡️", "🌸"], answer: "Fate/Zero", extraHint: "Seven mages summon heroic spirits to fight in the Holy Grail War" },
    { hints: ["🏀", "💥", "👟"], answer: "Slam Dunk", extraHint: "Hanamichi Sakuragi joins the Shohoku basketball team to impress a girl" },
    { hints: ["👨‍👧", "🏕️", "🔥"], answer: "Laid-Back Camp", extraHint: "High school girls enjoy outdoor camping around Japan" },
    { hints: ["🎮", "❤️", "🤓"], answer: "Wotakoi: Love Is Hard for Otaku", extraHint: "Four office workers hide their otaku hobbies while dating each other" },
    { hints: ["🌸", "🚂", "✉️"], answer: "5 Centimeters per Second", extraHint: "A story about young love drifting apart over distance and time" },
    { hints: ["👧", "⏳", "🚲"], answer: "The Girl Who Leapt Through Time", extraHint: "A high school girl gains the power to travel backwards in time" }
];

const databaseSeries = [
    { hints: ["👨‍🔬", "🧪", "🟢"], answer: "Breaking Bad", extraHint: "Walter White & Jesse Pinkman" },
    { hints: ["👑", "🐉", "⚔️"], answer: "Game of Thrones", extraHint: "Winter is coming" },
    { hints: ["🎭", "🏦", "🇪🇸"], answer: "Money Heist", extraHint: "Professor and Salvador Dali Mask" },
    { hints: ["🚲", "👾", "🔴"], answer: "Stranger Things", extraHint: "Eleven and the Upside Down" },
    { hints: ["🇬🇧", "🚬", "🎩"], answer: "Peaky Blinders", extraHint: "Thomas Shelby in Birmingham" },
    { hints: ["👨‍🔬", "🧪", "🟢"], answer: "Breaking Bad", extraHint: "Chemistry teacher turns into a high-stakes methamphetamine producer" },
    { hints: ["👑", "🐉", "⚔️"], answer: "Game of Thrones", extraHint: "Nine noble families fight for control over the mythical land of Westeros" },
    { hints: ["🎭", "🏦", "🇪🇸"], answer: "Money Heist", extraHint: "The Professor plans two ambitious heists on the Royal Mint of Spain" },
    { hints: ["🚲", "👾", "🔴"], answer: "Stranger Things", extraHint: "Kids battle supernatural forces and secret government experiments in the 80s" },
    { hints: ["🇬🇧", "🚬", "🎩"], answer: "Peaky Blinders", extraHint: "Tommy Shelby leads a dangerous crime gang in Birmingham after WWI" },
    { hints: ["🛋️", "☕", "🏢"], answer: "Friends", extraHint: "Six friends navigate life and love in Manhattan" },
    { hints: ["🏢", "📄", "🎥"], answer: "The Office", extraHint: "A mockumentary on a group of typical office workers at Dunder Mifflin" },
    { hints: ["🧟", "🏹", "🏙️"], answer: "The Walking Dead", extraHint: "Survivors try to stay alive in a world overrun by zombies" },
    { hints: ["⚖️", "💼", "🏙️"], answer: "Suits", extraHint: "A brilliant college dropout works as a lawyer without a law degree" },
    { hints: ["🪓", "🛡️", "⛵"], answer: "Vikings", extraHint: "Ragnar Lothbrok rises to become a legendary Norse warrior and king" },
    { hints: ["🧠", "🩸", "🔪"], answer: "Dexter", extraHint: "A forensics expert who works as a vigilante serial killer by night" },
    { hints: ["👑", "🇬🇧", "🏰"], answer: "The Crown", extraHint: "The political rivalries and romance of Queen Elizabeth II's reign" },
    { hints: ["🖤", "📱", "🤖"], answer: "Black Mirror", extraHint: "An anthology exploring the dark side of high-tech innovation" },
    { hints: ["🐺", "🗡️", "🪙"], answer: "The Witcher", extraHint: "Geralt of Rivia is a mutated monster hunter for hire" },
    { hints: ["🕴️", "💼", "💰"], answer: "Succession", extraHint: "A global media patriarch's children fight for control of the company" },
    { hints: ["🕵️‍♂️", "🔍", "🇬🇧"], answer: "Sherlock", extraHint: "Modern update to Sir Arthur Conan Doyle's detective stories" },
    { hints: ["♟️", "🏆", "💊"], answer: "The Queen's Gambit", extraHint: "Orphaned chess prodigy struggles with addiction on her rise to the top" },
    { hints: ["👨‍⚕️", "💊", "🦵"], answer: "House", extraHint: "An antisocial medical maverick solves complex diagnostic mysteries" },
    { hints: ["🦹‍♂️", "🦸‍♂️", "🩸"], answer: "The Boys", extraHint: "Vigilantes set out to take down corrupt superheroes who abuse their powers" },
    { hints: ["🛰️", "👨‍🚀", "🚀"], answer: "The Mandalorian", extraHint: "A lone bounty hunter travels the outer reaches of the galaxy with Grogu" },
    { hints: ["🎪", "🦑", "💰"], answer: "Squid Game", extraHint: "Hundreds of cash-strapped players accept a strange invitation to children's games" },
    { hints: ["🔪", "🥩", "🍷"], answer: "Hannibal", extraHint: "Explores the early relationship between FBI profiler Will Graham and Dr. Hannibal Lecter" },
    { hints: ["🚪", "📄", "🧠"], answer: "Severance", extraHint: "Employees undergo a surgical procedure to separate work and personal memories" },
    { hints: ["🏨", "🌴", "🍸"], answer: "The White Lotus", extraHint: "Dark comedy following the exploits of guests and employees at a luxury resort" },
    { hints: ["🎩", "🔫", "🕶️"], answer: "Boardwalk Empire", extraHint: "A politician controls Atlantic City during the Prohibition era" },
    { hints: ["🕴️", "🕶️", "💼"], answer: "Mad Men", extraHint: "A drama about one of New York's most prestigious ad agencies in the 1960s" },
    { hints: ["👑", "🐉", "🔥"], answer: "House of the Dragon", extraHint: "The story of the Targaryen civil war 200 years before Game of Thrones" },
    { hints: ["🧟", "🍄", "🦒"], answer: "The Last of Us", extraHint: "Joel and Ellie travel across a post-apocalyptic United States" },
    { hints: ["🕶️", "📱", "💼"], answer: "Mr. Robot", extraHint: "Elliot, a brilliant cyber-security engineer and hacker, joins fsociety" },
    { hints: ["👨‍⚖️", "📱", "⚖️"], answer: "Better Call Saul", extraHint: "The trials and tribulations of criminal lawyer Jimmy McGill before Breaking Bad" },
    { hints: ["🏃‍♂️", "⚡", "🔴"], answer: "The Flash", extraHint: "Barry Allen gains super-speed after being struck by lightning" },
    { hints: ["🏹", "🎯", "🟢"], answer: "Arrow", extraHint: "Billionaire Oliver Queen returns to fight crime as a masked vigilante" },
    { hints: ["🕵️‍♀️", "🎻", "🔪"], answer: "Killing Eve", extraHint: "A security operative tracks down a talented and psychopathic assassin" },
    { hints: ["🧛‍♂️", "🩸", "🏰"], answer: "The Vampire Diaries", extraHint: "Two vampire brothers compete for the affection of a high school girl" },
    { hints: ["🔪", "👻", "🏚️"], answer: "American Horror Story", extraHint: "Anthology series centering on different characters and locations with horror themes" },
    { hints: ["👨‍👩‍👧‍👦", "💵", "🏕️"], answer: "Ozark", extraHint: "A financial advisor drags his family to the Ozarks to launder money for a Mexican cartel" },
    { hints: ["⚽", "🇺🇸", "🇬🇧"], answer: "Ted Lasso", extraHint: "American college football coach is hired to manage a British soccer team" },
    { hints: ["🕵️‍♂️", "👻", "🚗"], answer: "Supernatural", extraHint: "Two brothers hunt demons, ghosts, monsters, and other supernatural beings" },
    { hints: ["🏰", "🎩", "☕"], answer: "Downton Abbey", extraHint: "Follows the lives of the aristocratic Crawley family and their domestic servants" },
    { hints: ["🕵️‍♂️", "🌴", "🍹"], answer: "Dexter: New Blood", extraHint: "10 years after Dexter went missing, he is living under an assumed name" },
    { hints: ["🏨", "👰", "👻"], answer: "The Haunting of Hill House", extraHint: "Flashing between past and present, a fractured family confronts haunting memories" },
    { hints: ["🧪", "🩸", "🧬"], answer: "Fringe", extraHint: "An FBI agent, a scientist, and his son investigate parallel universes and sci-fi mysteries" },
    { hints: ["🗽", "🏙️", "🍸"], answer: "Sex and the City", extraHint: "Four female friends in New York City navigate love, romance, and careers" },
    { hints: ["🤖", "🤠", "🏜️"], answer: "Westworld", extraHint: "A futuristic amusement park populated by androids where humans indulge their fantasies" },
    { hints: ["🚢", "🌊", "✉️"], answer: "1899", extraHint: "Multinational immigrants traveling on a steamship encounter a mysterious riddle" },
    { hints: ["👮‍♂️", "🩸", "🕵️‍♂️"], answer: "True Detective", extraHint: "Seasonal anthology series in which police investigations unearth dark secrets" },
    { hints: ["🕴️", "🧱", "🕶️"], answer: "Daredevil", extraHint: "A blind lawyer with heightened senses fights crime as a vigilante in Hell's Kitchen" },
    { hints: ["🏛️", "🇺🇸", "💼"], answer: "House of Cards", extraHint: "A ruthless congressman works his way up the political ladder in Washington" },
    { hints: ["🕵️‍♂️", "🧠", "🔮"], answer: "The Mentalist", extraHint: "A former fake psychic uses his acute observational skills to solve crimes" },
    { hints: ["🛡️", "⚔️", "👑"], answer: "The Last Kingdom", extraHint: "Uhtred, raised by Vikings, fights to reclaim his ancestral birthright in Saxon England" }
];

const databaseMarvel = [
    { hints: ["🛡️", "⭐", "🔵"], answer: "Captain America", extraHint: "The First Avenger Steve Rogers" },
    { hints: ["🦾", "🔴", "⚡"], answer: "Iron Man", extraHint: "Tony Stark genius billionaire" },
    { hints: ["⚡", "🔨", "🤴"], answer: "Thor", extraHint: "God of Thunder from Asgard" },
    { hints: ["🕷️", "🔴", "🕸️"], answer: "Spider Man", extraHint: "Peter Parker web slinger" },
    { hints: ["🟢", "😡", "💥"], answer: "Hulk", extraHint: "Bruce Banner giant green hero" },
    { hints: ["🧤", "💎", "🌌"], answer: "Avengers: Infinity War", extraHint: "Thanos seeks six Infinity Stones to erase half the universe" },
    { hints: ["⏱️", "⏳", "🛡️"], answer: "Avengers: Endgame", extraHint: "The remaining Avengers travel back in time to undo Thanos's snap" },
    { hints: ["🐆", "👑", "🟣"], answer: "Black Panther", extraHint: "King T'Challa defends the technologically advanced African nation of Wakanda" },
    { hints: ["👁️", "🔮", "🎩"], answer: "Doctor Strange", extraHint: "A former neurosurgeon learns the mystic arts to protect reality" },
    { hints: ["🦝", "🌳", "🎧"], answer: "Guardians of the Galaxy", extraHint: "Star-Lord, Rocket, and Groot team up to save the cosmos" },
    { hints: ["🕷️", "🖤", "🗡️"], answer: "Black Widow", extraHint: "Natasha Romanoff confronts the dark parts of her ledger" },
    { hints: ["🐜", "🔍", " suit"], answer: "Ant-Man", extraHint: "Scott Lang can shrink in size while increasing in strength" },
    { hints: ["🚀", "⭐", "🐱"], answer: "Captain Marvel", extraHint: "Carol Danvers becomes one of the universe's most powerful heroes" },
    { hints: ["⚔️", "💍", "🐉"], answer: "Shang-Chi", extraHint: "Master of Kung Fu confronts his father and the Ten Rings organization" },
    { hints: ["🏹", "🎯", "🎯"], answer: "Hawkeye", extraHint: "Clint Barton teams up with young archer Kate Bishop" },
    { hints: ["🔴", "🧙‍♀️", "📺"], answer: "WandaVision", extraHint: "Wanda Maximoff creates an idealized sitcom world in Westview" },
    { hints: ["⏱️", "👑", "🐊"], answer: "Loki", extraHint: "The God of Mischief works with the Time Variance Authority (TVA)" },
    { hints: ["🌙", "🧻", "🏛️"], answer: "Moon Knight", extraHint: "Marc Spector, a mercenary with dissociative identity disorder, serves Khonshu" },
    { hints: ["🟩", "⚖️", "👩‍⚖️"], answer: "She-Hulk", extraHint: "Jennifer Walters balances being a lawyer and a 6-foot-7 green Hulk" },
    { hints: ["🐍", "🕶️", "👽"], answer: "Secret Invasion", extraHint: "Nick Fury discovers a covert invasion of Earth by shapeshifting Skrulls" },
    { hints: ["🕷️", "🕷️", "🕷️"], answer: "Spider-Man: No Way Home", extraHint: "Multiverse villains and three Spider-Men unite in New York" },
    { hints: ["⚔️", "🩸", "🖤"], answer: "Blade", extraHint: "Half-human, half-vampire who hunts evil vampires" },
    { hints: ["🧑‍🦯", "🩸", "😈"], answer: "Daredevil", extraHint: "Matt Murdock, blind lawyer by day and vigilante of Hell's Kitchen by night" },
    { hints: ["💀", "🔫", "🖤"], answer: "The Punisher", extraHint: "Frank Castle uses lethal means to wage a one-man war on crime" },
    { hints: ["🦸‍♀️", "🥃", "🕵️‍♀️"], answer: "Jessica Jones", extraHint: "Hard-drinking private investigator with superhuman strength" },
    { hints: ["🟡", "🥊", "⛓️"], answer: "Luke Cage", extraHint: "Unbreakable skin and super strength protecting Harlem" },
    { hints: ["🥋", "🐉", "👊"], answer: "Iron Fist", extraHint: "Danny Rand uses mystical glowing fist martial arts" },
    { hints: ["🧬", "🙅‍♂️", "🦹‍♂️"], answer: "X-Men", extraHint: "Mutants led by Professor X protect a world that fears them" },
    { hints: ["⚔️", "🦾", "🐺"], answer: "The Wolverine", extraHint: "Logan with adamantium claws and self-healing power travels to Japan" },
    { hints: ["🔥", "🪨", "👩‍🎤"], answer: "Fantastic Four", extraHint: "Four astronauts gain superpowers from cosmic radiation" },
    { hints: ["🔥", "💀", "🏍️"], answer: "Ghost Rider", extraHint: "Johnny Blaze sells his soul to become a flaming stunt cyclist" },
    { hints: ["🧬", "🔄", "🌌"], answer: "Eternals", extraHint: "Ancient immortal beings living secretly on Earth for thousands of years" },
    { hints: ["🐝", "🐜", "🏎️"], answer: "Ant-Man and the Wasp", extraHint: "Scott and Hope enter the Quantum Realm" },
    { hints: ["🔴", "🖤", "🗡️"], answer: "Deadpool", extraHint: "Wisecracking mercenary Wade Wilson with accelerated healing" },
    { hints: ["🤖", "💥", "🏙️"], answer: "Avengers: Age of Ultron", extraHint: "Tony Stark's artificial intelligence Ultron tries to wipe out humanity" },
    { hints: ["🏛️", "⚖️", "💥"], answer: "Captain America: Civil War", extraHint: "Iron Man and Captain America split over government control of heroes" },
    { hints: ["🌌", "🔨", "🔥"], answer: "Thor: Ragnarok", extraHint: "Thor loses his hammer and fights the Goddess of Death, Hela" },
    { hints: ["⚡", "👩‍🦰", "🔨"], answer: "Thor: Love and Thunder", extraHint: "Jane Foster wields Mjolnir alongside Thor against Gorr the God Butcher" },
    { hints: ["🔮", "👹", "🌌"], answer: "Doctor Strange in the Multiverse of Madness", extraHint: "Strange battles Wanda across parallel dimensions" },
    { hints: ["🚀", "🐱", "🌌"], answer: "The Marvels", extraHint: "Captain Marvel, Ms. Marvel, and Monica Rambeau swap places when using powers" },
    { hints: ["📱", "👧", "🕌"], answer: "Ms. Marvel", extraHint: "Kamala Khan, an Avengers fangirl, gains hard-light superpowers" },
    { hints: ["🐺", "🌕", "🖤"], answer: "Werewolf by Night", extraHint: "Monster hunters gather at Bloodstone Manor for a dangerous hunt" },
    { hints: ["🚀", "🌲", "🎄"], answer: "The Guardians of the Galaxy Holiday Special", extraHint: "Drax and Mantis head to Earth to find the ultimate Christmas gift for Quill" },
    { hints: ["🦾", "🦅", "🛡️"], answer: "The Falcon and the Winter Soldier", extraHint: "Sam Wilson and Bucky Barnes team up after Captain America's retirement" },
    { hints: ["👽", "🧪", "🖤"], answer: "Venom", extraHint: "Eddie Brock merges with an alien symbiote granting him powers" },
    { hints: ["🧛‍♂️", "🦇", "🩸"], answer: "Morbius", extraHint: "A biochemist attempts to cure himself of a rare blood disease and turns vampire" },
    { hints: ["🕸️", "👵", "🔮"], answer: "Madame Web", extraHint: "A paramedic in Manhattan develops clairvoyant powers to see the future" },
    { hints: ["🕷️", "🌌", "🎨"], answer: "Spider-Man: Into the Spider-Verse", extraHint: "Miles Morales becomes the new Spider-Man across different universes" },
    { hints: ["🕷️", "🔴", "🎸"], answer: "Spider-Man: Across the Spider-Verse", extraHint: "Miles travels through the Multiverse with Gwen Stacy and Spider-Society" },
    { hints: ["🩸", "🗡️", "⚔️"], answer: "Punisher: War Zone", extraHint: "Frank Castle targets the mob boss Jigsaw in a brutal crusade" },
    { hints: ["🔴", "⚔️", "💛"], answer: "Deadpool & Wolverine", extraHint: "Wade Wilson teams up with a reluctant Wolverine to save his universe" },
    { hints: ["🕶️", "💼", "🏢"], answer: "Agents of S.H.I.E.L.D.", extraHint: "Phil Coulson leads a small team of S.H.I.E.L.D. agents handling bizarre cases" },
    { hints: ["🧪", "🩸", "🤖"], answer: "Inhumans", extraHint: "The royal family of genetically enhanced humans flees to Hawaii after a military coup" },
    { hints: ["🧠", "🌀", "🏥"], answer: "Legion", extraHint: "David Haller, a troubled young man diagnosed with schizophrenia, discovers he is a powerful mutant" },
    { hints: ["👧", "🎒", "🦕"], answer: "Runaways", extraHint: "Six teenagers discover their parents are secret supervillains and run away together" },
    { hints: ["🗡️", "✨", "🖤"], answer: "Cloak & Dagger", extraHint: "Two teenagers with interconnected powers fall in love while fighting crime" },
    { hints: ["🧬", "🏫", "🌲"], answer: "The Gifted", extraHint: "A suburban family goes on the run after discovering their children possess mutant powers" },
    { hints: ["🕷️", "🖤", "🧬"], answer: "Venom: Let There Be Carnage", extraHint: "Eddie Brock and Venom battle the serial killer Cletus Kasady and his symbiote" },
    { hints: ["🕷️", "🌌", "🖤"], answer: "Venom: The Last Dance", extraHint: "Eddie and Venom are on the run, hunted by both of their worlds" },
    { hints: ["🦹‍♂️", "⚡", "🔨"], answer: "What If...?", extraHint: "An animated anthology exploring alternate timelines in the Marvel Multiverse" },
    { hints: ["🦾", "🎒", "💻"], answer: "Ironheart", extraHint: "Riri Williams, a genius MIT student, builds her own armor suit to succeed Iron Man" },
    { hints: ["🧙‍♀️", "🔮", "🧹"], answer: "Agatha All Along", extraHint: "Agatha Harkness regains her freedom and embarks on the dangerous Witches' Road" },
    { hints: ["🏹", "🎯", "👟"], answer: "Echo", extraHint: "Maya Lopez returns to her hometown while being pursued by Kingpin's empire" },
    { hints: ["🧪", "🩸", "🔬"], answer: "The Incredible Hulk", extraHint: "Bruce Banner searches for a cure for his gamma radiation curse while on the run" },
    { hints: ["⚡", "🔨", "❄️"], answer: "Thor: The Dark World", extraHint: "Thor joins forces with Loki to save the Nine Realms from the Dark Elves" },
    { hints: ["🛡️", "🦅", "🚢"], answer: "Captain America: The Winter Soldier", extraHint: "Steve Rogers uncovers a conspiracy within S.H.I.E.L.D. alongside Natasha Romanoff" },
    { hints: ["🐜", "⌛", "🌌"], answer: "Ant-Man and the Wasp: Quantumania", extraHint: "The Lang family gets sucked into the Quantum Realm and faces Kang the Conqueror" },
    { hints: ["🦝", "🚀", "🔬"], answer: "Guardians of the Galaxy Vol. 3", extraHint: "The Guardians embark on a mission to save Rocket's life from the High Evolutionary" },
    { hints: ["🦹‍♂️", "🗡️", "🎯"], answer: "Kraven the Hunter", extraHint: "Sergei Kravinoff's complex relationship with his father leads him on a path of vengeance" },
    { hints: ["🕴️", "🩸", "🕶️"], answer: "Daredevil: Born Again", extraHint: "Matt Murdock and Wilson Fisk face off once more in New York City" }
];

const databaseDisney = [
    { hints: ["🦁", "👑", "🌅"], answer: "The Lion King", extraHint: "Simba and Hakuna Matata" },
    { hints: ["❄️", "👩‍🦰", "☃️"], answer: "Frozen", extraHint: "Elsa and Anna Let it go" },
    { hints: ["🧜‍♀️", "🌊", "🦀"], answer: "The Little Mermaid", extraHint: "Ariel under the sea" },
    { hints: ["🧞‍♂️", "🐒", "🕌"], answer: "Aladdin", extraHint: "Magic Lamp and Princess Jasmine" },
    { hints: ["👠", "🎃", "🏰"], answer: "Cinderella", extraHint: "A young woman escapes her cruel stepmother with the help of a fairy godmother" },
    { hints: ["🌹", "👹", "🏰"], answer: "Beauty and the Beast", extraHint: "Belle learns to love a cursed prince in his enchanted castle" },
    { hints: ["🍎", "👸", "⛏️"], answer: "Snow White", extraHint: "A princess hides in the forest with seven dwarfs from the Evil Queen" },
    { hints: ["🌊", "🛶", "🌀"], answer: "Moana", extraHint: "A Polynesian girl sails across the ocean with demigod Maui to restore the heart of Te Fiti" },
    { hints: ["🎪", "🐘", "👂"], answer: "Dumbo", extraHint: "A young circus elephant with oversized ears learns to fly" },
    { hints: ["🦌", "🌲", "🐇"], answer: "Bambi", extraHint: "A young deer grows up in the forest with his animal friends" },
    { hints: ["🧹", "🎩", "🪄"], answer: "Fantasia", extraHint: "Mickey Mouse acts as the Sorcerer's Apprentice in a musical masterpiece" },
    { hints: ["🧚‍♀️", "🏴‍☠️", "🐊"], answer: "Peter Pan", extraHint: "The boy who wouldn't grow up takes Wendy to Neverland" },
    { hints: ["Sleeping", "💤", "👑"], answer: "Sleeping Beauty", extraHint: "Princess Aurora is cursed to sleep until awakened by true love's kiss" },
    { hints: ["🐕", "🍝", "🐩"], answer: "Lady and the Tramp", extraHint: "A upper-class Cocker Spaniel falls for a street-smart stray dog" },
    { hints: ["🐕", "🐾", "🧥"], answer: "101 Dalmatians", extraHint: "Cruella de Vil kidnaps Dalmatian puppies to make a fur coat" },
    { hints: ["🗡️", "🐉", "🌸"], answer: "Mulan", extraHint: "A brave young woman disguises herself as a man to take her father's place in the army" },
    { hints: ["🦍", "🌿", "🥁"], answer: "Tarzan", extraHint: "A man raised by gorillas in the jungle meets Jane and civilization" },
    { hints: ["🔔", "⛪", "💃"], answer: "The Hunchback of Notre Dame", extraHint: "Quasimodo the bell ringer defends Esmeralda in Paris" },
    { hints: ["🏛️", "⚡", "🏺"], answer: "Hercules", extraHint: "The son of Zeus must prove himself a true hero to regain his immortality" },
    { hints: ["🏹", "🦊", "👑"], answer: "Robin Hood", extraHint: "A heroic outlaw fox steals from the rich to give to the poor" },
    { hints: ["🎈", "🏠", "🎈"], answer: "Up", extraHint: "An old man flies his house to Paradise Falls using thousands of balloons" },
    { hints: ["🤖", "🌱", "🚀"], answer: "WALL-E", extraHint: "A lonely waste-collecting robot on Earth falls in love with EVE" },
    { hints: ["🐠", "🌊", "🤿"], answer: "Finding Nemo", extraHint: "A clownfish travels across the ocean to find his captured son" },
    { hints: ["🚗", "⚡", "🏆"], answer: "Cars", extraHint: "Rookie race car Lightning McQueen gets stranded in Radiator Springs" },
    { hints: ["👨‍🍳", "🐭", "🍲"], answer: "Ratatouille", extraHint: "Remy the rat dreams of becoming a renowned chef in Paris" },
    { hints: ["🚪", "👧", "👾"], answer: "Monsters, Inc.", extraHint: "Sulley and Mike generate power for Monstropolis by scaring children" },
    { hints: ["🦸‍♂️", "🦹‍♂️", "💥"], answer: "The Incredibles", extraHint: "A family of undercover superheroes comes out of retirement to save the world" },
    { hints: ["🤠", "🚀", "🧸"], answer: "Toy Story", extraHint: "Woody and Buzz Lightyear compete for the affection of their owner Andy" },
    { hints: ["🎸", "💀", "🏵️"], answer: "Coco", extraHint: "Miguel travels to the Land of the Dead to discover his family's musical history" },
    { hints: ["🏡", "🕯️", "🦋"], answer: "Encanto", extraHint: "Mirabel Madrigal tries to save her family's magical home in Colombia" },
    { hints: ["👾", "👩", "🌺"], answer: "Lilo & Stitch", extraHint: "A lonely Hawaiian girl adopts an extraterrestrial alien creature" },
    { hints: ["🎮", "🍬", "👾"], answer: "Wreck-It Ralph", extraHint: "An arcade game villain wants to be a hero and travels through game worlds" },
    { hints: ["🐇", "🦊", "🏙️"], answer: "Zootopia", extraHint: "A rookie bunny cop and a cynical con-artist fox solve a mysterious case" },
    { hints: ["💇‍♀️", "🦎", "🏰"], answer: "Tangled", extraHint: "Rapunzel leaves her secluded tower with the help of Flynn Rider" },
    { hints: ["🐼", "🔴", "👩"], answer: "Turning Red", extraHint: "A 13-year-old girl turns into a giant red panda whenever she gets excited" },
    { hints: ["🐉", "💎", "🏹"], answer: "Raya and the Last Dragon", extraHint: "Raya searches for the last dragon to save Kumandra from sinister monsters" },
    { hints: ["🌊", "🛵", "🍝"], answer: "Luca", extraHint: "A young sea monster experiences an unforgettable summer on the Italian Riviera" },
    { hints: ["🎹", "🐱", "✨"], answer: "Soul", extraHint: "A middle-school music teacher gets a second chance at life in the soul realm" },
    { hints: ["🦕", "🥚", "☄️"], answer: "The Good Dinosaur", extraHint: "An Arlos dinosaur makes an unlikely human friend while traveling a harsh landscape" },
    { hints: ["🧠", "😭", "😡"], answer: "Inside Out", extraHint: "Five personified emotions guide a young girl through moving to a new city" },
    { hints: ["🤖", "🩺", "🎒"], answer: "Big Hero 6", extraHint: "Hiro and inflatable robot Baymax form a superhero team in San Fransokyo" },
    { hints: ["🐞", "🌱", "🐜"], answer: "A Bug's Life", extraHint: "An inventor ant hires circus bugs to defend his colony from grasshoppers" },
    { hints: ["👑", "🐸", "🎺"], answer: "The Princess and the Frog", extraHint: "Tiana kisses a prince turned frog and gets transformed into one herself" },
    { hints: ["🐔", "🛸", "👓"], answer: "Chicken Little", extraHint: "A young rooster causes panic by warning everyone that the sky is falling" },
    { hints: ["🐶", "⚡", "📺"], answer: "Bolt", extraHint: "A TV star dog who thinks he has real superpowers travels cross-country" },
    { hints: ["🪶", "🏛️", "🏹"], answer: "Brave", extraHint: "Princess Merida defies an age-old custom and accidentally curses her mother" },
    { hints: ["🚀", "🪐", "🏴‍☠️"], answer: "Treasure Planet", extraHint: "Jim Hawkins embarks on a futuristic space voyage to find Treasure Island" },
    { hints: ["🗿", "❄️", "🧭"], answer: "Atlantis: The Lost Empire", extraHint: "Milo Thatch leads an expedition to find the submerged lost continent" },
    { hints: ["🦙", "👑", "🧪"], answer: "The Emperor's New Groove", extraHint: "An arrogant emperor gets turned into a llama by his ex-advisor Yzma" },
    { hints: ["🐻", "🌲", "🌌"], answer: "Brother Bear", extraHint: "A young Inuit boy named Kenai is magically transformed into a bear" },
    { hints: ["🐱", "🎹", "🗼"], answer: "The Aristocats", extraHint: "A family of Parisian cats is kidnapped by a butler to steal an inheritance" },
    { hints: ["🦊", "🐶", "🌲"], answer: "The Fox and the Hound", extraHint: "A red fox and a hound dog struggle to remain friends despite their instincts" },
    { hints: ["🐁", "🔍", "🕵️‍♂️"], answer: "The Great Mouse Detective", extraHint: "Basil of Baker Street, a mouse detective, solves crimes in London" },
    { hints: ["🏙️", "🐕", "🐈"], answer: "Oliver & Company", extraHint: "An orphaned kitten joins a gang of street dogs in New York City" },
    { hints: ["👑", "🗡️", "🪨"], answer: "The Sword in the Stone", extraHint: "Young King Arthur pulls Excalibur from a stone with Merlin's guidance" },
    { hints: ["🛌", "🧙‍♀️", "🔮"], answer: "Bedknobs and Broomsticks", extraHint: "An apprentice witch uses magic to help three children during WWII" },
    { hints: ["🐉", "👦", "⛵"], answer: "Pete's Dragon", extraHint: "An orphaned boy lives in the woods with his invisible dragon friend Elliott" },
    { hints: ["🌂", "👜", "🇬🇧"], answer: "Mary Poppins", extraHint: "A magical nanny visits a dysfunctional family in London to bring joy" },
    { hints: ["🏰", "🧙‍♀️", "👑"], answer: "Maleficent", extraHint: "The untold story of Disney's most iconic villain from Sleeping Beauty" },
    { hints: ["🧙‍♂️", "🪄", "👟"], answer: "The Sorcerer's Apprentice", extraHint: "Dave is recruited by a master sorcerer to defend New York from evil forces" },
    { hints: ["🛷", "🐕", "❄️"], answer: "Togo", extraHint: "The true story of the sled dog Togo who led the 1925 serum run to Nome" },
    { hints: ["🏴‍☠️", "⚓", "⚔️"], answer: "Pirates of the Caribbean: The Curse of the Black Pearl", extraHint: "Jack Sparrow tries to reclaim his cursed ship from Captain Barbossa" },
    { hints: ["📜", "🗺️", "🏛️"], answer: "National Treasure", extraHint: "Benjamin Gates searches for a hidden fortune using clues on the Declaration of Independence" },
    { hints: ["🐕", "❄️", "🏕️"], answer: "Eight Below", extraHint: "Survival story of sled dogs left behind in Antarctica" },
    { hints: ["🌌", "🪐", "⚔️"], answer: "John Carter", extraHint: "A Civil War veteran is mysteriously transported to the planet Barsoom (Mars)" },
    { hints: ["🎪", "🐘", "🎪"], answer: "Dumbo (Live-Action)", extraHint: "Tim Burton's adaptation of the flying elephant who saves a struggling circus" },
    { hints: ["🏡", "👻", "🗝️"], answer: "The Haunted Mansion", extraHint: "A real estate agent and his family get trapped in a ghost-infested mansion" },
    { hints: ["🏎️", "🚗", "🔮"], answer: "Herbie: Fully Loaded", extraHint: "A girl enters NASCAR racing with Herbie, a sentient Volkswagen Beetle" },
    { hints: ["🏰", "👸", "👑"], answer: "The Princess Diaries", extraHint: "An American teenager discovers she is the heir to the throne of Genovia" },
    { hints: ["🧙‍♀️", "🎃", "📖"], answer: "Hocus Pocus", extraHint: "Three villainous witch sisters are accidentally resurrected on Halloween night" }
];

let currentLang = localStorage.getItem("arcadeLang") || "ar";
let currentCategory = "arabic";
let currentDifficulty = "easy";
let score = 0;

let currentUserKey = "";
let userName = "";
let userAge = "";
let coins = 100;
let currentLives = 3;
let level = 1;
let xp = 0;
let maxXP = 100;
let correctAnswers = 0;
let achievements = { first: false, ten: false, coins: false, level10: false };

let timeLeft = 60;
let timerInterval = null;
let currentPuzzle = null;
let playedPuzzles = [];
let isGameOver = false;

const guessInput = document.getElementById("guessInput");
const autocompleteList = document.getElementById("autocompleteList");
const submitBtn = document.getElementById("submitBtn");
const hintBtn = document.getElementById("hintBtn");
const skipBtn = document.getElementById("skipBtn");
const messageElement = document.getElementById("message");
const gameBox = document.getElementById("gameBox");
const homeScreen = document.getElementById("homeScreen");
const categoryScreen = document.getElementById("categoryScreen");
const difficultyScreen = document.getElementById("difficultyScreen");
const shopScreen = document.getElementById("shopScreen");
const achievementsScreen = document.getElementById("achievementsScreen");
const leaderboardScreen = document.getElementById("leaderboardScreen");
const userModal = document.getElementById("userModal");

document.addEventListener("DOMContentLoaded", () => {
    setupLanguageUI();
    setupEventListeners();
    userModal.style.display = "flex"; 

});

function loadUserData(nameKey) {
    currentUserKey = "user_data_" + nameKey.toLowerCase().trim();
    let savedData = JSON.parse(localStorage.getItem(currentUserKey));

    if (savedData) {
        userName = savedData.userName;
        userAge = savedData.userAge;
        coins = savedData.coins;
        currentLives = savedData.currentLives;
        level = savedData.level;
        xp = savedData.xp;
        correctAnswers = savedData.correctAnswers;
        achievements = savedData.achievements || achievements;
    } else {
        userName = nameKey;
        userAge = document.getElementById("inputUserAge").value.trim();
        coins = 100;
        currentLives = 3;
        level = 1;
        xp = 0;
        correctAnswers = 0;
        achievements = { first: false, ten: false, coins: false, level10: false };
        saveUserData();
    }

    checkAndRestoreLives();
    updateCoinsUI();
    updateLivesUI();
    updateXPUI();
    checkAchievementsUI();
}

function saveUserData() {
    if (!currentUserKey) return;
    let dataToSave = {
        userName: userName,
        userAge: userAge,
        coins: coins,
        currentLives: currentLives,
        level: level,
        xp: xp,
        correctAnswers: correctAnswers,
        achievements: achievements,
        lastLifeLostTime: localStorage.getItem(currentUserKey + "_lastLifeLostTime")
    };
    localStorage.setItem(currentUserKey, JSON.stringify(dataToSave));
}

function checkAndRestoreLives() {
    if (!currentUserKey) return;
    const MAX_LIVES = 3;
    const RESTORE_TIME = 60 * 60 * 1000;
    let lastLostTime = localStorage.getItem(currentUserKey + "_lastLifeLostTime");

    if (currentLives < MAX_LIVES && lastLostTime) {
        let now = Date.now();
        let timePassed = now - Number(lastLostTime);

        if (timePassed >= RESTORE_TIME) {
            let livesToRestore = Math.floor(timePassed / RESTORE_TIME);
            currentLives = Math.min(MAX_LIVES, currentLives + livesToRestore);

            if (currentLives === MAX_LIVES) {
                localStorage.removeItem(currentUserKey + "_lastLifeLostTime");
            } else {
                localStorage.setItem(currentUserKey + "_lastLifeLostTime", now - (timePassed % RESTORE_TIME));
            }
            saveUserData();
            updateLivesUI();
        }
    }
}

function setupEventListeners() {
    document.getElementById("saveUserBtn").onclick = () => {
        const inputName = document.getElementById("inputUserName").value.trim();
        const inputAge = document.getElementById("inputUserAge").value.trim();

        if (inputName && inputAge && !isNaN(inputAge)) {
            loadUserData(inputName);
            userModal.style.display = "none";
            document.getElementById("modalError").innerText = "";
        } else {
            const t = translations[currentLang];
            document.getElementById("modalError").innerText = t.fillAlert;
        }
    };

    document.getElementById("switchUserBtn").onclick = () => {
        clearInterval(timerInterval);
        gameBox.style.display = "none";
        categoryScreen.style.display = "none";
        difficultyScreen.style.display = "none";
        homeScreen.style.display = "flex";
        document.getElementById("inputUserName").value = "";
        document.getElementById("inputUserAge").value = "";
        userModal.style.display = "flex";
    };

    document.getElementById("playBtn").onclick = () => {
        if (!currentUserKey) {
            userModal.style.display = "flex";
            return;
        }
        if (currentLives <= 0) {
            stopGameDueToNoLives();
            return;
        }
        homeScreen.style.display = "none";
        categoryScreen.style.display = "flex";
    };

    document.getElementById("backHome").onclick = () => {
        categoryScreen.style.display = "none";
        homeScreen.style.display = "flex";
    };

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.onclick = (e) => {
            currentCategory = e.currentTarget.dataset.category;
            categoryScreen.style.display = "none";
            difficultyScreen.style.display = "flex";
        };
    });

    document.getElementById("backCategory").onclick = () => {
        difficultyScreen.style.display = "none";
        categoryScreen.style.display = "flex";
    };

    document.querySelectorAll(".difficulty-btn").forEach(btn => {
        btn.onclick = (e) => {
            currentDifficulty = e.currentTarget.dataset.level;
            difficultyScreen.style.display = "none";
            gameBox.style.display = "block";
            initGame();
        };
    });

    document.getElementById("globalHomeBtn").onclick = resetToHome;
    document.getElementById("homeGameBtn").onclick = resetToHome;

    document.getElementById("shopBtn").onclick = () => shopScreen.style.display = "flex";
    document.getElementById("closeShop").onclick = () => shopScreen.style.display = "none";

    document.getElementById("achievementsBtn").onclick = () => achievementsScreen.style.display = "flex";
    document.getElementById("closeAchievements").onclick = () => achievementsScreen.style.display = "none";

    document.getElementById("leaderboardBtn").onclick = () => {
        document.getElementById("leaderboardUserScore").innerText = (userName || "Player") + " (" + (userAge || "0") + " yrs) : " + score + " pts";
        leaderboardScreen.style.display = "flex";
    };
    document.getElementById("closeLeaderboard").onclick = () => leaderboardScreen.style.display = "none";

    document.getElementById("settingsBtn").onclick = () => {
        switchLanguage(currentLang === "ar" ? "en" : "ar");
    };

    document.getElementById("btnAr").onclick = () => switchLanguage("ar");
    document.getElementById("btnEn").onclick = () => switchLanguage("en");

    document.getElementById("modalBtnAr").onclick = () => switchLanguage("ar");
    document.getElementById("modalBtnEn").onclick = () => switchLanguage("en");

    submitBtn.onclick = checkAnswer;
    hintBtn.onclick = useHintWithCoins;
    skipBtn.onclick = skipPuzzleWithCoins;

    guessInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") checkAnswer();
    });

    guessInput.addEventListener("input", handleAutocomplete);

    document.getElementById("buyLife").onclick = () => buyItem(150, () => {
        currentLives++;
        if (currentLives >= 3) {
            localStorage.removeItem(currentUserKey + "_lastLifeLostTime");
        }
        saveUserData();
        updateLivesUI();
    });

    document.getElementById("buyHint").onclick = () => buyItem(100, () => {
        if (currentPuzzle && currentPuzzle.extraHint) {
            messageElement.innerText = "💡 Hint: " + currentPuzzle.extraHint;
            messageElement.style.color = "var(--amber)";
        }
    });

    document.getElementById("buyTime").onclick = () => buyItem(200, () => {
        timeLeft += 30;
        document.getElementById("timerValue").innerText = timeLeft + "s";
    });

    document.getElementById("buySkip").onclick = () => buyItem(80, () => {
        nextPuzzle();
    });
}

function resetToHome() {
    clearInterval(timerInterval);
    gameBox.style.display = "none";
    categoryScreen.style.display = "none";
    difficultyScreen.style.display = "none";
    shopScreen.style.display = "none";
    achievementsScreen.style.display = "none";
    leaderboardScreen.style.display = "none";
    homeScreen.style.display = "flex";
}

function initGame() {
    if (currentLives <= 0) {
        stopGameDueToNoLives();
        return;
    }

    clearInterval(timerInterval);
    isGameOver = false;
    score = 0;

    switch(currentDifficulty) {
        case "easy": timeLeft = 90; break;
        case "medium": timeLeft = 60; break;
        case "hard": timeLeft = 40; break;
        case "impossible": timeLeft = 25; break;
        default: timeLeft = 60;
    }

    setupLanguageUI();
    updateLivesUI();
    updateCoinsUI();
    nextPuzzle();
    startTimer();

    guessInput.disabled = false;
    submitBtn.disabled = false;
    hintBtn.disabled = false;
    skipBtn.disabled = false;

    document.getElementById("scoreValue").innerText = score;
    document.getElementById("timerValue").innerText = timeLeft + "s";
    messageElement.innerText = "";
}

function setupLanguageUI() {
    const html = document.documentElement || document.getElementById("htmlTag");
    if (html) {
        html.setAttribute("lang", currentLang);
        html.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
    }

    document.getElementById("btnAr").classList.toggle("active", currentLang === "ar");
    document.getElementById("btnEn").classList.toggle("active", currentLang === "en");
    document.getElementById("modalBtnAr").classList.toggle("active", currentLang === "ar");
    document.getElementById("modalBtnEn").classList.toggle("active", currentLang === "en");

    const t = translations[currentLang];
    document.getElementById("mainTitle").innerText = t.title;
    document.getElementById("labelTimer").innerText = t.timer;
    document.getElementById("labelScore").innerText = t.score;
    document.getElementById("labelLives").innerText = t.lives;
    guessInput.placeholder = t.placeholder;
    document.getElementById("submitBtnText").innerText = t.btnText;
    document.getElementById("hintBtnText").innerText = t.hintBtnText;
    document.getElementById("skipBtnText").innerText = t.skipText;

    document.getElementById("modalTitle").innerText = t.formTitle;
    document.getElementById("inputUserName").placeholder = t.namePlaceholder;
    document.getElementById("inputUserAge").placeholder = t.agePlaceholder;
    document.getElementById("saveUserBtn").innerText = t.startBtn;
    document.getElementById("switchUserBtn").innerText = t.switchUserBtn;

    if (currentPuzzle) {
        nextPuzzle();
    }
}

function switchLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem("arcadeLang", currentLang);
    setupLanguageUI();
}

function updateLivesUI() {
    if (currentLives <= 0) {
        currentLives = 0;
        document.getElementById("livesValue").innerText = "0";
        document.getElementById("topLives").innerText = "0";
    } else {
        let hearts = "";
        for(let i = 0; i < currentLives; i++) { hearts += "❤️"; }
        document.getElementById("livesValue").innerText = hearts;
        document.getElementById("topLives").innerText = currentLives;
    }
}

function updateCoinsUI() {
    document.getElementById("coinsValue").innerText = coins;
    document.getElementById("topCoins").innerText = coins;
    saveUserData();
}

function getDatabase() {
    if (currentLang === "en") {
        return databaseEn;
    }

    switch(currentCategory) {
        case "arabic": return databaseAr;
        case "english": return databaseEn;
        case "anime": return databaseAnime;
        case "series": return databaseSeries;
        case "marvel": return databaseMarvel;
        case "disney": return databaseDisney;
        default: return databaseAr;
    }
}

function handleAutocomplete() {
    const val = guessInput.value.trim().toLowerCase();
    autocompleteList.innerHTML = "";
    if (!val) return;

    const db = getDatabase();
    const matches = db.filter(item => item.answer.toLowerCase().includes(val));

    matches.forEach(item => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.innerText = item.answer;
        div.onclick = () => {
            guessInput.value = item.answer;
            autocompleteList.innerHTML = "";
        };
        autocompleteList.appendChild(div);
    });
}

function nextPuzzle() {
    if (currentLives <= 0) {
        stopGameDueToNoLives();
        return;
    }

    autocompleteList.innerHTML = "";
    const db = getDatabase();
    if (playedPuzzles.length >= db.length) playedPuzzles = [];

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * db.length);
    } while (playedPuzzles.includes(randomIndex) && db.length > 1);

    playedPuzzles.push(randomIndex);
    currentPuzzle = db[randomIndex];
    updateLivesUI();
    document.getElementById("emojiContainer").innerText = currentPuzzle.hints.join(" ");
    guessInput.value = "";
    messageElement.innerText = "";
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timerValue").innerText = timeLeft + "s";

        if (timeLeft <= 10) {
            document.getElementById("timerValue").style.color = "var(--danger)";
        } else {
            document.getElementById("timerValue").style.color = "var(--amber)";
        }

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function checkAnswer() {
    if (isGameOver || currentLives <= 0) return;
    const userVal = guessInput.value.trim();
    const t = translations[currentLang];

    if (!userVal) {
        messageElement.innerText = t.noInput;
        messageElement.style.color = "var(--amber)";
        return;
    }

    if (userVal.toLowerCase() === currentPuzzle.answer.toLowerCase()) {
        score += 100;
        coins += 20;
        correctAnswers++;
        addXP(30);

        document.getElementById("scoreValue").innerText = score;
        updateCoinsUI();
        saveUserData();

        messageElement.innerText = t.correct;
        messageElement.style.color = "var(--success)";
        checkAchievements();

        setTimeout(() => {
            nextPuzzle();
        }, 1200);
    } else {
        currentLives--;
        if (currentLives <= 0) {
            currentLives = 0;
        }

        if (!localStorage.getItem(currentUserKey + "_lastLifeLostTime")) {
            localStorage.setItem(currentUserKey + "_lastLifeLostTime", Date.now());
        }
        saveUserData();
        updateLivesUI();

        messageElement.innerText = t.wrong;
        messageElement.style.color = "var(--danger)";

        gameBox.classList.add("shake");
        setTimeout(() => gameBox.classList.remove("shake"), 400);

        if (currentLives <= 0) {
            stopGameDueToNoLives();
        }
    }
}

function stopGameDueToNoLives() {
    clearInterval(timerInterval);
    isGameOver = true;
    currentLives = 0;
    updateLivesUI();
    const t = translations[currentLang];

    guessInput.disabled = true;
    submitBtn.disabled = true;
    hintBtn.disabled = true;
    skipBtn.disabled = true;

    messageElement.innerText = t.outOfLives + (currentPuzzle ? currentPuzzle.answer : "");
    messageElement.style.color = "var(--danger)";
}

function useHintWithCoins() {
    if (coins >= 100) {
        coins -= 100;
        updateCoinsUI();
        if (currentPuzzle && currentPuzzle.extraHint) {
            messageElement.innerText = "💡 Hint: " + currentPuzzle.extraHint;
            messageElement.style.color = "var(--amber)";
        }
    } else {
        messageElement.innerText = "❌ Not enough coins!";
        messageElement.style.color = "var(--danger)";
    }
}

function skipPuzzleWithCoins() {
    if (coins >= 80) {
        coins -= 80;
        updateCoinsUI();
        const t = translations[currentLang];
        messageElement.innerText = t.skipped + currentPuzzle.answer;
        messageElement.style.color = "var(--amber)";
        setTimeout(() => {
            nextPuzzle();
        }, 1500);
    } else {
        messageElement.innerText = "❌ Not enough coins!";
        messageElement.style.color = "var(--danger)";
    }
}

function buyItem(cost, action) {
    if (coins >= cost) {
        coins -= cost;
        updateCoinsUI();
        action();
        messageElement.innerText = "✅ Purchased successfully!";
        messageElement.style.color = "var(--success)";
    } else {
        messageElement.innerText = "❌ Not enough coins!";
        messageElement.style.color = "var(--danger)";
    }
}

function addXP(amount) {
    xp += amount;
    if (xp >= maxXP) {
        xp -= maxXP;
        level++;
    }
    saveUserData();
    updateXPUI();
}

function updateXPUI() {
    document.getElementById("levelText").innerText = "⭐ Level " + level;
    document.getElementById("xpText").innerText = xp + " / " + maxXP + " XP";
    let pct = Math.min((xp / maxXP) * 100, 100);
    document.getElementById("xpFill").style.width = pct + "%";
}

function checkAchievements() {
    if (correctAnswers >= 1) achievements.first = true;
    if (correctAnswers >= 10) achievements.ten = true;
    if (coins >= 1000) achievements.coins = true;
    if (level >= 10) achievements.level10 = true;

    saveUserData();
    checkAchievementsUI();
}

function checkAchievementsUI() {
    document.getElementById("ach1Status").innerText = achievements.first ? "✅" : "❌";
    document.getElementById("ach2Status").innerText = achievements.ten ? "✅" : "❌";
    document.getElementById("ach3Status").innerText = achievements.coins ? "✅" : "❌";
    document.getElementById("ach4Status").innerText = achievements.level10 ? "✅" : "❌";
}

function endGame() {
    clearInterval(timerInterval);
    isGameOver = true;
    const t = translations[currentLang];

    guessInput.disabled = true;
    submitBtn.disabled = true;
    hintBtn.disabled = true;
    skipBtn.disabled = true;

    messageElement.innerText = t.gameOver + score;
    messageElement.style.color = "var(--danger)";
}