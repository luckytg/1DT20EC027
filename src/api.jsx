import axios from "axios";

const BASE_URL = "https://api.johndoerailways.com"; // Replace with actual API base URL

export const getAllTrains = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trains`);
    return response.data;
  } catch (error) {
    // Handle API error
    throw new Error('Error fetching all trains data:', error);
  }
};

export const getSingleTrain = async (trainId) => {
  try {
    const response =await axios.get(`${BASE_URL}/trains/${trainId}`);
    return response.data;
  } catch (error) {
    // Handle API error
    throw new Error(`Error fetching data for train ${trainId}: ${error}`);
  }
};