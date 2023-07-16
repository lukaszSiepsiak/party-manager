import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Form.css";

type SignInFormProps = {
  formCallback?: (data: SignInFormDataType) => void;
};

type SignInFormDataType = {
  email: string;
  password: string;
};

const SignInForm = ({ formCallback }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as SignInFormDataType,
  });

  const onSubmit = async (data: any) => {
    console.log("onSubmit", data);
    const { email, password } = data;

    if (formCallback) {
      formCallback({ email, password });
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
