import type { NextPage } from "next";
import ExcuseCard from "../components/ExcuseCard";
import classes from "../components/Layout/Layout.module.css";

interface ExcuseData {
  category: string;
  excuse: string;
  id: number;
}
const Children: NextPage = ({ excuses }: any) => {
  return (
    <div className={`${classes.parent_flex}`}>
      {excuses.map((excuse: ExcuseData) => {
        return <ExcuseCard key={excuse.id} {...excuse} />;
      })}
    </div>
  );
};
export const getStaticProps = async () => {
  
  const res = await fetch("https://excuser.herokuapp.com/v1/excuse/children/10");
  const data = await res.json();

  return {
    props: {
      excuses: data,
    },
  };
};
export default Children;
