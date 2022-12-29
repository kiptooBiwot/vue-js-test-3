import axios from "axios";

// TODO: Store in a .env file
const webApiUrl = "https://api.publish.jobs/api/user-business-jobs";

// TODO: Store the token in the Local Storage or.env file depending on the larger auth strategy
const authToken = "AZGdoqbpo4gEzxSzAkznhKlBpMiUufWsOr7ZEeDe";

export const getJobs = async ({ commit }) => {
  try {
    const response = await axios.get(webApiUrl, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    commit("SET_JOBS", response.data);
  } catch (error) {
    // TODO: Create error notification display to the user
    console.log(error);
  }
};
