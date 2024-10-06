'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, } from '@/components/ui/avatar'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog'
import confetti from 'canvas-confetti'

const players = [
	{
		name: 'Virat Kohli',
		image: '/placeholder.svg?height=300&width=400',
		stats: {
			matches: 200,
			runs: 6283,
			average: 52.8,
			strikeRate: 129.94,
			hundreds: 5,
			fifties: 42,
			highestScore: 113,
			wickets: 4,
			economyRate: 8.83,
		},
	},
	{
		name: 'Rohit Sharma',
		image: '/placeholder.svg?height=300&width=400',
		stats: {
			matches: 213,
			runs: 5611,
			average: 31.17,
			strikeRate: 130.39,
			hundreds: 1,
			fifties: 40,
			highestScore: 109,
			wickets: 15,
			economyRate: 7.98,
		},
	},
	{
		name: 'MS Dhoni',
		image: '/placeholder.svg?height=300&width=400',
		stats: {
			matches: 234,
			runs: 4978,
			average: 39.2,
			strikeRate: 135.2,
			hundreds: 0,
			fifties: 24,
			highestScore: 84,
			wickets: 0,
			economyRate: 0,
		},
	},
]

export default function CricketAuctionApp() {
	const [currentBid, setCurrentBid] = useState(250000)
	const [currentTeam, setCurrentTeam] = useState('Mumbai Indians')
	const [isSold, setIsSold] = useState(false)
	const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)

	const handleBidIncrease = (amount: number) => {
		setCurrentBid((prevBid) => prevBid + amount)
		const teams = [
			'Chennai Super Kings',
			'Royal Challengers Bangalore',
			'Kolkata Knight Riders',
			'Delhi Capitals',
		]
		setCurrentTeam(teams[Math.floor(Math.random() * teams.length)])
	}

	const handleSold = () => {
		setIsSold(true)
		triggerConfetti()
	}

	const handleNextPlayer = () => {
		setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length)
		setCurrentBid(250000)
		setCurrentTeam('Mumbai Indians')
		setIsSold(false)
	}

	const triggerConfetti = () => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.85 },
			colors: ['#FFD700', '#1E90FF', '#4169E1', '#FFA500'],
		})
	}

	useEffect(() => {
		let interval: NodeJS.Timeout
		if (isSold) {
			interval = setInterval(triggerConfetti, 1000)
		}
		return () => clearInterval(interval)
	}, [isSold])

	const currentPlayer = players[currentPlayerIndex]

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500 flex items-center justify-center p-4 relative overflow-hidden">
			<Card className="w-full max-w-4xl backdrop-blur-lg bg-white/10 border-white/20 text-white relative">
				<CardHeader className="text-center relative">
					<CardTitle className="text-3xl font-bold text-yellow-300">
						IPL Auction 2024
					</CardTitle>
					<CardDescription className="text-blue-200">
						Bid on top cricket talents
					</CardDescription>
					<Button
						className="absolute top-4 right-4 bg-yellow-500 text-blue-900 hover:bg-yellow-600"
						onClick={handleSold}
					>
						Sold
					</Button>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="text-center">
						<img
							src={currentPlayer.image}
							alt={currentPlayer.name}
							className="w-full max-w-md h-64 object-cover rounded-lg mb-4 mx-auto"
						/>
						<h2 className="text-2xl font-bold mb-2 text-yellow-300">
							{currentPlayer.name}
						</h2>

						<Table className="w-full max-w-md mx-auto mb-4">
							<TableHeader>
								<TableRow className="border-b border-blue-400">
									<TableHead className="text-center text-blue-200">
										Matches
									</TableHead>
									<TableHead className="text-center text-blue-200">
										Runs
									</TableHead>
									<TableHead className="text-center text-blue-200">
										Average
									</TableHead>
									<TableHead className="text-center text-blue-200">
										Strike Rate
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow className="border-b border-blue-400">
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.matches}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.runs}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.average}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.strikeRate}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>

						<Table className="w-full max-w-md mx-auto mb-4">
							<TableHeader>
								<TableRow className="border-b border-blue-400">
									<TableHead className="text-center text-blue-200">
										100s
									</TableHead>
									<TableHead className="text-center text-blue-200">
										50s
									</TableHead>
									<TableHead className="text-center text-blue-200">
										Highest Score
									</TableHead>
									<TableHead className="text-center text-blue-200">
										Wickets
									</TableHead>
									<TableHead className="text-center text-blue-200">
										Economy
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow className="border-b border-blue-400">
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.hundreds}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.fifties}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.highestScore}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.wickets}
									</TableCell>
									<TableCell className="text-center text-yellow-300">
										{currentPlayer.stats.economyRate}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>

						<div className="text-3xl font-bold mb-2 text-yellow-300">
							Current Bid: ₹{currentBid.toLocaleString()}
						</div>
						<div className="text-lg text-blue-200 mb-4">
							Current Bidder: {currentTeam}
						</div>
					</div>

					<div className="flex justify-center gap-4">
						<Button
							onClick={() => handleBidIncrease(100000)}
							className="bg-yellow-500 text-blue-900 hover:bg-yellow-600"
						>
							+₹1 Lakh
						</Button>
						<Button
							onClick={() => handleBidIncrease(500000)}
							className="bg-yellow-500 text-blue-900 hover:bg-yellow-600"
						>
							+₹5 Lakh
						</Button>
						<Button
							onClick={() => handleBidIncrease(1000000)}
							className="bg-yellow-500 text-blue-900 hover:bg-yellow-600"
						>
							+₹10 Lakh
						</Button>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-2 text-center text-yellow-300">
							Recent Bids
						</h3>
						<div className="flex flex-wrap justify-center gap-4">
							{[
								{
									name: 'Mumbai Indians',
									amount: 250000,
									time: '2 minutes ago',
								},
								{
									name: 'Chennai Super Kings',
									amount: 225000,
									time: '5 minutes ago',
								},
								{
									name: 'Royal Challengers',
									amount: 200000,
									time: '10 minutes ago',
								},
								{
									name: 'Delhi Capitals',
									amount: 175000,
									time: '15 minutes ago',
								},
								{
									name: 'Rajasthan Royals',
									amount: 150000,
									time: '20 minutes ago',
								},
							].map((bid, index) => (
								<Card
									key={index}
									className="bg-blue-800/50 border-blue-400 w-48"
								>
									<CardContent className="p-4">
										<div className="flex items-center space-x-2 mb-2">
											<Avatar className="h-8 w-8">
												<AvatarFallback>{bid.name[0]}</AvatarFallback>
											</Avatar>
											<span className="font-semibold text-sm text-yellow-300">
												{bid.name}
											</span>
										</div>
										<div className="text-right">
											<div className="font-bold text-yellow-300">
												₹{bid.amount.toLocaleString()}
											</div>
											<div className="text-xs text-blue-200">{bid.time}</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</CardContent>
				<CardFooter className="text-center text-blue-200">
					<p>
						Next player:{' '}
						{players[(currentPlayerIndex + 1) % players.length].name}
					</p>
				</CardFooter>
			</Card>

			<Dialog open={isSold} onOpenChange={setIsSold}>
				<DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500 border-0 z-50">
					<DialogHeader>
						<DialogTitle className="text-3xl font-bold text-center text-white">
							SOLD!
						</DialogTitle>
						<DialogDescription className="text-center text-yellow-300">
							{currentPlayer.name} has been sold!
						</DialogDescription>
					</DialogHeader>
					<div className="text-center space-y-4">
						<img
							src={currentPlayer.image}
							alt={currentPlayer.name}
							className="w-32 h-32 rounded-full mx-auto border-4 border-white"
						/>
						<div>
							<h3 className="text-2xl font-bold text-white mb-1">
								{currentPlayer.name}
							</h3>
							<p className="text-xl text-yellow-300 font-semibold">
								Sold to {currentTeam}
							</p>
						</div>
						<div className="text-4xl font-bold text-white">
							₹{currentBid.toLocaleString()}
						</div>
					</div>
					<DialogFooter className="sm:justify-center">
						<Button
							variant="secondary"
							className="bg-yellow-500 text-blue-900 hover:bg-yellow-600"
							onClick={handleNextPlayer}
						>
							Next Player
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
