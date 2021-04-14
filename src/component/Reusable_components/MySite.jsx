import SiteNavigation from "./SiteNavigation";
import Output from "../Output";

import "./MySite.css";

const MySite = () => {
	return (
		<section className="MySite">
			<SiteNavigation />
			<Output />
		</section>
	);
};

export default MySite;
