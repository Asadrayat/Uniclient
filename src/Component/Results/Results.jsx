import Button from "../Button";
import './Results.css';
const Results = () => {
	return (
		<div className='flex mt-44 flex-row-reverse justify-center items-center '>
			<div className="ml-52 flex bg-gray-50 rBox gap-44">
				<p className="flex flex-col w-28 opacity-40 text-sm ms-5 mt-4 text-gray-900">
					<span>Blog Outline </span><br />
					<span>Blog Intro</span><br />
					<span>Blog Conclusion</span><br />
					<span>PAS</span><br />
					<span>Content Rewriter</span><br />
					<span>AIDA</span>
					<div className="progress progress-primary pb1  mt-5  " value="10" max="100"></div>
					<div className="progress progress-primary mt-4 pb2   " value="40" max="100"></div>
					<div className="progress progress-primary pb3  mt-4 " value="70" max="100"></div>
					<div className="progress progress-primary pb4  mt-4" value="100" max="100"></div>
					<div className="progress progress-primary pb5  mt-4" value="100" max="100"></div>
					<div className="progress progress-primary pb6  mt-4" value="100" max="100"></div>
					<div className="progress progress-primary pb7  mt-4" value="100" max="100"></div>

					<div className="progress progress-primary pb8  mt-4" value="100" max="100"></div>

					<div className="progress progress-primary pb9  mt-4" value="100" max="100"></div>
				</p>
				<div className="-ms-24">
					<p className='text-2xl pt-4 font-bold'>Results</p>
					<p className='pt-1 text-gray-500'>Here's what our AI came up with.</p>
					<div className='rBox3  mt-4'>
						<div className='ps-3 flex flex-col '>
							<div className="progress progress-primary bars  mt-6  " value="10" max="100"></div>
							<div className="progress progress-primary mt-4 bars1 opacity-20  " value="40" max="100"></div>
							<div className="progress progress-primary bars2 opacity-20 mt-2 " value="70" max="100"></div>
							<div className="progress progress-primary bars3 opacity-20 mt-2" value="100" max="100"></div>
						</div>
					</div>
					<div className='rBox2   mt-4'>
						<div className='ps-3 flex flex-col '>
							<div className="progress progress-primary bars  mt-6  " value="10" max="100"></div>
							<div className="progress progress-primary mt-4 bars1  " value="40" max="100"></div>
							<div className="progress progress-primary bars2 mt-2 " value="70" max="100"></div>
							<div className="progress progress-primary bars3 mt-2" value="100" max="100"></div>
						</div>
					</div>
					<div className='rBox1  mt-4'>
						<div className='ps-3 flex flex-col '>
							<div className="progress progress-primary bars  mt-6  " value="10" max="100"></div>
							<div className="progress progress-primary mt-4 bars1  " value="40" max="100"></div>
							<div className="progress progress-primary bars2 mt-2 " value="70" max="100"></div>
							<div className="progress progress-primary bars3 mt-2" value="100" max="100"></div>
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<p className='text-gray-50 text-5xl'>Write what you want to <br /> convey through clear, & <br /> authentic writing</p>
				<p className='mt-8 text-xl text-gray-50 opacity-70'>AI-Writer is the most accurate content generation <br /> platform and writing tool that helps you transform <br /> your text into a completely personalized.</p>
				<div className='mt-11'><Button >Start 14 Days Free Trial</Button></div>
			</div>


		</div>
	);
};

export default Results;