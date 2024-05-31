import LibraryLogo from '../../assets/images/jelou-library-logo-white.png';
import { Icons } from '../ui/icons';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className='sr-only'>Jelou Library</h1>
            <img src={LibraryLogo} className="h-16" alt="Jelou Library Logo" title="Jelou Library"/>
            <span className="hidden self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-red via-primary to-secondary bg-clip-text text-transparent md:block">Jelou Library</span>
        </a>
        <div className="w-auto block" id="navbar-default">
          <ul className="font-medium flex md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li className='flex items-center'>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Home</a>
            </li>
            <Button variant="outline" size="icon">
              <Icons.list color='hsl(350, 69%, 58%)'/>
            </Button>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;