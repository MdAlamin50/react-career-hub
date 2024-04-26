import { useEffect, useState } from "react";
import Cate from "../../Cate/Cate";

const CategoryList = () => {
    const [cate , setCate] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data =>setCate(data));
    },[])
    return (
        <div className="mt-10 ">
            <h2 className="text-5xl text-center font-bold ">Job category list</h2>
            <p className="text-center mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="flex">
                {
                    cate.map(cate => <Cate key={cate.id} cate={cate}></Cate>)
                }
            </div>
        </div>
    );
};

export default CategoryList;