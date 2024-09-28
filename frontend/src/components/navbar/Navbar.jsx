import { LuAirplay } from "react-icons/lu";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const handleselect = (e) => {
    console.log(e);
  };
  return (
    <div className="">
      <nav className="flex justify-between ">
        <div className="p-5">
          <LuAirplay />
        </div>
        <div>
          <ul className="flex gap-6 p-3">
            <li>Hydroplus</li>
            <li className="flex gap-1">
              Services{" "}
              <Dropdown
                label="∨"
                options={["dif", "Nontec", "dif"]}
                onSelect={handleselect}
              />
            </li>
            <li className="flex gap-1">
              Resources{" "}
              <Dropdown
                label="∨"
                options={["dif", "dif", "dif"]}
                onSelect={handleselect}
              />{" "}
            </li>
            <li className="flex gap-1">
              Press Room{" "}
              <Dropdown
                label="∨"
                options={["dif", "dif", "dif"]}
                onSelect={handleselect}
              />{" "}
            </li>
            <li className="flex gap-1">
              Solutions{" "}
              <Dropdown
                label="∨"
                options={["dif", "dif", "dif"]}
                onSelect={handleselect}
              />{" "}
            </li>
            <li className="flex gap-1">
              Technologies{" "}
              <Dropdown
                label="∨"
                options={["dif", "dif", "dif"]}
                onSelect={handleselect}
              />{" "}
            </li>
            <li>Apply</li>
          </ul>
        </div>
        <div className="p-3">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
            {" "}
            REQUEST A DEMO
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
