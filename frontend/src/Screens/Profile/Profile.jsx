import "./Profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastSuccess } from "../../components/toast/Toasts";
import Cookies from "js-cookie";

// cheking cookies from browser to access profile
const id = Cookies.get();

console.log(id);

const Profile = () => {
  const [userData, setUserData] = useState({});
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    toast.info("Please Login You Are Not Logged in", toastSuccess);
  }

  const setUserDataFromLocalStorage = () => {
    if (userInfo) {
      setUserData(userInfo);
    }
  };

  useEffect(() => {
    setUserDataFromLocalStorage();
  }, [userInfo]);

  console.log(userData, "user data");

  return (
    <div className="min-h-screen w-full rounded-xl  ">
      {userInfo ? (
        <>
          <div className="flex flex-col md:flex-row max-w-[80%]  mt-40 min-h-[400px]   justify-center items-center mx-auto  rounded-2xl border-2 border-blue-200 p-5 ">
            <div>
              <section className="flex flex-col   lg:flex-row lg:justify-between items-start gap-x-2 ">
                <h1 className="profileText ">
                  First Name : {userData.firstName}
                </h1>
                {userData.middleName != "" ? (
                  <h1 className="profileText">
                    Middle Name : {userData.middleName}
                  </h1>
                ) : null}
                {userData.lastName != "" ? (
                  <h1 className="profileText">
                    Last Name : {userData.lastName}
                  </h1>
                ) : null}
              </section>

              <h2 className="profileText">
                Phone Number : {userData.userPhoneNumber}
              </h2>
              <p className="profileText">
                Email Address : {userData.userEmail}
              </p>
              <p className="profileText"> UserId : {userData.userName}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>No profile data</h1>
      )}
    </div>
  );
};

export default Profile;
