interface Props {
  date: string;
  role: string;
  company: string;
  qualities: string[];
}

function Workbox(props: Props) {
  return (
    <>
      <div className="flex sm:flex-col md:flex-row lg:flex-row gap-12">
        <div>
          <p className="text-zinc-600">{props.date}</p>
        </div>
        <div className="flex basis-3/4 flex-col">
          <div>
            <div>
              <h3 className="text-cyan-700 font-bold">{props.role}</h3>
            </div>
            <div>
              <h3 className="text-cyan-700 font-bold">{props.company}</h3>
            </div>
          </div>
          <div className="pt-2">
            <ul>
              {props.qualities.map((quality, index) => (
                <li key={index}>{"• " + quality}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workbox;
