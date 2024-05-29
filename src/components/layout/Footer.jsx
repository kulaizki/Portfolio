import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <a href="https://www.linkedin.com/in/kulaizki/" target='_blank'>
        <img src="./linkedin.png" alt="linkedin" />
      </a>
      <a href="https://github.com/kulaizki" target='_blank'>
        <img src="./github.png" alt="github" />  
      </a>
      <a href="https://facebook.com/kulaizki" target='_blank'>
        <img src="./facebook.png" alt="facebook" />  
      </a>
      <a href="https://discord.com/users/295805809479254016" target='_blank'>
        <img src="./discord.png" alt="discord" />  
      </a>
      <a href="https://t.me/kulaizki" target='_blank'>
        <img src="./telegram.png" alt="telegram" />  
      </a>
    </footer>
  );
}

export default Footer;

