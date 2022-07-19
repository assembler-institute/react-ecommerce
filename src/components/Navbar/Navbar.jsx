import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import { Popover, User, Button } from "@nextui-org/react";
import Heart from "../../assets/icons/Heart2.svg";
import Buy from "../../assets/icons/Buy.svg";
import { UserTwitterCard } from "./Avatar/Avatar";
import "./Navbar.css";

const Navbar = ({ shoppingCart, setShoppingCart }) => {
	return (
		<div className='navbar__container'>
			<div className='navbar__container_logo'>Logo</div>
			{/* <Navbar /> */}
			<div className='navbar__container_links'>
				<span className='navbar__container_link'>DEMO</span>
				<span className='navbar__container_link'>SHOP</span>
				<span className='navbar__container_link'>PRODUCT</span>
				<span className='navbar__container_link'>PORTFOLIO</span>
				<span className='navbar__container_link'>LOOKBOK</span>
				<span className='navbar__container_link'>BLOG</span>
			</div>
			<div className='navbar__container_icons'>
				<Popover>
					<Popover.Trigger>
						<User
							as='button'
							src='https://i.pinimg.com/280x280_RS/a5/8d/17/a58d172dd380fc5bde9b10e7bdf772ad.jpg'
							name='Bruce Lee'
							description='UI/UX Designer'
						/>
					</Popover.Trigger>
					<Popover.Content css={{ px: "$4", py: "$2" }}>
						<UserTwitterCard />
					</Popover.Content>
				</Popover>

				<Popover>
					<Popover.Trigger>
          <Button icon={<img src={Buy} alt="icon" classname="icon-heart" />}
          color="error" light ></Button>
					</Popover.Trigger>
					<Popover.Content css={{ width: "max-content" }}>
						<ShoppingCart
							shoppingCart={shoppingCart}
							setShoppingCart={setShoppingCart}
						/>
					</Popover.Content>
				</Popover>

				<Popover>
					<Popover.Trigger>
          <Button icon={<img src={Heart} alt="icon" classname="icon-heart" />}
          color="error" light ></Button>
					</Popover.Trigger>
					<Popover.Content css={{ width: "max-content" }}></Popover.Content>
				</Popover>
			</div>
		</div>
	);
};

export default Navbar;
