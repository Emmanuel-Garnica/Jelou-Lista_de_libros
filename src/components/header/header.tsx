import LibraryLogo from '../../assets/images/jelou-library-logo-white.png';
import { Icons } from '../ui/icons';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <picture className="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className='sr-only'>Librería Jelou</h1>
            <img src={LibraryLogo} className="h-16" alt="Librería Jelou Logo" title="Librería Jelou"/>
            <span className="hidden self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-red via-primary to-secondary bg-clip-text text-transparent md:block">Librería Jelou</span>
        </picture>
        <div className="w-auto block" id="navbar-default">
          <ul className="font-medium flex md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
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