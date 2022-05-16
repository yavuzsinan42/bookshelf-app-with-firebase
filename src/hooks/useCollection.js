import {useState, useEffect,useRef} from 'react'
import { db } from '../Firebase/config'
import { collection, onSnapshot,query,where } from 'firebase/firestore'

export const useCollection = (collectionName,_q) => {
    const [documents, setDocuments] = useState([])
    const q=useRef(_q).current;
    useEffect(() => {
        let ref = collection(db, collectionName)
        if(q){
            ref =query(ref,where(...q))
        }
      const unsub=  onSnapshot(ref,(snapshot)=>{
            let results = [];
            snapshot.forEach(doc => {
                results.push({id: doc.id, ...doc.data()})
            });
            setDocuments(results)
        },err=>console.log(err.message))

        return () => unsub(); // Sadece veritabanında değişiklik olursa çağrılır.
    },[collectionName,q])

    return {documents}
}

