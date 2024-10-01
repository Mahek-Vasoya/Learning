import { useEffect } from "react";
import { generateUrl } from "./utils";
import { usersUrl } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_DATA_START, FETCH_DATA_END } from "./redux/app/action";
const FetchData = () => {
  const [data, isLoading] = useSelector((state) => [
    state.app.data,
    state.app.isLoading
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    const url = generateUrl(usersUrl);
    dispatch({ type: FETCH_DATA_START, payload: {} });
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        // added timer to show loader
        setTimeout(() => {
          dispatch({ type: FETCH_DATA_END, payload: data });
        }, 1000)
      )
      .catch((e) => console.log(e));
    console.log(url);
  }, [dispatch]);

  if (isLoading) return <p>Fetching Data...</p>;
  if (data === null) return <p>No Data Found</p>;
  return (
    <div>
      <p>User List</p>
      {data && Array.isArray(data) && data.length > 0 && (
        <ul>
          {data.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
