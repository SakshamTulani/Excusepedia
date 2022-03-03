import React from "react";
import Image from "next/image";
import childrenImage from "../public/children.jpg";
import familyImage from "../public/family.jpg";
import partyImage from "../public/party.jpg";
import officeImage from "../public/office.jpg";
import collegeImage from "../public/college.jpg";
import classes from "../components/Layout/Layout.module.css";
import Link from "next/link";

interface ExcuseData {
  category: string;
  excuse: string;
  id: number;
}

const ExcuseCard: React.FC<ExcuseData> = ({ category, excuse, id }) => {
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
    <div
      className={`card ${classes.flex_item}`}
      style={{ height: "auto", width: "18rem" }}
    >
      <Image
        src={excuseImage}
        className="card-img-top"
        alt={category}
        width={500}
        height={500}
      />
      <div className="card-body">
        <h5 className="card-title">
          Excuse to {`${category !== "office" ? category : "manager"}`}
        </h5>
        <p className="card-text">{excuse || "Excuse not found"}</p>
        <button className="btn btn-primary">
          <Link href={`./excuse/${id}`}>
            <a>Open separately</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ExcuseCard;
