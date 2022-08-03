import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import Wishlist from "../Cart/Wishlist/Wishlist";
import Login from "../../components/Login/Login";
import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";
import { Popover, User, Button } from "@nextui-org/react";
import Heart from "../../assets/icons/Heart2.svg";
import Buy from "../../assets/icons/Buy.svg";
import "./Navbar.css";

const Navbar = ({
	shoppingCart,
	setShoppingCart,
	wishlistCart,
	setWishlistCart,
	notifyToast,
}) => {
	const { userCache, setUserCache } = useContext(UserDataContext);
	return (
		<div className='navbar__container'>
			<div className='navbar__container_logo'>
				<img alt='logo' src={require("../../assets/img/a.png")}></img>
			</div>
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
						{userCache?.username ? (
							<User
								as='button'
								src={userCache?.avatar}
								name={userCache.username}
								description=''
							/>
						) : (
							<Button color='warning' light>
								Login
							</Button>
						)}
					</Popover.Trigger>

					<Popover.Content css={{ px: "$4", py: "$2" }}>
						<Login userCache={userCache} setUserCache={setUserCache} />
					</Popover.Content>
				</Popover>

				<Popover>
					<Popover.Trigger>
						<Button
							icon={<img src={Buy} alt='icon' className='icon-heart' />}
							color='error'
							light
						></Button>
					</Popover.Trigger>
					<Popover.Content css={{ width: "max-content" }}>
						<ShoppingCart
							shoppingCart={shoppingCart}
							setShoppingCart={setShoppingCart}
							userCache={userCache}
							notifyToast={notifyToast}
						/>
					</Popover.Content>
				</Popover>

				<Popover>
					<Popover.Trigger>
						<Button
							icon={<img src={Heart} alt='icon' className='icon-heart' />}
							color='error'
							light
						></Button>
					</Popover.Trigger>
					<Popover.Content css={{ width: "max-content" }}>
						<Wishlist
							wishlistCart={wishlistCart}
							setWishlistCart={setWishlistCart}
							shoppingCart={shoppingCart}
							setShoppingCart={setShoppingCart}
							notifyToast={notifyToast}
						/>
					</Popover.Content>
				</Popover>
			</div>
		</div>
	);
};

export default Navbar;
