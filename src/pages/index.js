import HomePage from "./components/Home";
import { memo } from "react";
import { useSelector } from 'react-redux';

 function Home() {
  const mode = useSelector((state)=>state.mode.value)
      return (
   <div className={mode}>
   <div className="dark:bg-slate-900 dark:text-white w-full">
   <HomePage />
   </div>
   </div>
  )

};

export default memo(Home);
