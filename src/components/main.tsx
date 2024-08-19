import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Profile } from '@/types/data';

export default function Main({ data }: { data: Profile }) {
	return (
		<div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
			<header className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<nav className="flex items-center justify-between">
					<Link href="#" className="text-2xl font-bold" prefetch={false}>
						{data.name}
					</Link>
					<div className="flex items-center space-x-4">
						<Link href="#about" className="text-sm font-medium hover:underline" prefetch={false}>
							About
						</Link>
						<Link href="/projects" className="text-sm font-medium hover:underline" prefetch={false}>
							Projects
						</Link>
						<Link href="#contact" className="text-sm font-medium hover:underline" prefetch={false}>
							Contact
						</Link>
					</div>
				</nav>
			</header>
			<main>
				<section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div>
							<h1 className="text-4xl font-bold tracking-tight">{data.name}</h1>
							<p className="mt-4 text-lg text-muted-foreground">{data.description}</p>
						</div>
						<div className="flex items-center justify-end">
							<img src={data.image} width={300} height={300} alt={data.name} className="rounded-full" style={{ aspectRatio: '300/300', objectFit: 'cover' }} />
						</div>
					</div>
				</section>
				<section id="about" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold tracking-tight">About</h2>
					{data.about.map((item, index) => (
						<div key={'about-' + index} className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h3 className="text-xl font-bold">{item.title}</h3>
								<p className="mt-4 text-muted-foreground">{item.description}</p>
							</div>
							{item.skills && (
								<div>
									<h3 className="text-xl font-bold">Skills</h3>
									<ul className="mt-4 space-y-2 text-muted-foreground">
										{item.skills.map((skill, index) => (
											<li key={'skills-' + index}>{skill}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					))}
				</section>
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
				<section id="contact" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold tracking-tight">Contact</h2>
					<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
						<div>
							<p className="text-muted-foreground">Feel free to reach out if you have any questions or would like to discuss a potential project.</p>
							<div className="mt-4 flex space-x-4">
								<Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
									{data.contact.email}
								</Link>
								{data.contact.phone && (
									<Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
										{data.contact.phone}
									</Link>
								)}
							</div>
						</div>
						<form className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="block text-sm font-medium">
									Name
								</label>
								<Input id="name" name="name" type="text" required />
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="block text-sm font-medium">
									Email
								</label>
								<Input id="email" name="email" type="email" required />
							</div>
							<div className="space-y-2">
								<label htmlFor="message" className="block text-sm font-medium">
									Message
								</label>
								<Textarea id="message" name="message" rows={4} required />
							</div>
							<Button type="submit" className="w-full">
								Submit
							</Button>
						</form>
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
