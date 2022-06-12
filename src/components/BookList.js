import { db } from "../Firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    console.log(id);
    const ref = doc(db, "books", id);
    await deleteDoc(ref);
  };
let i=0;
  return (
    
      
    
      
   
  <div className="hero-container">
    {books.map((book)=>(
      <div className="main-container" key={book.id}>
			<div className="poster-container">
				<a href="#"><img src={book.image} className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">{book.title}</h4>
					<p className="ticket__movie-slogan">
						Yazar: {book.author}
					</p>
					<p className="ticket__current-price">Yayın Yılı: {book.publishingYear}</p>
          <p className="ticket__current-price">Sayfa Sayısı: {book.page}</p>
					
					<button className="ticket__buy-btn" onClick={() => handleClick(book.id)}>Sil </button>
				</div>
			</div>
      </div>
    ))}
   
		
		

		
    
    
	</div>
  

    

    
  );
}
