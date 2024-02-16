import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
	title: "KevinIDJ",
	description: "Página de Kevin IDJ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className='m-0 flex flex-col min-h-screen'>
				<div className='shrink-1 bg-slate-800 p-3 px-6 shadow-lg sticky top-0 font-bold md:flex md:content-center'>
					<h3 className='text-3xl text-white'>Kevin IDJ</h3>
					<div className='text-sm sm:text-base md:ml-4 justify-between flex text-sky-500'>
						<Link className='flex items-center' href='/'><button className='rounded hover:bg-slate-900/50 duration-300 px-2 py-1'>Inicio</button></Link>
						<Link className='flex items-center' href='/AcercaDe'><button className='rounded hover:bg-slate-900/50 duration-300 px-2 py-1'>Acerca De</button></Link>
						<Link className='flex items-center' href='/Proyectos'><button className='rounded hover:bg-slate-900/50 duration-300 px-2 py-1'>Proyectos</button></Link>
						<Link className='flex items-center' href='/Contacto'><button className='rounded hover:bg-slate-900/50 duration-300 px-2 py-1'>Contacto</button></Link>
					</div>
				</div>
				<main className='bg-sky-200 grow-1 flex-1 flex'>
					<div className='container mx-auto bg-white flex flex-1'>
						<div className='flex flex-col p-4 flex-1'>
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
