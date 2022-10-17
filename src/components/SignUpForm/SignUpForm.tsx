import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.components";

import {SignUpContainer} from "./SignUpForm.styles";

import { AuthErrorCodes, AuthError } from "firebase/auth";

// import { UserContext } from "../../context/user.context";

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFIelds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFIelds);
  const { displayName, email, password, confirmPassword } = formFields;

  // CurrentUser context
  // const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormFields(defaultFormFIelds);
  };


  // handle submit form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }
    // auth check with firebase auth
    try {
      dispatch(signUpStart(email, password, displayName))
      // const { user } = await createAuthUserWthEmailAndPassword(email, password);
      // await createUserDocumentFromAuth(user, { displayName });
      // setCurrentUser(user);
      resetForm();
    } catch (err) {
      if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in used");
      }
      console.log("Error:", err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // SignUpForm return
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
