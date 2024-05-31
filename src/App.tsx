import './App.css'
import { BooksList } from './components/booksList';
import { Banner } from './components/banner';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BookCatalog } from './components/bookCatalog';

import { useAppController } from './controllers/app.controller';
import { ReadingList } from './components/readingList';

function App() {
  const { toast } = useAppController();

   return (
    <>
      <Header/>
      <main className='container mx-auto p-4'>
        <Banner classNames='flex gap-4 flex-col-reverse items-center py-4 lg:gap-8 lg:flex-row'>
          <BooksList />
          <div className='mx-auto'>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red via-primary to-secondary bg-clip-text text-transparent">Lector Apasionado</h2>
            <h3 className='text-gray-500 font-medium'>
              Crea tu propia lista de lectura con nosotros
            </h3>
          </div>
        </Banner>
        <ReadingList></ReadingList>
        <section>
          <BookCatalog />
        </section>
      </main>

      

      <Footer/>
      {toast.open && (
        <div className='text-white bg-red-500 fixed top-4 right-4 px-4 py-2 rounded-lg'>
          {toast.msg}
        </div>
      )}
    </>
  )
}

export default App
