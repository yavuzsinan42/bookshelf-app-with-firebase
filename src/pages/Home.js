import { useState } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
  const [books, setBooks] = useState([
    { title: 'İstanbul Hatırası', id: 1 },
    { title: 'Yazılım Bilimi', id: 2 },
    { title: 'Clean Code', id: 3 },
    { title: 'Önemli İşlere Öncelik', id: 4 }
  ])

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}