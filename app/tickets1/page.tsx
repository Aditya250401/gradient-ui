'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	HomeIcon,
	SearchIcon,
	TicketIcon,
	UserIcon,
	BellIcon,
} from 'lucide-react'

export default function TicketBookingPage() {
	const [isSearchVisible, setIsSearchVisible] = useState(false)

	const categories = [
		{ name: 'Concerts', color: 'bg-pink-500', icon: '🎸' },
		{ name: 'Theater', color: 'bg-purple-500', icon: '🎭' },
		{ name: 'Sports', color: 'bg-blue-500', icon: '⚽' },
		{ name: 'Comedy', color: 'bg-yellow-500', icon: '😂' },
		{ name: 'Festivals', color: 'bg-green-500', icon: '🎉' },
		{ name: 'Movies', color: 'bg-red-500', icon: '🎬' },
		{ name: 'Dance', color: 'bg-indigo-500', icon: '💃' },
		{ name: 'Exhibitions', color: 'bg-orange-500', icon: '🖼️' },
	]

	const featuredEvents = [
		{
			name: 'Summer Music Fest',
			artist: 'Various Artists',
			image: '/placeholder.svg?height=400&width=600',
		},
		{
			name: 'Hamilton',
			artist: 'Lin-Manuel Miranda',
			image: '/placeholder.svg?height=400&width=600',
		},
		{
			name: 'NBA Finals',
			artist: 'Lakers vs. Celtics',
			image: '/placeholder.svg?height=400&width=600',
		},
		{
			name: 'Stand-up Special',
			artist: 'Dave Chappelle',
			image: '/placeholder.svg?height=400&width=600',
		},
	]

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<main className="container mx-auto px-4 py-8 pb-24">
				{isSearchVisible && (
					<div className="fixed inset-x-0 top-0 z-50 bg-gray-800 p-4 shadow-lg animate-slide-down">
						<Input
							type="search"
							placeholder="Search for events..."
							className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
							autoFocus
						/>
					</div>
				)}

				<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
					Discover Events
				</h1>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Categories</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{categories.map((category) => (
							<Card
								key={category.name}
								className={`${category.color} hover:opacity-80 transition-opacity`}
							>
								<CardContent className="p-4 flex flex-col items-center justify-center h-32">
									<span className="text-4xl mb-2">{category.icon}</span>
									<h3 className="font-semibold">{category.name}</h3>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Featured Events</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredEvents.map((event) => (
							<Card
								key={event.name}
								className="bg-gray-800 overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
							>
								<CardContent className="p-0">
									<img
										src={event.image}
										alt={event.name}
										className="w-full h-48 object-cover"
									/>
									<div className="p-4">
										<h3 className="font-semibold text-lg mb-1">{event.name}</h3>
										<p className="text-gray-400 text-sm">{event.artist}</p>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
									<Button className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										Book Now
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</main>

			<footer className="fixed bottom-0 left-0 right-0 bg-gray-800 py-2 px-4">
				<div className="flex justify-around items-center max-w-md mx-auto">
					<Button variant="ghost" className="text-gray-400 hover:text-white">
						<HomeIcon className="w-6 h-6" />
					</Button>
					<Button
						variant="ghost"
						className="text-gray-400 hover:text-white"
						onClick={() => setIsSearchVisible(!isSearchVisible)}
					>
						<SearchIcon className="w-6 h-6" />
					</Button>
					<Button variant="ghost" className="text-gray-400 hover:text-white">
						<TicketIcon className="w-6 h-6" />
					</Button>
					<Button variant="ghost" className="text-gray-400 hover:text-white">
						<BellIcon className="w-6 h-6" />
					</Button>
					<Avatar className="w-8 h-8">
						<AvatarImage src="/placeholder-user.jpg" alt="User" />
						<AvatarFallback>
							<UserIcon className="w-6 h-6" />
						</AvatarFallback>
					</Avatar>
				</div>
			</footer>
		</div>
	)
}
