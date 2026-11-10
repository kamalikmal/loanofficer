// =============================================================================
// LOAN OFFICER: DESK OF FATE - DAYS_DATA_EN.JS (REAL USD STANDARDIZED)
// =============================================================================

const NAMES_M_EN = [
  "James Miller", "Robert Davis", "John Carter", "Michael Evans", "David Clark",
  "William Wright", "Richard Turner", "Thomas Adams", "Charles Baker", "Daniel King",
  "Matthew Scott", "Anthony Green", "Mark Nelson", "Donald Hill", "Steven Moore",
  "Paul Taylor", "Andrew Anderson", "Joshua White", "Kenneth Harris", "Kevin Martin",
  "Brian Thompson", "George Garcia", "Edward Martinez", "Ronald Robinson", "Timothy Lewis",
  "Jason Lee", "Jeffrey Walker", "Ryan Hall", "Jacob Allen", "Gary Young",
  "Nicholas Hernandez", "Eric King", "Jonathan Wright", "Stephen Lopez", "Larry Hill",
  "Justin Scott", "Scott Green", "Brandon Adams", "Frank Baker", "Benjamin Gonzalez",
  "Gregory Nelson", "Samuel Carter", "Raymond Mitchell", "Patrick Perez", "Alexander Roberts",
  "Jack Turner", "Dennis Phillips", "Jerry Campbell", "Tyler Parker", "Aaron Evans",
  "Henry Edwards", "Douglas Collins", "Peter Stewart", "Adam Sanchez", "Nathan Morris",
  "Zachary Rogers", "Walter Reed", "Harold Cook", "Arthur Morgan", "Carl Bell"
];

const NAMES_F_EN = [
  "Mary Smith", "Patricia Johnson", "Jennifer Williams", "Linda Brown", "Elizabeth Jones",
  "Barbara Garcia", "Susan Miller", "Jessica Davis", "Sarah Rodriguez", "Karen Martinez",
  "Nancy Hernandez", "Margaret Lopez", "Lisa Gonzalez", "Betty Wilson", "Dorothy Anderson",
  "Sandra Thomas", "Ashley Taylor", "Kimberly Moore", "Donna Jackson", "Emily Martin",
  "Carol Lee", "Michelle Perez", "Amanda Thompson", "Melissa White", "Deborah Harris",
  "Stephanie Sanchez", "Rebecca Clark", "Sharon Ramirez", "Laura Lewis", "Cynthia Robinson",
  "Kathleen Walker", "Amy Young", "Shirley Allen", "Angela King", "Helen Wright",
  "Anna Scott", "Brenda Torres", "Pamela Nguyen", "Nicole Hill", "Samantha Flores",
  "Katherine Green", "Christine Adams", "Debra Nelson", "Rachel Baker", "Catherine Hall",
  "Carolyn Rivera", "Janet Campbell", "Ruth Mitchell", "Maria Carter", "Heather Roberts",
  "Diane Gomez", "Virginia Phillips", "Julie Evans", "Joyce Turner", "Victoria Diaz",
  "Olivia Parker", "Kelly Cruz", "Christina Edwards", "Lauren Collins", "Megan Reyes"
];

const usedNamesEn = new Set();

function getNameEn(gender) {
  const pool = gender === "Female"? NAMES_F_EN: NAMES_M_EN;
  const available = pool.filter(n =>!usedNamesEn.has(n));

  if (available.length > 0) {
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];
    usedNamesEn.add(chosen);
    return chosen;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function makeNikEn(dob, gender, isValid) {
  const [d, m, y] = dob.split("-");
  let dayVal = parseInt(d, 10);
  if (gender === "Female") dayVal += 40;
  if (!isValid) dayVal = dayVal > 45? dayVal - 15: dayVal + 15;
  const dayStr = dayVal.toString().padStart(2, "0");
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `3201${dayStr}${m}${y.slice(-2)}${randNum}`;
}

function cEn(id, g, dob, job, isFree, inc, loan, inst, tenM, purp, sec, kol, kDesc, colT, colV, phNo, phResp, isPhOk, rel, isNikOk, dec, fail, nApp, nDec) {
  return { id, g, dob, job, isFree, inc, loan, inst, tenM, purp, sec, kol, kDesc, colT, colV, phNo, phResp, isPhOk, rel, isNikOk, dec, fail, nApp, nDec };
}

const MASTER_CONFIG_EN = {
  1: {
    minCash: 10000, maxCash: 20000, deskQuota: { a: 3, d: 1 },
    sticky: "Beginning of month target! Do not approve loans for freelancers today, their cashflow is too volatile!",
    approve: [
      cEn("D1-A1","Male","12-10-1994","Permanent Corporate Staff",false,3500,6000,700,12,"Grocery Store Expansion","Productive",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",7000,"021-5558911","Confirmed, active permanent employee since 2018.",true,"None",true,"APPROVE","","Fresh Capital Injected, Grocery Chain Opens Dozens of Local Jobs","Predatory Loan Shark Rates Crush Corporate Worker's Hopes"),
      cEn("D1-A2","Female","15-05-1991","Tenured School Teacher",false,3000,5000,600,18,"Daughter's College Tuition","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",6000,"021-8845112","Active permanent teacher at our institution.",true,"None",true,"APPROVE","","Tears of Joy: Dedicated Teacher's Daughter Finally Graduates College","Overdue Tuition Debts Mount, Honor Student Forced to Withdraw"),
      cEn("D1-A3","Male","20-11-1997","Corporate Accountant",false,3200,5000,640,12,"Brother's Auto Repair Startup","Productive",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",6400,"021-3349001","Active member of our internal accounting team.",true,"None",true,"APPROVE","","Brothers Launch Successful Welding and Auto Repair Facility","Loan Denied Flat Out, Promising Local Youth Faces Prolonged Unemployment"),
      cEn("D1-A4","Female","19-01-1995","Logistics HR Specialist",false,2800,4000,560,12,"Nursery Room Renovation","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",5000,"021-5544111","Active HR specialist here for over 2 years.",true,"None",true,"APPROVE","","Welcoming First Child: Couple Completes Safe and Healthy Nursery","Damp Unsanitary Room Escalates Newborn Infant Respiratory Illness"),
      cEn("D1-A5","Male","05-11-1988","Supermarket Supervisor",false,4000,7000,1000,12,"3-Phase Industrial Power Grid","Productive",1,"Current (Rating 1)","Minivan Title (Ownership Document)",11000,"021-7788441","Active day-shift supervisor on duty.",true,"None",true,"APPROVE","","New Industrial Grid Live, Supermarket Expands Cold Storage Capacity","Power Supply Crisis Deepens, Perishable Supermarket Stock Spoils"),
      cEn("D1-A6","Female","22-08-1993","Public Hospital Midwife",false,3500,4500,700,12,"Private Maternity Clinic Tools","Productive",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",5600,"021-9988114","Registered and certified hospital ward midwife.",true,"None",true,"APPROVE","","Independent Maternity Clinic Opens Doors to Underserved Villages","Scarce Maternity Facilities Force Expectant Mothers onto Perilous Treks")
    ],
    decline: [
      cEn("D1-D1","Female","08-04-2000","Freelance Graphic Designer",true,5000,8000,1160,12,"Digital Workstation Upgrade","Productive",1,"Current (Rating 1)","Gold Asset",10000,"0812-9988-771","Frequently takes independent freelance gigs.",true,"None",true,"DECLINE","Violates Sticky Note: Applicant is a Freelance Worker.","Freelancer Vanishes with Substantial Loan Capital Without Trace","Designers Guild Protests Bank Discrimination Against Creative Workers"),
      cEn("D1-D2","Male","03-07-1996","Freelance Photographer",true,3000,3500,580,12,"Camera Lens Kit Upgrade","Productive",1,"Current (Rating 1)","Camera Rig Title (Ownership Document)",4500,"0813-2211-990","I work as an independent freelance photographer.",true,"None",true,"DECLINE","Violates Sticky Note: Applicant is a Freelancer.","Default Rates Surge Following Rampant Unregulated Gig Worker Loans","Unable to Secure Gear, Young Photographer Loses Commercial Contract"),
      cEn("D1-D3","Female","18-12-1991","Administrative Clerk",false,2000,5000,800,12,"Family Debt Consolidation","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",2500,"021-6655112","Active office administrative clerk.",true,"None",true,"DECLINE","Violates SOP 1: DTI ratio is 40.0% (Exceeds maximum 30.0%).","Monthly Salary Fully Drained, Desperate Borrower Abandons Residence","Loan Officer's Prudence Protects Worker from Catastrophic Debt Spiral"),
      cEn("D1-D4","Male","25-06-1989","Warehouse Operations Staff",false,2000,4000,700,12,"Fleet Vehicle Overhaul","Productive",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",3600,"021-4458900","Active staff in our warehousing division.",true,"None",true,"DECLINE","Violates SOP 1: DTI ratio is 35.0% (Exceeds maximum 30.0%).","Repo Seizure of Fleet Vehicle Triggers Logistics Hub Brawl","Officer Thwarts Default Risk for Overleveraged Logistics Employee")
    ]
  },
  2: {
    minCash: 12000, maxCash: 22000, deskQuota: { a: 3, d: 2 },
    sticky: "Prioritize medical emergency loans! Reject anyone applying for entertainment or vacation purposes.",
    approve: [
      cEn("D2-A1","Female","14-02-1990","Pediatrician Specialist",false,7500,8000,1500,12,"Private Clinic Incubator Unit","Productive",1,"Current (Rating 1)","Sedan Title (Ownership Document)",16000,"021-4458900","Official and active medical clinic license.",true,"None",true,"APPROVE","","Critical Minutes: Brand-New Incubator Saves Premature Baby's Life","Lack of Incubator Units Leads to Tragedy for Rural Referral Patients"),
      cEn("D2-A2","Male","22-03-1988","Industrial Plant Technician",false,3600,7500,960,15,"Spouse's Cancer Surgery","Consumer",1,"Current (Rating 1)","House Deed",18000,"021-8899120","Active chief plant mechanic on staff.",true,"None",true,"APPROVE","","Tumor Removal Surgery Fully Successful, Smiles Return to Household","Delayed Surgical Intervention Causes Cancer Patient's Rapid Decline"),
      cEn("D2-A3","Male","05-07-1993","Licensed Pharmacist",false,3500,6500,810,15,"Emergency Anti-Venom Restock","Productive",1,"Current (Rating 1)","Car Title (Ownership Document)",12000,"021-9988114","Valid licensed clinical pharmacist.",true,"None",true,"APPROVE","","Snakebite Antivenom Stocked, Rural Farmer's Life Saved in Time","Antivenom Depletion Sparks Panic Across Remote Healthcare Facilities"),
      cEn("D2-A4","Female","10-09-1987","Elementary School Teacher",false,2800,5000,550,18,"Parent's Cataract Surgery","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",5500,"021-8845112","Active verified teacher at our school.",true,"None",true,"APPROVE","","Seeing the Light Again: Elderly Patient Recovers Vision After Surgery","Senior Faces Irreversible Blindness Following Postponed Cataract Care"),
      cEn("D2-A5","Male","15-02-1984","Warehouse Shift Lead",false,3500,6000,700,18,"Child's Orthopedic Surgery","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",16000,"021-7788441","Active shift lead on duty.",true,"None",true,"APPROVE","","First Steps: Fracture Victim Takes Confident Steps Post-Surgery","Untreated Bone Fracture Worsens as Working Family Struggles with Bills"),
      cEn("D2-A6","Female","20-03-1996","Corporate HR Staff",false,2600,3600,510,12,"Post-Trauma Physiotherapy","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",4800,"021-3349001","Active member of corporate HR division.",true,"None",true,"APPROVE","","Intensive Physical Therapy Complete, Employee Productivity Restored","Permanent Disability Looms as Patient Abandons Therapy Over Costs")
    ],
    decline: [
      cEn("D2-D1","Male","09-06-1995","Logistics Supervisor",false,3600,6000,840,12,"European Vacation Package","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",9000,"021-7788441","Active in operational logistics.",true,"None",true,"DECLINE","Violates Sticky Note: Loan purpose is vacation/tourism.","Luxury Vacation Credit Scandal Exposed, Branch Receives Stern Warning","Youth Pivot to Personal Savings as Banks Tighten Travel Credit Terms"),
      cEn("D2-D2","Male","17-08-1997","Warehouse Logistics Staff",false,2000,4000,430,18,"Kitchen Renovation","Consumer",4,"Rating 4 (Doubtful / 120+ Days Overdue)","Motorcycle Title (Ownership Document)",4800,"021-6655112","Contract warehouse operator.",true,"None",true,"DECLINE","Violates SOP SLIK: Credit Bureau Rating 4 (Doubtful / High Delinquency).","Habitual Default Offender Tracked by Regulators After Brazen Loan Application","Community Volunteers Rally to Renovate Needy Laborer's Dilapidated Kitchen"),
      cEn("D2-D3","Male","29-10-1994","Systems Analyst",false,3800,5000,720,12,"Music Festival VIP Passes","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",10000,"021-5544111","Active systems analyst on our IT staff.",true,"None",true,"DECLINE","Violates Sticky Note: Loan purpose is leisure/festival tickets.","Leisure Credit Crackdown Underway as Central Authorities Probe Bank","Music Fans Face Reality as Lenders Clamp Down on Unsecured Fun"),
      cEn("D2-D4","Female","17-05-1992","Bookkeeper Specialist",false,2600,4000,540,12,"Cesarean Childbirth Delivery","Consumer",2,"Rating 2 (Special Mention / 60 Days Overdue)","Motorcycle Title (Ownership Document)",3000,"021-3322119","Active bookkeeper in accounting.",true,"None",true,"DECLINE","Violates SOP SLIK: Bureau Rating 2 requires >= 120% collateral (Provided is only 75%).","Bad Debt Surges After Delinquent Debtor Slipped Past Scrutiny","Uncompromising Rules: SLIK Credit Scoring Preserves Branch Balance Sheet"),
      cEn("D2-D5","Male","21-11-1983","Transit Civil Servant",false,3000,5000,690,12,"Kitchen Remodeling","Consumer",5,"Rating 5 (Default / Bad Debt Write-Off)","Motorcycle Title (Ownership Document)",3600,"021-9988443","Active traffic department officer.",true,"None",true,"DECLINE","Violates SOP SLIK: Credit Bureau Rating 5 (Default / Write-off).","Audit Discloses Illicit Approval of Written-Off Default Debtor","Instant Termination Awaits Staff Who Greenlight Blacklisted Applicants"),
      cEn("D2-D6","Female","06-03-1995","Dispatch Counter Clerk",false,2200,5500,815,12,"Family Outpatient Care","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",2800,"021-4433221","Active parcel processing clerk.",true,"None",true,"DECLINE","Violates SOP 1: DTI ratio 37.0% (Exceeds maximum 30.0%).","Excessive Installments Force Warehouse Worker into Asset Liquidation","Family Recognizes Financial Boundaries Following Prudent Credit Denial")
    ]
  },
  3: {
    minCash: 18000, maxCash: 30000, deskQuota: { a: 3, d: 2 },
    sticky: "Strictly forbid loans to family members or relatives of regional government officials! Bribery and conflict of interest risks.",
    approve: [
      cEn("D3-A1","Male","10-03-1981","Building Contractor",false,7500,15000,2000,12,"Village Concrete Bridge","Productive",1,"Current (Rating 1)","Land Title Deed",22000,"021-5544111","Chief project operations director.",true,"None",true,"APPROVE","","Full Village Access Restored, Concrete Bridge Completed Ahead of Deadline","Treacherous River Crossing: Dozens of Schoolchildren Nearly Swept Away"),
      cEn("D3-A2","Female","12-11-1985","Home Catering Business",false,5000,10000,1350,12,"Banquet Culinary Equipment","Productive",1,"Current (Rating 1)","Gold Bullion",13000,"021-3322119","Actively manages banquet orders.",true,"None",true,"APPROVE","","Traditional Catering Firm Delivers Historic Feast for International Guests","Inadequate Equipment Leaves Home Catering Enterprise with Crushing Losses"),
      cEn("D3-A3","Male","29-09-1990","Bakery Supplies Wholesaler",false,4000,7000,1020,12,"Bulk Flour Wholesale Restock","Productive",1,"Current (Rating 1)","Minivan Car Deed",10000,"021-4433221","Legitimate warehouse business owner.",true,"None",true,"APPROVE","","Abundant Flour Supplies Keep Dozens of Artisan Bakeries Thriving","Raw Material Price Spikes Force Handful of Bakeries to Shutter Operations"),
      cEn("D3-A4","Male","14-04-1986","Precision Lathe Workshop",false,5500,10000,1350,12,"Industrial CNC Lathe Machine","Productive",1,"Current (Rating 1)","Land Title Deed",15000,"021-8877112","Certified precision mechanic.",true,"None",true,"APPROVE","","State-of-the-Art CNC Unit Propels Local Auto Spare Parts Competitiveness","Outdated Machinery Breaks Down, Lucrative Auto Orders Flee Overseas"),
      cEn("D3-A5","Female","18-08-1992","Apparel Boutique Owner",false,4500,8000,1080,12,"Holiday Apparel Restock","Productive",1,"Current (Rating 1)","Gold Bullion",11000,"021-7766554","Registered boutique owner.",true,"None",true,"APPROVE","","Fashion Boutique Shatters Revenue Records Ahead of Peak Festive Season","Stock Shortages Lead to Heavy Customer Disappointment at Boutique"),
      cEn("D3-A6","Male","25-01-1987","Poultry Farm Operator",false,6000,12000,1590,12,"Feed Milling Machinery","Productive",1,"Current (Rating 1)","Land Title Deed",17000,"021-4455663","Independent registered poultry farmer.",true,"None",true,"APPROVE","","In-House Feed Milling Slashes Egg Prices Across Central Wholesale Markets","Soaring Feed Prices Force Local Poultry Farmer into Emergency Cull")
    ],
    decline: [
      cEn("D3-D1","Male","25-01-1998","Youth Cafe Proprietor",false,6000,12000,1650,12,"Cafe Branch Expansion","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",30000,"021-7788992","He is the direct biological son of the Vice Mayor.",true,"Biological Son of Regional Vice Mayor",true,"DECLINE","Violates Sticky Note: Close relative / child of regional government official.","Suspected Municipal Bank Funds Funneled to Politicians' Family Interests","Official Laments: Politician's Son Treated with Same Rigid Rules"),
      cEn("D3-D2","Male","18-04-1992","Metal Welding Workshop",false,4500,10000,1350,12,"Precision Lathe Equipment","Productive",1,"Current (Rating 1)","Aged Pickup Truck",10400,"021-9988443","Workshop owner.",true,"None",true,"DECLINE","Violates SOP 3: Collateral is only 104% (Must be >= 120% = $12,000).","Underwater Collateral: Seized Dilapidated Truck Fails to Sell at Auction","Welding Facility Delays Expansion to Sidestep Under-Collateralized Risk"),
      cEn("D3-D3","Female","30-07-1993","Hydroponic Seed Supplier",false,3800,9000,1140,12,"Hydroponic Seeds Restock","Productive",1,"Current (Rating 1)","Orchard Land Deed",14000,"021-3311998","Sister-in-law to the Regional Planning Board Chief.",true,"Sister-in-Law to Planning Board Chief",true,"DECLINE","Violates Sticky Note: Relative of regional municipal official.","Special Audit Probes Political Interference Across Credit Review Channel","Seed Distributor Chooses Independent Investors Over Nepotistic Ties"),
      cEn("D3-D4","Male","11-06-1989","Commercial Printing Firm",false,4000,8000,1140,12,"Industrial Banner Printer","Productive",1,"Current (Rating 1)","MPV Car",8400,"021-8822339","Registered commercial printing owner.",true,"None",true,"DECLINE","Violates SOP 3: Collateral is only 105% (Minimum 120% = $9,600).","Bank Absorbs Heavy Asset Write-Off from Substandard Debtor Collateral","Print Shop Owner Prepares Better Property Titles to Satisfy Lending Criteria"),
      cEn("D3-D5","Female","19-10-1994","Office Catering Service",false,3500,7000,990,12,"Commercial Banquet Kitchenware","Productive",1,"Current (Rating 1)","Utility Van",7600,"021-4455881","Wife of Regional Asset Management Director.",true,"Wife of Regional Asset Director",true,"DECLINE","Violates Sticky Note: Spouse of regional government director.","Whiff of Nepotism: Official's Wife's Loan Ruled in Gross Breach of Policy","Bank Integrity Applauded: High-Profile Political Application Dismissed"),
      cEn("D3-D6","Male","04-02-1991","Cooking Oil Distributor",false,5000,12000,1500,12,"Oil Drum Bulk Procurement","Productive",1,"Current (Rating 1)","Pickup Truck",13000,"021-3322771","Active wholesale distributor.",true,"None",true,"DECLINE","Violates SOP 3: Collateral is only 108% (Below mandatory 120% = $14,400).","Auction of Substandard Collateral Punches Hole in Branch Balance Sheet","Oil Distributor Partners Up with Colleague to Meet Mandatory Security")
    ]
  },
  4: {
    minCash: 22000, maxCash: 35000, deskQuota: { a: 3, d: 3 },
    sticky: "Collateral portfolio audit in progress! Reject loans backed by Motorcycle Titles. Accept only Cars or Land/Real Estate!",
    approve: [
      cEn("D4-A1","Male","15-08-1993","Shoe Factory Supervisor",false,4500,11000,1200,14,"Export Sewing Production Line","Productive",1,"Current (Rating 1)","Land Title Deed",16000,"021-8877112","Active supervisor in export manufacturing.",true,"None",true,"APPROVE","","New Assembly Line Operational, Footwear Exports Penetrate US Retailers","Lack of Stitching Capacity Torpedoes Major International Athletic Contract"),
      cEn("D4-A2","Male","05-02-1982","Logistics Operations Manager",false,5500,14000,1550,14,"Refrigerated Food Truck Fleet","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",22000,"021-4455663","Permanent manager employed since 2012.",true,"None",true,"APPROVE","","Refrigerated Truck Fleet Deployed, Staple Grain Distribution Secured","Aging Fleet Cripples Food Logistics, Farmers Incur Heavy Losses"),
      cEn("D4-A3","Male","11-11-1989","EV Motor Workshop",false,4800,12000,1350,14,"EV Battery Testing Workstation","Productive",1,"Current (Rating 1)","House Deed",17000,"021-3311998","Owner of licensed EV repair shop.",true,"None",true,"APPROVE","","EV Battery Testing Center Opens, Dozens of Youth Join Technical Apprenticeship","Inadequate Equipment Forces Promising Clean Vehicle Startup into Halt"),
      cEn("D4-A4","Female","24-06-1991","Infant Milk Distributor",false,4200,9000,1170,14,"Pasteurized Milk Stock","Productive",1,"Current (Rating 1)","Box Truck Title (Ownership Document)",12000,"021-6677889","Licensed formula distributor.",true,"None",true,"APPROVE","","Infant Nutrition Supply Maintained, Regional Toddler Health Secured","Fresh Milk Outages Cause Deep Anxiety as Market Prices Spike Sharply"),
      cEn("D4-A5","Male","17-03-1985","Rice Mill Facility Operator",false,5800,15000,1625,14,"Industrial Grain Sifter Upgrade","Productive",1,"Current (Rating 1)","Farmland Deed",23000,"021-9988334","Active rice mill plant operator.",true,"None",true,"APPROVE","","Rice Milling Purity Surges, Merchants Buy Up Record Harvest Yields","Frequent Mill Jams Tarnish Grain Quality and Punish Farming Incomes"),
      cEn("D4-A6","Female","09-12-1993","Artisanal Tofu Factory",false,3800,9000,1050,14,"Hygienic Steam Boiler Kettle","Productive",1,"Current (Rating 1)","Sedan Car Title (Ownership Document)",12000,"021-2233445","Certified hygienic food production facility.",true,"None",true,"APPROVE","","Clean Green Manufacturing: Tofu Factory Installs Modern Steam Boilers","Traditional Plant Reverts to Firewood After Failing to Secure Modern Boiler"),
      cEn("D4-A7","Male","28-04-1988","Supermarket Produce Vendor",false,4600,11000,1250,14,"Cold Storage Transit Vehicle","Productive",1,"Current (Rating 1)","Warehouse Deed",17000,"021-8899776","Certified organic produce distributor.",true,"None",true,"APPROVE","","Fresh Vegetables Reach Major Supermarket Aisles via Chilled Transits","Organic Produce Spoils in Transit Due to Lack of Chilled Logistics")
    ],
    decline: [
      cEn("D4-D1","Male","10-04-1997","Modern Warehousing Staff",false,3500,8000,875,12,"Primary Home Renovation","Consumer",1,"Current (Rating 1)","Sedan Car Title (Ownership Document)",11000,"021-7766554","Warehouse administrative assistant.",true,"None",false,"DECLINE","Violates SOP 4: Forged National ID (DOB does not match digits).","Counterfeit ID Syndicate Raids Lenders, Police Dismantle Forgery Ring","Sharp-Eyed Officer Flags Mismatched ID Digits, Thwarting Syndicate Fraud"),
      cEn("D4-D2","Female","14-09-1996","Executive Secretary",false,3200,8000,800,14,"Wedding Ceremony Expenses","Consumer",1,"Current (Rating 1)","Land Title Deed",13000,"021-9999000","This phone number is unassigned.",false,"None",true,"DECLINE","Violates SOP 4: Employer phone is unlisted/fictitious.","Phantom Employment Letters Target Financial Sector, Suspects Face Prison","Unanswered Landlines: Officer's Diligent Phone Check Busts Ghost Employee"),
      cEn("D4-D3","Male","19-07-1991","Sand & Aggregate Depot",false,4000,8000,900,14,"Structural Sand Restock","Productive",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",11000,"021-8822339","Active depot owner.",true,"None",true,"DECLINE","Violates Sticky Note: Collateral pledged is a Motorcycle Title.","Depot Overflows with Seized Bikes, Regulators Mandate Collateral Shift","Sand Merchant Transitions Security to Solid Family Property Deeds"),
      cEn("D4-D4","Male","22-10-1993","Neighborhood Grocery",false,3400,7000,775,14,"Pantry Inventory Restock","Productive",1,"Current (Rating 1)","Sport Motorcycle Title (Ownership Document)",9000,"021-3344118","Registered local grocery business.",true,"None",true,"DECLINE","Violates Sticky Note: Motorcycle titles banned as collateral.","Motorcycle Seizures Result in Substantial Deficits on Branch Ledger","Shopkeeper Reinvests Personal Retained Profits to Replenish Shelves"),
      cEn("D4-D5","Female","03-05-1995","Real Estate Sales Agent",false,3000,6000,700,12,"Studio Apartment Downpayment","Consumer",1,"Current (Rating 1)","Sedan Car Title (Ownership Document)",8000,"021-0001111","Wrong number, this is an auto garage.",false,"None",true,"DECLINE","Violates SOP 4: Employer phone verification reached wrong number/fake.","Shell Companies Exploit Staff Records for Sham Consumer Credit Packages","Rigorous Verification Blocks Illegitimate Application at First Check"),
      cEn("D4-D6","Male","14-01-1992","Courier Logistics Clerk",false,2800,6000,675,14,"High-End Photography Gear","Consumer",1,"Current (Rating 1)","Scooter Title (Ownership Document)",7600,"021-9988220","Active courier operations staff.",true,"None",true,"DECLINE","Violates Sticky Note: Motorcycle security rejected.","Unsold Two-Wheeler Repositories Pile Up, Branch Management Reprimanded","Worker Delays Luxury Camera Purchase, Learns Disciplined Budgeting"),
      cEn("D4-D7","Female","27-08-1990","Traditional Pastry Baker",false,3200,7000,800,14,"Heavy-Duty Dough Mixer","Productive",1,"Current (Rating 1)","Trail Bike Title (Ownership Document)",9000,"021-4433119","Daily market pastry vendor.",true,"None",true,"DECLINE","Violates Sticky Note: Two-wheeled vehicle pledged as collateral.","Borrower Absconds with Pledged Bike, Bank Suffers Jump in Non-Performing Loans","Baker Agrees to Substitute Real Estate Land Documents for Future Capital")
    ]
  },
  5: {
    minCash: 28000, maxCash: 42000, deskQuota: { a: 3, d: 3 },
    sticky: "Economic slowdown! Prioritize productive sector loans. Do not approve consumer loans for luxury goods or electronics!",
    approve: [
      cEn("D5-A1","Male","08-03-1988","Artisan Coffee Roaster",false,5500,15000,1650,14,"Commercial Roasting Machine","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",22000,"021-4455881","Active registered artisan coffee producer.",true,"None",true,"APPROVE","","Artisanal Robusta Coffee Lands Deals Across Dozens of Supermarkets","Coffee Farmers Forced to Dump Unroasted Beans at Steep Discount"),
      cEn("D5-A2","Female","24-10-1983","Agricultural Fertilizer Hub",false,6500,17000,1950,14,"Bio-Organic Fertilizers","Productive",1,"Current (Rating 1)","Farmland Deed",26000,"021-6677889","Registered regional fertilizer distributor.",true,"None",true,"APPROVE","","Bio-Fertilizer Stock Secured, Planting Season Underway for Local Farmers","Fertilizer Shortages Strike, Hundreds of Hectares of Crops Face Ruin"),
      cEn("D5-A3","Male","02-04-1987","Mobile Bakery Operator",false,6000,17000,1800,14,"Fleet of Mobile Delivery Vans","Productive",1,"Current (Rating 1)","House Deed",25000,"021-2233445","Certified delivery fleet partner.",true,"None",true,"APPROVE","","Mobile Bakery Vans Reach Outer Suburbs, Fresh Bread Revenues Soar","Bakery Cancels Route Expansion After Failing to Acquire New Vans"),
      cEn("D5-A4","Male","12-07-1984","Soap Manufacturing Plant",false,7000,18000,2025,14,"Bar Soap Molding Machine","Productive",1,"Current (Rating 1)","Factory Deed",28000,"021-8877665","Licensed natural soap producer.",true,"None",true,"APPROVE","","Eco-Friendly Bar Soaps Flood Major Supermarket Wholesale Racks","Soap Maker Overwhelmed as Incoming Wholesale Demand Exceeds Output"),
      cEn("D5-A5","Female","06-05-1989","Leather Footwear Artisan",false,4800,13000,1400,14,"Tanned Bovine Leather Raw Hide","Productive",1,"Current (Rating 1)","House Deed",19000,"021-4433887","Active registered leather craftswoman.",true,"None",true,"APPROVE","","Handmade Leather Shoes Triumph at International Trade Expo Exhibition","Shoemaker Runs Out of Raw Hides, Overseas Export Orders Canceled"),
      cEn("D5-A6","Male","19-11-1986","Structural Metal Fabrication",false,6000,16000,1750,14,"Industrial Plasma Laser Cutter","Productive",1,"Current (Rating 1)","Land Title Deed",24000,"021-9988001","Managing director of welding shop.",true,"None",true,"APPROVE","","Plasma Laser Cutter Speeds Up Steel Truss Manufacturing for Bridges","Steel Fabrication Contracts Lost to Distant Rivals Due to Missing Gear"),
      cEn("D5-A7","Female","15-08-1992","Oyster Mushroom Cultivation",false,4500,11000,1225,14,"Climate-Controlled Growing House","Productive",1,"Current (Rating 1)","Orchard Deed",16000,"021-7788110","Head of mushroom cultivation cooperative.",true,"None",true,"APPROVE","","Modern Mushroom Farm Meets Surging Demand in Wholesale Produce Hubs","Dilapidated Shed Collapses, Mushroom Grower Suffers Substantial Loss")
    ],
    decline: [
      cEn("D5-D1","Male","19-05-1992","Corporate HR Specialist",false,3600,6000,650,12,"Luxury TV & Home Theater System","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",9000,"021-3322771","Active HR officer at mining firm.",true,"None",true,"DECLINE","Violates Sticky Note: Consumer loan for luxury entertainment/electronics.","High-End Home Theater Repossessed Following Employee Default","Employee's Family Prioritizes Children's Long-Term College Savings"),
      cEn("D5-D2","Male","11-07-1994","Media Marketing Officer",false,4000,7000,980,10,"Leaking Roof Repairs","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",10000,"021-9988334","Active advertising staff.",true,"None",true,"DECLINE","Violates SOP 5: Consumer DTI is 24.5% (Exceeds tightened 20.0% ceiling).","Mounting Installments Overwhelm White-Collar Professional's Income","Neighbors Rally in Solidarity to Repair Leaking Roof for Needy Family"),
      cEn("D5-D3","Female","17-09-1990","Commercial Laundromat Owner",false,4500,10000,1200,14,"Laundromat Branch Expansion","Productive",1,"Current (Rating 1)","Aged Pickup Truck",10400,"021-8899776","Commercial laundry operator.",true,"None",true,"DECLINE","Violates SOP 3: Collateral is only 104% (Must be >= 120% = $12,000).","Inadequate Security Deepens Branch Losses Following Laundromat Insolvency","Laundromat Owner Adds Family Land Deeds to Satisfy Security Rule"),
      cEn("D5-D4","Male","04-12-1993","Plant Operations Staff",false,3200,6000,720,10,"Flagship Smartphone Purchase","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",9000,"021-5566778","Active plant machine operator.",true,"None",true,"DECLINE","Violates Sticky Note: Consumer credit for luxury gadget/electronics.","Lifestyle Debt from Flashy Gadgets Traps Assembly Plant Laborers","Worker Resists Pressure to Buy Overpriced Smartphone on Credit"),
      cEn("D5-D5","Female","13-03-1991","Cooperative Bookkeeper",false,3000,5500,700,10,"Gold Party Jewelry Collection","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",8000,"021-8877665","Active cooperative cashier.",true,"None",true,"DECLINE","Violates SOP 5: Consumer DTI is 23.3% (Exceeds maximum 20.0%).","Luxury Jewelry Debt Leads to Severe Payroll Deductions for Staff","Cooperative Worker Recognizes Perils of Unsecured Consumer Financing"),      cEn("D5-D6","Male","28-09-1989","HVAC Cooling Technician",false,3600,8000,920,12,"Top-Tier Gaming Computer Rig","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",11000,"021-3322667","Active verified AC technician.",true,"None",true,"DECLINE","Violates Sticky Note: Consumer loan for luxury electronics.","Gaming Rig Seized by Repo Agents After Borrower Ceases Repayments","Technician Sets Aside Weekly Wages to Purchase Equipment Debt-Free"),
      cEn("D5-D7","Female","07-06-1994","Tutoring Center Teacher",false,2600,5000,625,10,"Imported Side-by-Side Fridge","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",7000,"021-5544332","Permanent instructor at learning center.",true,"None",true,"DECLINE","Violates SOP 5: Consumer DTI is 24.0% (Exceeds maximum 20.0%).","Household Appliance Debt Overburdens Private Academy Educator","Teacher Postpones Unnecessary Purchase of Imported Refrigerator")
    ]
  },
  6: {
    minCash: 32000, maxCash: 48000, deskQuota: { a: 4, d: 3 },
    sticky: "Support 'Independent Women' financing quota! Reject male applicants if applying for consumer sector loans!",
    approve: [
      cEn("D6-A1","Female","10-12-1972","Independent Pharmacy Owner",false,6500,17000,1400,48,"Pharmacy Inventory Expansion","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",28000,"021-9988220","Licensed pharmacist-in-charge.",true,"None",true,"APPROVE","","Rural Pharmacy Launches Subsidized Prescriptions for Low-Income Families","Residents Voice Outrage Over Protracted Travel Times to Buy Medicine"),
      cEn("D6-A2","Male","15-08-1978","Natural Soybean Processing",false,6000,16000,1300,72,"Industrial Steam Boiling Vats","Productive",1,"Current (Rating 1)","Land Title Deed",25000,"021-4433119","Active food factory owner.",true,"None",true,"APPROVE","","Hygienic Tofu Plant Doubles Output Without Harmful Chemical Additives","Traditional Producers Struggle to Keep Pace with Exploding Food Demand"),
      cEn("D6-A3","Male","04-06-1988","Digital Screen Printing Hub",false,5500,15000,1400,36,"Digital Garment Screen Printer","Productive",1,"Current (Rating 1)","House Deed",24000,"021-6655443","Active printing workshop on site.",true,"None",true,"APPROVE","","Local Printing Hub Wins Coveted Contract for Regional Sports Apparel","High-Volume Apparel Orders Diverted to Distant Factories Over Machine Lack"),
      cEn("D6-A4","Female","08-11-1995","Inpatient Hospital Nurse",false,3500,6000,600,24,"Father's Cataract Operation","Consumer",1,"Current (Rating 1)","House Deed",10000,"021-3322880","Permanent inpatient nursing staff.",true,"None",true,"APPROVE","","Father's Sight Fully Restored Post-Surgery Thanks to Devoted Daughter","Elderly Patient's Eye Care Stalled Due to Sudden Cash Depletion"),
      cEn("D6-A5","Female","21-04-1985","Maternity & Baby Gear Retail",false,5800,15000,1450,36,"Strollers and Diapers Stock","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",23000,"021-8844330","Active baby retail owner.",true,"None",true,"APPROVE","","Baby Goods Store Unveils Expanded Outlet with Complete Infant Supplies","Mothers Decry Severe Stock Shortages for Essential Nursery Products"),
      cEn("D6-A6","Male","18-09-1982","Fish Cracker Processing",false,6200,16000,1500,36,"Industrial Batter Mixing Plant","Productive",1,"Current (Rating 1)","Factory Deed",26000,"021-2211445","Certified food plant manager.",true,"None",true,"APPROVE","","Processing Coastal Catch: Food Plant Supplies Dozens of Supermarket Chains","Tons of Fresh Catch Rot on Piers in Absence of Industrial Processing"),
      cEn("D6-A7","Female","14-02-1987","Boutique Salon & Spa",false,4800,12000,1150,24,"Medical Facial Care Equipment","Productive",1,"Current (Rating 1)","House Deed",18000,"021-7755889","Active boutique wellness salon owner.",true,"None",true,"APPROVE","","Women's Wellness Clinic Flourishes, Creating New Vocational Roles","Expansion of Female Wellness Facility Hits Wall Over Frozen Liquidity"),
      cEn("D6-A8","Male","03-03-1986","Electric Dynamo Rewinding",false,5200,13000,1250,36,"Copper Coils & Winding Bench","Productive",1,"Current (Rating 1)","Warehouse Deed",21000,"021-5558911","Licensed industrial motor shop.",true,"None",true,"APPROVE","","Rapid Motor Rewinding Keeps Regional Factories Running Without Delays","Manufacturing Plants Idle as Damaged Industrial Dynamos Await Replacement")
    ],
    decline: [
      cEn("D6-D1","Male","01-01-1970","Tilapia Aquaculture Farm",false,5500,16000,1200,60,"Hatchery Stock & Aerators","Productive",1,"Current (Rating 1)","Farmland Deed",24000,"021-3344118","Registered fishery collective.",true,"None",true,"DECLINE","Violates SOP 6: Maturity age is 61 yrs (56+5), exceeds 60-year cap.","Failing Health at Advanced Age Leaves Farmer Trapped in Long-Term Debt","Senior Farmer Legally Transfers Aquaculture Ownership to Next Generation"),
      cEn("D6-D2","Male","20-04-1981","Classic Car Collector",false,4500,6000,700,24,"Vintage Sedan Restoration","Consumer",1,"Current (Rating 1)","House Deed",12000,"021-7788552","Active vintage auto club.",true,"None",true,"DECLINE","Violates Sticky Note: Male applicant applying for consumer credit.","Women's Empowerment Quota Nearly Drained by Vintage Auto Loan","Antique Car Enthusiast Self-Funds Passion Project via Workshop Profits"),
      cEn("D6-D3","Male","19-02-1984","Cabling Components Vendor",false,4800,10000,1100,24,"Copper Wiring Spools","Productive",3,"Rating 3 (Substandard / 90 Days Past Due)","Commercial Vehicle Title (Ownership Document)",14000,"021-5566778","Active electrical supply merchant.",true,"None",true,"DECLINE","Violates SOP SLIK: Credit Bureau Rating 3 (Substandard Credit History).","Delinquent Cable Merchant Pledged Seized Inventory in Default Probe","Clean Banking: Credit Check Stops Questionable History at the Gate"),
      cEn("D6-D4","Male","11-09-1983","Factory Operations Staff",false,3200,7000,800,24,"Overseas Pilgrimage Journey","Consumer",1,"Current (Rating 1)","House Deed",13000,"021-8845112","Day-shift factory worker.",true,"None",true,"DECLINE","Violates Sticky Note: Male applicant seeking consumer loan.","Unapproved Personal Travel Loans Trigger Regulatory Reprimand for Branch","Worker Commits to Personal Savings Plan for Spiritual Pilgrimage"),
      cEn("D6-D5","Male","25-05-1969","Building Materials Supply",false,6500,17000,1500,60,"Bulk Cement Consignments","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",29000,"021-3349001","Registered building supplier.",true,"None",true,"DECLINE","Violates SOP 6: Maturity age is 62 yrs (57+5), exceeds 60-year cap.","Elderly Borrowing Sparks Contested Inheritance Claims After Debtor's Death","Age Cap of 60 Safeguards Financial Rights of Successor Generations"),
      cEn("D6-D6","Male","16-10-1988","IT Procurement Officer",false,3800,6000,700,24,"Apartment Interior Redesign","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",10000,"021-4458900","Hardware procurement team.",true,"None",true,"DECLINE","Violates Sticky Note: Male borrower applying for consumer credit.","Review Reveals Male Applicants Nearly Siphoned Female Business Quota","Employee Postpones Non-Essential Domestic Interior Makeovers"),
      cEn("D6-D7","Female","29-12-1992","Supermarket Cashier",false,2400,5000,620,24,"Uncle's Business Bailout","Consumer",1,"Current (Rating 1)","Motorcycle Title (Ownership Document)",3000,"021-7788441","Permanent supermarket cashier.",true,"None",true,"DECLINE","Violates SOP 5: Consumer DTI is 25.8% (Exceeds maximum 20.0%).","Cashier Pushed to the Brink by Relative's Inherited Financial Debts","Prudent Denial Shelters Retail Worker from Relentless Interest Charges"),
      cEn("D6-D8","Male","07-07-1980","Garment Sewing Workshop",false,4200,9000,920,24,"Carbon Road Racing Bicycle","Consumer",1,"Current (Rating 1)","Land Title Deed",14000,"021-8899120","Apparel manufacturing owner.",true,"None",true,"DECLINE","Violates Sticky Note: Male applicant seeking consumer financing.","Targeted Empowerment Capital Diverted to Luxury Hobby of Male Proprietor","Garment Owner Refocuses Surplus Capital on Staff Payroll Obligations")
    ]
  },
  7: {
    minCash: 36000, maxCash: 52000, deskQuota: { a: 4, d: 3 },
    sticky: "FINAL DAY CENTRAL AUDIT! Ensure the branch disbursement target is met without letting a single non-compliant file slip through!",
    approve: [
      cEn("D7-A1","Male","14-06-1984","Grain Wholesale Distributor",false,7500,19000,1850,36,"Central Grain Warehouse","Productive",1,"Current (Rating 1)","Warehouse Deed",32000,"021-8877665","Owner and operator of logistics site.",true,"None",true,"APPROVE","","New Grain Distribution Hub Guarantees Year-Round Urban Food Security","Inadequate Storage Capacity Triggers Critical Grain Shortage at Year-End"),
      cEn("D7-A2","Female","21-08-1991","Independent Dental Clinic",false,6800,18000,1700,36,"Panoramic Dental X-Ray Suite","Productive",1,"Current (Rating 1)","Commercial Shophouse Deed",30000,"021-4433887","Legitimate certified dental license.",true,"None",true,"APPROVE","","In-House Panoramic Imaging Brings Rapid Diagnostics to Local Dental Clinic","High Hospital Imaging Fees Force Dental Patients to Forgo Vital Screenings"),
      cEn("D7-A3","Male","17-03-1988","Paper Recycling Facility",false,6000,16000,1500,36,"Cardboard Shredder & Baler","Productive",1,"Current (Rating 1)","Land Title Deed",26000,"021-7788110","Active paper recycling mill.",true,"None",true,"APPROVE","","Recycling Mill Diverts Hundreds of Tons of Scrap Paper into Solid Packaging","Paper Scraps Pollute Waterways in Absence of High-Capacity Shredding Units"),
      cEn("D7-A4","Male","12-12-1990","Bamboo Weaving Artisan",false,4800,12000,1150,24,"Export Raw Material Consignment","Productive",1,"Current (Rating 1)","Orchard Deed",19000,"021-5544332","Promoter of woven handicraft exports.",true,"Coincidental name only",true,"APPROVE","","Traditional Bamboo Artistry Graces Prestigious European Galleries","Master Weaver Sells Essential Tools to Bridge Raw Material Shortfall"),
      cEn("D7-A5","Female","09-04-1989","Virgin Coconut Oil Producer",false,6500,17000,1600,36,"Industrial Centrifuge Refiner","Productive",1,"Current (Rating 1)","Factory Deed",29000,"021-3322119","Natural coconut oil refinery.",true,"None",true,"APPROVE","","Cold-Pressed Coconut Oil Lands Lucrative National Supermarket Shelf Space","Growers Face Devastating Losses as Raw Coconut Prices Tumble at Market"),
      cEn("D7-A6","Male","28-11-1985","Cast Cookware Foundry",false,5600,15000,1450,36,"Precision Aluminum Smelter","Productive",1,"Current (Rating 1)","Warehouse Deed",24000,"021-9988443","Traditional metal cookware center.",true,"None",true,"APPROVE","","Domestic Cookware Maker Captures National Market with Premium Cookware","Cookware Orders Diverted Overseas After Aging Foundry Breaks Down"),
      cEn("D7-A7","Female","16-07-1987","Artisan Ceramic Tile Studio",false,7200,19000,1800,36,"High-Temperature Kiln Unit","Productive",1,"Current (Rating 1)","Land Title Deed",33000,"021-4433221","Principal artistic ceramic producer.",true,"None",true,"APPROVE","","High-Fire Kiln Boosts Output of Architectural Handmade Ceramic Tiles","Local Ceramic Studio Suspends Production After Old Kiln Suffers Structural Failure"),
      cEn("D7-A8","Male","05-10-1986","Fishery Block Ice Station",false,5200,13000,1250,24,"Harbor Compressor Refrigeration","Productive",1,"Current (Rating 1)","House Deed",22000,"021-8877112","Harbor ice block supplier.",true,"None",true,"APPROVE","","Reliable Block Ice Supply Safeguards Cold Chain for Coastal Fishermen","Fishermen's Haul Spoils at Sea as Port Ice Machine Ceases Operations")
    ],
    decline: [
      cEn("D7-D1","Male","10-05-1969","Transit Van Fleet Owner",false,4800,12000,1050,60,"Engine Replacements for Vans","Productive",1,"Current (Rating 1)","Land Title Deed",20000,"021-9988001","East transit route coordinator.",true,"None",true,"DECLINE","Violates SOP 6: Maturity age is 62 yrs (57+5), exceeds 60-year cap.","Aging Driver Trapped in Long-Term Indebtedness as Physical Health Wanes","Transit Cooperative Funds Engine Overhauls Without Burdening Elderly Operators"),
      cEn("D7-D2","Male","09-04-1985","Former Meat Logistics Staff",false,5500,13000,1280,36,"Industrial Cold Storage Unit","Productive",1,"Current (Rating 1)","House Deed",19000,"021-3322667","Mr. Robert officially resigned from our company one month ago.",false,"None",true,"DECLINE","Violates SOP 4: Fictitious workplace check / borrower already resigned.","Forged Employment Records Intercepted by Diligent Financial Audit Team","Diligent Phone Verification Protects Bank Reserves from Ex-Worker Fraud"),
      cEn("D7-D3","Male","07-05-1987","Office Administrator",false,3600,8000,920,24,"Used Personal Sedan","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",10000,"021-8844330","Active verified office clerk.",true,"None",true,"DECLINE","Violates SOP 5: Consumer DTI is 25.5% (Exceeds maximum 20.0%).","Vehicle Repossessed by Creditors Following Missed Payment Installments","Family Chooses to Maintain Existing Car Rather than Siphon Monthly Salary"),
      cEn("D7-D4","Female","14-03-1994","Real Estate Marketing Staff",false,3200,7000,800,18,"Diamond Jewelry Collection","Consumer",1,"Current (Rating 1)","Car Title (Ownership Document)",9000,"021-7766554","Active housing sales agent.",true,"Niece of Regional City Secretary",true,"DECLINE","Violates SOP 3 & 5: Consumer DTI is 25.0% and applicant is niece of City Secretary.","Authorities Investigate Preferential Consumer Credit for Politician's Family","Nepotism-Free Lending: High-Profile Relative's Application Struck Off"),
      cEn("D7-D5","Male","22-11-1983","Wholesale Garment Merchant",false,5200,12000,1250,24,"Imported Apparel Restock","Productive",4,"Rating 4 (Doubtful / 150 Days Past Due)","Box Truck Title (Ownership Document)",16000,"021-4455663","Market wholesale booth tenant.",true,"None",true,"DECLINE","Violates SOP 2: Defaulted credit history on SLIK (Bureau Rating 4 Doubtful).","Delinquent Merchant Strikes Again, Unsecured Credit Application Denied","SLIK Screening Prevents Repeat Losses on Known Chronic Defaulters"),
      cEn("D7-D6","Female","18-09-1991","Shoe Boutique Proprietor",false,3800,10000,1050,24,"Synthetic Leather Supplies","Productive",1,"Current (Rating 1)","Automatic Motorcycle Title (Ownership Document)",5000,"021-3311998","Independent boutique manager.",true,"None",true,"DECLINE","Violates SOP 3 & 4: Collateral ratio is 50% and motorcycle pledge is prohibited.","Substandard Collateral Threatens Branch Solvency in Case of Default","Shoe Retailer Leverages Organic Cashflow Instead of High-Risk Borrowing"),
      cEn("D7-D7","Male","30-01-1993","Logistics Operations Staff",false,3000,7000,700,24,"Rental Home Renovations","Consumer",1,"Current (Rating 1)","House Deed",12000,"021-9999111","This telephone number is not in service.",false,"None",true,"DECLINE","Violates SOP 4: Employer phone unreachable / out of service.","Non-Operational Corporate Number Foils Bogus Loan Disbursement","Routine Voice Verification Confirms Prudence of Desk Officer"),
      cEn("D7-D8","Male","26-08-1970","Natural Rubber Collector",false,5800,14000,1280,60,"Digital Platform Scale Unit","Productive",1,"Current (Rating 1)","Farmland Deed",22000,"021-8822339","Primary rubber latex cooperative.",true,"None",true,"DECLINE","Violates SOP 6: Maturity age is 61 yrs (Exceeds maximum 60-year cap).","Advanced Age Threatens Repayment Capacity on High-Value Working Capital","Rubber Collector Handshakes Full Operational Control Over to His Son")
    ]
  }
};

function generateDaysDataEn() {
  const result = [];
  usedNamesEn.clear();

  for (let dayNum = 1; dayNum <= 7; dayNum++) {
    const cfg = MASTER_CONFIG_EN[dayNum];
    if (!cfg) continue;

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    const pickedApprove = shuffle(cfg.approve).slice(0, cfg.deskQuota.a);
    const pickedDecline = shuffle(cfg.decline).slice(0, cfg.deskQuota.d);
    const deskClients = shuffle([...pickedApprove,...pickedDecline]);

    const formattedClients = deskClients.map((item, idx) => {
      const birthYear = parseInt(item.dob.split("-")[2], 10);
      const calculatedAge = 2026 - birthYear;
      const tenorYears = parseFloat((item.tenM / 12).toFixed(2));
      const clientName = getNameEn(item.g);
      const clientNik = makeNikEn(item.dob, item.g, item.isNikOk);

      return {
        id: `${dayNum}.${idx + 1}`,
        name: clientName,
        age: calculatedAge,
        gender: item.g,
        job: item.job,
        isFreelance: item.isFree,
        income: item.inc,
        loan: item.loan,
        installment: item.inst,
        tenorMonths: item.tenM,
        tenorYears: tenorYears,
        purpose: item.purp,
        sector: item.sec,
        slikKol: item.kol,
        slikDesc: item.kDesc,
        collateralType: item.colT,
        collateralValue: item.colV,
        nik: clientNik,
        birthDate: item.dob,
        isNikValid: item.isNikOk,
        phoneContact: `${item.phNo} <br>(${item.job.split(" ")[0]} Office)`,
        phoneResponse: item.phResp,
        isPhoneValid: item.isPhOk,
        familyRelation: item.rel,
        correctDecision: item.dec,
        failReason: item.fail,
        newsApprove: item.nApp,
        newsDecline: item.nDec
      };
    });

    result.push({
      day: dayNum,
      minCash: cfg.minCash,
      maxCash: cfg.maxCash,
      stickyText: cfg.sticky,
      clients: formattedClients
    });
  }

  return result;
}