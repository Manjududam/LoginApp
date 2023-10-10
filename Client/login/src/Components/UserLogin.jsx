import React from "react";
import { Link } from "react-router-dom";
// import Profile from '../Assests/ProfilePic.jpg'

import styles from "../Styles/UserLogin.module.css";
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { UsernameValidate } from "../Helper/Validate";

const UserLogin = () => {

  const formik = useFormik({
    initialValues: {
      username: ""
    },
    validate: UsernameValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
      console.log(values);
    }
  })


  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Hello Again!</h4>
              <span className="py-4 text-xl text-center w-2/3 text-gray-500">
                Explore More by connecting with us.
              </span>
            </div>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img className={styles.profile_img} src="" alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-3">
                <input {...formik.getFieldProps('username')}
                  className={styles.textBox}
                  type="text"
                  placeholder="Username"
                />
                <button className={styles.btn} type="submit">
                  Let's Go
                </button>

                <div className="text-center py-4">
                  <span className="text-gray-500">
                    Not a member{" "}
                    <Link to="/signup" className="text-red-500 ml-1 hover:underline">
                      Sign Up?
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
