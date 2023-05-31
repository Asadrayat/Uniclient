import Button from "./Button";

const FreeTrial = () => {
	return (
		<div className="text-center mt-48">
			<p className="text-gray-50 text-6xl">
				Write better <br />
				content for your <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 font-bold border-b-4 border-amber-400 to-amber-400">Facebook Ads</span>
			</p>
			<p className="mt-10 opacity-70 text-gray-50">Artificial intelligence writing tool helps you create blogs, <br /> social media websites and much more.</p>

			<div className="mt-8"><Button>Start 14 Days Free Trial</Button></div>
			<div className="flex items-center justify-center gap-3 ">
				<div className="text-white mt-6">
					<ion-icon name="play-circle-outline"></ion-icon>
				</div>
				<div>
					<p className='text-sm mt-5 text-gray-50 font-semibold'>Watch A Demo</p>
				</div>
			</div>
			
		</div>
	);
};

export default FreeTrial;