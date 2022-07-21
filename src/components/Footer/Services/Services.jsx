import { FaReply } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import "./Services.css";

//* It returns a div with four child divs, each of which contains a span, an h3, and a p.
//* @returns A div with a className of features__container.

const Services = () => {
	return (
		<div className='features__container'>
			<div className='firstFeature__container'>
				<span>
					<FaReply size='6rem' />
				</span>
				<h3>FREE RETURN</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
					maiores aperiam labore deserunt
				</p>
			</div>

			<div className='secondFeature__container'>
				<span>
					<FaCreditCard size='6rem' />
				</span>
				<h3>SECURED PAYMENT</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
					maiores aperiam labore deserunt
				</p>
			</div>

			<div className='thirdFeature__container'>
				<span>
					<FaHeadset size='6rem' />
				</span>
				<h3>CUSTOMER SUPPORT</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
					maiores aperiam labore deserunt
				</p>
			</div>

			<div className='fourthFeature__container'>
				<span>
					<FaShippingFast size='6rem' />
				</span>
				<h3>FREE SHIPPING</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
					maiores aperiam labore deserunt
				</p>
			</div>
		</div>
	);
};

export default Services;
