const Footer = () => {
  return (
    <footer className="p-10 bg-[black] text-base-content mt-10">
      <div className="footer max-w-6xl mx-auto">
        <aside>
          <h2 className="font-bold text-3xl text-[white]">CareerHub</h2>
          <p className="text-[white]">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br />
            suffered alteration in some form.
          </p>
          <img className="mt-3" src="src/assets/Group 9969.svg" alt="" />
        </aside>
        <nav className="text-[white]">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="text-[white]">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="text-[white]">
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Deske</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav className="text-[white]">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
