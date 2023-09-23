import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../helper/Apicall";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = useCallback(async (data) => {
    setConfirmPassword("");
    setErrorMessage([]);
    try {
      const body = {
        email: data.username,
        password: data.password,
      };

      if (data.password === data.confirmpassword) {
        await fetchRegister(body);
        reset({
          username: "",
          password: "",
          confirmpassword: "",
        });

        navigate("/Slackapp/Login", { replace: true });
      } else if (data.confirmpassword === "") {
        setConfirmPassword(`can't be blank`);
      } else {
        setConfirmPassword("password incorrect");
      }
    } catch (e) {
      setErrorMessage(e.response.data.errors);
    }
  }, []);

  return (
    <div>
      <div style={{ position: "relative", 'bottom': '50px', display: "flex", flexDirection: 'column', alignItems: "center", justifyItems: 'center' }}>
        <img src="../src/assets/images/logo.png" alt="logo" width="200" height="100" />
        <p style={{ color: '#454245' }}>We suggest using the <strong>email address</strong> that you use at work.</p>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px 10px', borderRadius: '6px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <form style={{ position: 'relative', left: '50px' }}
          className="flex flex-col items-center justify-center gap-3  drop-shadow-md"
          onSubmit={handleSubmit(submitForm)}
        >
          
          <div className="self-start">
            <span className="font-bold text-black">Username</span>
            <span className="text-red-500 ml-5  font-bold">
              {errorMessage.email}
            </span>
          </div>
          <input
            {...register("username")}
            className="self-start w-[300px] p-2.5 border-1 border-zinc-900/80 ring"
            placeholder="Username"
          ></input>

          <div className="self-start">
            <span className="self-start font-bold text-black">Password</span>
            <span className="text-red-500 ml-5 font-bold">
              {errorMessage.password}
            </span>
          </div>
          <input
            {...register("password")}
            type="password"
            className="self-start w-[300px] p-2.5 border-1 border-zinc-900/80 ring"
            placeholder="Password"
          ></input>

          <div className="self-start">
            <span className="self-start font-bold text-black">
              Confirm Password
            </span>
            <span className="text-red-500 ml-5 drop-shadow-md font-bold">
              {confirmPassword}
            </span>
          </div>
          <input
            {...register("confirmpassword")}
            type="password"
            className="self-start w-[300px] p-2.5 border-1 border-zinc-900/80 ring"
            placeholder="Password"
          ></input>
          <span
            className="cursor-pointer  text-black self-start"
            onClick={() => navigate("/Slackapp/Login", { replace: true })}
          >
            Have an Account Already? Login Here
          </span>
          <button
            type="submit"
            className="self-start bg-zinc-800  w-[300px] h-[40px] border-zinc-400/60 border-2 shadow-md text-white" style={{ backgroundColor: '#4a154b' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
