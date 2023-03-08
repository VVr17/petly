import axios from 'axios';
import { GOOGLE_URL } from 'constants/api';

export const getUserData = async googleToken => {
  try {
    const response = await axios.get(
      `${GOOGLE_URL}?access_token=${googleToken}`,
      {
        headers: {
          Authorization: `Bearer ${googleToken}`,
          Accept: 'application/json',
        },
      }
    );
    const { email, name, picture } = response.data;
    return { user: { email, name, photoURL: picture }, error: null };
  } catch (error) {
    console.log('error', error.message);
    return { user: null, error: error.message };
  }
};
