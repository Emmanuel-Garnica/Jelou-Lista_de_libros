import './App.css'
import { BooksList } from './components/booksList';
import { Banner } from './components/banner';
import { Button } from './components/ui/button';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
   return (
    <>
      <Header/>
      <main className='container mx-auto p-4'>
        <Banner classNames='flex gap-4 flex-col-reverse items-center py-4 lg:gap-8 lg:flex-row'>
          <BooksList />
          <div className='mx-auto'>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red via-primary to-secondary bg-clip-text text-transparent">Passionate Reader</h2>
            <h3 className='text-gray-500 font-medium'>
              Make your own reading list here
              </h3>
          </div>
        </Banner>
        
        <Button>Click me</Button>

      </main>
      <Footer/>
    </>
  )
}

export default App
