import axios from 'axios';
import { SUBMIT_EMAIL} from './types';

export const submitEmail = (values) => async dispatch => {
    console.log("submitEmail has values");
    console.log(values);
    const res = await axios.post('/api', values);
    dispatch({ type: SUBMIT_EMAIL, payload: res});
};
