import Link from 'next/link';
export default function Navbar(){
return (
    <div className="bg-gray-800 p-4 flex flex-row flex-wrap justify-between  sticky top-0 z-50  ">
      <div className="text-white text-lg font-bold flex flex-wrap flex-row">
        <Link href="/">MyWebsite</Link>
      </div>
      <ul className="flex flex-wrap flex-row items-center space-x-4 text-white ">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-gray-300">About</Link>
        </li>
          <li className="relative group">
          <button className="hover:text-gray-300"> <span>Project</span>
          <span className="text-white">▼</span></button>
          <ul className="absolute hidden group-hover:block group-focus-within:block  mt-2 py-2 w-48 bg-white rounded-lg shadow-lg right-1 text-center">
            <li className="hover:bg-gray-400">
              <Link href="/Projects/Resume-Builder" className="block px-4 py-2 text-gray-800">Resume Builder</Link>
            </li>
            <li className="hover:bg-gray-400">
              <Link href="/Projects/UI-UX-Project" className="block px-4 py-2 text-gray-800 ">UI/UX Project</Link>
            </li>
            <li className="hover:bg-gray-400 ">
              <Link href="/Projects/Capstone-Project" className="block px-4 py-2 text-gray-800 ">Capstone Project</Link>
            </li>
            </ul>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </div>
    
  );
}
