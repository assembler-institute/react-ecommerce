export const ACTIONS = {
	ADD_TO_WISH_LIST: "ADD_TO_WISH",
	REMOVE_FROM_WISH_LIST: "REMOVE_FROM_WISH_LIST",
	ADD_WISH_TO_CART: "ADD_WISH_TO_CART",
};

export const wishlistReducer = (wishListCart, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TO_WISH_LIST:
			return [
				...wishListCart,
				{
					itemId: action.payload.itemId,
					itemTitle: action.payload.itemTitle,
					itemPrice: action.payload.itemPrice,
					itemImage: action.payload.itemImage,
					itemQuantity: 1,
				},
			];

		case ACTIONS.REMOVE_FROM_WISH_LIST:
			const newWishListCart = wishListCart.filter(
				(wishItem) => wishItem.itemId !== action.payload.itemId,
			);
			return newWishListCart;

		default:
			return wishListCart;
	}
};
