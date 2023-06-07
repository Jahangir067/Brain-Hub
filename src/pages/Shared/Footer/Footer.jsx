

const Footer = () => {
    return (
        <footer>
        <div className="footer p-10 bg-neutral text-neutral-content">

<div>
<span className="footer-title">Services</span> 
<a className="link link-hover">Branding</a>
<a className="link link-hover">Design</a>
<a className="link link-hover">Marketing</a>
<a className="link link-hover">Advertisement</a>
</div> 
<div>
<span className="footer-title">Company</span> 
<a className="link link-hover">About us</a>
<a className="link link-hover">Contact</a>
<a className="link link-hover">Jobs</a>
<a className="link link-hover">Press kit</a>
</div> 
<div>
<span className="footer-title">Legal</span> 
<a className="link link-hover">Terms of use</a>
<a className="link link-hover">Privacy policy</a>
<a className="link link-hover">Cookie policy</a>
</div>
<div>
<span className="footer-title">Newsletter</span>
<a>Subscribe to our newsleter to get special offers</a>
<input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
<button className="btn btn-sm btn-primary">Subscribe</button>
<form>

</form>
</div>
  
</div>
<div className="footer footer-center p-4 bg-base-300 text-base-content">
  <p>Copyright © 2023 - All right reserved by Brain Hub</p>
  </div>
    </footer>
    );
};

export default Footer;