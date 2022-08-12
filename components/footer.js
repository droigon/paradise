import Image from 'next/image'
import { FaTwitter, FaDiscord, FaTelegram, FaEnvelope  } from 'react-icons/fa';

export default function FooterComponent() {
  return (
   <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
   <div className="border-t border-slate-900/5 py-10">
    <div className='flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700'>
   <a href="/privacy-policy">Pitch deck</a>
    <div className="h-4 w-px bg-slate-500/20"></div>
    <a  href="https://docs.google.com/document/d/1rUICjgKp97NHHt5qutsjcxRYdsiNGs8rWDOZmEJZVGU/">Whitepaper</a>
    </div>
   <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2022 Memorial Paradise. All rights reserved.</p>
   <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
    <FaEnvelope href='info@memorialparadise.com' />
    <FaTwitter />
    <FaDiscord />
    <FaTelegram />
    </div>
    </div>
    </footer>
  )
}

