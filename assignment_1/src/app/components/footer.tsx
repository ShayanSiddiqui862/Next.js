import Image from 'next/image';
import vercel from '../public/vercel.svg'
export default function Footer(){
    return(
        <footer className="flex justify-center items-center p-4  text-black">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src={vercel} alt="Vercel Logo" width={72} height={16}  className='color-white'/>
          </span>
        </a>
      </footer>
    )
}