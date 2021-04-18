import loadingGif from "../../images/loadingGif.gif";
const Loader = () => {
	return (
		<div className="loader">
			<img src={loadingGif} alt="Loading" />
		</div>
	);
};

export default Loader;
