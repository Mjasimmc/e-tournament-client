import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './config';


export const googleAuth = () => {
    return new Promise((resolve, reject) => {
        try {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
            });
            auth.languageCode = 'it';
            signInWithPopup(auth, provider)
                .then((result) => {
                    resolve(result.user)
                })
                .catch((error) => {
                    reject(error)
                });
        } catch (error) {
            reject(error)
        }
    })
};