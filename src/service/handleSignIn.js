import { signIn } from './SignIn';

export const handleSignIn = async (credentials, navigate) => {
    try {
        const data = await signIn(credentials);
        // Store token or user data if needed
        localStorage.setItem('token', data.token);
        // Redirect to dashboard
        navigate('/dashboard');
        return data;
    } catch (error) {
        console.error('Sign-in error:', error);
        throw error;
    }
};
