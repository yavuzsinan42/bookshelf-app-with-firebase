import { db } from "../Firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    console.log(id);
    const ref = doc(db, "books", id);
    await deleteDoc(ref);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} className="books">
            {book.title} <br />
            <span>Yayın Yılı: </span> {book.publishingYear}
            <span> Yazar: </span>
            {book.author}{" "}
            <button onClick={() => handleClick(book.id)}>SİL</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
