import logo from "../../assets/img/landingPage/logo.png";
import logoutimg from "../../assets/img/dashboard/logout.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {BsFillGridFill,BsFillClipboard2PulseFill,BsClockHistory,BsPersonFill} from "react-icons/bs";
const PatientProfileSideBar = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    const res = await fetch("/logout");
    props.settoastCondition({
      status: "success",
      message: "Logged out Successfully!!!",
    });
    props.setToastShow(true);
    navigate("/");
  };
  const [Toggle, setToggle] = useState("Dashboard");

  return (
    <div className="h-screen overflow-y-hidden w-screen grid grid-cols-12 bg-amber-300">
      <div className="side_bar border-4 border-black shadow col-span-2">
        <div className="flex m-2 mt-4  ">
          <div className="logo m-2  ">
            <img src={logo} className="w-16" alt="logo"></img>
          </div>
          <div className="heading font-lato font-bold text-xl  ">
            <Link to="/">
              <h1>MAHD HOSPITAL</h1>
            </Link>
          </div>
        </div>
        <nav>
          <Link
            to="/patient/dashboard"
            onClick={() => setToggle("Dashboard")}
            className={
              Toggle === "Dashboard" ? "text-gray-900" : "text-gray-400"
            }
          >
            <div className="flex m-2 mt-8 ">
              <div className="w-4 ml-4  ">
              <BsFillGridFill/>
              </div>
              <div className="font-lato font-bold ml-4">
                <h1>Dashboard</h1>
              </div>
            </div>
          </Link>

          <Link
            to="/patient/reports"
            onClick={() => setToggle("Reports")}
            className={Toggle === "Reports" ? "text-gray-900" : "text-gray-400"}
          >
            <div className="flex m-2 mt-6  ">
              <div className="w-6 ml-4  ">
              <BsFillClipboard2PulseFill/>
              </div>
              <div className="font-lato font-bold ml-4">
                <h1>Reports</h1>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <h1 className="font-lato font-bold text-xl mt-4">Main menu</h1>
            <div className="grid grid-rows-2 gap-4 font-bold font-lato mt-4">
              <Link
                to="/patient/history"
                onClick={() => setToggle("Patient_history")}
                className={
                  Toggle === "Patient_history"
                    ? "text-gray-900 "
                    : "text-gray-400"
                }
              >
                <div className="flex p-2">
                <BsClockHistory/>
                  <h1 className="ml-4">Patient History</h1>
                </div>
              </Link>
              <Link
                to="/patient/profile"
                onClick={() => setToggle("Patient_profile")}
                className={
                  Toggle === "Patient_profile"
                    ? "text-gray-900"
                    : "text-gray-400"
                }
              >
                <div className="flex p-2">
                  <div className="w-6"><BsPersonFill/></div> 
                  <h1 className="ml-4">Patient Profile</h1>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className=" mx-auto mt-56 py-1    bg-cyan-300  rounded font-semibold font-lato shadow-sm hover:bg-gray-100 w-2/5  ">
          <button className="font-bold  flex items-center" onClick={logout}>
            <img src={logoutimg} className="h-4 px-2 " alt="logout"></img>logout
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default PatientProfileSideBar;