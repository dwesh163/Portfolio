import Link from 'next/link';

export default function Projects({ data }) {
	return (
		<div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
			<header className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<nav className="flex items-center justify-between">
					<Link href="#" className="text-2xl font-bold" prefetch={false}>
						{data.name}
					</Link>
					<div className="flex items-center space-x-4">
						<Link href="/#about" className="text-sm font-medium hover:underline" prefetch={false}>
							About
						</Link>
						<Link href="/projects" className="text-sm font-medium hover:underline" prefetch={false}>
							Projects
						</Link>
						<Link href="/#contact" className="text-sm font-medium hover:underline" prefetch={false}>
							Contact
						</Link>
					</div>
				</nav>
			</header>
			<main>
				<section id="projects" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold tracking-tight">Projects</h2>
					<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{data.projects.map((project, index) => (
							<div key={'projects-' + index} className="rounded-lg border p-4">
								<h3 className="text-xl font-bold">{project.title}</h3>
								<p className="mt-4 text-muted-foreground">{project.description}</p>
							</div>
						))}
					</div>
				</section>
			</main>
			<footer className="bg-muted py-8">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-center text-sm text-muted-foreground">&copy; 2024 {data.name}. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
