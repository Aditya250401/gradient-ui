'use client'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function MusicPage() {
	const discoverItems = [
		{
			title: 'New Music Friday India',
			description: 'Handpicked fresh new international music fro...',
			image: '/public/assets/images.jpg?height=300&width=300',
		},
		{
			title: 'Discover Weekly',
			description: 'Your weekly mixtape of fresh music. Enjoy new...',
			image: '/public/assets/images.jpg?height=300&width=300',
		},
		{
			title: 'Release Radar',
			description: 'Catch all the latest music from artists you follow,...',
			image: '/public/assets/images.jpg?height=300&width=300',
		},
	]

	const editorPlaylists = [
		{
			title: 'HOT HITS',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
		{
			title: 'Chill Hits',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
		{
			title: 'Rock Classics',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
		{
			title: 'All Out 2010s',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
		{
			title: 'Latest Dance Tamil',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
		{
			title: 'HOT HITS Tamil',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
		{
			title: 'Indie India',
			image: '/public/assets/images.jpg?height=150&width=150',
		},
	]

	return (
		<div className="min-h-screen bg-black text-white font-sans">
			<div className="max-w-7xl mx-auto">
				<div className="relative mb-8">
					<div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-purple-900 to-black"></div>
					<div className="relative z-10 px-6 pt-16 pb-48">
						<h1
							className="text-8xl font-bold mb-4"
							style={{ fontFamily: 'Arial, sans-serif' }}
						>
							Music
						</h1>
					</div>
				</div>

				<div className="px-6">
					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Discover new music</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{discoverItems.map((item, index) => (
								<Card
									key={index}
									className="bg-gray-900 border-none overflow-hidden rounded-lg"
								>
									<CardContent className="p-0">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-40 object-cover"
										/>
										<div className="p-4">
											<h3 className="font-semibold text-base mb-1">
												{item.title}
											</h3>
											<p className="text-gray-400 text-xs">
												{item.description}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section>
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-2xl font-bold">Playlists from our Editors</h2>
							<button className="text-sm text-gray-400 hover:underline">
								Show all
							</button>
						</div>
						<ScrollArea className="w-full whitespace-nowrap">
							<div className="flex space-x-4">
								{editorPlaylists.map((playlist, index) => (
									<Card
										key={index}
										className="w-[150px] flex-shrink-0 bg-gray-900 border-none overflow-hidden rounded-lg"
									>
										<CardContent className="p-0">
											<img
												src={playlist.image}
												alt={playlist.title}
												className="w-full h-[150px] object-cover"
											/>
											<div className="p-2">
												<h3 className="font-medium text-sm truncate">
													{playlist.title}
												</h3>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</ScrollArea>
					</section>
				</div>
			</div>
		</div>
	)
}
