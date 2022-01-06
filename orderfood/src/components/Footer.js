import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'

const Footer = () => {
    return(
        <div className={'footer'}>
            <div className={'socialMedia'}>
                <TwitterIcon/>
                <InstagramIcon/>
                <FacebookIcon/>

            </div>
        </div>
    )
}
export default Footer;