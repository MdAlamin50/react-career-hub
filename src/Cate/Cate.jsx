
const Cate = ({cate}) => {
    const {logo, category_name,availability,id}=cate;
    return (
        <div className="card card-compact mt-10 gap-4 w-full bg-[#f9f8fc] shadow-md ">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
          
        </div>
      </div>
    );
};

export default Cate;