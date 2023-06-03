import { useEffect, useState } from "react";
import { searchBusinesses } from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    try {
      setIsLoading(true);
      const businesses = await searchBusinesses(searchTerm, "new york", 50);
      setResults(businesses);
    } catch (error) {
      console.log("Error searching businesses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialSearchTerm = "pasta";
    searchApi(initialSearchTerm);
  }, []);

  return [searchApi, results, isLoading];
};
