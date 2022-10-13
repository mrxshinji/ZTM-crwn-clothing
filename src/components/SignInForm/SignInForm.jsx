import { useState } from "react";
import FormInput from "../FormInput/FormInput.components";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button.components";

import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";
// import { UserContext } from "../../context/user.context";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const defaultFormFIelds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFIelds);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext)

  const resetForm = () => {
    setFormFields(defaultFormFIelds);
  };

  // handle submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password))
      // await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);

      resetForm();
    } catch (err) {
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      )
        alert("User Not found or wrong password");
      console.log("Error:", err);
    }
  };

  // handle form change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Google SignIn
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  // SignInFOrm return
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type='submit'>SIGN IN</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type='button'
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
