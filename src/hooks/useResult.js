import { useEffect, useState } from "react";
import { searchBusinessByID } from "../api/yelp";

const useResult = (businessID) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchBusiness = async () => {
    try {
      setIsLoading(true);
      const business = await searchBusinessByID(businessID);
      setResult(business);
    } catch (error) {
      console.log("Error searching business by ID:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchBusiness();
  }, [businessID]);

  return [result, isLoading];
};

export default useResult;
