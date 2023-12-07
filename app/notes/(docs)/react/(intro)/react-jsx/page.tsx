import { lilitaFont, ubuntu, inter } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import WarningNote from "@/components/Notes/WarninNote";
import { Code } from "@nextui-org/code";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

import { IoIosArrowDroprightCircle } from "react-icons/io";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "React Js | JSX ",
		description: "Notes of React js including some snippets",
	};
}
export default function ReactJSX() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/components"
				prevLink="/notes/react/setup"
			/>

			<div className="w-full flex justify-around h-fit p-2">
				<div className="flexflex-col pl-4 sm:pl-1 justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl px-3 md:p-0 text-gray-700`}
					>
						React JSX
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What is JSX?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							JSX stands for JavaScript XML. It is similar in
							appearance to HTML, hence provides a way to easily
							write HTML in react.
						</p>
						<p
							className={`${inter.className} flex gap-1 pl-7 text-lg text-justify`}
						>
							React doesn&apos;t require using JSX, but most
							people find it helpful as a visual aid when working
							with UI inside the JavaScript code. It also allows
							React to show more useful error and warning
							messages.
						</p>

						<Code
							className="bg-slate-black text-light-white w-fit mt-2 p-2 relative left-7"
							size="md"
						>
							const element = &lt;h1&gt; Hello, React!
							&lt;/h1&gt;;
						</Code>
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Embedding Expressions in JSX
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							In the example below, we declare a variable called
							name and then use it inside JSX by wrapping it in
							curly braces:
						</p>
						<Code
							className="bg-slate-black text-light-white mt-2 p-2 w-fit flex flex-col relative left-7"
							size="md"
						>
							<div className="text-xs flex gap-1 m-1">
								<span className="text-[#FE5F57]">
									<FaCircle />
								</span>
								<span className="text-[#FEBC2E]">
									<FaCircle />
								</span>
								<span className="text-[#28C840]">
									<FaCircle />
								</span>
							</div>
							<span>const name = &apos;Sujan Shrestha&apos;</span>
							<span>
								const element=&lt;h1&gt; Hello,&#123;name&#125;
								&lt;/h1&gt;;
							</span>
						</Code>

						<p
							className={`${inter.className}  text-lg p-2 mt-2 text-justify`}
						>
							Try on{" "}
							<Link
								className="text-blue-400 underline"
								target="_blank"
								href="https://codepen.io/gaearon/pen/PGEjdG?editors=1010"
							>
								codepen
							</Link>
						</p>

						<WarningNote content="Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. For example, class becomes className in JSX, and tabindex becomes tabIndex." />
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							JSX Prevents Injection Attacks
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							It is safe to embed user input in JSX:
						</p>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							By default, React DOM escapes any values embedded in
							JSX before rendering them. Thus it ensures that you
							can never inject anything that’s not explicitly
							written in your application. Everything is converted
							to a string before being rendered. This helps
							prevent XSS (cross-site-scripting) attacks.
						</p>
						<Code
							className="bg-slate-black text-light-white mt-2 p-2 w-fit flex flex-col relative left-7"
							size="md"
						>
							<div className="text-xs flex gap-1 m-1">
								<span className="text-[#FE5F57]">
									<FaCircle />
								</span>
								<span className="text-[#FEBC2E]">
									<FaCircle />
								</span>
								<span className="text-[#28C840]">
									<FaCircle />
								</span>
							</div>
							<span>
								{" "}
								const title =
								response.potentiallyMaliciousInput;
							</span>
							<span className="text-slate-400">
								&#47;&#47; This is safe:
							</span>
							<span>
								const
								element=&lt;h1&gt;&#123;title&#125;&lt;/h1&gt;;
							</span>
						</Code>

						<p
							className={`${inter.className} flex gap-1 text-lg mt-2 text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Then just start up the application with this
							command:
						</p>
						<WarningNote content="We recommend using the “Babel” language definition for your editor of choice so that both ES6 and JSX code is properly highlighted." />
					</div>
				</div>
			</div>

			<TopNavButtons nextLink="#" prevLink="/notes/react/setup" />
		</div>
	);
}