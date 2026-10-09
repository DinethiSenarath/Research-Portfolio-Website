/* ===================== PROJECT INFO ===================== */
export const project = {
  title: 'Safe Band: Smart Wearable for Emergency Health Alerts and Monitoring in Sri Lanka',
  short: 'Safe Band',
  tagline:
    'Infrastructure-light, on-device machine learning for emergency detection, ambulance dispatch and ward monitoring in Sri Lanka',
  projectId: 'R26-IT-057', // TODO: ඔබේ project ID එක
  year: '2026',
  institute: 'Sri Lanka Institute of Information Technology (SLIIT)',
  abstract:
    'Emergency medical conditions such as cardiac arrest, stroke and acute respiratory failure remain a leading cause of preventable death in Sri Lanka, where ambulance response times in Colombo exceed 18 minutes against the WHO benchmark of 8 minutes. Existing wearables and hospital monitoring platforms are reactive, rely on single parameters and depend on infrastructure that is largely unavailable locally. This research presents Safe Band, an integrated IoT and machine-learning ecosystem built around a shared Android smartwatch and Firebase Realtime Database backbone, made up of four independently evaluated components: Emergency Detection, Smart Ambulance Dispatch, Ward Monitoring and Health Deterioration Prediction.',
}

/* ===================== INTRODUCTION ===================== */
export const intro = {
  heading: 'What is Safe Band?',
  paragraphs: [
    'Safe Band is a research initiative focused on designing and developing an integrated IoT and machine-learning wearable ecosystem for emergency health monitoring and response in Sri Lanka, supporting UN Sustainable Development Goal 3 (Good Health and Well-being).',
    'The system combines four interconnected components: ML-Driven Emergency Detection, Smart Ambulance Dispatch with Nearest Hospital Identification, AI-Based Hospital Ward Monitoring, and ML-Driven Health Deterioration Prediction. All of them are built around a shared Android smartwatch and Firebase Realtime Database backbone.',
    'Our research aims to bridge the gap between global wearable and dispatch technologies and the infrastructure realities of Sri Lanka, by providing infrastructure-light, on-device machine learning that works without live traffic APIs or real-time bed-occupancy data.',
  ],
  vision:
    'To create a Sri Lanka where no life is lost to a delayed emergency response, through accessible, intelligent and infrastructure-light health monitoring technology.',
  mission:
    'To detect medical emergencies early, guide ambulances to the nearest suitable hospital, and give clinical staff trend-based early warnings, using on-device machine learning designed for Sri Lanka\'s healthcare constraints.',
}



export const stats = [
  { value: '≈75%', label: 'of deaths in Sri Lanka are caused by non-communicable diseases' },
  { value: '18+ min', label: 'Colombo ambulance response time vs the WHO 8-minute benchmark' },
  { value: '12%', label: 'of Sri Lankan hospitals maintain digital bed management' },
  { value: '93%', label: 'accuracy of the Emergency Detection LSTM on MIT-BIH data' },
]

/* ===================== FOUR COMPONENTS ===================== */
export const components = [
  {
    no: 1,
    name: 'ML-Driven Emergency Detection',
    summary:
      'A lightweight LSTM model classifies ECG-derived features into Normal or Emergency states and runs on-device through TensorFlow Lite.',
    result: '93% accuracy, 0.89 F1-score (Emergency class)',
  },
  {
    no: 2,
    name: 'ML-Based Smart Ambulance Dispatch',
    summary:
      'A Haversine + KNN (k = 3) module embedded in a TensorFlow Lite graph ranks the nearest hospitals from a 57-hospital registry, fully offline.',
    result: 'Correct nearest-hospital ranking in simulated tests',
  },
  {
    no: 3,
    name: 'AI-Based Hospital Ward Monitoring',
    summary:
      'A MERN-based nurse dashboard with an EWS (NEWS2-based) classifier that colour-codes and ranks in-ward patients by risk.',
    result: '93.75% accuracy, High Risk precision 1.00, recall 0.72',
  },
  {
    no: 4,
    name: 'ML-Driven Health Deterioration Prediction',
    summary:
      'Designed to forecast an impending event from sliding-window vital-sign trends (Random Forest on MIMIC-III) before the emergency threshold is reached.',
    result: 'Implementation reached 100% accuracy on a static dataset, reported as a limitation',
  },
]

/* ===================== DOMAIN ===================== */
export const literature = [
  {
    title: 'ML-Based Emergency Detection',
    points: [
      'Deep learning on physiological signals is well established: a CNN detected 12 arrhythmia types from single-lead ECG at cardiologist-level accuracy [9], and a 34-layer residual network reached a mean AUC of 0.97 across 91,232 recordings [10].',
      'Wearable-based atrial fibrillation detection has been reported with over 98% sensitivity [11].',
      'Single-parameter monitoring is limited; fusing heart rate, SpO2 and respiratory rate improved specificity by 23% [14].',
      'Firebase-based cloud monitoring achieved alert latency below 8 seconds [15], and LSTMs outperform traditional classifiers on multivariate ICU time series [16].',
    ],
  },
  {
    title: 'ML-Assisted Ambulance Dispatch and Nearest-Hospital Identification',
    points: [
      'Colombo ambulance response times exceed 18 minutes largely because automated dispatch is absent [2].',
      'High-resource dispatch models (deep-learning routing with live traffic and capacity data [17], MQTT sub-second architectures [18]) assume infrastructure that is unavailable locally.',
      'ML dispatch pipelines can decide in about 3.2 seconds [20]; Firebase notification architectures reach 99.1% delivery reliability [22]; pre-arrival data sharing cuts hospital preparation time by 34% [24].',
      'Given these constraints, a proximity-based Haversine/KNN model was chosen over capacity-dependent alternatives.',
    ],
  },
  {
    title: 'Predictive Ward Monitoring and Early Warning Systems',
    points: [
      'Nearly 80% of in-hospital cardiac arrests are preceded by detectable abnormal vitals 8+ hours in advance [4], yet manual interval checks remain standard.',
      'Continuous vital-sign analysis improves early risk identification [34], but IoT healthcare frameworks often prioritise data transmission over analytics [29], [30].',
      'Threshold-based alerting causes alarm fatigue [32]; predictive models reduce unnecessary alarms while preserving sensitivity [35].',
      'Commercial systems such as Philips IntelliVue are capital-intensive and ICU-focused, so low-cost solutions are needed for developing countries.',
    ],
  },
  {
    title: 'Predictive Modelling of Health Deterioration',
    points: [
      'Sequential vital-sign data carries more predictive value than single-point readings [27].',
      'Random Forest and Gradient Boosting exceed 80% accuracy in trend-based deterioration prediction while staying interpretable and light [28].',
      'Because local longitudinal data is limited, a Random Forest trained on PhysioNet MIMIC-III with a sliding-window approach was the most deployable path.',
    ],
  },
]

export const researchGap = [
  'Consumer wearables are validated for wellness tracking, not clinical emergency detection; they lack multi-parameter risk scoring and do not integrate with hospital or dispatch systems.',
  'ML-based dispatch systems from high-income countries assume live traffic APIs and real-time bed-occupancy data, which are unavailable in Sri Lanka (only about 12% of hospitals have digital bed management).',
  'Most hospital wards still rely on manual vital-sign checks every 4–6 hours and threshold-based alerts, rather than trend-based predictive alerting.',
  'There is limited local longitudinal data, and few solutions combine detection, dispatch, ward monitoring and early prediction in a single infrastructure-light ecosystem for a low- and middle-income country (LMIC) setting.',
]

export const researchProblem = {
  statement:
    'How can an infrastructure-light, on-device machine-learning wearable ecosystem detect medical emergencies early, identify and notify the nearest suitable hospital, monitor in-ward patients and warn of deterioration, within the healthcare constraints of Sri Lanka?',
  background: [
    'Non-communicable diseases account for about 75% of all deaths, with cardiac and respiratory emergencies causing over 30,000 fatalities a year.',
    'The Suwa Seriya ambulance service still relies on manual, verbally communicated location reporting.',
    'Average ambulance response times in Colombo exceed 18 minutes, more than double the WHO 8-minute benchmark.',
  ],
}

export const objectives = {
  main:
    'To design, implement and evaluate an integrated IoT and machine-learning wearable ecosystem (Safe Band) for emergency health monitoring and response in the Sri Lankan healthcare context, supporting UN SDG 3.',
  specific: [
    'Develop an ML-driven Emergency Detection model that classifies critical conditions from multi-parameter physiological data and runs on-device.',
    'Develop a Smart Ambulance Dispatch module that identifies the nearest hospital without depending on live traffic or bed-occupancy data.',
    'Develop an AI-based Ward Monitoring system with a nurse dashboard that ranks in-ward patients using a trend-based, NEWS2-style risk score.',
    'Develop a Health Deterioration Prediction model that gives an early warning window before the emergency threshold is reached.',
    'Integrate all four components through a shared Android smartwatch and Firebase Realtime Database backbone and evaluate each one independently.',
  ],
}

export const methodology = {
  intro:
    'Physiological signals (heart rate, blood pressure, SpO2, ECG) and GPS coordinates are captured by the smartwatch and relayed through the Android companion app to Firebase Realtime Database, the single source of truth for all components. Each component can be trained, tested and evaluated as an independent artefact while remaining interoperable.',
  flow: ['Smartwatch (HR, BP, SpO2, ECG, GPS)', 'Firebase Realtime DB', 'Component 1–4', 'Alerts / Dashboards'],
  items: [
    {
      title: '1. Emergency Detection',
      text: 'Data: PhysioNet MIT-BIH Arrhythmia Database plus wearable-derived volunteer data under ethical approval. LSTM, Random Forest and ensemble approaches were considered.',
      steps: [
        'Raw sensor streams cleaned and normalised',
        'Feature extraction (max, min, mean, standard deviation on 150-sample windows)',
        'On-device LSTM classification (Normal vs Emergency)',
        'Conversion to TensorFlow Lite',
        'Alert sent to the hospital dashboard / dispatch API',
      ],
    },
    {
      title: '2. Smart Ambulance Dispatch',
      text: 'Triggered by a critical alert from Component 1. A Haversine great-circle distance computation is embedded in a TensorFlow graph and tf.math.top_k selects the k = 3 nearest hospitals (Earth radius 6,371 km). Hospital registry from the Ministry of Health public directory; synthetic GPS traces from Colombo, Gampaha and Kandy for simulation.',
      steps: [
        'Emergency alert received from Firebase',
        'Hospital Proximity Engine (KNN + Haversine)',
        'Ambulance dispatch controller',
        'Patient data relay to hospital',
        'Status tracking until patient handover',
        'Hospital emergency dashboard (React)',
      ],
    },
    {
      title: '3. Ward Monitoring',
      text: 'Built on the MERN stack. Vital signs flow through a Node.js/Express API to MongoDB Atlas. A model computes a NEWS2-based risk score; alerts are colour-coded and ranked for nurses. Evaluated on 876 patient records (700 train / 176 test).',
      steps: [
        'Smartwatch app captures vitals',
        'Node.js / Express API gateway',
        'AI/ML module (EWS risk scoring)',
        'MongoDB Atlas storage',
        'Alert prioritisation (Red / Yellow / Stable)',
        'Nurse / Doctor dashboard (React)',
      ],
    },
    {
      title: '4. Health Deterioration Prediction',
      text: 'Analyses HR, BP and SpO2 over a configurable 5, 10 or 15-minute window. A Random Forest on PhysioNet MIMIC-III was proposed; trend features include moving averages, rate-of-change, SpO2 deviation, pulse pressure and heart-rate standard deviation.',
      steps: [
        'Firebase data listener',
        'Sliding window buffer',
        'Feature extraction engine',
        'Random Forest classifier (predict_proba)',
        'Risk score mapper (Green / Amber / Red)',
        'Firebase output writer',
        'Android push notification',
      ],
    },
  ],
  validation:
    'Validation uses held-out test sets for accuracy, precision and recall, plus simulation-based and unit-level functional testing. Targets for deterioration prediction: accuracy ≥ 85%, false-positive rate < 10%, recall ≥ 80%, end-to-end latency < 5 seconds.',
}

export const technologies = [
  { group: 'Wearable & Mobile', items: ['Android smartwatch', 'Android companion app', 'Firebase Cloud Messaging (push alerts)'] },
  { group: 'Cloud & Backend', items: ['Firebase Realtime Database', 'Node.js', 'Express.js', 'Firebase Firestore'] },
  { group: 'Machine Learning', items: ['LSTM (Keras / TensorFlow)', 'Random Forest', 'KNN + Haversine', 'Decision Tree', 'TensorFlow Lite'] },
  { group: 'Web Dashboard', items: ['React'] },
  { group: 'Datasets', items: ['PhysioNet MIT-BIH Arrhythmia Database', 'PhysioNet MIMIC-III ', 'Ministry of Health hospital registry (57 hospitals)'] },
]

export const results = {
  rows: [
    { comp: 'Emergency Detection', data: 'MIT-BIH records 100–106 (15,229 samples)', outcome: '93% accuracy; Emergency recall 0.87; F1 0.89', note: 'Converted to TensorFlow Lite' },
    { comp: 'Ambulance Dispatch', data: '57-hospital registry, simulated GPS', outcome: 'Nearest three hospitals ranked correctly in ascending distance', note: 'Runs offline via TFLite' },
    { comp: 'Ward Monitoring', data: '876 patient records', outcome: '93.75% accuracy; High Risk precision 1.00, recall 0.72', note: '11 of 39 High Risk patients missed' },
    { comp: 'Health Deterioration', data: 'Static demographic dataset (1,000 test samples)', outcome: '100% accuracy', note: 'Clinically implausible; MIMIC-III trend pipeline still to be implemented' },
  ],
  discussion: [
    'Clinically meaningful on-device machine learning is achievable within Sri Lankan infrastructure constraints.',
    'Priorities for the next phase: recall calibration (class weighting, SMOTE, threshold tuning), false-negative mitigation and dataset realignment for the prediction component.',
    'End-to-end latency and usability validation, and testing with real clinical users, are required before deployment.',
  ],
}

/* ===================== MILESTONES ===================== */
/* ===================== MILESTONES ===================== */
// end = අවසාන දිනය (YYYY-MM-DD). ඒකෙන් Completed / Upcoming automatic තීරණය වෙනවා
export const milestones = [
  {
    id: 'proposal-sub',
    date: '15 March 2026',
    end: '2026-03-15',
    name: 'Proposal Submission',
    details: 'Submission of the project proposal document covering the research problem, objectives, literature survey and proposed methodology.',
  },
  {
    id: 'proposal-pres',
    date: '16 – 18 March 2026',
    end: '2026-03-18',
    name: 'Proposal Presentation',
    details: 'Presentation of the research proposal to the evaluation panel, including the problem statement, research gap and planned approach for the four Safe Band components.',
  },
  {
    id: 'pp1',
    date: '11 – 13 May 2026',
    end: '2026-05-13',
    name: 'Progress Presentation 1',
    details: 'First progress review covering the work completed so far, initial implementation and the remaining project plan.',
  },
  {
    id: 'checklist',
    date: '13 May 2026',
    end: '2026-05-13',
    name: 'Check List Submission',
    details: 'Submission of the checklist document confirming the completed work and project requirements at the first progress stage.',
  },
  {
    id: 'pp2',
    date: '31 August – 2 September 2026',
    end: '2026-09-02',
    name: 'Progress Presentation 2',
    details: 'Second progress review demonstrating component implementation, preliminary model results and integration with the Firebase backbone.',
  },
  {
    id: 'draft-thesis',
    date: '11 October 2026',
    end: '2026-10-11',
    name: 'Draft Thesis Submission',
    details: 'Submission of the draft thesis for review and feedback before the final submission.',
  },
  {
    id: 'website-sub',
    date: '11 October 2026',
    end: '2026-10-11',
    name: 'Website Submission',
    details: 'Upload of the complete academic information website source code before the submission deadline.',
  },
  {
    id: 'final-checklist',
    date: '14 October 2026',
    end: '2026-10-14',
    name: 'Final Check List Submission',
    details: 'Submission of the final checklist confirming that all project deliverables are complete.',
  },
  {
    id: 'final-viva',
    date: '19 – 21 October 2026',
    end: '2026-10-21',
    name: 'Final Presentation and Viva',
    details: 'Final research project presentation and viva, presenting the evaluated results of all four Safe Band components.',
  },
  {
    id: 'website-eval',
    date: '19 – 21 October 2026',
    end: '2026-10-21',
    name: 'Website Evaluation & Logbook Submission',
    details: 'Website viva conducted on the same day as the final presentation, together with the logbook submission.',
  },
  {
    id: 'paper-sub',
    date: '23 October 2026',
    end: '2026-10-23',
    name: 'Research Paper Submission',
    details: 'Submission of the research paper "Safe Band: Smart Wearable for Emergency Health Alerts and Monitoring in Sri Lanka".',
  },
  {
    id: 'final-thesis',
    date: '28 October 2026',
    end: '2026-10-28',
    name: 'Final Thesis Submission',
    details: 'Submission of the final thesis document.',
  },
  {
    id: 'paper-evidence',
    date: '1 December 2026',
    end: '2026-12-01',
    name: 'Research Paper Publication Evidence Submission',
    details: 'Submission of evidence of the research paper publication.',
  },
]

/* ===================== DOCUMENTS ===================== */
// url: '' => "Pending" ලෙස පෙන්වයි. PDF එක public/docs/ ට දාලා url: 'docs/නම.pdf' ලෙස දෙන්න
/* ===================== DOCUMENTS ===================== */
// type: filter drop-down එකට
// url: '' => "Pending" ලෙස පෙන්වයි
// PDF එක public/docs/ ට දාලා url: 'docs/නම.pdf' ලෙස දෙන්න ('public/' කියලා ලියන්න එපා)
export const documents = [
  
  {
    group: 'Project Proposal',
    items: [
      {
        name: 'Project Proposal Document : IT22101792 | DIMASHA S.S.D.',
        type: 'Proposal',
        desc: 'Research problem, objectives, literature survey and proposed methodology of the Safe Band project.',
        url: 'docs/IT22101792.pdf', // ← ඔබේ file නම මෙතන
      },

      {
        name: 'Project Proposal Document : IT22180070 | DEWAPRIYA K.M.S.S.',
        type: 'Proposal',
        desc: 'Research problem, objectives, literature survey and proposed methodology of the Safe Band project.',
        url: 'docs/DEWPARIYA.pdf',  
      },

      {
        name: 'Project Proposal Document : IT22190352  | GAMAGE S.Y.S.',
        type: 'Proposal',
        desc: 'Research problem, objectives, literature survey and proposed methodology of the Safe Band project.',
        url: 'docs/Gamage.pdf',  
      },

            {
        name: 'Project Proposal Document : IT22641038 | Gunawardana G.H.N.',
        type: 'Proposal',
        desc: 'Research problem, objectives, literature survey and proposed methodology of the Safe Band project.',
        url: 'docs/Nimsara.pdf',  
      },




    ],
  },
  
  {
    group: 'Final Documents',
    items: [
      { name: 'Final Report (Main)', type: 'Final Report', desc: 'Main final thesis of the Safe Band research project.', url: '' },
      { name: 'Individual Report 1', type: 'Final Report', desc: 'Individual final report of group member 1.', url: '' },
      { name: 'Individual Report 2', type: 'Final Report', desc: 'Individual final report of group member 2.', url: '' },
      { name: 'Individual Report 3', type: 'Final Report', desc: 'Individual final report of group member 3.', url: '' },
      { name: 'Individual Report 4', type: 'Final Report', desc: 'Individual final report of group member 4.', url: '' },
    ],
  },
  {
    group: 'Research Paper',
    items: [
      {
        name: 'Research Paper (IEEE Format)',
        type: 'Research Paper',
        desc: 'Safe Band: Smart Wearable for Emergency Health Alerts and Monitoring in Sri Lanka.',
        url: 'docs/ResearcPaper.pdf',
      },
    ],
  },
]

/* ===================== SLIDES ===================== */
export const slides = [
  
  { name: 'Progress Presentation 1',type: 'Presentation' ,desc: 'Presentation of the project progress at the first milestone.', url: 'slides/PP1.pdf' },
  { name: 'Progress Presentation 2', type: 'Presentation', desc: 'Presentation of the project progress at the second milestone.', url: 'slides/PP2.pptx' },
  { name: 'Final Presentation', type: 'Presentation', desc: 'Final presentation of the completed project.', url: '' },
]

/* ===================== ABOUT US ===================== */
// photo: 'images/නම.jpg' (public/images ඇතුලට දාන්න). නැත්නම් initials පෙන්වයි
export const members = [
  { name: 'Sandaru Samintha', id: 'IT22180070', component: 'Component: ML-Driven Emergency Detection', email: 'sandaru.samintha1234@gmail.com', photo: 'images/Samintha.jpeg' },
  { name: 'Hasitha Gunawardana', id: 'IT22180071', component: 'Component: ML-Driven Health Deterioration Prediction', email: 'hasitha.gunawardana94@gmail.com', photo: 'images/Hasitha.jpeg' },
  { name: 'Dinethi Dimasha', id: 'IT22101792', component: 'Component: ML-Based Smart Ambulance Dispatch', email: 'dinethisenarath@gmail.com',photo: 'images/Dinethi.png' },
  { name: 'Sasindu Yomal', id: 'IT22180073', component: 'Component: AI-Based Hospital Ward Monitoring', email: 'sasinduyomal2002@gmail.com', photo: 'images/sasindu.jpeg' },
]

export const supervisors = [
  { name: 'Chathurangika Kahadawaarachchi', role: 'Supervisor, Department of Computer Systems Engineering, SLIIT', email: 'chathurangika.k@sliit.lk', photo: 'images/Ch.jpg' },
  { name: 'Buddhima Attanayaka', role: 'Co-Supervisor, Department of Computer Systems Engineering, SLIIT', email: 'buddhima.a@sliit.lk', photo: 'images/budd.webp' },
]

/* ===================== CONTACT ===================== */
export const contact = {
  email: 'safebandsrilanka@gmail.com', 
  phone: '+94 11 234 5678', 
  address: 'Faculty of Computing, Sri Lanka Institute of Information Technology, Malabe, Sri Lanka',
}