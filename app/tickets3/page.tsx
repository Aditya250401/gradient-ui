'use client'

import { useState } from 'react'
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
		},
		{
			name: 'Hamilton',
			artist: 'Lin-Manuel Miranda',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Theater',
		},
		{
			name: 'NBA Finals',
			artist: 'Lakers vs. Celtics',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Sports',
		},
		{
			name: 'Stand-up Special',
			artist: 'Dave Chappelle',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Comedy',
		},
		{
			name: 'Art Expo 2024',
			artist: 'Various Artists',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Exhibitions',
		},
		{
			name: 'Jazz Night',
			artist: 'Miles Davis',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Music',
		},
		{
			name: 'Broadway Show',
			artist: 'Andrew Lloyd Webber',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Theater',
		},
		{
			name: 'Football Championship',
			artist: 'Real Madrid vs. Barcelona',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Sports',
		},
		{
			name: 'Comedy Night',
			artist: 'Kevin Hart',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Comedy',
		},
		{
			name: 'Film Festival',
			artist: 'Various Directors',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Movies',
		},
		{
			name: 'Dance Battle',
			artist: 'Street Dancers',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Dance',
		},
		{
			name: 'Science Fair',
			artist: 'Innovators',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Exhibitions',
		},
		{
			name: 'Rock Concert',
			artist: 'The Rolling Stones',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Music',
		},
		{
			name: 'Opera Night',
			artist: 'Luciano Pavarotti',
			image: '/placeholder.svg?height=400&width=600',
			type: 'Theater',
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
			<main className="container mx-auto px-4 py-8 pb-24">
				{isSearchVisible && (
					<div className="fixed inset-x-0 top-0 z-50 bg-gray-800/80 backdrop-blur-md p-4 shadow-lg animate-slide-down">
						<Input
							type="search"
							placeholder="Search for events..."
							className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
							autoFocus
						/>
					</div>
				)}

				<h1 className="text-9xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
					Discover Events
				</h1>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Categories</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{categories.map((category) => (
							<Card
								key={category.name}
								className={`bg-gradient-to-br ${category.color} hover:shadow-lg hover:shadow-white/10 transition-all duration-300`}
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
					<h2 className="text-2xl font-semibold mb-4">Featured Events</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredEvents.map((event) => (
							// <Card
							// 	key={event.name}
							// 	className="bg-white/10 backdrop-blur-md overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
							// >
							// 	<CardContent className="p-0 relative">
							// 		<img
							// 			src={event.image}
							// 			alt={event.name}
							// 			className="w-full h-64 object-cover"
							// 		/>
							// 		<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300" />
							// 		<div className="absolute bottom-0 left-0 right-0 p-4">
							// 			<Badge className="mb-2 bg-purple-500 text-white">
							// 				{event.type}
							// 			</Badge>
							// 			<h3 className="font-semibold text-lg mb-1 text-white">
							// 				{event.name}
							// 			</h3>
							// 			<p className="text-gray-300 text-sm mb-3">{event.artist}</p>
							// 			<Button className="w-full bg-white text-purple-600 hover:bg-purple-100">
							// 				Book Now
							// 			</Button>
							// 		</div>
							// 	</CardContent>
							// </Card>

							<Card key={event.name} className="bg-gray-800 border-gray-700">
								<CardHeader>
									<CardTitle className="text-white text-2xl">
										{event.name}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<img
										src="/assets/images/appointment-img.png"
										alt="Event"
										className="w-full h-48 object-cover rounded-md mb-4"
									/>
									<div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
										<CalendarIcon className="w-4 h-4" />
										<span>Sat, Oct 15, 2024</span>
									</div>
									<div className="flex items-center space-x-2 text-sm text-gray-400">
										<MapPinIcon className="w-4 h-4" />
										<span>Mega Arena, Downtown</span>
									</div>
								</CardContent>
								<CardFooter className="flex justify-between items-center">
									<Badge variant="secondary">{event.type}</Badge>
									<Button>
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
