import { useState } from "react";
import { db } from "../Firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {Row,Col}from "react-bootstrap"
import { useAuthContext } from "../hooks/useAuthContext";

export default function BookForm() {
    const [newBook, setNewBook] = useState({
        title:'',
        author: '',
        publishingYear: '',
        page: '',
    })
 const {user} =useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const ref = collection(db, "books");
    await addDoc(ref, { ...newBook,uid:user.uid});

    await setNewBook({title:'',author: '',publishingYear: '',page: ''});
    console.log(newBook);

  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
      <span>Yeni Kitap Ekle</span>
        <hr/>
        <Col sm="6" ><label>
        
        <span>Kitap Adı:</span>
        <input
          required
          type="text"
          onChange={(e)=> setNewBook({...newBook,title:e.target.value})}
          value={newBook.title}
        />
      </label>
      <label>
      <span>Kitap Yazarı:</span>
        <input
          required
          type="text"
          onChange={(e)=> setNewBook({...newBook,author:e.target.value})}
          value={newBook.author}
        />
      </label></Col>
        <Col sm="6">
        <label>
      <span>Kitap Basım Yılı:</span>
        <input
          required
          type="text"
          onChange={(e)=> setNewBook({...newBook,publishingYear:e.target.value})}
          value={newBook.publishingYear}
        />
      </label>
      <label>
      <span>Kitap Sayfa Sayısı:</span>
        <input
          required
          type="text"
          onChange={(e)=> setNewBook({...newBook,page:e.target.value})}
          value={newBook.page}
        />
      </label>
        </Col>

        </Row>
      
      
      <button>EKLE</button>
    </form>
  );
}
