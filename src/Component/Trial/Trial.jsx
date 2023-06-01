import Button from '../Button';
import './Trial.css'
const Trial = () => {
	return (
		<div className='flex justify-center items-center gap-44'>
			<div className="bg-gray-50  box">
				<p className='text-2xl pt-4 ps-8 font-bold'>Results</p>
				<p className='pt-1 ps-8 text-gray-500'>Here's what our AI came up with.</p>
				<div className="mt-5 ml-8 bg-opacity-5 text-sm p-3.5 bg-blue-600 box1" >
					<p>Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax. <br /><br />
						Agitate: You have no idea how much sales tax to charge your customers in each state. <br /><br />
						Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!</p>
				</div>
				<div className='box3 '>
					<div className='gap-1 flex justify-start'>
						<div className="w-2 h-2 mt-2.5 ms-3 bg-red-500 rounded-full"></div>
						<div className="w-2 h-2 mt-2.5 bg-yellow-500 rounded-full"></div>
						<div className="w-2 h-2 mt-2.5 bg-green-500 rounded-full"></div>
					</div>

					<div className='ps-3 flex flex-col '>
						<div className="progress progress-primary bar mt-6  " value="10" max="100"></div>
						<div className="progress progress-primary mt-4 bar1  " value="40" max="100"></div>
						<div className="progress progress-primary bar2 mt-2 " value="70" max="100"></div>
						<div className="progress progress-primary bar3 mt-2" value="100" max="100"></div>
					</div>
				</div>
				<div className="mt-4 ml-8 bg-opacity-5 text-sm p-3.5 bg-blue-600 box2" >
					<p>Pain: e-commerce business owners are struggling to keep up with the ever changing sales tax laws. <br /><br /> Agitate: Sales tax is a complicated, confusing </p>
				</div>
			</div>
			<div className='ml-72'>
				<p className='text-gray-50 text-5xl'>Create content efficiently <br /> and quickly with great AI <br /> writing tools</p>
				<p className='mt-8 text-gray-50 opacity-70'>150k+ users. No Credit Card Required. Pro designs and <br /> writing at no cost. Start for free. Ai Writer Tool | Generate <br /> text for ecom, social media, website, sales, blogs etc.</p>
				<div className='mt-11'><Button >Start 14 Days Free Trial</Button></div>
			</div>


		</div>
	);
};

export default Trial;