import aboutimg from "../images/theclaw-large.jpg";

function About() {
  return (
    <>
      <h2 className="text-2xl font-bold text-zinc-600">About me</h2>
      <div className="flex gap-20">
        <div className="flex basis-2/3 flex-col gap-4 py-8 text-base">
          <p>Welcome to thesafetyhq.com, Website of Josh Jurgens. </p>
          <p>
            I am a Health and Safety specialist with over 20 years’ experience
            in large scale Civil, Industrial and Residential Construction,
            Demolition and Geo-thermal drilling.
          </p>

          <p>
            Currently employed by TFG group as National HSEQ Manager and working
            across multiple fabrication workshops and project locations while
            integrating an ISO accredited Management System
          </p>
        </div>
        <div>
          <img className="rounded-xl" src={aboutimg} />
        </div>
      </div>
    </>
  );
}

export default About;
