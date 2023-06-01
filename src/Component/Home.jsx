import FreeTrial from "./FreeTrial";
import Mixland from "./Mixland";
import Results from "./Results/Results";
import Review from "./Review";
import Tools from "./Tools/Tools";
import Trial from "./Trial/Trial";
import Client from "./cLIENT.JSX";

const Home = () => {
	return (
		<div>
			<FreeTrial />
			<div className="mt-28">
				<hr className="border border-solid border-gray-800 w-full" />
			</div>
			<Client />
			<Trial />
			<Results />
			<Tools />
			<div className="mt-24">
				<hr className="border border-solid border-gray-800 w-full" />
			</div>
			<Mixland />
			{/* <Review /> */}
		</div>
	);
};

export default Home;