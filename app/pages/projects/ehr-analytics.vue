<template>
  <div class="min-h-screen overflow-x-hidden bg-white">
    <Navbar />
    <main>
      <!-- Hero ---------------------------------------------------------- -->
      <section class="mesh relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
        <div class="container-x">
          <span class="eyebrow">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Final Year Project
          </span>
          <h1 class="section-title mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            EHR Analytics Dashboard
          </h1>
          <p class="mt-3 font-display text-lg font-semibold text-brand-600 sm:text-xl">
            Predictive Patient Risk Monitoring
          </p>
          <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A data-driven clinical decision-support tool built to break the &ldquo;data blindness&rdquo; in healthcare. It transforms raw
            Electronic Health Record (EHR) data into actionable insights — optimising antibiotic use, tracking resistance trends,
            and predicting patient outcomes.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
              v-for="tag in tags"
              :key="tag"
              class="rounded-full border border-brand-500/20 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-700"
            >
              {{ tag }}
            </span>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/#portfolio" class="btn btn-primary">
              Back to portfolio
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/#contact" class="btn btn-ghost">
              Discuss a project
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- 1. Problem & solution ---------------------------------------- -->
      <section class="bg-white py-20 md:py-24">
        <div class="container-x">
          <div class="max-w-2xl">
            <span class="eyebrow">The Problem</span>
            <h2 class="section-title mt-4 text-3xl sm:text-4xl">Core problem &amp; how we solve it</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-600">
              Four gaps consistently block effective Antimicrobial Stewardship. Each one is addressed by a dedicated part of the system.
            </p>
          </div>

          <div class="mt-12 grid gap-6 md:grid-cols-2">
            <article v-for="gap in gaps" :key="gap.title" class="card p-6">
              <div class="flex items-start gap-4">
                <span class="icon-tile shrink-0">
                  <Icon :name="gap.icon" class="h-6 w-6" />
                </span>
                <div class="min-w-0">
                  <span class="text-[0.68rem] font-semibold uppercase tracking-wide text-brand-600">{{ gap.badge }}</span>
                  <h3 class="mt-1 font-display text-lg font-semibold tracking-tight text-slate-900">{{ gap.title }}</h3>
                </div>
              </div>
              <p class="mt-4 text-sm leading-relaxed text-slate-600">
                <span class="font-semibold text-slate-800">The issue.</span> {{ gap.issue }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">
                <span class="font-semibold text-brand-700">How we solve it.</span> {{ gap.solution }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 2. Glossary --------------------------------------------------- -->
      <section class="bg-slate-50 py-20 md:py-24">
        <div class="container-x">
          <div class="max-w-2xl">
            <span class="eyebrow">Glossary</span>
            <h2 class="section-title mt-4 text-3xl sm:text-4xl">Key terms, in plain words</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-600">
              The clinical and technical vocabulary behind the platform, explained simply.
            </p>
          </div>

          <dl class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="item in glossary" :key="item.term" class="rounded-2xl border border-slate-200 bg-white p-5">
              <dt class="font-display text-sm font-semibold text-slate-900">{{ item.term }}</dt>
              <dd class="mt-1.5 text-sm leading-relaxed text-slate-600">{{ item.def }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- 3. Technical implementation ----------------------------------- -->
      <section class="bg-white py-20 md:py-24">
        <div class="container-x">
          <div class="max-w-2xl">
            <span class="eyebrow">Technical Implementation</span>
            <h2 class="section-title mt-4 text-3xl sm:text-4xl">Standards, pillars &amp; interoperability</h2>
          </div>

          <div class="mt-12 grid gap-6 lg:grid-cols-3">
            <div v-for="block in technical" :key="block.title" class="card flex h-full flex-col p-6">
              <span class="icon-tile">
                <Icon :name="block.icon" class="h-6 w-6" />
              </span>
              <h3 class="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900">{{ block.title }}</h3>
              <ul class="mt-4 space-y-3">
                <li v-for="point in block.points" :key="point.label" class="text-sm leading-relaxed text-slate-600">
                  <span class="font-semibold text-slate-800">{{ point.label }}.</span> {{ point.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Clinical user guide ---------------------------------------- -->
      <section class="bg-slate-50 py-20 md:py-24">
        <div class="container-x">
          <div class="max-w-2xl">
            <span class="eyebrow">Clinical User Guide</span>
            <h2 class="section-title mt-4 text-3xl sm:text-4xl">Understanding the dashboard</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-600">
              Each part of the platform, explained from a healthcare professional&rsquo;s perspective.
            </p>
          </div>

          <div class="mt-12 grid gap-6 md:grid-cols-2">
            <article v-for="area in clinical" :key="area.title" class="card p-6">
              <div class="flex items-start gap-4">
                <span class="icon-tile shrink-0">
                  <Icon :name="area.icon" class="h-6 w-6" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-lg font-semibold tracking-tight text-slate-900">{{ area.title }}</h3>
                  <span class="mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-wide text-slate-400">{{ area.kicker }}</span>
                </div>
              </div>
              <p class="mt-4 text-sm leading-relaxed text-slate-600">
                <span class="font-semibold text-slate-800">What it is.</span> {{ area.what }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">
                <span class="font-semibold text-brand-700">Clinical value.</span> {{ area.value }}
              </p>
            </article>
          </div>

          <!-- Alert routing -->
          <div class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 class="font-display text-lg font-semibold tracking-tight text-slate-900">Email alert routing</h3>
            <p class="mt-2 text-sm text-slate-600">
              Email alerts are routed automatically based on each user&rsquo;s assigned role.
            </p>
            <ul class="mt-5 space-y-3">
              <li v-for="route in alertRouting" :key="route.type" class="flex flex-col gap-1 border-t border-slate-100 pt-3 first:border-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-4">
                <code class="w-fit rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-semibold text-slate-700">{{ route.type }}</code>
                <span class="text-sm text-slate-600">{{ route.recipients }}</span>
              </li>
            </ul>
            <p class="mt-5 text-sm text-slate-500">
              Any undefined alert type defaults to the System Administrator. Recipient emails are encrypted in the database and
              decrypted only when a notification is sent.
            </p>
          </div>
        </div>
      </section>

      <!-- 5. Architecture + lifecycle ----------------------------------- -->
      <section class="bg-white py-20 md:py-24">
        <div class="container-x">
          <div class="grid gap-12 lg:grid-cols-2">
            <div>
              <span class="eyebrow">System Architecture</span>
              <h2 class="section-title mt-4 text-3xl sm:text-4xl">How it is built</h2>
              <dl class="mt-8 space-y-5">
                <div v-for="layer in architecture" :key="layer.label" class="border-l-2 border-brand-500/40 pl-4">
                  <dt class="font-display text-sm font-semibold text-slate-900">{{ layer.label }}</dt>
                  <dd class="mt-1 text-sm leading-relaxed text-slate-600">{{ layer.text }}</dd>
                </div>
              </dl>
            </div>

            <div>
              <span class="eyebrow">Development Lifecycle</span>
              <h2 class="section-title mt-4 text-3xl sm:text-4xl">Unified Process</h2>
              <ol class="mt-8 space-y-5">
                <li v-for="(phase, index) in lifecycle" :key="phase.title" class="flex gap-4">
                  <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-sm font-bold text-brand-700 ring-1 ring-brand-500/20">
                    {{ index + 1 }}
                  </span>
                  <div>
                    <h3 class="font-display text-base font-semibold text-slate-900">{{ phase.title }}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ phase.text }}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Checklist + outcomes --------------------------------------- -->
      <section class="bg-slate-50 py-20 md:py-24">
        <div class="container-x">
          <div class="grid gap-12 lg:grid-cols-2">
            <div>
              <span class="eyebrow">Implementation Checklist</span>
              <h2 class="section-title mt-4 text-3xl sm:text-4xl">Verification tests</h2>
              <ul class="mt-8 space-y-4">
                <li v-for="check in checklist" :key="check" class="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <Icon name="lucide:check-circle-2" class="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span>{{ check }}</span>
                </li>
              </ul>
            </div>

            <div>
              <span class="eyebrow">Project Outcomes</span>
              <h2 class="section-title mt-4 text-3xl sm:text-4xl">What it delivers</h2>
              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div v-for="outcome in outcomes" :key="outcome.title" class="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 class="font-display text-sm font-semibold text-slate-900">{{ outcome.title }}</h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-slate-600">{{ outcome.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Backend commands ------------------------------------------- -->
      <section class="bg-white pb-20 pt-20 md:pb-24 md:pt-24">
        <div class="container-x">
          <div class="max-w-2xl">
            <span class="eyebrow">Backend Management</span>
            <h2 class="section-title mt-4 text-3xl sm:text-4xl">Custom terminal commands</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-600">
              Commands used to manage the clinical &ldquo;brain&rdquo; and the flow of data.
            </p>
          </div>

          <div class="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
            <ul class="space-y-6">
              <li v-for="cmd in commands" :key="cmd.cmd">
                <code class="font-mono text-sm font-semibold text-brand-300">python manage.py {{ cmd.cmd }}</code>
                <p class="mt-1.5 text-sm leading-relaxed text-slate-400">{{ cmd.desc }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 8. Roadmap ---------------------------------------------------- -->
      <section class="bg-slate-50 py-20 md:py-24">
        <div class="container-x">
          <div class="max-w-2xl">
            <span class="eyebrow">Future Roadmap</span>
            <h2 class="section-title mt-4 text-3xl sm:text-4xl">From pilot to hospital-wide deployment</h2>
            <p class="mt-4 text-base leading-relaxed text-slate-600">
              Continuous improvement work planned for the system beyond the pilot.
            </p>
          </div>

          <div class="mt-12 grid gap-6 md:grid-cols-2">
            <article v-for="item in roadmap" :key="item.title" class="card p-6">
              <h3 class="font-display text-lg font-semibold tracking-tight text-slate-900">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ item.text }}</p>
            </article>
          </div>

          <div class="mt-10 rounded-3xl border border-brand-500/20 bg-brand-50/60 p-6 sm:p-8">
            <p class="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
              <Icon name="lucide:info" class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>
                <span class="font-semibold text-slate-900">Developer note.</span>
                This system serves as a model for digital health initiatives, integrating Machine Learning, cyber security, and
                data mining into a functional, real-world clinical environment.
              </span>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'EHR Analytics Dashboard — Predictive Patient Risk Monitoring | Nexora Technologies',
  meta: [
    {
      name: 'description',
      content:
        'A clinical decision-support platform that turns raw EHR data into actionable insights — cumulative antibiograms, WHO ATC/DDD consumption tracking, XGBoost risk prediction, and real-time superbug alerts.'
    }
  ]
})

const tags = ['Django', 'Nuxt.js', 'XGBoost', 'WHO ATC/DDD', 'WebSockets', 'HL7 FHIR', 'RBAC']

const gaps = [
  {
    badge: 'Tracking resistance',
    title: 'The Visibility Gap',
    icon: 'lucide:search-x',
    issue: 'Hospitals collect lab results daily, but they are viewed only per patient. There is no way to see whether a ward has a growing superbug problem until it is too late.',
    solution: 'Automated data mining. Every time a lab result is entered, a backend service instantly updates a Cumulative Antibiogram — a real-time heat map of resistance across the whole hospital, so doctors can see which drugs are failing at a glance.'
  },
  {
    badge: 'Monitoring consumption',
    title: 'The Measurement Gap',
    icon: 'lucide:scale',
    issue: 'Hospitals know how much money they spend on drugs, but not the intensity of use. Comparing a large ward to a small one using vial counts is unfair and misleading.',
    solution: 'The WHO ATC/DDD standard. Drug milligrams are converted into Defined Daily Doses (DDD), then expressed as DDD per 100 Bed-Days — adjusting for hospital size and occupancy so usage intensity can be compared fairly between wards.'
  },
  {
    badge: 'Predicting outcomes',
    title: 'The Proactive Gap',
    icon: 'lucide:brain-circuit',
    issue: 'Care is usually reactive — doctors wait for a patient to get worse before changing treatment, and high-risk patients are often missed until emergency readmission.',
    solution: 'An XGBoost machine-learning engine. Instead of waiting for symptoms, the system analyses age, comorbidities (such as diabetes), and prior resistance history at admission, then generates a Predictive Risk Score that flags high-risk patients for early senior review.'
  },
  {
    badge: 'Real-time alerts',
    title: 'The Communication Gap',
    icon: 'lucide:bell-ring',
    issue: 'Critical lab results — such as a highly resistant organism — can sit in a system or on paper for hours before a doctor sees them, delaying life-saving isolation protocols.',
    solution: 'A WebSocket notification engine. The second a resistant result is saved, the system bypasses the normal workflow and pushes a superbug alert straight to the clinician dashboard and email — cutting time-to-action from hours to seconds.'
  }
]

const glossary = [
  { term: 'AMR (Antimicrobial Resistance)', def: 'The central problem — germs such as bacteria become superbugs and learn to defeat the medicines designed to kill them.' },
  { term: 'Resistance (R)', def: 'A lab result meaning the medicine failed to kill the bacteria. The most dangerous status.' },
  { term: 'Susceptibility (S)', def: 'The opposite of resistance — the medicine successfully killed the bacteria.' },
  { term: 'Intermediate (I)', def: 'A maybe result — the medicine may work, but only at higher doses or in specific body sites.' },
  { term: 'Isolate', def: 'A specific sample of bacteria grown in the lab from a patient.' },
  { term: 'Culture', def: 'The process of growing bacteria from a patient sample (blood, urine, etc.) to identify the cause of infection.' },
  { term: 'Antibiogram', def: 'A report card for a specific bacterium showing which antibiotics can still kill it.' },
  { term: 'Cumulative Antibiogram', def: 'A big-picture report card combining thousands of results to show which drugs are failing hospital-wide.' },
  { term: 'Antimicrobial Stewardship (AMS)', def: 'A hospital plan to ensure antibiotics are used only when necessary and in the right way.' },
  { term: 'ATC Code', def: 'A worldwide digital ID for every drug, used to group similar medicines for tracking.' },
  { term: 'DDD (Defined Daily Dose)', def: 'A standard unit of medicine, letting us count daily doses instead of bottles.' },
  { term: 'Bed-Days', def: 'A measure of hospital size (10 patients × 10 days = 100 bed-days) used to compare wards fairly.' },
  { term: 'Machine Learning (XGBoost)', def: 'A model that learns from thousands of past patients to predict a new patient risk of treatment failure.' },
  { term: 'Predictive Risk Score', def: 'A 0–100% warning light showing how likely a patient is to fail treatment or be readmitted.' },
  { term: 'Data Mining', def: 'Automatically digging through thousands of records to find hidden patterns, such as a growing outbreak in a ward.' },
  { term: 'RBAC (Role-Based Access Control)', def: 'A security system giving the right keys to the right people — a pharmacist sees drugs, not lab settings.' },
  { term: 'SPI (Sensitive Patient Information)', def: 'Private data such as names and history, protected by law to ensure patient privacy.' },
  { term: 'WebSockets', def: 'A live connection that pushes updates to your screen instantly, with no manual refresh.' },
  { term: 'Database-Agnostic', def: 'Built to work with any relational database, such as MySQL or PostgreSQL.' },
  { term: 'Unified Process', def: 'A professional four-step roadmap — Plan, Design, Build, Launch — used to build high-quality, bug-free software.' },
  { term: 'Empirical Treatment', def: 'The best-guess antibiotic given immediately, before final lab results return.' },
  { term: 'STG (Standard Treatment Guidelines)', def: 'The official medical rulebook for which drugs to use for specific infections.' },
  { term: 'Comorbidities', def: 'Other conditions a patient has, such as diabetes or hypertension, that can make an infection harder to treat.' },
  { term: 'Model Drift', def: 'When the model gradually becomes less accurate because bacteria or patient types change over time.' },
  { term: 'Outcome Tracking', def: 'Checking whether a prediction was right — for example, did a high-risk patient actually get readmitted?' }
]

const technical = [
  {
    title: 'Standards & coding',
    icon: 'lucide:book-open-check',
    points: [
      { label: 'ATC classification', text: 'Drugs map to the 5-level WHO hierarchy (for example, Amoxicillin → J01CA04).' },
      { label: 'DDD methodology', text: 'Consumption uses the formula Total Grams ÷ WHO DDD Value.' },
      { label: 'Laboratory standards', text: 'Susceptibility reporting follows standardised S / I / R interpretations.' }
    ]
  },
  {
    title: 'Implementation pillars',
    icon: 'lucide:layers',
    points: [
      { label: 'Predictive analytics', text: 'An XGBoost classifier using age, comorbidities, prior antibiotic exposure, culture history, and vitals, with real-time inference triggered on data entry.' },
      { label: 'Surveillance (data mining)', text: 'Automated cumulative antibiograms plus outbreak-detection algorithms monitoring ward-level clusters.' },
      { label: 'Real-time infrastructure', text: 'A WebSocket engine broadcasting alerts and stats without refresh, with non-blocking background threads for heavy ML and analytical tasks.' }
    ]
  },
  {
    title: 'Ethics & interoperability',
    icon: 'lucide:shield-check',
    points: [
      { label: 'RBAC', text: 'Strict role-based access so only authorised staff — doctors, pharmacists, lab techs — reach sensitive data.' },
      { label: 'IRB standards', text: 'Compliance with Institutional Review Board requirements, including audit logs for every data view and automated patient de-identification for research.' },
      { label: 'FHIR interoperability', text: 'Designed to share data across hospitals via the HL7 FHIR standard.' }
    ]
  }
]

const clinical = [
  {
    title: 'Dashboard',
    kicker: 'Strategic overview',
    icon: 'lucide:layout-dashboard',
    what: 'The hospital command centre for Antimicrobial Stewardship.',
    value: 'A snapshot of overall resistance rates, medication consumption, and active infection alerts across all wards, so leadership can see whether stewardship policies are working.'
  },
  {
    title: 'Antibiogram',
    kicker: 'The resistance map',
    icon: 'lucide:grid-3x3',
    what: 'A cumulative report showing the percentage of bacteria susceptible to specific antibiotics.',
    value: 'Guides empirical treatment before specific lab results are ready. If E. coli is 90% resistant to Amoxicillin in a ward, the doctor chooses a different drug immediately.'
  },
  {
    title: 'Resistance Trends',
    kicker: 'The outbreak radar',
    icon: 'lucide:trending-up',
    what: 'A live tracking system that monitors whether resistance to a drug is increasing or decreasing over time.',
    value: 'Detects resistance shifts automatically — for example, meropenem resistance jumping from 2% to 15% in the ICU flags a potential outbreak, letting infection control intervene before it spreads.'
  },
  {
    title: 'Consumption',
    kicker: 'Usage tracking',
    icon: 'lucide:pill',
    what: 'Tracks how much and how intensely antibiotics are used, using the ATC/DDD standard.',
    value: 'Clinicians see DDD per 100 bed-days — the intensity of use. High consumption in a ward with low infection rates flags the need for a clinical audit.'
  },
  {
    title: 'Risk Analysis & Predictions',
    kicker: 'Early warning system',
    icon: 'lucide:activity',
    what: 'A machine-learning tool that identifies patients at high risk of treatment failure or 30-day readmission.',
    value: 'Surfaces fragile patients who may need more aggressive monitoring or a change in therapy before they deteriorate. A high risk score flags a patient for immediate senior review.'
  },
  {
    title: 'Alerts & Notifications',
    kicker: 'The safety net',
    icon: 'lucide:bell-ring',
    what: 'A real-time engine that monitors every data entry and pushes critical warnings instantly.',
    value: 'Raises a high-risk patient alert at a predicted risk of 70% or more, a resistant organism alert the moment a superbug is found, and an STG deviation alert when a prescription departs from guidelines.'
  },
  {
    title: 'Patient Management',
    kicker: 'Digital EHR',
    icon: 'lucide:folder-heart',
    what: 'A centralised view of a patient clinical journey.',
    value: 'Combines demographics, comorbidities, lab results, and medication history in one place, so decisions rest on the full patient context.'
  },
  {
    title: 'Lab Cultures & Rx Review',
    kicker: 'Operational workflows',
    icon: 'lucide:flask-conical',
    what: 'Role-specific queues for the lab and the pharmacy.',
    value: 'Lab technicians manage specimens from collection to final susceptibility reporting, while pharmacists get a dedicated queue to review prescriptions for safety, dosing, and guideline compliance.'
  }
]

const alertRouting = [
  { type: 'HIGH_RISK', recipients: 'Doctor, Antimicrobial Steward, System Administrator' },
  { type: 'DEVIATION_STG', recipients: 'Pharmacist, Antimicrobial Steward, System Administrator' },
  { type: 'RESISTANT_ORGANISM', recipients: 'Lab Technician, Doctor, Pharmacist, Antimicrobial Steward, System Administrator' }
]

const architecture = [
  { label: 'Backend', text: 'Python (Django) with a database-agnostic relational schema.' },
  { label: 'Frontend', text: 'Nuxt.js (Vue 3) with a responsive Tailwind CSS interface.' },
  { label: 'Real-time', text: 'Django Channels for WebSocket communication.' },
  { label: 'ML pipeline', text: 'Scikit-learn and XGBoost with automated drift detection and retraining loops.' }
]

const lifecycle = [
  { title: 'Inception', text: 'Clinical and technical requirement gathering, and policy drafting.' },
  { title: 'Elaboration', text: 'Architecture design, ATC/DDD mapping, and RBAC implementation.' },
  { title: 'Construction', text: 'ML model training, real-time alert engine development, and dashboard visualisation.' },
  { title: 'Transition', text: 'System verification, outcome tracking, and clinical impact evaluation.' }
]

const checklist = [
  'Look-up test — prescriptions automatically link to ATC codes.',
  'Calculation test — the system generates DDD per 100 bed-days metrics.',
  'Visualisation test — real-time charts for resistance and consumption trends.',
  'Prediction test — risk scores generated automatically for new admissions.',
  'Alert test — real-time email and WebSocket notifications for resistant organisms and high-risk patients.'
]

const outcomes = [
  { title: 'Rational medicine use', text: 'Evidence-based prescribing replacing best guesses.' },
  { title: 'Enhanced safety', text: 'Early detection of outbreaks and high-risk patients.' },
  { title: 'Standardised reporting', text: 'A move from qualitative notes to quantitative global metrics.' },
  { title: 'Self-improving system', text: 'Automated retraining keeps the model accurate over time.' }
]

const commands = [
  { cmd: 'import_data', desc: 'The data ingestion command. Mines external sources and populates the database with patients, cultures, and prescriptions.' },
  { cmd: 'run_ml_predictions', desc: 'The batch inference command. Runs the ML engine across all current admissions to generate initial risk scores.' },
  { cmd: 'generate_alerts', desc: 'The surveillance scan. Manually triggers a scan for outbreaks or guideline deviations.' },
  { cmd: 'train_ml_model', desc: 'The learning command. Trains a new XGBoost model using historical data and outcomes.' },
  { cmd: 'run_ml_retraining', desc: 'The self-correction command. Checks for model drift and triggers automated retraining if accuracy drops.' }
]

const roadmap = [
  { title: 'A/B testing deployment', text: 'Use the automated retraining pipeline to run two model versions side by side, ensuring a new model is safer and more accurate before it becomes the primary decision-support tool.' },
  { title: 'External FHIR integration', text: 'Expand the FHIR export logic to allow real-time superbug alert sharing between hospitals and regional health authorities.' },
  { title: 'Expanded comorbidity mapping', text: 'Integrate more granular clinical data, such as genomic markers and real-time vital-sign streams, into the ML feature set to improve precision and recall.' },
  { title: 'Clinical impact monitoring', text: 'Use built-in assessment tools to monitor whether 30-day readmission rates and antimicrobial consumption intensity drop as a direct result of the system.' }
]
</script>
