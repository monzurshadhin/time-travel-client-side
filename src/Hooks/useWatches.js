import { useEffect, useState } from "react";

const useWatches = () =>{
    const [watches,setWatches] = useState([]);
    const [allWatches,setAllWatches] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch("https://protected-falls-97350.herokuapp.com/limitedWatches")
          .then((res) => res.json())
          .then((data) => {
            setWatches(data);
            setIsLoading(false);
          });
      }, []);
    useEffect(() => {
        fetch("https://protected-falls-97350.herokuapp.com/watches")
          .then((res) => res.json())
          .then((data) => {
            setAllWatches(data);
            setIsLoading(false);
          });
      }, []);

      useEffect(() => {
        fetch("https://protected-falls-97350.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
            setIsLoading(false);
          });
      }, []);




    return {
        watches,
        allWatches,
        isLoading,
        reviews,
        setAllWatches
    }
}
export default useWatches;