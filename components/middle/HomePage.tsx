"use client";
import Lottie from "lottie-react";
import Typing from "./Typing";
import gmailData from "@/public/assets/gmail.json";
import FadeInSection from "./FadeInSection";
import { Playpen_Sans } from "next/font/google";
import { Lilita_One } from "next/font/google";

export const ubuntu = Playpen_Sans({ subsets: ["latin"] });
export const lilitaFont = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
	//for sending mail to me
	function changeMailIcon() {
		window.location.href = "mailto:sujansthadev@gmail.com";
	}

	return (
		<div className=" flex items-center w-full h-full ">
			<div className=" flex flex-col  justify-center sm:items-center h-2/4 ">
				<div className="w-4/5 ml-10 sm:ml-0 flex flex-col justify-center items-start">
					<FadeInSection delay={200}>
						<p
							className={`${lilitaFont.className} text-3xl  p-1 sm:text-5xl gradient-text`}
						>
							HELLO WORLD
						</p>
					</FadeInSection>
					<FadeInSection delay={500}>
						<div
							className={`${ubuntu.className} flex text-center p-2 sm:p-1 text-2xl sm:text-3xl font-semibold text-slate-600`}
						>
							<Typing />
						</div>
					</FadeInSection>
					<FadeInSection delay={700}>
						<div className=" p-2  w-4/5 text-slate-800">
							<p
								className={`text-justify font-medium text-base sm:text-lg`}
							>
								I am a Software Engineer and a student from
								Nepal. I have a keen interest in Full-Stack
								Development, Artificial Intelligence, IOT and
								everything in between.
							</p>
						</div>
					</FadeInSection>

					{/* gmail animation  */}
					<FadeInSection delay={900}>
						<div className="gmail w-[15%] sm:w-[11%]">
							<Lottie
								animationData={gmailData}
								onClick={() => changeMailIcon()}
							/>
						</div>
					</FadeInSection>
				</div>
			</div>
		</div>
	);
}
