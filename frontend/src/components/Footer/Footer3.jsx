const Footer3 = () => {
  return (
    <div className="py-24">
      <div className="flex justify-center border-t-2 ">
        <img src="src/assets/poslogo.svg" alt="logo"  className="-translate-y-8 size-16"/>
      </div>
      <div className="flex flex-col justify-center xl:flex-row gap-x-96 text-[#828289]">
        {" "}
        <ul className="flex flex-row gap-5 justify-center">
          <li>Features</li>
          <li>Integrations</li>
          <li>Plans </li>
        </ul>
        <div className="flex justify-center text-sm font-extralight">
          <p>Posterity Labs © 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
