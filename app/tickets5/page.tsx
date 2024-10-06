export default function MusicBanner() {
	return (
		<div className="w-full">
			{/* Div 1: Gradient from dark to light, covering half the screen height */}
			<div className="h-[50vh] bg-gradient-to-t from-[#BB3B9B] to-[#E671D5] flex items-end">
				<div className="max-w-7xl w-full mx-auto px-6 pb-6">
					<h1
						className="text-8xl font-bold text-white"
						style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
					>
						Music
					</h1>
				</div>
			</div>

			{/* Div 2: Solid color, covering one-fourth of the screen height */}
			<div className="h-[25vh] bg-[#BB3B9B]">
				<div className="max-w-7xl w-full mx-auto px-6 pt-8">
					<h2 className="text-2xl font-bold text-white mb-4">
						Discover new music
					</h2>
					<div className="grid grid-cols-3 gap-6">
						{['New Music Friday India', 'Discover Weekly', 'Release Radar'].map(
							(title, index) => (
								<div
									key={index}
									className="bg-[#282828] rounded-lg overflow-hidden"
								>
									<img
										src={`/placeholder.svg?height=160&width=160&text=${title}`}
										alt={title}
										className="w-full h-40 object-cover"
									/>
									<div className="p-4">
										<h3 className="text-white font-semibold">{title}</h3>
										<p className="text-gray-400 text-sm mt-1">
											Description for {title}
										</p>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
