export default function Home() {
	return (
		<>
			<h1 className='text-5xl font-bold'>Desarrollador <span className='text-sky-500'>Web</span> Full-Stack</h1>
			<p className='mt-1 text-black/50 text-xl'>Kevin Iván Domínguez Jiménez</p>
			<div className='mt-12 md:mt-0 flex flex-col md:flex-row md:p-10'>
				<div className='flex md:flex-1'>
					<div className='text-left flex flex-col justify-center'>
						<p>
							<span className='text-2xl font-bold text-sky-500'>H</span>ola, soy un apasionado desarrollador full-stack con 3 años de experiencia práctica creando sistemas de información web robustos y útiles.
						</p>
						<br />
						<p>
							<span className='text-2xl font-bold text-sky-500'>U</span>n gran número de experiencias en mi carrera han incentivado mi crecimiento
							tanto personal como profesional. Cada proyecto y desarrollo ha sido una oportunidad para innovar y crear soluciones que
							hagan la diferencia.
						</p>
					</div>
				</div>
				<div className='flex md:flex-1 justify-center mt-6 md:m-0'>
					<img className='w-64' src="https://c8.alamy.com/comp/R39TMP/software-development-and-programming-flat-vector-illustration-of-young-programmer-coding-on-the-laptop-R39TMP.jpg" />
				</div>
			</div>
			<div className='md:px-10 md:py-5 mt-6 md:m-0'>
				<p className='text-2xl font-bold'>Mi Experiencia</p>
				<div className='flex flex-wrap gap-4 py-4 items-center md:justify-around'>

					<div className='h-fit w-full md:max-w-72 overflow-hidden border rounded-md shadow-md'>
						<div className='flex items-center p-2'>
							<div>
								<p className='text-lg text-sky-500 font-bold leading-none'>Servicios Inimmed</p>
								<p className='text-xs text-black/25 font-bold leading-none'>2021</p>
							</div>
						</div>
						<hr />
						<div className='p-2'>
							<h5 className='text-sm'>
								Sistema administrativo para una PyME ubicada en Xalapa, Ver.
							</h5>
							<ul className='list-disc mx-4 py-2 text-black/50 text-xs'>
								<li>Alta y seguimiento de servicios preventivos y correctivos</li>
								<li>Agenda con disponibilidad por Ing. para servicios</li>
								<li>Estadísticas y reportes por periodo</li>
								<li>Generación de documentos PDF</li>
								<li>Desarrollado solo de 0 a 100</li>
							</ul>
						</div>
						<hr />
						<div className='flex flex-wrap gap-2 p-2'>
							<div className='flex flex-nowrap items-center justify-center gap-1 text-xs rounded-full border border-yellow-300 w-fit p-1 px-2'>
								<img className='inline-block h-4 w-4 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png' />
								<p className='text-black/50'>JavaScript</p>
							</div>
							<div className='flex flex-nowrap items-center justify-center gap-1 text-xs rounded-full border border-sky-300 w-fit p-1 px-2'>
								<img className='inline-block h-4 w-4 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
								<p className='text-black/50'>React.js</p>
							</div>
							<div className='flex flex-nowrap items-center justify-center gap-1 text-xs rounded-full border border-sky-500 w-fit p-1 px-2'>
								<img className='inline-block h-4 w-4 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png' />
								<p className='text-black/50'>Python</p>
							</div>
							<div className='flex flex-nowrap items-center justify-center gap-1 text-xs rounded-full border border-emerald-600 w-fit p-1 px-2'>
								<img className='inline-block h-4 w-4 rounded-full' src='https://static.djangoproject.com/img/logos/django-logo-positive.svg' />
								<p className='text-black/50'>Django</p>
							</div>
						</div>
					</div>


					<div className='h-fit w-full md:max-w-72 overflow-hidden border rounded-md shadow-md'>
						<div className='flex items-center p-2'>
							<div>
								<p className='text-lg text-sky-500 font-bold leading-none'>API Mensajería WhatsApp</p>
								<p className='text-xs text-black/25 font-bold leading-none'>2022</p>
							</div>
						</div>
						<hr />
						<div className='p-2'>
							<h5 className='text-sm'>
								Servicio para notificaciones y reconocimientos de usuarios
							</h5>
							<ul className='list-disc mx-4 py-2 text-black/50 text-xs'>
								<li>Interconexión con otros servicios de la empresa</li>
								<li>Utilizado para monitoreo, alertamiento y reconocimiento de alertas de logística y rastreo GPS</li>
							</ul>
						</div>
						<hr />
						<div className='flex flex-wrap gap-2 p-2'>
							<div className='flex flex-nowrap items-center justify-center gap-1 text-xs rounded-full border border-slate-500 w-fit p-1 px-2'>
								<img className='inline-block w-4 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' />
								<p className='text-black/50'>Node.js</p>
							</div>
							<div className='flex flex-nowrap items-center justify-center gap-1 text-xs rounded-full border border-slate-500 w-fit p-1 px-2'>
								<img className='inline-block w-4 rounded-full' src='/expressjs.svg' />
								<p className='text-black/50'>Express.js</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
}
