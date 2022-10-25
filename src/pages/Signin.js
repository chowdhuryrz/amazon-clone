import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex items-center">
        <div className="flex items-center justify-center m-auto max-w-[240px]">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </>
  );
};

export default Signin;
