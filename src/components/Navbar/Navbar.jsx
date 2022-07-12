import { Popover, Button } from "@nextui-org/react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__container_logo">Logo</div>
      <div className="navbar__container_links">
        <span className="navbar__container_link">DEMO</span>
        <span className="navbar__container_link">SHOP</span>
        <span className="navbar__container_link">PRODUCT</span>
        <span className="navbar__container_link">PORTFOLIO</span>
        <span className="navbar__container_link">LOOKBOK</span>
        <span className="navbar__container_link">BLOG</span>
      </div>
      <div className="navbar__container_icons">
        <Popover>
          <Popover.Trigger>
            <Button auto flat>
              Add
            </Button>
          </Popover.Trigger>
          <Popover.Content>🥳</Popover.Content>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;