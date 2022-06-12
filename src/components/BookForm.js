import { useState } from "react";
import { db } from "../Firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {Row,Col}from "react-bootstrap"
import { useAuthContext } from "../hooks/useAuthContext";
import ReactFileBase64 from 'react-file-base64'

export default function BookForm() {
    const [newBook, setNewBook] = useState({
        title:'',
        author: '',
        publishingYear: '',
        page: '',
        image:'',
    })
 const {user} =useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const ref = collection(db, "books");
    await addDoc(ref, { ...newBook,uid:user.uid});

    await setNewBook({title:'',author: '',publishingYear: '',page: '',image:''});
    console.log(newBook);

  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
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
      </label>
      <label>
      <span>Kitap Resmi:</span>
      <ReactFileBase64 type='file' multiple={false} onDone={({base64})=>{setNewBook({...newBook,image:base64})}} />
      </label>
      </Col>
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
      
      
      <button className="btn-form">EKLE</button>
    </form>
  );
}
