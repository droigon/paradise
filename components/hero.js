import Image from 'next/image'
import image from '../public/1.webp'




export default function HeroComponent() {
  return (
    <section>
      <main className='md:relative md:flex h-[700px] mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-5 lg:px-8 xl:mt-18  '>
    <div className=" mt-10 w-full px-4 sm:mt-12 md:w-1/2 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
     <div className="text-left lg:text-left">
     <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">Save your data FOREVER for humanity.</h1>
        <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700">
            Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
        <div className="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" href="/components">
                <span>Get Started </span></a>
                <a href='https://docs.google.com/document/d/1rUICjgKp97NHHt5qutsjcxRYdsiNGs8rWDOZmEJZVGU/edit' className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " >
                    <span>Whitepaper</span></a>
                    </div>
      </div>
  </div>
  <div className="w-full bg-white-hero dark:bg-hero bg-contain bg-no-repeat max-w-full object-cover h-96  sm:h-96 md:h-96 lg:mt-1 lg:w-half lg:h-full mt-10 md:absolute md:block  md:right-0  md:w-1/2">
    
  
</div>


</main>
<div>
</div>
</section>
   
  )
}

