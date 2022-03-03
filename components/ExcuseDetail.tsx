import React from "react";
import classes from "./ExcuseDetail.module.css";
import childrenImage from "../public/children.jpg";
import familyImage from "../public/family.jpg";
import partyImage from "../public/party.jpg";
import officeImage from "../public/office.jpg";
import collegeImage from "../public/college.jpg";
import Image from "next/image";

interface ExcuseData {
  category: string;
  excuse: string;
  id: number;
}

const ExcuseDetail = ({ category, excuse, id }: ExcuseData) => {
  const getImage = (excuseFor: string) => {
    if (excuseFor === "children") return childrenImage;
    if (excuseFor === "party") return partyImage;
    if (excuseFor === "office") return officeImage;
    if (excuseFor === "college") return collegeImage;
    else {
      return familyImage;
    }
  };
  const excuseImage: StaticImageData = getImage(category);
  return (
    <section className={classes.detail}>
      <Image src={excuseImage} className="card-img-top" alt={category} width={600} height={300} />
      <h1>Excuse to {`${category !== "office" ? category : "manager"}`}</h1>
      <p>{excuse}</p>
    </section>
  );
};

export default ExcuseDetail;
