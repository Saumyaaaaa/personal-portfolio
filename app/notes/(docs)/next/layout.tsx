"use client";
import Link from "next/link";
import { lato } from "../../layout";
import { nextLinks, mainPageLink } from "./Links";
import { usePathname } from "next/navigation";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { IoMdArrowDropright } from "react-icons/io";
import RightAsideTab from "@/components/Notes/RightAsideTabs";

export default function NextLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<section className={`${lato.className} font-medium h-[90vh]`}>
			<div className=" w-full h-full flex border  ">
				<div className="h-full w-2/12 border-r-2 border-slate-black py-2 overflow-scroll scroll-smooth hidden md:block">
					<ScrollShadow className="w-full h-full">
						<h1 className="text-2xl text-start p-2 font-medium">
							<Link
								className={`${
									pathname === mainPageLink.link &&
									"underline underline-offset-2 duration-200 text-slate-600"
								}`}
								href={mainPageLink.link}
							>
								Introduction
							</Link>
						</h1>
						<ul className=" w-full px-1 ">
							{nextLinks.map((item, ind) => (
								<li
									key={ind}
									className="px-2 flex items-center justify-start"
								>
									<span className=" h-fit w-fit text-2xl">
										<IoMdArrowDropright />
									</span>
									<Link
										className={`${
											pathname === item.links &&
											"underline underline-offset-2 duration-200 text-slate-600"
										} text-lg `}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
							<div className="border h-80"></div>
							<div className="border h-80"></div>
							<div className="border h-80"></div>
						</ul>
					</ScrollShadow>
				</div>
				<div className="border-r-2 border-slate-black p-2 w-full lg:w-9/12 h-[90vh] overflow-scroll scroll-smooth">
					{children}
				</div>
				<RightAsideTab />
			</div>
		</section>
	);
}