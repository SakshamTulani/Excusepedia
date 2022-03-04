import { NextPage } from "next";
import ExcuseCard from "../../components/ExcuseCard";
import React from "react";
import ExcuseDetail from "../../components/ExcuseDetail";

interface ExcuseData {
  category: string;
  excuse: string;
  id: number;
}

const Excuse: NextPage = ({ excuse }: any) => {
  return (
    <div>
      <ExcuseDetail {...excuse} />
    </div>
  );
};


export const getStaticPaths = async () => {
  const res = await fetch("https://excuser.herokuapp.com/v1/excuse/50");
  const data = await res.json();
  const paths  = data.map((item:any)=>{
      return {
          params:{
              excuseId:item.id.toString(),
          }
      }
  })
  return {
      fallback:false,
      paths:paths
  }
};

export const getStaticProps = async (context: any) => {
  const excuseId = context.params.excuseId;
  const res = await fetch(
    `https://excuser.herokuapp.com/v1/excuse/id/${excuseId}`
  );
  const data = await res.json();

  return {
    props: {
      excuse: data,
    },
  };
};
export default Excuse;
