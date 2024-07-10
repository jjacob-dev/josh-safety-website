interface Props {
  title: string;
  desc: string;
}

function Qbox(props: Props) {
  return (
    <>
      <div className="flex bg-white p-3 flex-col gap-4 shadow-md">
        <div className="text-lg font-semibold text-cyan-700">
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Qbox;
