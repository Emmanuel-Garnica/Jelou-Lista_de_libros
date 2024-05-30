import './App.css'
import { BooksList } from './components/booksList';
import { Banner } from './components/banner';
import { Button } from './components/ui/button';

function App() {
   return (
    <main className='container mx-auto p-4'>
      <Banner>
        This is the banner
        <h1 className="text-3xl font-bold mb-4">Book List</h1>
      </Banner>
      <BooksList />
      <Button>Click me</Button>
    </main>
  )
}

export default App
