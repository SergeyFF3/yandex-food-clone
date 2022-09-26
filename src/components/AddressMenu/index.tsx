import React from "react";
import Menu from "../Menu";

const AddressMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        open={open}
        onClose={handleClose}
        onTarget={handleClick}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default AddressMenu;
