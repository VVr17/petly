import { useGoogleLogin } from '@react-oauth/google';
import { getUserData } from 'api/googleAuth';
import { useLoginGoogleAuthUserMutation } from 'redux/api/userApi';

export const useGoogleAuth = () => {
  const [
    loginGoogleUser,
    { isLoading: isGoogleLoading, isError: isGoogleError, error: googleError },
  ] = useLoginGoogleAuthUserMutation();

  const googleAuth = useGoogleLogin({
    onSuccess: async codeResponse => {
      const { user, error } = await getUserData(codeResponse.access_token);
      if (error) {
        toast.error('Oops, something went wrong. Please, try again later');
      }

      loginGoogleUser(user);
    },
    onError: error => {
      console.log('Login Failed:', error);
      toast.error('Oops, login failed. Please, try again later');
    },
  });

  return [googleAuth, { isGoogleLoading, isGoogleError, googleError }];
};
