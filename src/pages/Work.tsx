import Navbar from "../components/Navbar";
import Workbox from "../components/Workbox";

function Work() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center pb-16">
        <div className="w-[80%] md:w-[65%] py-12">
          <h2 className="text-2xl font-semibold text-zinc-600">Work history</h2>
        </div>
        <div className="w-[80%] md:w-[65%] flex flex-col gap-12">
          <Workbox
            date="Nov 2022 to Present"
            role="National HSEQ Manager"
            company="TFG Group"
            qualities={[
              "Transition company over to Harmonised Legislation Nationwide",
              "Development and implementation of Operational Risk Assessments and Project launch process",
              "Training systems for young workers, Supervisors HSEQ Duties, Environmental Awareness",
              "Development of auditing systems and tools and undertaking of all internal auditing",
              "Development of Systems, procedures, and tools to attain Accreditation for ISO 45001, ISO 9001, ISO 14001",
            ]}
          />
          <Workbox
            date="Oct 2021 to Nov 2022"
            role="SHE Specialist-Corporate"
            company="Golding Contractors "
            qualities={[
              "Reporting to the GM of safety and active across Mining, Civil and Urban divisions with a combined work value of 2 billion dollars",
              "Development of systems and actions to meet OFSC and ISO accreditation",
              "Provide operational support in implementation of Digital tools and systems",
              "Excavations and Management plans for Safety, and Emergency response",
              "Initiatives and communications around psychological hazards, mental health, and critical risks",
            ]}
          />
          <Workbox
            date="May 2017 to Oct 2021"
            role="SHET Adviser (Safety, Health, Environmental, Training)"
            company="Golding Contractors"
            qualities={[
              "Safety Management of Civil Construction projects incorporating bulk earthworks, structures, services, and road construction",
              "Internal auditing",
              "Management of Safety Documentation and implementation of risk management systems",
              "Initiatives around Fire Ant management, Hazardous Goods storage, Heat Stress Management, Emergency Rescue",
              "Contractor on boarding and risk management",
            ]}
          />
          <Workbox
            date="Aug 2013 to May 2017"
            role="Safety Manager"
            company="RDS Management Group"
            qualities={[
              "Reporting to the company directors and operations Manager this role involved overseeing over 120 million dollars in work and leading a team of safety advisers",
              "Successful fostering of a positive safety culture and reduction in unsafe practices and incidents across all aspects of the company’s operations",
              "Implemented monthly reporting across all projects which was analysed across a 4-year period to identify trends and develop targeted safety initiatives and campaigns resulting in a measurable reduction in incidents and injuries",
              "Establishment, review and revision to management systems, policies and procedures resulting in increased level of compliance and positive consistent results under detailed auditing from Tier 1 organisation",
              "Identification of skills training required followed by development and implementation of internal training systems for Manual Handling, Environmental Awareness, Hazardous Goods, Risk Management (supervisors) and a Young Workers introduction to works and Mentoring program.",
            ]}
          />
          <Workbox
            date="Jan 2013 to Aug 2013"
            role="Project WHS Adviser, (Contract Role)"
            company="FDC Construction & Fit out"
            qualities={[
              "Construction of Humes facility to manufacture and store pre-cast concrete items. Build was spread over 14 Hectares and consisted of Civil Construction and  simultaneous construction of multiple buildings incorporating automated manufacturing systems with a project cost of $80 million.",
              "Co-ordination and delivery of inductions throughout the project",
              "Facilitation of contractor engagement through review and revision of SWMS and methodologies",
              "Application of FDC Federally Accredited Safety Management system",
              "Consultation between contractors to enable safe management of simultaneous operations",
              "Auditing of works and implementation of close out actions and improvements",
              "Presentation of toolbox talks and safety meetings enabling consultative process and feedback",
            ]}
          />
          <Workbox
            date="Jul 2012 to Dec 2012"
            role="Project HSE Adviser (Contract role)"
            company="National Construction Management QLD"
            qualities={[
              "28-million-dollar project to build 3 multi story residential units, recreation centre and a medical facility",
              "Raised project managements awareness regarding duty of care and responsibilities under legislation as Principal Contractor",
              "Implemented consultative risk management with contractors undertaking works on project",
              "Facilitated successful staged handover of medical centre, car parks and residential blocks to tenants as project proceeded",
            ]}
          />
          <Workbox
            date="Jan 2012 to Jun 2012"
            role="HSE Manager TYR Drilling Rig (Contract Role)"
            company="Iceland Drilling"
            qualities={[
              "Project combining Icelandic and local workers in project to drill for powering of Geo-thermal power plant using a 500-ton modular mobile drilling rig, Project budget of 30 million.",
              "Implemented training system to document roles on drill rig and to train local crews in methodologies used by Icelandic workers",
              "Initiated consultative process to enable communication and adoption of safety management systems across different cultures present on worksite",
              "Lead Toolbox and shift-change meetings, Development of JSA",
            ]}
          />
          <Workbox
            date="Nov 2010 to Nov 2011"
            role="Project HSE Manager"
            company="Hopper Construction"
            qualities={[
              "Development/Review and implementation of site-specific safety plans",
              "Administration of H&S management systems",
              "Incident Investigation and reporting",
              "Hazard Management, Identification of and implementation of controls",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Work;
