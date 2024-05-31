import LibraryLogo from "../../assets/images/jelou-library-logo-white.png";
import { Icons } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={LibraryLogo}
                className="h-16 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-red via-primary to-secondary bg-clip-text text-transparent">
                Jelou Library
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="https://react.dev/"
                    className="hover:text-primary hover:underline"
                  >
                    ReactJS
                  </a>
                </li>
                <li className="my-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:text-primary hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com/"
                    className="hover:text-primary hover:underline"
                  >
                    Shadcn ui
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Emmanuel-Garnica"
                    className="hover:text-primary hover:underline "
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Emmanuel Garnica.
          </span>
          <div className="flex mt-4 justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/emmanuel-garnica/" className="text-gray-500 hover:text-secondary">
              <Icons.linkedIn />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a
              href="https://github.com/Emmanuel-Garnica"
              className="text-gray-500 hover:text-secondary ms-5"
            >
              <Icons.gitHub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
