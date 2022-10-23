import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
      <div className='text-slate-700 flex flex-col gap-4 w-full h-full'>
        <div className='m-auto w-full h-96 truncate'>
          <Image className='ease-out duration-300 hover:scale-110 hover:rotate-2' placeholder="blur" blurDataURL={"/cresol-b.jpg"} src={"/cresol.jpg"} width={"1280"} height={"720"}/>
        </div>
        <div>
        Cresol Marketplace
        Um marketplace voltado para os serviços de crédito da Cresol.
        </div>
        <Link href={"/"}>
          <a className='ease-out duration-300 text-center text-slate-300 m-auto font-semibold hover:scale-110 hover:text-slate-600 w-fit'>Home</a>
          </Link>
      </div>
  )
  
}

export default Home
