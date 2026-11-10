/* TEKS INTRO DUAL BAHASA */
  const INTRO_TEXTS = {
    en: {
      title: "THE APPROVAL",
      desc: "You’ve just been hired as a credit analyst at a municipal bank branch. With your mother fighting for her life in the hospital and surgery bills piling up, every loan you approve—or reject—brings you one step closer to saving her, or losing everything.",
      btn: "START SHIFT"
    },
    ar: {
      title: "الموافقة",
      desc: "لقد تم تعيينك للتو محللاً ائتمانياً في فرع لبنك بلدي. ومع صراع والدتك للبقاء على قيد الحياة في المستشفى وتراكم فواتير العمليات الجراحية، فإن كل قرض توافق عليه—أو ترفضه—يقرّبك خطوة نحو إنقاذها، أو خسارة كل شيء.",
      btn: "بدء الوردية"
    }
  };

  const SOP_RULES_HISTORY = {
    ar: [
      {
        day: 1,
        title: "إجراء التشغيل 1: نسبة عبء الدين الأساسية (DTI)",
        desc: "الحد الأقصى لنسبة عبء الدين (القسط الشهري / صافي الدخل الشهري) هو 30%. يجب ألا يتجاوز القسط هذه النسبة.<br>(إذا لم تكن البيانات مسجلة بالوثيقة، يتم حسابها يدويًا)"
      },
      {
        day: 2,
        title: "إجراء التشغيل 2: السجل الائتماني (SLIK)",
        desc: "افحص سجلات مكتب الائتمان على شاشة CRT: التصنيف 1 (منتظم) مؤهل للموافقة. التصنيف 2 يتطلب ضمانًا عينيًا موثوقًا. التصنيفات 3 و4 و5 (متعثر/عاجز) يجب رفضها قطعًا."
      },
      {
        day: 3,
        title: "إجراء التشغيل 3: حد قيمة الضمان العيني / الرهن",
        desc: "يجب ألا تقل القيمة التقديرية للضمان العيني المقدم عن 120% من أصل مبلغ التمويل المطلوب. المعادلة: (قيمة الضمان / مبلغ التمويل) × 100% >= 120%.<br>(إذا لم تكن مسجلة، تحسب يدويًا)"
      },
      {
        day: 4,
        title: "إجراء التشغيل 4: صحة الوثائق ومكافحة الاحتيال",
        desc: "يجب التحقق من تطابق أرقام الهوية الوطنية (الأرقام من 7 إلى 12 يجب أن تعكس تاريخ الميلاد يوم-شهر-سنة). يلزم الاتصال بجهة العمل للتحقق؛ ارفض إذا كان الرقم غير صالح أو كان المتقدم غير موظف لديهم."
      },
      {
        day: 5,
        title: "إجراء التشغيل 5: تصنيف قطاعات التمويل",
        desc: "تختلف نسبة عبء الدين حسب القطاع: التمويل الإنتاجي (تطوير الأعمال/المعدات) بحد أقصى 30%. التمويل الاستهلاكي (الاحتياجات الشخصية/الترميم) يشدد ليكون بحد أقصى 20%.<br>(إذا لم تكن مسجلة، تحسب يدويًا)"
      },
      {
        day: 6,
        title: "إجراء التشغيل 6: الحد الأقصى لسن التقاعد",
        desc: "حساب تاريخ سداد آخر قسط: عمر المتقدم الحالي + مدة التمويل (بالسنوات) يجب ألا يتجاوز 60 عامًا.<br>(إذا لم تكن مسجلة، تحسب يدويًا)"
      },
      {
        day: 7,
        title: "إجراء التشغيل 7: التدقيق الشامل لنهاية العام",
        desc: "تطبق جميع إجراءات التشغيل من اليوم الأول حتى اليوم السادس معًا دون أي تهاون إجرائي."
      }
    ],
    en: [
      {
        day: 1,
        title: "SOP 1: Debt-to-Income (DTI) Threshold",
        desc: "The maximum Debt-to-Income ratio (Monthly Installment / Net Monthly Income) is 30%. Installments must not exceed this ceiling.<br>(if unlisted on document, calculate manually)"
      },
      {
        day: 2,
        title: "SOP 2: Central Credit Bureau (SLIK)",
        desc: "Inspect credit registry records on the CRT terminal: Rating 1 (Current / Clean) is eligible. Rating 2 requires verified physical collateral. Rating 3, 4, and 5 (Delinquent / Default) must be strictly REJECTED."
      },
      {
        day: 3,
        title: "SOP 3: Physical Collateral Threshold",
        desc: "Appraisal value of physical collateral must equal at least 120% of requested principal. Formula: (Collateral Value / Loan) x 100% >= 120%.<br>(if unlisted on document, calculate manually)"
      },
      {
        day: 4,
        title: "SOP 4: Identity & Anti-Fraud Verification",
        desc: "Verify applicant National ID digits (digits 7 to 12 must match birth date DD-MM-YY; female applicants add +40 to date). Dial employer phone to verify employment; decline if phone is invalid or applicant is not employed there."
      },
      {
        day: 5,
        title: "SOP 5: Loan Sector Segmentation",
        desc: "DTI ceiling is segmented by sector: Productive Credit (business expansion/tools) max DTI 30%. Consumer Credit (personal/lifestyle) tightened to max DTI 20%.<br>(if unlisted on document, calculate manually)"
      },
      {
        day: 6,
        title: "SOP 6: Retirement Maturity Age Limit",
        desc: "Repayment maturity calculation: Applicant Age + Loan Tenor (in years) must not exceed 60 years.<br>(if unlisted on document, calculate manually)"
      },
      {
        day: 7,
        title: "SOP 7: Comprehensive Annual Audit",
        desc: "All SOPs from Day 1 to Day 6 apply simultaneously without procedural tolerance."
      }
    ]
  };

  const EXPENSES_CONFIG = {
    ar: {
      1: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 }
      ],
      2: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 },
        { label: "باقة بيانات الهاتف", amount: 25 }
      ],
      3: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 },
        { label: "فاتورة كهرباء المنزل", amount: 35 }
      ],
      4: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 },
        { label: "فاتورة المياه البلدية", amount: 30 }
      ],
      5: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 },
        { label: "قسط تمويل السيارة الشهري", amount: 60 }
      ],
      6: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 },
        { label: "رسوم الحي والخدمات", amount: 20 },
        { label: "اشتراك التأمين الصحي", amount: 40 }
      ],
      7: [
        { label: "وجبات اليوم", amount: 25 },
        { label: "المواصلات والتنقل", amount: 15 },
        { label: "صيانة دورية للسيارة", amount: 40 },
        { label: "نفقات جراحة الوالدين بالمستشفى", amount: 250 }
      ]
    },
    en: {
      1: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 }
      ],
      2: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 },
        { label: "Mobile Data Voucher", amount: 25 }
      ],
      3: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 },
        { label: "Home Electricity Token", amount: 35 }
      ],
      4: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 },
        { label: "Municipal Water Bill", amount: 30 }
      ],
      5: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 },
        { label: "Monthly Car Loan", amount: 60 }
      ],
      6: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 },
        { label: "Neighborhood Dues", amount: 20 },
        { label: "Health Insurance", amount: 40 }
      ],
      7: [
        { label: "Daily Meals", amount: 25 },
        { label: "Commute & Transit", amount: 15 },
        { label: "Car Routine Service", amount: 40 },
        { label: "Parents Hospital Expenses", amount: 250 }
      ]
    }
  };

  const NEWS_PAGE_TITLES = {
    ar: {
      1: "الجريدة اليومية للأعمال والمجتمع",
      2: "الملحق الأول: الدليل الأساسي للائتمان",
      3: "الملحق الثاني: التحقق والضمانات",
      4: "الملحق الثالث: إدارة السيولة والتدقيق"
    },
    en: {
      1: "DAILY BUSINESS & SOCIAL TRIBUNE",
      2: "APPENDIX I: BASIC CREDIT GUIDE",
      3: "APPENDIX II: VERIFICATION & COLLATERAL",
      4: "APPENDIX III: CASH MANAGEMENT & AUDIT"
    }
  };

  const NIGHT_STORIES = {
    en: [
      [
        { img: "img/image1a.png", text: "Another exhausting day at work, but I can’t afford to give up—not when Mom’s life depends on the money I bring home. I just hope I can save enough to keep her with me a little longer." },
        { img: "img/image1b.png", text: "I’m still on probation, but I can’t afford to lose this job—not when Mom’s hospital bills keep piling up. Even tonight, I have to bring work home… because her life depends on it." }
      ],
      [
        { img: "img/image2a.png", text: "Another night lost in traffic, while Mom waits for me at the hospital. I wish I could be there instead of counting every minute—and every cent." },
        { img: "img/image2b.png", text: "The city keeps moving, but my thoughts are back at the hospital. I hate being so far away when Mom needs me most." }
      ],
      [
        { img: "img/image3a.png", text: "Your smile tells me you’re okay, Mom, but I can see how much you’re hurting. I’m doing everything I can to keep you here with me." },
        { img: "img/image3b.png", text: "Every time I see you in pain, I wish I could take it away. Please hold on, Mom—I’m not ready to lose you." }
      ]
    ],
    ar: [
      [
        { img: "img/image1a.png", text: "يوم شاق آخر في العمل، لكن لا يمكنني الاستسلام—فحياة أمي تعتمد على كل قرش أجنيه. آمل فقط أن أدخر ما يكفي لإبقائها معي لفترة أطول." },
        { img: "img/image1b.png", text: "ما زلت في فترة التجربة، لكنني لا أحتمل خسارة هذه الوظيفة، ففواتير علاج أمي تتراكم باستمرار. حتى هذه الليلة، سآخذ عملي إلى المنزل... لأن حياتها تعتمد على ذلك." }
      ],
      [
        { img: "img/image2a.png", text: "ليلة أخرى تضيع وسط زحام الطرقات بينما تنتظرني أمي في المستشفى. ليتني كنت بجانبها الآن بدلاً من حساب كل دقيقة... وكل فلس." },
        { img: "img/image2b.png", text: "المدينة لا تتوقف عن الحركة، لكن تفكيري عالق هناك في المستشفى. كم أكره أن أكون بعيدًا عنها وهي في أمس الحاجة إلي." }
      ],
      [
        { img: "img/image3a.png", text: "ابتسامتك تخبرني أنك بخير يا أمي، لكني أدرك حجم الألم الذي تكتمينه. سأفعل كل ما بوسعي لتبقي معي هنا." },
        { img: "img/image3b.png", text: "في كل مرة أراك تتألمين، أتمنى لو كان بإمكاني حمل الألم عنك. تمسكي بالحياة يا أمي، فأنا لست مستعدًا لفقدانك." }
      ]
    ]
  };