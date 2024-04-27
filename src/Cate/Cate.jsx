const Cate = ({ cate }) => {
  const { logo, category_name, availability, id } = cate;
  return (
    <div className="  mt-10 gap-4 w-full bg-[#f9f8fc] shadow-md ">
      <figure>
        <img className="mt-5 ml-8" src={logo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <p>{availability}</p>
      </div>
    </div>
  );
};

export default Cate;
