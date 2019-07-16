module.exports = function(sequelize, DataTypes) {
  // this model will link the csv data from the BRFSS Phone survey data
  var BFRSS = sequelize.define("BFRSS", {
    BID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    year: DataTypes.DATE,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    geography: DataTypes.STRING,
    source: DataTypes.STRING,
    category: DataTypes.STRING,
    uniqueID: DataTypes.INTEGER,
    measurement: DataTypes.STRING,
    data_value_unit: DataTypes.STRING,
    data_value_typeID: DataTypes.STRING,
    data_value: DataTypes.STRING,
    low_confidence_limit: DataTypes.DECIMAL,
    high_confidence_limit: DataTypes.DECIMAL,
    data_value_footnote_symbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data_value_footnote: DataTypes.STRING,
    populationCount: DataTypes.BIGINT,
    geolocation: DataTypes.STRING,
    categoryID: DataTypes.STRING,
    measureID: DataTypes.STRING,
    cityFIPS: DataTypes.STRING,
    tractFIPS: DataTypes.STRING,
    short_question: DataTypes.STRING
  });

  var NHIS = sequelize.define("NHIS", {
    FPX: DataTypes.INTEGER,
    // Person Number (Within family)	
    FMX: DataTypes.INTEGER,
    // Family Number	
    RACERPI2: DataTypes.INTEGER,
    // OMB groups w/multiple race	
    JMTHP2: DataTypes.INTEGER,
    // Which joint affected...shoulder-left	
    JMTHP3: DataTypes.INTEGER,	
    // Which joint affected...elbow-right	
    JMTHP4: DataTypes.INTEGER,
    // Which joint affected...elbow-left	
    JMTHP5: DataTypes.INTEGER,
    // Which joint affected...hip-right	
    JMTHP6: DataTypes.INTEGER,	
    // Which joint affected...hip-left	
    JMTHP7: DataTypes.INTEGER,	
    // Which joint affected...wrist-right	
    JMTHP8: DataTypes.INTEGER,	
    // Which joint affected...wrist-left	
    JMTHP9: DataTypes.INTEGER,	
    // Which joint affected...knee-right	
    JMTHP10: DataTypes.INTEGER,
    // Which joint affected...knee-left	
    JMTHP11: DataTypes.INTEGER,	
    // Which joint affected...ankle-right	
    MRACBPI2: DataTypes.INTEGER,	
    // Race coded to single/multiple race group	
    JMTHP12: DataTypes.INTEGER,	
    // Which joint affected...ankle-left	
    JMTHP13: DataTypes.INTEGER,	
    // Which joint affected...toes-right	
    JMTHP14: DataTypes.INTEGER,	
    // Which joint affected...toes-left	
    JMTHP15: DataTypes.INTEGER,	
    // Which joint affected...fingers/thumb-right	
    JMTHP16: DataTypes.INTEGER,	
    // Which joint affected...fingers/thumb-left	
    JMTHP17: DataTypes.INTEGER,	
    // Which joint affected...other joint not listed	
    JNTCHR: DataTypes.INTEGER,	
    // Joint symptoms begin more than 3 months ago	
    JNTHP: DataTypes.INTEGER,	
    // Ever seen doctor or health professional for joint symptoms	
    ARTH1: DataTypes.INTEGER,
    // Ever been told you had arthritis	
    ARTHLMT: DataTypes.INTEGER,	
    // Limited due to arthritis or joint symptoms	
    AGE_P: DataTypes.INTEGER,	
    // Age	
    CTSEVER: DataTypes.INTEGER,	
    // Ever been told you had carpal tunnel syndrome	
    CTSYR: DataTypes.INTEGER,
    // Carpal tunnel synd past 12m	
    CTSWKRL2: DataTypes.INTEGER,	
    // Discuss w/ doc whether carpal tunnel synd work-related	
    PAINECK: DataTypes.INTEGER,	
    // Had neck pain, past 3 months	
    PAINLB: DataTypes.INTEGER,	
    // Had low back pain, past 3 months	
    PAINLEG: DataTypes.INTEGER,	
    // Pain spread down leg/below knees	
    LBPFREQ: DataTypes.INTEGER,	
    // How often had low back pain past 3 m	
    LBPSEV: DataTypes.INTEGER,	
    // Amount of low back pain	
    LBPWKREL: DataTypes.INTEGER,	
    // Told low back pain work-related	
    LBPWKRL2: DataTypes.INTEGER,	
    // Discuss w/ doc whether low back pain work-related	
    RECTYPE: DataTypes.INTEGER,	
    // File type identifier	
    LBPWCCLM: DataTypes.INTEGER,	
    // Ever filed workers' comp for low back pain	
    LBPWCBEN: DataTypes.INTEGER,	
    // Ever receive workers' comp for low back pain	
    LBPWKDAY: DataTypes.INTEGER,	
    // # Work days missed due to low back pain past 3 m	
    LBPCHJOB: DataTypes.INTEGER,	
    // Change in work activities due to low back pain past 3 m	
    PAINFACE: DataTypes.INTEGER,	
    // Had pain in jaw/front of ear, past 3 months	
    AMIGR: DataTypes.INTEGER,	
    // Had severe headache/migraine, past 3 m	
    ACOLD2W: DataTypes.INTEGER,	
    // Had a head/chest cold past 2 w	
    AINTIL2W: DataTypes.INTEGER,	
    // Had stomach prob w/vomit/diarrhea, 2 w	
    PREGNOW: DataTypes.INTEGER,	
    // Currently pregnant	
    PREGFLYR: DataTypes.INTEGER,	
    // Recently pregnant	
    SRVY_YR: DataTypes.INTEGER,	
    // Year of National Health Interview Survey	
    HRAIDNOW: DataTypes.INTEGER,	
    // Now use a hearing aid	
    HRAIDEV: DataTypes.INTEGER,	
    // Ever used a hearing aid if not now using	
    AHEARST1: DataTypes.INTEGER,	
    // Hearing w/o hearing aid	
    AVISION: DataTypes.INTEGER,	
    // Trouble seeing even w/glasses/lenses	
    ABLIND: DataTypes.INTEGER,	
    // Blind or unable to see at all	
    LUPPRT: DataTypes.INTEGER,	
    // Lost all upper & lower natural teeth	
    HYPYR1: DataTypes.INTEGER,	
    // Had hypertension, past 12 months	
    CTSWKRL1: DataTypes.INTEGER,	
    // Told carpal tunnel synd work-related	
    CANAGE1: DataTypes.INTEGER,	
    // Age first diagnosed w/bladder cancer	
    CANAGE2: DataTypes.INTEGER,	
    // Age first diagnosed w/blood cancer	
    INTV_MON: DataTypes.INTEGER,	
    // Interview Month	
    CANAGE3: DataTypes.INTEGER,	
    // Age first diagnosed w/bone cancer	
    CANAGE4: DataTypes.INTEGER,	
    // Age first diagnosed w/brain cancer	
    CANAGE5: DataTypes.INTEGER,	
    // Age first diagnosed w/breast cancer	
    CANAGE6: DataTypes.INTEGER,	
    // Age first diagnosed w/cervical cancer	
    CANAGE7: DataTypes.INTEGER,	
    // Age first diagnosed w/colon cancer	
    CANAGE8: DataTypes.INTEGER,	
    // Age first diagnosed w/esophageal cancer	
    CANAGE9: DataTypes.INTEGER,	
    // Age first diagnosed w/gallbladder cancer	
    CANAGE10: DataTypes.INTEGER,	
    // Age first diagnosed w/kidney cancer	
    CANAGE11: DataTypes.INTEGER,	
    // Age first diagnosed w/larynx-windpipe cancer	
    CANAGE12: DataTypes.INTEGER,	
    // Age first diagnosed w/leukemia	
    REGION: DataTypes.INTEGER,	
    // Region	
    CANAGE13: DataTypes.INTEGER,	
    // Age first diagnosed w/liver cancer	
    CANAGE14: DataTypes.INTEGER,	
    // Age first diagnosed w/lung cancer	
    CANAGE15: DataTypes.INTEGER,	
    // Age first diagnosed w/lymphoma	
    CANAGE16: DataTypes.INTEGER,	
    // Age first diagnosed w/melanoma	
    CANAGE17: DataTypes.INTEGER,	
    // Age first diagnosed w/mouth/tongue/lip cancer	
    CANAGE18: DataTypes.INTEGER,	
    // Age first diagnosed w/ovarian cancer	
    CANAGE19: DataTypes.INTEGER,	
    // Age first diagnosed w/pancreatic cancer	
    CANAGE20: DataTypes.INTEGER,	
    // Age first diagnosed w/prostate cancer	
    CANAGE21: DataTypes.INTEGER,	
    // Age first diagnosed w/rectal cancer	
    CANAGE22: DataTypes.INTEGER,	
    // Age first diagnosed w/skin (non-melanoma) cancer	
    STRAT_P: DataTypes.INTEGER,	
    // Pseudo-stratum for public use file variance estimation	
    CANAGE23: DataTypes.INTEGER,	
    // Age first diagnosed w/skin (DK kind) cancer	
    CANAGE24: DataTypes.INTEGER,	
    // Age first diagnosed w/soft tissue cancer	
    CANAGE25: DataTypes.INTEGER,	
    // Age first diagnosed w/stomach cancer	
    CANAGE26: DataTypes.INTEGER,	
    // Age first diagnosed w/testicular cancer	
    CANAGE27: DataTypes.INTEGER,	
    // Age first diagnosed w/throat/pharynx cancer	
    CANAGE28: DataTypes.INTEGER,	
    // Age first diagnosed w/thyroid cancer	
    CANAGE29: DataTypes.INTEGER,	
    // Age first diagnosed w/uterine cancer	
    CANAGE30: DataTypes.INTEGER,	
    // Age first diagnosed w/other cancer	
    DIBAGE: DataTypes.INTEGER,	
    // Age first diagnosed w/diabetes	
    AUSUALPL: DataTypes.INTEGER,	
    // Place USUALLY go when sick	
    PSU_P: DataTypes.INTEGER,	
    // Pseudo-PSU for public use file variance estimation	
    APLKIND: DataTypes.INTEGER,	
    // Place to go when sick (most often)	
    AHCPLROU: DataTypes.INTEGER,	
    // USUALLY go there for routine/preventive care	
    AHCPLKND: DataTypes.INTEGER,	
    // Place USUALLY go for routine/preventive care	
    AHCCHGYR: DataTypes.INTEGER,	
    // Change health care place, past 12 m	
    AHCCHGHI: DataTypes.INTEGER,	
    // Change related to health insurance	
    APRVTRYR: DataTypes.INTEGER,	
    // Trouble finding a doctor/provider, past 12 m	
    APRVTRFD: DataTypes.INTEGER,	
    // Able to find doctor/provider, past 12 m	
    ADRNANP: DataTypes.INTEGER,	
    // Doctor's office not accept you as new patient, past 12 m	
    ADRNAI: DataTypes.INTEGER,	
    // Doctor's office not accept your health insurance, past 12 m	
    AHCDLYR1: DataTypes.INTEGER,	
    // Couldn't get through on phone, past 12 m	
    PAR_STAT: DataTypes.INTEGER,	
    // Sample adult is parent to 1+ minor child(ren) in the family	
    AHCDLYR2: DataTypes.INTEGER,	
    // Couldn't get appointment soon enough, past 12 m	
    AHCDLYR3: DataTypes.INTEGER,	
    // Wait too long in doctor's office, past 12 m	
    AHCDLYR4: DataTypes.INTEGER,	
    // Not open when you could go, past 12 m	
    AHCDLYR5: DataTypes.INTEGER,	
    // No transportation, past 12 m	
    AHCAFYR1: DataTypes.INTEGER,	
    // Couldn't afford prescription medicine, past 12 m	
    AHCAFYR2: DataTypes.INTEGER,	
    // Couldn't afford mental health care/counseling, past 12 m	
    AHCAFYR3: DataTypes.INTEGER,	
    // Couldn't afford dental care, past 12 m	
    AHCAFYR4: DataTypes.INTEGER,	
    // Couldn't afford eyeglasses, past 12 m	
    AHCAFYR5: DataTypes.INTEGER,	
    // Couldn't afford to see a specialist, past 12 m	
    AHCAFYR6: DataTypes.INTEGER,	
    // Couldn't afford follow-up care, past 12 m	
    HHX: DataTypes.INTEGER,	
    // Household Number	
    FDRN_FLG: DataTypes.INTEGER,	
    // Disability Questions flag	
    AWORPAY: DataTypes.INTEGER,	
    // Get sick or have accident, worried about paying medical bills	
    AHICOMP: DataTypes.INTEGER,	
    // Health insurance coverage compared to a year ago	
    ARX12MO: DataTypes.INTEGER,	
    // Prescribed medication by doctor/health professional, past 12 m	
    ARX12_1: DataTypes.INTEGER,	
    // Skipped medication doses to save money, past 12 m	
    ARX12_2: DataTypes.INTEGER,	
    // Took less medicine to save money, past 12 m	
    ARX12_3: DataTypes.INTEGER,	
    // Delayed filling a prescription to save money, past 12 m	
    ARX12_4: DataTypes.INTEGER,	
    // Asked doctor for lower cost medication to save money, past 12 m	
    ARX12_5: DataTypes.INTEGER,	
    // Bought prescription drugs from another country to save money, past 12 m	
    ARX12_6: DataTypes.INTEGER,	
    // Used alternative therapies to save money, past 12 m	
    ADNLONG2: DataTypes.INTEGER,	
    // Time since last saw a dentist	
    PROX1: DataTypes.INTEGER,	
    // Knowledgeable proxy for Sample Adult available	
    AHCSYR1: DataTypes.INTEGER,	
    // Seen/talked to mental health professional, past 12 m	
    AHCSYR2: DataTypes.INTEGER,	
    // Seen/talked to eye doctor, past 12 m	
    AHCSYR3: DataTypes.INTEGER,	
    // Seen/talked to foot doctor, past 12 m	
    AHCSYR4: DataTypes.INTEGER,	
    // Seen/talked to a chiropractor, past 12 m	
    AHCSYR5: DataTypes.INTEGER,	
    // Seen/talked to therapist (PT/OT/etc.), past 12 m	
    AHCSYR6: DataTypes.INTEGER,	
    // Seen/talked to a NP/PA/midwife, past 12 m	
    AHCSYR7: DataTypes.INTEGER,	
    // Seen/talked to OB/GYN, past 12 m	
    AHCSYR8: DataTypes.INTEGER,	
    // Seen/talked to a medical specialist, past 12 m	
    AHCSYR9: DataTypes.INTEGER,	
    // Seen/talked to a general doctor, past 12 m	
    AHCSYR10: DataTypes.INTEGER,	
    // Doctor treats both kids and adults	
    PROX2: DataTypes.INTEGER,	
    // Relationship of SA proxy to SA	
    AHERNOY2: DataTypes.INTEGER,	
    // # times in ER/ED, past 12 m	
    AERVISND: DataTypes.INTEGER,	
    // ER visit at night or on weekend	
    AERHOS: DataTypes.INTEGER,	
    // ER visit resulted in hospital admission	
    AERREA1R: DataTypes.INTEGER,	
    // ER visit because didn't have another place to go	
    AERREA2R: DataTypes.INTEGER,	
    // ER visit because doctors office or clinic was not open	
    AERREA3R: DataTypes.INTEGER,	
    // ER visit because advised by health provider to go	
    AERREA4R: DataTypes.INTEGER,	
    // ER visit because problem too serious for doctor's office/clinic	
    AERREA5R: DataTypes.INTEGER,	
    // ER visit because only hospital could help	
    AERREA6R: DataTypes.INTEGER,	
    // ER visit because it is closest provider	
    AERREA7R: DataTypes.INTEGER,	
    // ER visit because it is usual place to get care	
    LATEINTA: DataTypes.INTEGER,	
    // Late Sample Adult interviews	
    AERREA8R: DataTypes.INTEGER,	
    // Arrived at ER by ambulance/other emergency vehicle	
    AHCHYR: DataTypes.INTEGER,	
    // Received home care from health professional, past 12 m	
    AHCHMOYR: DataTypes.INTEGER,	
    // # months of home care, past 12 m	
    AHCHNOY2: DataTypes.INTEGER,	
    // Total number of home visits	
    AHCNOYR2: DataTypes.INTEGER,	
    // Total number of office visits, past 12 m	
    ASRGYR: DataTypes.INTEGER,	
    // Surgery/surgical procedure, past 12 m	
    ASRGNOYR: DataTypes.INTEGER,	
    // # of surgeries, past 12 m	
    AMDLONGR: DataTypes.INTEGER,	
    // Time since last seen/talked to health professional	
    HIT1A: DataTypes.INTEGER,	
    // Looked up health information on Internet, past 12 m	
    HIT2A: DataTypes.INTEGER,	
    // Filled a prescription on Internet, past 12 m	
    PROXYSA: DataTypes.INTEGER,	
    // Sample adult status	
    HIT3A: DataTypes.INTEGER,	
    // Scheduled medical appointment on Internet, past 12 m	
    HIT4A: DataTypes.INTEGER,	
    // Communicated with health care provider by email, past 12 m	
    HIT5A: DataTypes.INTEGER,	
    // Used chat groups to learn about health topics, past 12 m	
    SHTFLU2: DataTypes.INTEGER,	
    // Flu shot past 12 m	
    ASHFLUM2: DataTypes.INTEGER,	
    // Month of most recent flu shot	
    ASHFLUY2: DataTypes.INTEGER,	
    // Year of most recent flu shot	
    FLUSHPG1: DataTypes.INTEGER,	
    // Flu shot before/during current pregnancy, interviewed Jan-Mar or Aug-Dec, 2015	
    FLUSHPG2: DataTypes.INTEGER,	
    // Flu shot before/during/after a pregnancy	
    SPRFLU2: DataTypes.INTEGER,	
    // Flu nasal spray past 12 m	
    ASPFLUM2: DataTypes.INTEGER,	
    // Month of most recent flu nasal spray	
    DIFAGE2: DataTypes.INTEGER,	
    // Years since first diagnosed w/diabetes	
    ASPFLUY2: DataTypes.INTEGER,	
    // Year of most recent flu nasal spray	
    SHTPNUYR: DataTypes.INTEGER,	
    // Pneumonia shot (EVER)	
    APOX: DataTypes.INTEGER,	
    // Ever had chickenpox	
    APOX12MO: DataTypes.INTEGER,	
    // Chickenpox, past 12 m	
    AHEP: DataTypes.INTEGER,	
    // Ever had hepatitis	
    AHEPLIV: DataTypes.INTEGER,	
    // Ever lived w/ someone w/ hepatitis	
    AHEPBTST: DataTypes.INTEGER,	
    // Ever had a blood test for hepatitis B	
    SHTHEPB: DataTypes.INTEGER,	
    // Hepatitis B vaccine (EVER)	
    SHEPDOS: DataTypes.INTEGER,	
    // # doses of hepatitis B vaccine received	
    SHTHEPA: DataTypes.INTEGER,	
    // Hepatitis A vaccine (EVER)	
    HYPEV: DataTypes.INTEGER,	
    // Ever been told you have hypertension	
    SHEPANUM: DataTypes.INTEGER,	
    // # shots of hepatitis A vaccine received	
    AHEPCTST: DataTypes.INTEGER,	
    // Ever had a blood test for hepatitis C	
    AHEPCRES: DataTypes.INTEGER,	
    // Main reason tested for Hepatitis C	
    SHINGLES: DataTypes.INTEGER,	
    // Ever had the Zoster or Shingles vaccine	
    SHTTD: DataTypes.INTEGER,	
    // Tetanus shot in the past 10 years	
    SHTTD05: DataTypes.INTEGER,	
    // Tetanus shot given in 2005 or later	
    SHTHPV2: DataTypes.INTEGER,	
    // Ever received HPV shot/vaccine	
    SHHPVDOS: DataTypes.INTEGER,	
    // Number of HPV shots received	
    AHPVAGE: DataTypes.INTEGER,	
    // Age at first HPV shot	
    LIVEV: DataTypes.INTEGER,	
    // Ever told you had any kind of chronic/long-term liver condition	
    HYPDIFV: DataTypes.INTEGER,	
    // Ever had hypertension on 2+ visits	
    TRAVEL: DataTypes.INTEGER,	
    // Ever traveled outside USA since 1995 (Excluding EUR, JPN, AUS, NZL, and CAN)	
    WRKDIR: DataTypes.INTEGER,	
    // Direct contact with patients	
    APSBPCHK: DataTypes.INTEGER,	
    // Blood pressure checked by doctor/nurse/health professional, past 12 m	
    APSCHCHK: DataTypes.INTEGER,	
    // Cholesterol checked by doctor/nurse/health professional, past 12 m	
    APSBSCHK: DataTypes.INTEGER,	
    // Fasting test for high blood sugar/diabetes, past 12 m	
    APSPAP: DataTypes.INTEGER,	
    // Pap smear/test, past 12 m	
    APSMAM: DataTypes.INTEGER,	
    // Mammogram, past 12 m	
    APSCOL: DataTypes.INTEGER,	
    // Test for colon cancer, past 12 m	
    APSDIET: DataTypes.INTEGER,	
    // Doctor/health professional talked to you about diet, past 12 m	
    APSSMKC: DataTypes.INTEGER,	
    // Doctor/health professional talked to you about smoking, past 12 m	
    HYPMDEV2: DataTypes.INTEGER,	
    // Ever prescribed medicine for high blood pressure	
    AINDPRCH: DataTypes.INTEGER,	
    // Purchased health insurance directly, past 3 yrs	
    AINDWHO: DataTypes.INTEGER,	
    // For whom was health insurance purchased, past 3 yrs	
    AINDDIF1: DataTypes.INTEGER,	
    // How difficult to find health insurance for coverage needed, past 3 yrs	
    AINDDIF2: DataTypes.INTEGER,	
    // How difficult to find affordable health insurance, past 3 yrs	
    AEXCHNG: DataTypes.INTEGER,	
    // Looked into purchasing health insurance through Healthcare.gov or Marketplace	
    SHTTDAP2: DataTypes.INTEGER,	
    // Vaccine included pertussis/whooping cough	
    WRKHLTH2: DataTypes.INTEGER,	
    // Work or volunteer in a health care setting	
    AINDINS2: DataTypes.INTEGER,	
    // Tried to purchase health insurance directly, past 3 yrs	
    ASICPUSE: DataTypes.INTEGER,	
    // How often do you use a computer	
    ASISATHC: DataTypes.INTEGER,	
    // How satisfied with health care, past 12 mo	
    HYPMED2: DataTypes.INTEGER,	
    // Now taking prescribed medicine for high blood pressure	
    ASITENUR: DataTypes.INTEGER,	
    // Length of time living in neighborhood	
    ASINHELP: DataTypes.INTEGER,	
    // Agree/disagree�people in neighborhood help each other	
    ASINCNTO: DataTypes.INTEGER,	
    // Agree/disagree�people I count on in neighborhood	
    ASINTRU: DataTypes.INTEGER,	
    // Agree/disagree�people in neighborhood can be trusted	
    ASINKNT: DataTypes.INTEGER,	
    // Agree/disagree�close-knit neighborhood	
    ASISIM: DataTypes.INTEGER,	
    // How you think of yourself (sexual orientation; male)	
    ASISIF: DataTypes.INTEGER,	
    // How do you think of yourself (sexual orientation; female)	
    ASIRETR: DataTypes.INTEGER,	
    // How worried are you about�money for retirement	
    ASIMEDC: DataTypes.INTEGER,	
    // How worried are you about�medical costs of illness/accident	
    ASISTLV: DataTypes.INTEGER,	
    // How worried are you about�maintaining standard of living	
    INTV_QRT: DataTypes.INTEGER,	
    // Interview Quarter	
    CHLEV: DataTypes.INTEGER,	
    // Ever told you had high cholesterol	
    ASICNHC: DataTypes.INTEGER,	
    // How worried are you about�medical costs of healthcare	
    ASICCOLL: DataTypes.INTEGER,	
    // How worried are you about�paying for children's college	
    ASINBILL: DataTypes.INTEGER,	
    // How worried are you about�paying monthly bills	
    ASIHCST: DataTypes.INTEGER,	
    // How worried are you about�paying rent/mortgage/housing costs	
    ASICCMP: DataTypes.INTEGER,	
    // How worried are you about�credit card payments	
    ASISLEEP: DataTypes.INTEGER,	
    // Hours of sleep	
    ASISLPFL: DataTypes.INTEGER,	
    // # times having trouble falling asleep, past week	
    ASISLPST: DataTypes.INTEGER,	
    // # times having trouble staying asleep, past week	
    ASISLPMD: DataTypes.INTEGER,	
    // # times taking medication for sleep, past week	
    ASIREST: DataTypes.INTEGER,	
    // Days woke up feeling rested, past week	
    CHLYR: DataTypes.INTEGER,	
    // Had high cholesterol, past 12 months	
    ASISAD: DataTypes.INTEGER,	
    // So sad nothing cheers you up, past 30 days	
    ASINERV: DataTypes.INTEGER,	
    // How often felt nervous, past 30 days	
    ASIRSTLS: DataTypes.INTEGER,	
    // How often restless/fidgety, past 30 days	
    ASIHOPLS: DataTypes.INTEGER,	
    // How often felt hopeless, past 30 days	
    ASIEFFRT: DataTypes.INTEGER,	
    // How often felt everything was an effort, past 30 days	
    ASIWTHLS: DataTypes.INTEGER,	
    // How often felt worthless, past 30 days	
    ASIMUCH: DataTypes.INTEGER,	
    // Feelings interfered w/ life, past 30 days	
    ASIHIVT: DataTypes.INTEGER,	
    // Ever been tested for HIV	
    ASIHIVWN: DataTypes.INTEGER,	
    // Main reason not tested for HIV	
    SMKEV: DataTypes.INTEGER,	
    // Ever smoked 100 cigarettes	
    CHLMDEV2: DataTypes.INTEGER,	
    // Ever prescribed medicine to lower cholesterol	
    SMKREG: DataTypes.INTEGER,	
    // Age first smoked fairly regularly	
    SMKNOW: DataTypes.INTEGER,	
    // Smoke freq: every day/some days/not at all	
    SMKQTNO: DataTypes.INTEGER,	
    // Time since quit: # of units	
    SMKQTTP: DataTypes.INTEGER,	
    // Time since quit: time period	
    CIGSDA1: DataTypes.INTEGER,	
    // Number cigs per day (daily smokers)	
    CIGDAMO: DataTypes.INTEGER,	
    // Number days smoked in past 30 days	
    CIGSDA2: DataTypes.INTEGER,	
    // Number cigs per day (some day smokers)	
    CIGQTYR: DataTypes.INTEGER,	
    // Tried quit smoking 1+ days, past 12 m	
    VIGNO: DataTypes.INTEGER,	
    // Freq vigorous activity: # of units	
    VIGTP: DataTypes.INTEGER,	
    // Freq vigorous activity: Time units	
    CHLMDNW2: DataTypes.INTEGER,	
    // Now taking prescribed medicine to lower cholesterol	
    VIGLNGNO: DataTypes.INTEGER,	
    // Duration vigorous activity: # units	
    VIGLNGTP: DataTypes.INTEGER,	
    // Duration vigorous activity: Time unit	
    MODNO: DataTypes.INTEGER,	
    // Freq moderate activity: # of units	
    MODTP: DataTypes.INTEGER,	
    // Freq moderate activity: Time units	
    MODLNGNO: DataTypes.INTEGER,	
    // Duration moderate activity: # of units	
    MODLNGTP: DataTypes.INTEGER,	
    // Duration moderate activity: Time unit	
    STRNGNO: DataTypes.INTEGER,	
    // Strength activity freq: # of units	
    STRNGTP: DataTypes.INTEGER,	
    // Strength activity freq: Time units	
    ALC1YR: DataTypes.INTEGER,	
    // Ever had 12+ drinks in any one year	
    ALCLIFE: DataTypes.INTEGER,	
    // Had 12+ drinks in ENTIRE LIFE	
    CHDEV: DataTypes.INTEGER,	
    // Ever been told you had coronary heart disease	
    ALC12MNO: DataTypes.INTEGER,	
    // Freq drank alcohol pst yr: # of units	
    ALC12MTP: DataTypes.INTEGER,	
    // Freq drank alcohol pst yr: Time unit	
    ALCAMT: DataTypes.INTEGER,	
    // Average # drinks on days drank	
    BINGE1: DataTypes.INTEGER,	
    // Number of times had 5+/4+ drinks on AN OCCASION, past 30 days	
    SMKANY: DataTypes.INTEGER,	
    // Ever smoked a cigarette, even once (not smkd or dk if smkd 100+ cigs)	
    SMKNOWX: DataTypes.INTEGER,	
    // Smoke freq: every day/some days/not at all (not smkd or dk if smkd 100+ cigs)	
    SMKNOTPX: DataTypes.INTEGER,	
    // Time since smoked a cigarette: time period (not smkd or dk if smkd 100+ cigs)	
    CIGDAMOX: DataTypes.INTEGER,	
    // Number days smoked,past 30 days(not smkd/dk if smkd 100+ cigs,currently smking)	
    SMKSTAT2: DataTypes.INTEGER,	
    // Smoking Status: Recode	
    SMKQTY: DataTypes.INTEGER,	
    // Time since quit smoking (in years)	
    ANGEV: DataTypes.INTEGER,	
    // Ever been told you had angina pectoris	
    CIGSDAY: DataTypes.INTEGER,	
    // Number of cigarettes a day (all current smokers)	
    VIGFREQW: DataTypes.INTEGER,	
    // Freq vigorous activity (times per wk)	
    MODFREQW: DataTypes.INTEGER,
    // Freq light/moderate activity (times per wk)	
    STRFREQW: DataTypes.INTEGER,	
    // Freq strength activity (times per wk)	
    VIGMIN: DataTypes.INTEGER,	
    // Duration vigorous activity (in minutes)	
    MODMIN: DataTypes.INTEGER,	
    // Duration light/moderate activity (in minutes)	
    ALC12MWK: DataTypes.INTEGER,	
    // Freq drank alcohol: Days per week	
    ALC12MYR: DataTypes.INTEGER,	
    // Freq drank alcohol: Days in past year	
    ALCSTAT: DataTypes.INTEGER,	
    // Alcohol drinking status: Recode	
    AHEIGHT: DataTypes.INTEGER,	
    // Total height in inches	
    MIEV: DataTypes.INTEGER,	
    // Ever been told you had a heart attack	
    AWEIGHTP: DataTypes.INTEGER,	
    // Weight without shoes (pounds)	
    BMI: DataTypes.INTEGER,	
    // Body Mass Index (BMI)	
    ALC5UPN1: DataTypes.INTEGER,	
    // Days 5+/4+ drinks, past yr: # days	
    ALC5UPT1: DataTypes.INTEGER,	
    // Days 5+/4+ drinks, past yr: Time unit	
    ALC5UPY1: DataTypes.INTEGER,	
    // Number of days had 5+/4+ drinks past year	
    WKDAYR: DataTypes.INTEGER,	
    // Number of work loss days, past 12 months	
    BEDDAYR: DataTypes.INTEGER,	
    // Number of bed days, past 12 months	
    AHSTATYR: DataTypes.INTEGER,	
    // Health better/worse/same, compared w/ 12 months ago	
    SPECEQ: DataTypes.INTEGER,	
    // Have health problem that requires special equipment	
    FLWALK: DataTypes.INTEGER,	
    // How difficult to walk 1/4 mile without special equipment	
    HRTEV: DataTypes.INTEGER,	
    // Ever been told you had a heart condition/disease	
    FLCLIMB: DataTypes.INTEGER,	
    // How difficult to climb 10 steps without special equipment	
    FLSTAND: DataTypes.INTEGER,	
    // How difficult to stand 2 hours without special equipment	
    FLSIT: DataTypes.INTEGER,	
    // How difficult to sit 2 hours without special equipment	
    FLSTOOP: DataTypes.INTEGER,	
    // How difficult to stoop, bend or kneel without special equipment	
    FLREACH: DataTypes.INTEGER,	
    // How difficult to reach over head without special equipment	
    FLGRASP: DataTypes.INTEGER,	
    // How difficult to grasp small objects without special equipment	
    FLCARRY: DataTypes.INTEGER,	
    // How difficult to lift/carry 10 lbs without special equipment	
    FLPUSH: DataTypes.INTEGER,	
    // How difficult to push large objects without special equipment	
    FLSHOP: DataTypes.INTEGER,	
    // How difficult to go out to events without special equipment	
    FLSOCL: DataTypes.INTEGER,	
    // How difficult to participate in social activities without special equipment	
    STREV: DataTypes.INTEGER,	
    // Ever been told you had a stroke	
    FLRELAX: DataTypes.INTEGER,	
    // How difficult to relax at home without special equipment	
    AFLHCA1: DataTypes.INTEGER,	
    // Vision/problem seeing causes difficulty with activity	
    AFLHCA2: DataTypes.INTEGER,	
    // Hearing problem causes difficulty with activity	
    AFLHCA3: DataTypes.INTEGER,	
    // Arthritis/rheumatism causes difficulty with activity	
    AFLHCA4: DataTypes.INTEGER,	
    // Back or neck problem causes difficulty with activity	
    AFLHCA5: DataTypes.INTEGER,	
    // Fracture, bone/joint injury causes difficulty with activity	
    AFLHCA6: DataTypes.INTEGER,	
    // Other injury causes difficulty with activity	
    AFLHCA7: DataTypes.INTEGER,	
    // Heart problem causes difficulty with activity	
    AFLHCA8: DataTypes.INTEGER,	
    // Stroke problem causes difficulty with activity	
    AFLHCA9: DataTypes.INTEGER,	
    // Hypertension/high blood pressure causes difficulty with activity	
    EPHEV: DataTypes.INTEGER,	
    // Ever been told you had emphysema	
    AFLHCA10: DataTypes.INTEGER,	
    // Diabetes causes difficulty with activity	
    AFLHCA11: DataTypes.INTEGER,	
    // Lung/breathing problem (e.g., asthma) causes difficulty with activity	
    AFLHCA12: DataTypes.INTEGER,	
    // Cancer causes difficulty with activity	
    AFLHCA13: DataTypes.INTEGER,	
    // Birth defect causes difficulty with activity	
    AFLHCA15: DataTypes.INTEGER,	
    // Other developmental problem (eg, cerebral palsy) causes difficulty with activit	
    AFLHCA16: DataTypes.INTEGER,	
    // Senility causes difficulty with activity	
    AFLHCA17: DataTypes.INTEGER,	
    // Depression/anxiety/emotional problem causes difficulty with activity	
    AFLHCA18: DataTypes.INTEGER,	
    // Weight problem causes difficulty with activity	
    ALTIME1: DataTypes.INTEGER,	
    // Duration of vision problem: Number of units	
    ALUNIT1: DataTypes.INTEGER,	
    // Duration of vision problem: Time unit	
    WTIA_SA: DataTypes.INTEGER,	
    // Weight - Interim Annual	
    COPDEV: DataTypes.INTEGER,	
    // Ever been told you had COPD	
    ALTIME2: DataTypes.INTEGER,	
    // Duration of hearing problem: Number of units	
    ALUNIT2: DataTypes.INTEGER,	
    // Duration of hearing problem: Time unit	
    ALTIME3: DataTypes.INTEGER,	
    // Duration of arthritis/rheumatism: Number of units	
    ALUNIT3: DataTypes.INTEGER,	
    // Duration of arthritis/rheumatism: Time unit	
    ALTIME4: DataTypes.INTEGER,	
    // Duration of back or neck problem: Number of units	
    ALUNIT4: DataTypes.INTEGER,	
    // Duration of back or neck problem: Time unit	
    ALTIME5: DataTypes.INTEGER,	
    // Duration of fracture, bone/joint injury: Number of units	
    ALUNIT5: DataTypes.INTEGER,	
    // Duration of fracture, bone/joint injury: Time unit	
    ALTIME6: DataTypes.INTEGER,	
    // Duration of other injury: Number of units	
    ALUNIT6: DataTypes.INTEGER,	
    // Duration of other injury: Time unit	
    ASPMEDEV: DataTypes.INTEGER,	
    // Ever been told to take low-dose aspirin	
    ALTIME7: DataTypes.INTEGER,	
    // Duration of heart problem: Number of units	
    ALUNIT7: DataTypes.INTEGER,	
    // Duration of heart problem: Time unit	
    ALTIME8: DataTypes.INTEGER,	
    // Duration of stroke problem: Number of units	
    ALUNIT8: DataTypes.INTEGER,	
    // Duration of stroke problem: Time unit	
    ALTIME9: DataTypes.INTEGER,	
    // Duration of hypertension or high blood pressure: Number of units	
    ALUNIT9: DataTypes.INTEGER,	
    // Duration of hypertension or high blood pressure: Time unit	
    ALTIME10: DataTypes.INTEGER,	
    // Duration of diabetes: Number of units	
    ALUNIT10: DataTypes.INTEGER,	
    // Duration of diabetes: Time unit	
    ALTIME11: DataTypes.INTEGER,	
    // Duration of lung/breathing problem (e.g., asthma and emphysema): Number of unit	
    ALUNIT11: DataTypes.INTEGER,	
    // Duration of lung/breathing problem: (e.g., asthma and emphysema) Time unit	
    ASPMEDAD: DataTypes.INTEGER,	
    // Following low-dose aspirin advice	
    ALTIME12: DataTypes.INTEGER,	
    // Duration of cancer: Number of units	
    ALUNIT12: DataTypes.INTEGER,	
    // Duration of cancer: Time unit	
    ALTIME13: DataTypes.INTEGER,	
    // Duration of birth defect: Number of units	
    ALUNIT13: DataTypes.INTEGER,	
    // Duration of birth defect: Time unit	
    ALTIME15: DataTypes.INTEGER,	
    // Duration of other developmental problem (e.g., cerebral palsy): Number of units	
    ALUNIT15: DataTypes.INTEGER,	
    // Duration of other developmental problem (e.g., cerebral palsy): Time unit	
    ALTIME16: DataTypes.INTEGER,	
    // Duration of senility: Number of units	
    ALUNIT16: DataTypes.INTEGER,	
    // Duration of senility: Time unit	
    ALTIME17: DataTypes.INTEGER,	
    // Duration of depression/anxiety/emotional problem: Number of units	
    ALUNIT17: DataTypes.INTEGER,	
    // Duration of depression/anxiety/emotional problem: Time unit	
    ASPMDMED: DataTypes.INTEGER,	
    // Advised to stop taking low-dose aspirin	
    ALTIME18: DataTypes.INTEGER,	
    // Duration of weight problem: Number of units	
    ALUNIT18: DataTypes.INTEGER,	
    // Duration of weight problem: Time unit	
    ALTIME19: DataTypes.INTEGER,	
    // Duration of missing limbs (fingers, toes); amputation: Number of units	
    ALTIME20: DataTypes.INTEGER,	
    // Duration of musculoskeletal/connective tissue problem: Number of units	
    ALTIME21: DataTypes.INTEGER,	
    // Duration of circulation problems (including blood clots): Number of units	
    ALTIME22: DataTypes.INTEGER,
    // Duration of endocrine/nutritional/metabolic problem: Number of units	
    ALTIME23: DataTypes.INTEGER,	
    // Duration of nervous system/sensory organ condition: Number of units	
    ALTIME24: DataTypes.INTEGER,	
    // Duration of digestive system problems: Number of units	
    ALTIME25: DataTypes.INTEGER,	
    // Duration of genitourinary system problem: Number of units	
    ALTIME26: DataTypes.INTEGER,	
    // Duration of skin/subcutaneous system problems: Number of units	
    ASPONOWN: DataTypes.INTEGER,	
    // Taking low-dose aspirin on own	
    ALTIME27: DataTypes.INTEGER,	
    // Duration of blood or blood-forming organ problem: Number of units	
    ALTIME28: DataTypes.INTEGER,	
    // Duration of benign tumor/cyst: Number of units	
    ALTIME29: DataTypes.INTEGER,	
    // Duration of alcohol /drug/substance abuse problem: Number of units	
    ALTIME30: DataTypes.INTEGER,	
    // Duration of other mental problem/ADD/Bipolar/Schizophrenia: Number of units	
    ALTIME31: DataTypes.INTEGER,	
    // Duration of surgical after-effects/medical treatment problems: Number of units	
    ALTIME32: DataTypes.INTEGER,	
    // Duration of "old age"/elderly/aging-related problems: Number of units	
    ALTIME33: DataTypes.INTEGER,	
    // Duration of fatigue/tiredness/weakness problem: Number of units	
    ALTIME34: DataTypes.INTEGER,	
    // Duration of pregnancy-related problem: Number of units	
    ALUNIT19: DataTypes.INTEGER,	
    // Duration of missing limbs (fingers, toes, or digits); amputation: Time unit	
    ALUNIT20: DataTypes.INTEGER,	
    // Duration of musculoskeletal/connective tissue problem: Time unit	
    AASMEV: DataTypes.INTEGER,	
    // Ever been told you had asthma	
    ALUNIT21: DataTypes.INTEGER,	
    // Duration of circulation problems (including blood clots): Time unit	
    ALUNIT22: DataTypes.INTEGER,	
    // Duration of endocrine/nutritional/metabolic problem: Time unit	
    ALUNIT23: DataTypes.INTEGER,	
    // Duration of nervous system/sensory organ condition: Time unit	
    ALUNIT24: DataTypes.INTEGER,	
    // Duration of digestive system problems: Time unit	
    ALUNIT25: DataTypes.INTEGER,	
    // Duration of genitourinary system problem: Time unit	
    ALUNIT26: DataTypes.INTEGER,	
    // Duration of skin/subcutaneous system problems: Time unit	
    ALUNIT27: DataTypes.INTEGER,	
    // Duration of blood or blood-forming organ problem: Time unit	
    ALUNIT28: DataTypes.INTEGER,	
    // Duration of benign tumor/cyst: Time unit	
    ALUNIT29: DataTypes.INTEGER,	
    // Duration of alcohol/drug/substance abuse problem: Time unit	
    ALUNIT30: DataTypes.INTEGER,	
    // Duration of other mental problem/ADD/Bipolar/Schizophrenia: Time unit	
    AASSTIL: DataTypes.INTEGER,
    	// Still have asthma	
    ALUNIT31: DataTypes.INTEGER,	
    // Duration of surgical after-effects/medical treatment problems: Time unit	
    ALUNIT32: DataTypes.INTEGER,	
    // Duration of "old age"/elderly/aging-related problems: Time unit	
    ALUNIT33: DataTypes.INTEGER,	
    // Duration of fatigue/tiredness/weakness problem: Time unit	
    ALUNIT34: DataTypes.INTEGER,	
    // Duration of pregnancy-related problem: Time unit	
    AFLHCA90: DataTypes.INTEGER,	
    // Other impairment/problem (1) causes difficulty with activity	
    ALTIME90: DataTypes.INTEGER,	
    // Duration of other impairment/problem N.E.C. (1): Number of units	
    ALUNIT90: DataTypes.INTEGER,	
    // Duration of other impairment/problem N.E.C. (1): Time unit	
    AFLHCA91: DataTypes.INTEGER,	
    // Other impairment/problem (2) causes difficulty with activity	
    ALTIME91: DataTypes.INTEGER,	
    // Duration of other impairment/problem N.E.C. (2): Number of units	
    ALUNIT91: DataTypes.INTEGER,	
    // Duration of other impairment/problem N.E.C. (2): Time unit	
    AASMYR: DataTypes.INTEGER,	
    // Had an asthma episode/attack past 12 m	
    ALDURA1: DataTypes.INTEGER,	
    // Duration (in years) of vision problem, recode 1	
    ALDURA2: DataTypes.INTEGER,	
    // Duration (in years) of hearing problem, recode 1	
    ALDURA3: DataTypes.INTEGER,	
    // Duration (in years) of : DataTypes.INTEGER,arthritis/rheumatism, recode 1	
    ALDURA4: DataTypes.INTEGER,	
    // Duration (in years) of back or neck problem, recode 1	
    ALDURA5: DataTypes.INTEGER,	
    // Duration (in years) of fracture, bone/joint injury, recode 1	
    ALDURA6: DataTypes.INTEGER,	
    // Duration (in years) of other injury, recode 1	
    ALDURA7: DataTypes.INTEGER,	
    // Duration (in years) of heart problem, recode 1	
    ALDURA8: DataTypes.INTEGER,	
    // Duration (in years) of stroke problem, recode 1	
    ALDURA9: DataTypes.INTEGER,	
    // Duration (in years) of hypertension or high blood pressure: recode 1	
    ALDURA10: DataTypes.INTEGER,	
    // Duration (in years) of diabetes, recode 1	
    AASERYR1: DataTypes.INTEGER,	
    // Had visit to ER due to asthma past 12 m	
    ALDURA11: DataTypes.INTEGER,	
    // Duration (in years) of lung/breathing problem (e.g., asthma), recode 1	
    ALDURA12: DataTypes.INTEGER,	
    // Duration (in years) of cancer, recode 1	
    ALDURA13: DataTypes.INTEGER,	
    // Duration (in years) of birth defect, recode 1	
    ALDURA15: DataTypes.INTEGER,	
    // Duration (in years) of other developmental problem (eg cerebral palsy), recode	
    ALDURA16: DataTypes.INTEGER,	
    // Duration (in years) of senility, recode 1	
    ALDURA17: DataTypes.INTEGER,	
    // Duration (in years) of depression/anxiety/emotional problem, recode 1	
    ALDURA18: DataTypes.INTEGER,	
    // Duration (in years) of weight problem, recode 1	
    ALDURA19: DataTypes.INTEGER,	
    // Duration (in years) of missing limbs (fingers, toes); amputation, recode 1	
    ALDURA20: DataTypes.INTEGER,	
    // Duration (in years) of musculoskeletal/connective tissue problem, recode 1	
    ALDURA21: DataTypes.INTEGER,	
    // Duration (in years) of circulation problems (including blood clots), recode 1	
    ULCEV: DataTypes.INTEGER,	
    // Ever been told you have an ulcer	
    ALDURA22: DataTypes.INTEGER,	
    // Duration (in years) of endocrine/nutritional/metabolic problem, recode 1	
    ALDURA23: DataTypes.INTEGER,	
    // Duration (in years) of nervous system/sensory organ condition, recode 1	
    ALDURA24: DataTypes.INTEGER,	
    // Duration (in years) of digestive system problems, recode 1	
    ALDURA25: DataTypes.INTEGER,	
    // Duration (in years) of genitourinary system problem, recode 1	
    ALDURA26: DataTypes.INTEGER,	
    // Duration (in years) of skin/subcutaneous system problems, recode 1	
    ALDURA27: DataTypes.INTEGER,	
    // Duration (in years) of blood or blood-forming organ problem, recode 1	
    ALDURA28: DataTypes.INTEGER,	
    // Duration (in years) of benign tumor/cyst, recode 1	
    ALDURA29: DataTypes.INTEGER,	
    // Duration (in years) of alcohol/drug/substance abuse problem, recode 1	
    ALDURA30: DataTypes.INTEGER,	
    // Duration (in years) of other mental problem/ADD/Bipolar/Schizophrenia, recode 1	
    ALDURA31: DataTypes.INTEGER,	
    // Duration (in years) of surgical after-effects/medical treatment prob, recode 1	
    WTFA_SA: DataTypes.INTEGER,	
    // Weight - Final Annual	
    ULCYR: DataTypes.INTEGER,	
    // Had ulcer in past 12 m	
    ALDURA32: DataTypes.INTEGER,	
    // Duration (in years) of "old age"/elderly/aging-related problems, recode 1	
    ALDURA33: DataTypes.INTEGER,	
    // Duration (in years) of fatigue/tiredness/weakness problem, recode 1	
    ALDURA34: DataTypes.INTEGER,	
    // Duration (in years) of pregnancy-related problem, recode 1	
    ALDURA90: DataTypes.INTEGER,	
    // Duration (in years) of other impairment/problem N.E.C. (1), recode 1	
    ALDURA91: DataTypes.INTEGER,	
    // Duration (in years) of other impairment/ problem N.E.C. (2), recode 1	
    ALDURB1: DataTypes.INTEGER,	
    // Duration of vision problem, recode 2	
    ALDURB2: DataTypes.INTEGER,	
    // Duration of hearing problem, recode 2	
    ALDURB3: DataTypes.INTEGER,	
    // Duration of arthritis/rheumatism, recode 2	
    ALDURB4: DataTypes.INTEGER,	
    // Duration of back or neck problem, recode 2	
    ALDURB5: DataTypes.INTEGER,	
    // Duration of fracture, bone/joint injury, recode 2	
    ULCCOLEV: DataTypes.INTEGER,	
    // Ever been told you had Crohn's disease/ulcerative colitis	
    ALDURB6: DataTypes.INTEGER,	
    // Duration of other injury, recode 2	
    ALDURB7: DataTypes.INTEGER,	
    // Duration of heart problem, recode 2	
    ALDURB8: DataTypes.INTEGER,	
    // Duration of stroke problem, recode 2	
    ALDURB9: DataTypes.INTEGER,	
    // Duration of hypertension or high blood pressure: recode 2	
    ALDURB10: DataTypes.INTEGER,	
    // Duration of diabetes, recode 2	
    ALDURB11: DataTypes.INTEGER,	
    // Duration of lung/breathing problem (e.g., asthma and emphysema), recode 2	
    ALDURB12: DataTypes.INTEGER,	
    // Duration of cancer, recode 2	
    ALDURB13: DataTypes.INTEGER,	
    // Duration of birth defect, recode 2	
    ALDURB15: DataTypes.INTEGER,	
    // Duration of other developmental problem (e.g., cerebral palsy), recode 2	
    ALDURB16: DataTypes.INTEGER,	
    // Duration of senility, recode 2	
    CANEV: DataTypes.INTEGER,	
    // Ever told by a doctor you had cancer	
    ALDURB17: DataTypes.INTEGER,	
    // Duration of depression/anxiety/emotional problem, recode 2	
    ALDURB18: DataTypes.INTEGER,	
    // Duration of weight problem, recode 2	
    ALDURB19: DataTypes.INTEGER,	
    // Duration of missing limbs (fingers, toes, or digits); amputation, recode 2	
    ALDURB20: DataTypes.INTEGER,	
    // Duration of musculoskeletal/connective tissue problem, recode 2	
    ALDURB21: DataTypes.INTEGER,	
    // Duration of circulation problems (including blood clots), recode 2	
    ALDURB22: DataTypes.INTEGER,	
    // Duration of endocrine/nutritional/metabolic problem, recode 2	
    ALDURB23: DataTypes.INTEGER,	
    // Duration of nervous system/sensory organ condition, recode 2	
    ALDURB24: DataTypes.INTEGER,	
    // Duration of digestive system problems, recode 2	
    ALDURB25: DataTypes.INTEGER,	
    // Duration of genitourinary system problem, recode 2	
    ALDURB26: DataTypes.INTEGER,	
    // Duration of skin/subcutaneous system problems, recode 2	
    CNKIND1: DataTypes.INTEGER,	
    // What kind of cancer ... Bladder	
    ALDURB27: DataTypes.INTEGER,	
    // Duration of blood or blood-forming organ problem, recode 2	
    ALDURB28: DataTypes.INTEGER,	
    // Duration of benign tumor/cyst, recode 2	
    ALDURB29: DataTypes.INTEGER,	
    // Duration of alcohol/drug/substance abuse problem, recode 2	
    ALDURB30: DataTypes.INTEGER,	
    // Duration of other mental problem/ADD/Bipolar/Schizophrenia, recode 2	
    ALDURB31: DataTypes.INTEGER,	
    // Duration of surgical after-effects/medical treatment problems, recode 2	
    ALDURB32: DataTypes.INTEGER,	
    // Duration of "old age"/elderly/aging-related problems, recode 2	
    ALDURB33: DataTypes.INTEGER,	
    // Duration of fatigue/tiredness/weakness problem, recode 2	
    ALDURB34: DataTypes.INTEGER,	
    // Duration of pregnancy-related problem, recode 2	
    ALDURB90: DataTypes.INTEGER,	
    // Duration of other impairment/problem N.E.C. (1), recode 2	
    ALDURB91: DataTypes.INTEGER,	
    // Duration of other impairment/problem N.E.C. (2), recode 2	
    CNKIND2: DataTypes.INTEGER,	
    // What kind of cancer ... Blood	
    ALCHRC1: DataTypes.INTEGER,	
    // Vision problem condition status recode	
    ALCHRC2: DataTypes.INTEGER,	
    // Hearing problem condition status recode	
    ALCHRC3: DataTypes.INTEGER,	
    // Arthritis/rheumatism condition status recode	
    ALCHRC4: DataTypes.INTEGER,	
    // Back or neck problem condition status recode	
    ALCHRC5: DataTypes.INTEGER,	
    // Fracture, bone/joint injury condition status recode	
    ALCHRC6: DataTypes.INTEGER,	
    // Other injury condition status recode	
    ALCHRC7: DataTypes.INTEGER,	
    // Heart problem condition status recode	
    ALCHRC8: DataTypes.INTEGER,	
    // Stroke problem condition status recode	
    ALCHRC9: DataTypes.INTEGER,	
    // Hypertension or high blood pressure condition status recode	
    ALCHRC10: DataTypes.INTEGER,	
    // Diabetes condition status recode	
    CNKIND3: DataTypes.INTEGER,	
    // What kind of cancer ... Bone	
    ALCHRC11: DataTypes.INTEGER,	
    // Lung/breathing problem (e.g., asthma and emphysema) condition status recode	
    ALCHRC12: DataTypes.INTEGER,	
    // Cancer condition status recode	
    ALCHRC13: DataTypes.INTEGER,	
    // Birth defect condition status recode	
    ALCHRC15: DataTypes.INTEGER,	
    // Other developmental problem (e.g., cerebral palsy) condition status recode	
    ALCHRC16: DataTypes.INTEGER,	
    // Senility condition status recode	
    ALCHRC17: DataTypes.INTEGER,	
    // Depression/anxiety/emotional problem condition status recode	
    ALCHRC18: DataTypes.INTEGER,	
    // Weight problem condition status recode	
    ALCHRC19: DataTypes.INTEGER,	
    // Missing limbs (fingers, toes, or digits); amputation condition status recode	
    ALCHRC20: DataTypes.INTEGER,	
    // Musculoskeletal/connective tissue problem condition status recode	
    ALCHRC21: DataTypes.INTEGER,	
    // Circulation problems (including blood clots) condition status recode	
    CNKIND4: DataTypes.INTEGER,	
    // What kind of cancer ... Brain	
    ALCHRC22: DataTypes.INTEGER,	
    // Endocrine/nutritional/metabolic problem condition status recode	
    ALCHRC23: DataTypes.INTEGER,	
    // Nervous system/sensory organ condition status recode	
    ALCHRC24: DataTypes.INTEGER,	
    // Digestive system problems condition status recode	
    ALCHRC25: DataTypes.INTEGER,	
    // Genitourinary system problem condition status recode	
    ALCHRC26: DataTypes.INTEGER,	
    // Skin/subcutaneous system problems condition status recode	
    ALCHRC27: DataTypes.INTEGER,	
    // Blood or blood-forming organ problem condition status recode	
    ALCHRC28: DataTypes.INTEGER,	
    // Benign tumor/cyst condition status recode	
    ALCHRC29: DataTypes.INTEGER,	
    // Alcohol /drug/substance abuse problem condition status recode	
    ALCHRC30: DataTypes.INTEGER,	
    // Other mental problem/ADD/Bipolar/Schizophrenia condition status recode	
    ALCHRC31: DataTypes.INTEGER,	
    // Surgical after-effects/medical treatment problems condition status recode	
    CNKIND5: DataTypes.INTEGER,	
    // What kind of cancer ... Breast	
    ALCHRC32: DataTypes.INTEGER,	
    // Old age"/elderly/aging-related problems condition status recode	
    ALCHRC33: DataTypes.INTEGER,	
    // Fatigue/tiredness/weakness problem condition status recode	
    ALCHRC34: DataTypes.INTEGER,	
    // Pregnancy-related condition status recode	
    ALCHRC90: DataTypes.INTEGER,	
    // Other impairment/problem N.E.C. (1) condition status recode	
    ALCHRC91: DataTypes.INTEGER,	
    // Other impairment/problem N.E.C. (2) condition status recode	
    FLA1AR: DataTypes.INTEGER,	
    // Any functional limitation, all conditions	
    ALCNDRT: DataTypes.INTEGER,	
    // Chronic condition recode for individual with functional limitation	
    ALCHRONR: DataTypes.INTEGER,	
    // Overall functional limitation recode by condition status	
    AFLHC19_: DataTypes.INTEGER,	
    // Missing or amputated limb/finger/digit causes difficulty with activity	
    AFLHC20_: DataTypes.INTEGER,	
    // Musculoskeletal/connective tissue problem causes difficulty with activity	
    CNKIND6: DataTypes.INTEGER,	
    // What kind of cancer ... Cervix	
    AFLHC21_: DataTypes.INTEGER,	
    // Circulation problems (including blood clots) cause difficulty with activity	
    AFLHC22_: DataTypes.INTEGER,	
    // Endocrine/nutritional/metabolic problem causes difficulty with activity	
    AFLHC23_: DataTypes.INTEGER,	
    // Nervous system/sensory organ condition causes difficulty with activity	
    AFLHC24_: DataTypes.INTEGER,	
    // Digestive system problem causes difficulty with activity	
    AFLHC25_: DataTypes.INTEGER,	
    // Genitourinary system problem causes difficulty with activity	
    AFLHC26_: DataTypes.INTEGER,	
    // Skin/subcutaneous system problem causes difficulty with activity	
    AFLHC27_: DataTypes.INTEGER,	
    // Blood or blood-forming organ problem causes difficulty with activity	
    AFLHC28_: DataTypes.INTEGER,	
    // Benign tumor/cyst causes difficulty with activity	
    AFLHC29_: DataTypes.INTEGER,	
    // Alcohol/drug/substance abuse problem causes difficulty with activity	
    AFLHC30_: DataTypes.INTEGER,	
    // Other mental problem/ADD/Bipolar/Schizophrenia causes difficulty with activity	
    CNKIND7: DataTypes.INTEGER,	
    // What kind of cancer ... Colon	
    AFLHC31_: DataTypes.INTEGER,	
    // Surgical after-effects/medical treatment causes difficulty with activity	
    AFLHC32_: DataTypes.INTEGER,	
    // Old age"/elderly/aging-related problem causes difficulty with activity	
    AFLHC33_: DataTypes.INTEGER,	
    // Fatigue/tiredness/weakness causes difficulty with activity	
    AFLHC34_: DataTypes.INTEGER,	
    // Pregnancy-related problem causes difficulty with activity	
    ALHCA14A: DataTypes.INTEGER,	
    // Intellectual disability, AKA mental retardation causes difficulty with activity	
    ATIME14A: DataTypes.INTEGER,	
    // Duration of intellectual disability, AKA mental retardation: Number of units	
    AUNIT14A: DataTypes.INTEGER,	
    // Duration of intellectual disability, also know as mental retardation: Time unit	
    ADURA14A: DataTypes.INTEGER,	
    // Duration (in years) of intellectual disability, AKA mental retardation, recode	
    ADURB14A: DataTypes.INTEGER,	
    // Duration of intellectual disability, also known as mental retardation, recode 2	
    ACHRC14A: DataTypes.INTEGER,	
    // Intellectual disability, AKA mental retardation condition status recode	
    SEX: DataTypes.INTEGER,	
    // Sex	
    CNKIND8: DataTypes.INTEGER,	
    // What kind of cancer ... Esophagus	
    DOINGLWA: DataTypes.INTEGER,	
    // Corrected employment status last week	
    WHYNOWKA: DataTypes.INTEGER,	
    // Main reason for not working last week	
    EVERWRK: DataTypes.INTEGER,	
    // Ever worked	
    SUPERVIS: DataTypes.INTEGER,	
    // Supervise other employees as part of job	
    WRKCATA: DataTypes.INTEGER,	
    // Class of worker	
    BUSINC1A: DataTypes.INTEGER,	
    // Current job an incorporated business	
    LOCALL1B: DataTypes.INTEGER,	
    // Number of employees at work	
    WRKLONGH: DataTypes.INTEGER,	
    // Current/most recent job also longest held job	
    HOURPDA: DataTypes.INTEGER,	
    // Paid by the hour at current or most recent job	
    PDSICKA: DataTypes.INTEGER,	
    // Paid sick leave at current or most recent job	
    CNKIND9: DataTypes.INTEGER,	
    // What kind of cancer ... Gallbladder	
    ONEJOB: DataTypes.INTEGER,	
    // Have more than one job	
    NIGHTWK: DataTypes.INTEGER,	
    // Work between 1 am and 5 am, past 30 days	
    JOBDMAND: DataTypes.INTEGER,	
    // Have enough time to get job done	
    JOBCNTRL: DataTypes.INTEGER,	
    // Job allows me to make decisions	
    JOBSPPRT: DataTypes.INTEGER,	
    // Have support from supervisor when necessary	
    SAFETY: DataTypes.INTEGER,	
    // How safe is workplace	
    SAFCLIMT: DataTypes.INTEGER,	
    // Employee health/safety important to management	
    HARASSED: DataTypes.INTEGER,	
    // Threatened or harrassed while on the job	
    HARASFRQ: DataTypes.INTEGER,	
    // Frequency of harassment	
    EXERTION: DataTypes.INTEGER,	
    // How often does job require repeated activities like lifting, pulling, etc	
    CNKIND10: DataTypes.INTEGER,	
    // What kind of cancer ... Kidney	
    STAND: DataTypes.INTEGER,	
    // How often does job require standing or walking	
    HLTHPROM: DataTypes.INTEGER,	
    // Health promotion programs available at work, past year	
    HPROMPAR: DataTypes.INTEGER,	
    // How often participate in health promotion programs, past year	
    WRKCTLH: DataTypes.INTEGER,	
    // Class of worker (current job is not longest job)	
    WRKLYR4: DataTypes.INTEGER,	
    // Work status: last week, past 12 months	
    INDSTRN1: DataTypes.INTEGER,	
    // Detailed industry classification based on 2012 Census codes	
    INDSTRN2: DataTypes.INTEGER,	
    // Simple industry classification based on 2012 Census codes	
    OCCUPN1: DataTypes.INTEGER,	
    // Detailed occupation classification based on 2010 Census Codes	
    OCCUPN2: DataTypes.INTEGER,	
    // Simple occupation classification based on 2010 Census codes	
    YRSWRKPA: DataTypes.INTEGER,	
    // Number of years on the job	
    CNKIND11: DataTypes.INTEGER,	
    // What kind of cancer ... larynx-windpipe	
    INDSTLH1: DataTypes.INTEGER,	
    // Detailed industry classification (current job is not longest job)	
    INDSTLH2: DataTypes.INTEGER,	
    // Simple industry classification (current job is not longest job)	
    OCCLH1: DataTypes.INTEGER,	
    // Detailed occupation classification (current job is not longest job)	
    OCCLH2: DataTypes.INTEGER,	
    // Simple occupation classification (current job is not longest job)	
    YRSWKLH: DataTypes.INTEGER,	
    // Number of years on this job (current job is not longest job)	
    WORKSCHD: DataTypes.INTEGER,	
    // Usual work schedule	
    WRK_FAM: DataTypes.INTEGER,	
    // Job interferes with personal or family life	
    WORLSJOB: DataTypes.INTEGER,	
    // Worried about losing job	
    TBSMKEXP: DataTypes.INTEGER,	
    // How often exposed to second-hand smoke at work, past 12 m	
    WRKARR_P: DataTypes.INTEGER,	
    // Work arrangement	
    CNKIND12: DataTypes.INTEGER,	
    // What kind of cancer ... Leukemia	
    NIGHTFRP: DataTypes.INTEGER,	
    // How many times did you work between 1 am and 5 am, past 30 days	
    AWEBUSE: DataTypes.INTEGER,	
    // Internet use	
    AWEBOFNO: DataTypes.INTEGER,	
    // Frequency internet use: # of units	
    AWEBOFTP: DataTypes.INTEGER,	
    // Frequency internet use: Time units	
    AWEBORP: DataTypes.INTEGER,	
    // Online research panel membership	
    AWEBEML: DataTypes.INTEGER,	
    // Email use	
    AWEBMNO: DataTypes.INTEGER,	
    // Frequency email use: # of units	
    AWEBMTP: DataTypes.INTEGER,	
    // Frequency email use: Time units	
    SMKAGX_P: DataTypes.INTEGER,	
    // Age first time smoked a cigarette (not smkd or dk if smkd 100+ cigs)	
    SMKNOX_P: DataTypes.INTEGER,	
    // Time since smoked cig:# of units(not smkd/dk if smkd 100+cigs,lst 1smkd,non-smk	
    CNKIND13: DataTypes.INTEGER,	
    // What kind of cancer ... Liver	
    CNKIND14: DataTypes.INTEGER,	
    // What kind of cancer ... Lung	
    CNKIND15: DataTypes.INTEGER,	
    // What kind of cancer ... Lymphoma	
    CNKIND16: DataTypes.INTEGER,	
    // What kind of cancer ... Melanoma	
    CNKIND17: DataTypes.INTEGER,	
    // What kind of cancer ... mouth/tongue/lip	
    HISPAN_I: DataTypes.INTEGER,	
    // Hispanic subgroup detail	
    CNKIND18: DataTypes.INTEGER,	
    // What kind of cancer ... Ovary	
    CNKIND19: DataTypes.INTEGER,	
    // What kind of cancer ... Pancreas	
    CNKIND20: DataTypes.INTEGER,	
    // What kind of cancer ... Prostate	
    CNKIND21: DataTypes.INTEGER,	
    // What kind of cancer ... Rectum	
    CNKIND22: DataTypes.INTEGER,	
    // What kind of cancer ... skin (non-melanoma)	
    CNKIND23: DataTypes.INTEGER,	
    // What kind of cancer ... skin (DK kind)	
    CNKIND24: DataTypes.INTEGER,	
    // What kind of cancer ... soft tissue (muscle or fat)	
    CNKIND25: DataTypes.INTEGER,	
    // What kind of cancer ... Stomach	
    CNKIND26: DataTypes.INTEGER,	
    // What kind of cancer ... Testis	
    CNKIND27: DataTypes.INTEGER,	
    // What kind of cancer ... throat - pharynx	
    R_MARITL: DataTypes.INTEGER,	
    // Marital Status	
    CNKIND28: DataTypes.INTEGER,	
    // What kind of cancer ... Thyroid	
    CNKIND29: DataTypes.INTEGER,	
    // What kind of cancer ... Uterus	
    CNKIND30: DataTypes.INTEGER,	
    // What kind of cancer ... Other	
    CNKIND31: DataTypes.INTEGER,	
    // What kind of cancer ... more than 3 kinds	
    DIBEV: DataTypes.INTEGER,	
    // Ever been told that you have diabetes	
    DIBPRE1: DataTypes.INTEGER,	
    // Ever had prediabetes or other symptoms	
    INSLN: DataTypes.INTEGER,	
    // NOW taking insulin	
    DIBPILL: DataTypes.INTEGER,	
    // NOW taking diabetic pills	
    EPILEP1: DataTypes.INTEGER,	
    // Ever been told you had seizure disorder/epilepsy	
    EPILEP2: DataTypes.INTEGER,	
    // Now taking epilepsy meds	
    MRACRPI2: DataTypes.INTEGER,	
    // Race coded to single/multiple race group	
    EPILEP3: DataTypes.INTEGER,	
    // # Seizures past 12 m	
    EPILEP4: DataTypes.INTEGER,	
    // Seen neurologist/specialist past 12 m	
    EPILEP5: DataTypes.INTEGER,	
    // Epilepsy interfered w/ activities past 30 d	
    AHAYFYR: DataTypes.INTEGER,	
    // Told that you had hay fever, past 12 m	
    SINYR: DataTypes.INTEGER,	
    // Told that you had sinusitis, past 12 m	
    CBRCHYR: DataTypes.INTEGER,	
    // Told you had chronic bronchitis, 12 m	
    KIDWKYR: DataTypes.INTEGER,	
    // Told you had weak/failing kidneys, 12 m	
    LIVYR: DataTypes.INTEGER,	
    // Told you had liver condition, past 12 m	
    JNTSYMP: DataTypes.INTEGER,	
    // Symptoms of joint pain/aching/stiffness past 30 d	
    JMTHP1: DataTypes.INTEGER,	
    // Which joint affected...shoulder-right
  })
  return BFRSS, NHIS
};
