import t1 from "../../assets/toolsImg/t1.png";
import t2 from "../../assets/toolsImg/t2.png";
import t3 from "../../assets/toolsImg/t3.png";
import t4 from "../../assets/toolsImg/content.png";
const Tools = () => {
	return (
		<div className="mt-40 ">
			<p className="text-4xl text-center font-bold text-gray-50">54 exciting writing tools</p>
			<p className="text-gray-50 text-center text-lg mt-6 opacity-70">AI engines take information from various sources and read <br /> them like a human would do. </p>
			<div className="grid grid-cols-4 gap-7 ms-36 mt-16">
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t1} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Blog Headlines</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Write a better blog title with our A.I tool.</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t2} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Blog Intros</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Write a better blog title with our A.I tool.</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t4} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Blog Items</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Need an attention-grabbing headline for your article?</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t3} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Blog Conclutions</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Write a better conclusions with AI writing tool.</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t2} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Content Rewriter</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Get AI writer to rewrite your sentence in a different way.</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t3} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Product Description</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Need an attention-grabbing headline for your article?</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t1} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">PAS Copywriting Formula</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Get AI writer to rewrite your sentence in a different way.</p>
						</div>
					</div>
				</div>
				<div className="h-32 w-80 border rounded-xl border-none bg-gray-800">
					<div className="flex justify-center items-center gap-4">
						<img className="h-10 w-10" src={t1} alt="" />
						<div className="flex flex-col gap-3.5 justify-start mt-5">
							<p className="text-lg text-gray-50 font-semibold">Company About Us</p>
							<p className="text-sm w-52 text-gray-50 opacity-70">Write a better blog title with our AI tool.</p>
						</div>
					</div>
				</div>
			</div>
			<p className="mt-16 text-gray-50 text-center">See all 54 available tools</p>
		</div>
	);
};

export default Tools;