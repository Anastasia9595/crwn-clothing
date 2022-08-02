

import { 
        signInWithGooglePop, 
        createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    
    const logGoogleUser = async()=> {
        const{user} = await signInWithGooglePop();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in With Google Popup</button>
            <SignUpForm/>
            
        </div>
    )

}

export default SignIn;