import FreeTrial from "./FreeTrial";
import Client from "./cLIENT.JSX";

const Home = () => {
	return (
		<div>
			<FreeTrial />
			<div className="mt-28">
				<hr className="border border-solid border-gray-00 w-full" />
			</div>
			<Client />
		</div>
	);
};

export default Home;