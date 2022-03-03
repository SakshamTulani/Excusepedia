import React from "react";
import Image from "next/image";
import childrenImage from '../public/children.jpg'
import familyImage from '../public/family.jpg'
import partyImage from '../public/party.jpg'
import officeImage from '../public/office.jpg'
import collegeImage from '../public/college.jpg'
import classes from '../components/Layout/Layout.module.css'

interface ExcuseData {
  category: string;
  excuse: string;
  id: number;
}

const ExcuseCard: React.FC<ExcuseData> = ({ category, excuse, id }) => {
  const getImage = (category:string)=>{
    if(category==='children')
    return childrenImage;
    if(category==='party')
    return partyImage;
    if(category==='office')
    return officeImage;
    if(category==='college')
    return collegeImage;
    else{
      return familyImage;
    }

  }
  const excuseImage:StaticImageData = getImage(category);
  return (
    <div className={classes.flex_item}>
    <div className="card" style={{ width: "18rem" }}>
      <Image
        src={excuseImage}
        className="card-img-top"
        alt={category}
        width={500}
        height={500}
      />
      <div className="card-body">
        <h5 className="card-title">Excuse to {`${category!=='office'?category:'manager'}`}</h5>
        <p className="card-text" >
          {excuse}
        </p>
        <button className='btn btn-primary'>Open fully</button>
      </div>
    </div>
    </div>
  );
};

export default ExcuseCard;
