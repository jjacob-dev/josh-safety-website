import Navbar from "../components/Navbar";
import Qbox from "../components/Qbox";

function Qualifications() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center pb-16">
        <div className="w-[65%] py-12">
          <h2 className="text-2xl font-semibold text-zinc-600">
            Qualifications
          </h2>
        </div>
        <div className="w-[65%] flex flex-col gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 p-6 gap-8">
            <Qbox
              title="BSB60619 Advanced Diploma of Work Health and Safety"
              desc=""
            />
            <Qbox title="BSB50920 Diploma Of Quality Auditing" desc="" />
            <Qbox
              title="11007NAT Diploma of Environmental Management"
              desc=""
            />
            <Qbox title="BSB51312 Diploma of Work Health and Safety" desc="" />
            <Qbox
              title="BSB51307 Diploma of Occupational Health and Safety"
              desc=""
            />
          </div>
        </div>
        <div className="w-[65%] py-12">
          <h2 className="text-lg font-semibold text-zinc-600">
            Additional qualifications
          </h2>
        </div>
      </div>
    </>
  );
}

export default Qualifications;
