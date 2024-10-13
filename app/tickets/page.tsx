'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { HomeIcon, SearchIcon, UserIcon, BellIcon } from 'lucide-react'
import { CalendarIcon, MapPinIcon, TicketIcon } from 'lucide-react'

export default function TicketBookingPage() {
	const [isSearchVisible, setIsSearchVisible] = useState(false)

	const categories = [
		{ name: 'Concerts', color: 'from-rose-400 to-red-500', icon: '🎸' },
		{ name: 'Theater', color: 'from-violet-400 to-purple-500', icon: '🎭' },
		{ name: 'Sports', color: 'from-blue-400 to-blue-500', icon: '⚽' },
		{ name: 'Comedy', color: 'from-yellow-400 to-amber-500', icon: '😂' },
		{ name: 'Festivals', color: 'from-green-400 to-emerald-500', icon: '🎉' },
		{ name: 'Movies', color: 'from-red-400 to-rose-500', icon: '🎬' },
		{ name: 'Dance', color: 'from-indigo-400 to-blue-500', icon: '💃' },
		{ name: 'Exhibitions', color: 'from-orange-400 to-amber-500', icon: '🖼️' },
	]

	const featuredEvents = [
		{
			name: 'Summer Music Fest',
			artist: 'Various Artists',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Music',
			date: 'Sat, Oct 15, 2024',
			venue: 'Cosmic Arena, Nebula City',
		},
		{
			name: 'Hamilton',
			artist: 'Lin-Manuel Miranda',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Theater',
			date: 'Sun, Nov 5, 2024',
			venue: 'Stardust Theater',
		},
		{
			name: 'Galactic Finals',
			artist: 'Nebula Knights vs. Solar Flares',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Sports',
			date: 'Fri, Dec 1, 2024',
			venue: 'Asteroid Dome',
		},
		{
			name: 'Cosmic Comedy Night',
			artist: 'Dave Chappelle',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Comedy',
			date: 'Sat, Jan 20, 2025',
			venue: 'Lunar Laughs Club',
		},
	]

	return (
		<div className="min-h-screen bg-[#0d1117] text-gray-100">
			<header className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-16 mb-8">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400">
						Cosmic Events Hub
					</h1>
					<p className="text-xl text-blue-200">
						Discover and book your next stellar experience
					</p>
				</div>
			</header>

			<main className="container mx-auto px-4 py-8 pb-24">
				{isSearchVisible && (
					<div className="fixed inset-x-0 top-0 z-50 bg-gray-800/80 backdrop-blur-md p-4 shadow-lg animate-slide-down">
						<Input
							type="search"
							placeholder="Search for cosmic events..."
							className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
							autoFocus
						/>
					</div>
				)}

				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6 text-teal-300">Categories</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{categories.map((category) => (
							<Card
								key={category.name}
								className={`bg-gradient-to-br ${category.color} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105`}
							>
								<CardContent className="p-4 flex flex-col items-center justify-center h-40">
									<span className="text-4xl mb-2">{category.icon}</span>
									<h3 className="font-semibold text-center">{category.name}</h3>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-3xl font-bold mb-6 text-teal-300">
						Featured Events
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredEvents.map((event) => (
							<Card
								key={event.name}
								className="bg-gray-800/50 backdrop-blur-md border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
							>
								<CardHeader>
									<CardTitle className="text-teal-300 text-xl">
										{event.name}
									</CardTitle>
									<p className="text-purple-300">{event.artist}</p>
								</CardHeader>
								<CardContent>
									<div className="relative h-48 mb-4">
										<Image
											src="/assets/images/poster.png"
											alt={event.name}
											layout="fill"
											objectFit="cover"
											className="rounded-md transition-transform duration-300 hover:scale-105"
										/>
									</div>
									<div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
										<CalendarIcon className="w-4 h-4 text-teal-400" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center space-x-2 text-sm text-gray-300">
										<MapPinIcon className="w-4 h-4 text-teal-400" />
										<span>{event.venue}</span>
									</div>
								</CardContent>
								<CardFooter className="flex justify-between items-center">
									<Badge
										variant="secondary"
										className="bg-purple-600 text-white"
									>
										{event.type}
									</Badge>
									<Button className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105">
										<TicketIcon className="w-4 h-4 mr-2" />
										Book Now
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>
			</main>

			<footer className="fixed bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-md py-2 px-4">
				<div className="flex justify-around items-center max-w-md mx-auto">
					<Button variant="ghost" className="text-gray-400 hover:text-teal-300">
						<HomeIcon className="w-6 h-6" />
					</Button>
					<Button
						variant="ghost"
						className="text-gray-400 hover:text-teal-300"
						onClick={() => setIsSearchVisible(!isSearchVisible)}
					>
						<SearchIcon className="w-6 h-6" />
					</Button>
					<Button variant="ghost" className="text-gray-400 hover:text-teal-300">
						<TicketIcon className="w-6 h-6" />
					</Button>
					<Button variant="ghost" className="text-gray-400 hover:text-teal-300">
						<BellIcon className="w-6 h-6" />
					</Button>
					<Avatar className="w-8 h-8 ring-2 ring-purple-500">
						<AvatarImage src="/placeholder-user.jpg" alt="User" />
						<AvatarFallback className="bg-gray-700">
							<UserIcon className="w-6 h-6 text-teal-300" />
						</AvatarFallback>
					</Avatar>
				</div>
			</footer>
		</div>
	)
}
