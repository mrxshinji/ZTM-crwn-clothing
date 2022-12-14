import { useState } from "react";
import {
  createAuthUserWthEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.components";

import {SignUpContainer} from "./SignUpForm.styles";

// import { UserContext } from "../../context/user.context";

const defaultFormFIelds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFIelds);
  const { displayName, email, password, confirmPassword } = formFields;

  // CurrentUser context
  // const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormFields(defaultFormFIelds);
  };


  // handle submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }
    // auth check with firebase auth
    try {
      const { user } = await createAuthUserWthEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      // setCurrentUser(user);
      resetForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in used");
      }
      console.log("Error:", err);
    }
  };

  const handleChange = (event) => {
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
