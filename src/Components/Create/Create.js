import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const history=useHistory()
  const [ Name, setName] = useState('');
  const [Category, setCategory ] = useState('');
  const [Price, setPrice] = useState(null);
  const [errorName, Seterrorname] = useState('');
  const [errorCategory, Seterrorcategory] = useState('');
  const [errorImage, SeterrorImage] = useState('');
  const [errorprice,seterrorPrice]=useState(null)
  const [Image, setImage] = useState(null);
  const { Firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const date= new Date()
  function validateName(value) {
    if (new RegExp(/[A-za-z]/).test(value)) {
      Seterrorname('');
      setName(value)
    } else {
      Seterrorname('Name required');
      setName(null);
    }
  }
  function validateCategory(value) {
    if (new RegExp(/[A-za-z]/).test(value)) {
      Seterrorcategory('')
      setCategory(value)
    } else {
      Seterrorcategory('Category not valid');
      setCategory(null);
    }
  }
  function validateimage() {
    if (Image == null) {
      SeterrorImage('image required');
    } else {
      SeterrorImage('');
    }
  }
  function validateprice() {
    if (Price == null) {
      seterrorPrice('price required');
    } else {
      seterrorPrice('')
    }
  }

  function handleProduct() {

    if (Image && Name && Category && Price) {
      
      Firebase.storage().ref(`/Image/${Image.name}`).put(Image).then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url)
          Firebase.firestore().collection('products').add({
            Name,
            Category,
            Price,
            url,
            userId: user.uid,
            createdAt:date.toDateString()
          })
        }).then(() => {
          history.push('/');
        })
      })


    } else {
      validateName(Name);
      validateCategory(Category);
      validateimage();
      validateprice()

    }
   
      
   
  }


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={Name}
              onChange={(e)=>{validateName(e.target.value)}}
              id="fname"
              name="Name"
              
            />
            <p className='error' >{errorName}</p>
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={Category}
              onChange={(e)=>{validateCategory(e.target.value)}}
              id="fname"
              name="category"
             
            />
            <p className='error' >{errorCategory}</p>
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={Price} onChange={(e)=>{setPrice(e.target.value)}} id="fname" name="Price" />
            <p className='error' >{errorprice}</p>  
          <br />
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={Image?URL.createObjectURL(Image):null}></img>
            <br />
            <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" />
            <p className='error' >{errorImage}</p>
            <br />
            <button className="uploadBtn" onClick={handleProduct} >upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
