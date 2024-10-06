import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, MapPinIcon, TicketIcon } from 'lucide-react'

export default function TicketBookingPage() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-100">
			<header className="bg-gray-800 py-4">
				<div className="container mx-auto px-4 flex items-center justify-between">
					<h1 className="text-2xl font-bold">ShowTix</h1>
					<div className="flex items-center space-x-4">
						<Input
							type="search"
							placeholder="Search events..."
							className="w-64 bg-gray-700 border-gray-600 text-gray-100"
						/>
						<Button variant="ghost">Login</Button>
						<Avatar>
							<AvatarImage src="/placeholder-user.jpg" alt="User" />
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Featured Events</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
							<Card key={i} className="bg-gray-800 border-gray-700">
								<CardHeader>
									<CardTitle>Epic Concert Night</CardTitle>
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
									<Badge variant="secondary">Music</Badge>
									<Button>
										<TicketIcon className="w-4 h-4 mr-2" />
										Book Now
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-3xl font-bold mb-6">Upcoming Shows</h2>
					<div className="space-y-4">
						{[1, 2, 3, 4].map((i) => (
							<Card key={i} className="bg-gray-800 border-gray-700">
								<CardContent className="flex items-center p-4">
									<img
										src={`/placeholder.svg?height=100&width=100`}
										alt="Show"
										className="w-24 h-24 object-cover rounded-md mr-4"
									/>
									<div className="flex-grow">
										<h3 className="text-xl font-semibold mb-2">
											Amazing Show Title
										</h3>
										<div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
											<CalendarIcon className="w-4 h-4" />
											<span>Fri, Nov 10, 2024</span>
										</div>
										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<MapPinIcon className="w-4 h-4" />
											<span>City Hall Auditorium</span>
										</div>
									</div>
									<Button>
										<TicketIcon className="w-4 h-4 mr-2" />
										Book
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</main>

			<footer className="bg-gray-800 py-6 mt-12">
				<div className="container mx-auto px-4 text-center text-gray-400">
					&copy; 2024 ShowTix. All rights reserved.
				</div>
			</footer>
		</div>
	)
}
