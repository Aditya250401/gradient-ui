'use client'

import { Archivo_Black } from 'next/font/google'
import { cn } from '@/lib/utils'
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
import Image from 'next/image'

const AB = Archivo_Black({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
})

const featuredEvents = [
	{
		name: 'Summer Music Fest',
		artist: 'Various Artists',
		image: '/placeholder.svg?height=400&width=600',
		type: 'Music',
		date: 'Sat, Oct 15, 2024',
		venue: 'Mega Arena, Downtown',
	},
	{
		name: 'Hamilton',
		artist: 'Lin-Manuel Miranda',
		image: '/placeholder.svg?height=400&width=600',
		type: 'Theater',
		date: 'Sun, Nov 5, 2024',
		venue: 'Broadway Theater',
	},
	{
		name: 'Cosmic Symphony',
		artist: 'Nebula Orchestra',
		image: '/placeholder.svg?height=400&width=600',
		type: 'Classical',
		date: 'Fri, Dec 1, 2024',
		venue: 'Starlight Hall',
	},
]

export default function MusicBanner() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
			<div className="h-[40vh] bg-gradient-to-t from-gray-900 to-purple-900 flex items-end">
				<div className="max-w-7xl w-full mx-auto px-6 pb-12">
					<h1
						className={cn(
							'text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500',
							AB.className
						)}
					>
						Music Events
					</h1>
				</div>
			</div>

			<div className="max-w-7xl w-full mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredEvents.map((event) => (
						<Card
							key={event.name}
							className="bg-gray-800/50 backdrop-blur-md border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
						>
							<div className="relative h-48">
								<Image
									src="/assets/images/poster.png"
									alt={event.name}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-teal-300">
									{event.name}
								</CardTitle>
								<p className="text-purple-300">{event.artist}</p>
							</CardHeader>
							<CardContent>
								<div className="space-y-2 text-sm text-gray-300">
									<div className="flex items-center space-x-2">
										<CalendarIcon className="w-4 h-4 text-teal-400" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center space-x-2">
										<MapPinIcon className="w-4 h-4 text-teal-400" />
										<span>{event.venue}</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between items-center">
								<Badge variant="secondary" className="bg-purple-600 text-white">
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
			</div>
		</div>
	)
}
