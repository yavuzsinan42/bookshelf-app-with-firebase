import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const {user}= useAuthContext();
  const { documents: books } = useCollection("books",["uid","==",user.uid]);
  /* const [books, setBooks] = useState([])

  useEffect(()=>{
    const ref=collection(db, 'books')
    getDocs(ref)
    .then(docs=>{
        let result=[]
        docs.forEach(doc=>{
            result.push({id:doc.id,...doc.data()})
        })
        
        setBooks(result)
    })
  },[])
*/
  return (
    <div className="App">
      
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
