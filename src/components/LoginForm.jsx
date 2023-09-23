import React, { useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ApiContext } from "../context/apiContext";
import { fetchSignIn } from "../helper/Apicall";

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState([]);
  const { setAccessData, setChat, setChatLoading } = useContext(ApiContext);
  const { register, handleSubmit, reset } = useForm();

  const handleSignIn = useCallback(async (data) => {
    setErrorMessage([]);
    try {
      let checkData = await fetchSignIn(data);
      setAccessData(checkData);
      navigate("/Slackapp/Home", { replace: true });
    } catch (e) {
      // shadow errorhandling
      // console.log(e);
      setErrorMessage(e.response.data.errors[0]);
    }
  }, []);

  return (
    <div>
      <div style={{ position: "relative", 'bottom': '50px', display: "flex", flexDirection: 'column', alignItems: "center", justifyItems: 'center' }}>
        <img src="../src/assets/images/logo.png" alt="logo" width="200" height="100" />
        <p style={{ color: '#454245' }}>We suggest using the <strong>email address</strong> that you use at work.</p>
      </div>
      <div style={{backgroundColor:'white',padding:'20px 10px',borderRadius:'6px',boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)'}}>
        <form style={{ position: 'relative', left: '50px' }}
          className="flex flex-col items-center justify-center gap-3"
          onSubmit={handleSubmit((data) => {
            handleSignIn(data);

            reset({
              username: "",
              password: "",
            });

            setChat("");
            setChatLoading(false);
          })}
        >

          <span className="self-start font-bold text-black">
            Username
          </span>
          <input
            {...register("username")}
            className="self-start w-[300px] p-2.5  border-1 border-zinc-900/80 hover:ring-orange-300 ring-2"
            placeholder="Username"
          ></input>
          <span className="self-start font-bold  text-black">
            Password
          </span>
          <input
            {...register("password")}
            type="password"
            className="self-start w-[300px] p-2.5  border-1 border-zinc-900/80 hover:ring-orange-300 ring-2"
            placeholder="Password"
          ></input>
          <span className="self-start text-red-500">
            {errorMessage}
          </span>
          <span
            className="self-start cursor-pointer text-black" style={{ marginLeft: '10px' }}
            onClick={() => navigate("/Slackapp/Signup", { replace: true })}
          >
            No Account? Sign up
          </span>
          <button
            type="submit"
            className="self-start w-[300px] h-[40px]  border-1  text-white" style={{ backgroundColor: '#4a154b' }}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
