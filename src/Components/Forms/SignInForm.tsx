import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Form.css";
import { post } from "../../Api/axios";
import { useAuth } from "../../Context/Auth/AuthContextPovider";

type SignInFormProps = {
  formCallback?: (data: SignInFormDataType) => void;
};

type SignInFormDataType = {
  email: string;
  password: string;
};

type SignInFormDataDto = {
  username: string;
  password: string;
};

const LOGIN_URL = "/api/v1/auth/login";

const SignInForm = ({ formCallback }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as SignInFormDataType,
  });

  const navigate = useNavigate();
  const { logIn } = useAuth();

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    const dataToSend: SignInFormDataDto = {
      username: email,
      password: password,
    };

    try {
      await post(LOGIN_URL, dataToSend).then((responseData) => {
        if (responseData) {
          logIn({ token: responseData });
          reset();
          navigate("/");
        }
      });
    } catch (error: unknown) {
      console.log("error", error);
    }
  };

  return (
    <div className="FormContainer">
      <div className="FormTitle">SignIn form</div>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="FormInput"
          {...register("email", {})}
          placeholder="Email"
        />
        <input
          className="FormInput"
          type="password"
          {...register("password", {})}
          placeholder="Password"
        />
        <input className="FormSubmitButton" type="submit" value="Log In" />
        <Link style={{ textDecoration: "none" }} to="/signup">
          Do not have account? Sign Up!
        </Link>
      </form>
    </div>
  );
};

export default SignInForm;
