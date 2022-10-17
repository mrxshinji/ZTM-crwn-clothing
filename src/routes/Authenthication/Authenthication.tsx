
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

import {AuthenthicationContainer} from './Authenthication.styles.js'

const Authenthication = () => {

    // Sign in with google redirect method
    // useEffect( async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, []) 
    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     // const userDocRef = await createUserDocumentFromAuth(user);
    // }


    return (
        <AuthenthicationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenthicationContainer>
    )
}

export default Authenthication;