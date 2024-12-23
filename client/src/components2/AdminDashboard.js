import admin_profile from "../assets/img/dashboard/admin_profile.png";
import search from "../assets/img/dashboard/search2.png";
import Footer from "../components/components1/Footer";
import PatientList from "../components/adminDashboard/PatientList";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminDashboard = (props) => {
  const [adminEmail, setAdminEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchAdmin() {
      const res = await fetch("/getadmin");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      }
      setAdminEmail(data.admin.email);
    }
    fetchAdmin();
  }, []);

  return (
    <div className="full-body col-span-10">
      <div className="body-without-footer  h-screen max-h-min bg-lime-200 ">
        <div className="main  m-2  ">
          
          <div className="">
            <div className="flex  h-12 m-2 bg-lime-200 rounded ml-6 ">
              <Link to="/AdminDash">
                <div>
                  <h1 className="text-2xl font-lato font-bold p-2 ">
                    Today's Dashboard
                  </h1>
                </div>
              </Link>

              <div className="flex ml-20  h-10 bg-lime-200  ">
                <input
                  placeholder="Search"
                  className="w-96 rounded ml-4 text-xl bg-white  pl-4 border focus:outline-none "
                ></input>
                <div className="bg-white pl-2 rounded bg-lime-200 ">
                  <img
                    src={search}
                    className=" h-6 mt-2  cursor-pointer"
                    alt="search"
                  ></img>
                </div>
              </div>

              <div className="flex bg-white rounded shadow   px-4  ml-60 h-14 ">
                <img
                  src={admin_profile}
                  className="h-12 my-1  p-1 rounded-2xl"
                  alt="profile"
                ></img>
                <div className="flex items-center ml-4  font-bold font-lato">
                  <h1>{adminEmail} </h1>
                </div>
              </div>
            </div>
            <div>
              <PatientList></PatientList>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AdminDashboard;
