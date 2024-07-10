import boximg from "../images/exp.jpg";

interface Props {
  title: string;
  desc: string;
}

function Ibox(props: Props) {
  return (
    <>
      <div className="flex bg-white flex-col gap-4 shadow-md bg-img">
        <div
          className="w-full h-[20vh] bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${boximg})`,
          }}
        ></div>
        <div className="flex flex-col gap-4 p-4">
          <div className="text-xl font-semibold text-cyan-700">
            <h1>{props.title}</h1>
          </div>
          <div>
            <p>{props.desc}</p>
          </div>
          <div>
            <button className="py-2 px-6 md:px-8 bg-zinc-600 text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ibox;
