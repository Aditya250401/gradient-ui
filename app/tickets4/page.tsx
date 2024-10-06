'use client'

import { Button } from '@/components/ui/button'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'

import { CalendarIcon, MapPinIcon, TicketIcon } from 'lucide-react'
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
export default function MusicBanner() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
			<div className=" flex items-end">
				<div className="max-w-7xl w-full mx-auto px-6 pb-6">
					<h1
						className="text-8xl font-bold text-white"
						style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
					>
						Music
					</h1>
				</div>
			</div>
			<div className="">
				<div className="max-w-7xl w-full mx-auto px-6 pt-8">
					<h2 className="text-2xl font-bold text-white mb-4">
						Discover new music
					</h2>
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
				</div>
			</div>
		</div>
	)
}
