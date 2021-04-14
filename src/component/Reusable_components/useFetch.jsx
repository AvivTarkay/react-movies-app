// import React from "react";

// function useFetch(url, option) {
// 	const [response, setResponse] = React.useState(null);
// 	const [error, setError] = React.useState(null);

// 	React.useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const resData = await (await fetch(url, option)).json();
// 				setResponse(resData);
// 			} catch (error) {
// 				setError(error);
// 			}
// 		};
// 		fetchData();
// 	}, []);
// 	return { response, error };
// }

// export default useFetch;
