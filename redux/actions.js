export const GET_TITLES = "GET_TITLES";

import axios from "axios";
import { dataLink } from "../config";

export const getTitles = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(dataLink);
      if (response.data) {
        dispatch({
          type: GET_TITLES,
          payload: response.data,
        });
      } else {
        console.log("can't fetch!");
      }
    };
  } catch (err) {
    console.log(err);
  }
};
