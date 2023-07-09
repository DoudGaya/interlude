import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "@/utils/calendar/calendar";
import cn from "@/utils/calendar/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<>
		<div className=" py-2 flex justify-end border-gray-400 dark:border-gray-600 border-b my-2">
		<p className=' text-gray-900 font-logo  dark:text-gray-300 px-4 py-1 rounded-xl '>
			Selected Date: <span>{selectDate.toDate().toDateString()}</span>
		</p>
		</div>
		<div className="flex gap-10 sm:divide-x border border-gray-400 dark:border-gray-600 p-4 rounded-xl justify-center  mx-auto  items-center sm:flex-row flex-col">
			<div className="w-full h-full ">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 text-white items-center ">

						<button
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
							className=" stroke-white transform rotate-180 bg-primary rounded-md p-1 cursor-pointer hover:scale-105 transition-all">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-none ">
								<path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
							</svg>
						</button>

						<h1
							className=" cursor-pointer text-gray-900 dark:text-gray-300 hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>

						<button
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
							className=" stroke-white bg-primary rounded-md p-1 cursor-pointer hover:scale-105 transition-all">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-none ">
								<path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-gray-400 dark:border-gray-600 border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "bg-primary dark:bg-primary text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black dark:bg-gray-300 dark:text-gray-900 text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
		</>
	);
}
