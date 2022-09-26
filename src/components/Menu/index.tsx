import * as React from "react";
import Button from "@mui/material/Button";
import { Menu as MenuDefault } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { PropsWithChildren } from "react";
import { DialogProps } from "@mui/material/Dialog/Dialog";
import Dialog from "../Dialog";

type IMenuProps = {
  open: boolean;
  onClose: () => void;
  onTarget: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: null | HTMLElement;
} & Partial<DialogProps>;

const Menu: React.FC<IMenuProps> = ({ open, onClose, onTarget, anchorEl }) => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onTarget}
      >
        Добавить адрес доставки
      </Button>
      <MenuDefault
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={openDialog}
          onClose={handleClose}
        ></Dialog>
        <MenuItem onClick={handleClickOpen}>Добавить адрес</MenuItem>
        {/*<MenuItem onClick={onClose}>My account</MenuItem>*/}
        {/*<MenuItem onClick={onClose}>Logout</MenuItem>*/}
      </MenuDefault>
    </div>
  );
};

export default Menu;
