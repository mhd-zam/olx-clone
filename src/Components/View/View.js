import { result } from 'lodash';
import React,{useContext,useEffect,useState} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postcontext';

import './View.css';
function View() {
  const { postDetails } = useContext(PostContext)
  const [sellerDetail, setSellerDetail] = useState()
  const { Firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = postDetails
    Firebase.firestore().collection('user').where('id', '==', userId).get().then((result) => {
      result.forEach(doc => {
        setSellerDetail(doc.data())
      });
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{ postDetails.Price}</p>
          <span>{postDetails.Name}</span>
          <p>{ postDetails.Category}</p>
          <span>{postDetails.createdAt }</span>
        </div>
       {sellerDetail &&  <div className="contactDetails">
       <p>Seller details</p>
       <p>{sellerDetail.username }</p>
       <p>{sellerDetail.phone}</p>
     </div>}
      </div>
    </div>
  );
}
export default View;
