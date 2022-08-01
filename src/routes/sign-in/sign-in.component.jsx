import { signInWithGooglePop, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async()=> {
        const{user} = await signInWithGooglePop();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in With Google Popup</button>
        </div>
    )

}

export default SignIn;