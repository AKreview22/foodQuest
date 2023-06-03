import axios from "axios";

const BASE_URL = "https://api.yelp.com/v3/businesses/";
const BEARER_TOKEN =
  "It5f5oNTgUQFFGwKKNVpeKYJj2VKH6gu6kcvaK67UDvAS9r9bZWUvpB8_5NmXUXhZFYW7A25V03ZP2fSS_nbMgxGoJEtImq6sSCbl4QD0WK0DZ3aC9jTGdHFqzR6ZHYx";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const searchBusinesses = async (searchQuery, location, limit = 50) => {
  try {
    const response = await client.get("search", {
      params: { term: searchQuery, location, limit },
    });
    return response.data.businesses;
  } catch (error) {
    console.error("Error searching businesses:", error);
    throw error;
  }
};

const searchBusinessByID = async (businessID) => {
  try {
    const response = await client.get(businessID);
    return response.data;
  } catch (error) {
    console.error("Error searching business by ID:", error);
    throw error;
  }
};

export { searchBusinesses, searchBusinessByID };
