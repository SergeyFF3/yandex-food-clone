import * as React from "react";
import { ButtonProps, Popover as PopoverDefault } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PopoverProps } from "@mui/material/Popover/Popover";
import { PropsWithChildren, useEffect, useRef } from "react";

type PopoverT = PropsWithChildren<{
  popoverProps?: Partial<PopoverProps>;
  buttonProps?: Partial<ButtonProps>;
  buttonText?: string;
  showOnLoad?: boolean;
}>;

const Popover: React.FC<PopoverT> = (props) => {
  const {
    children,
    buttonProps,
    popoverProps,
    buttonText,
    showOnLoad = false,
  } = props;

  const buttonEl = useRef<HTMLButtonElement>(null);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    if (showOnLoad && buttonEl.current) {
      buttonEl.current.click();
    }
  }, [showOnLoad]);

  return (
    <div>
      <Button
        variant="contained"
        {...buttonProps}
        aria-describedby={id}
        onClick={handleClick}
        ref={buttonEl}
      >
        {buttonText}
      </Button>
      <PopoverDefault
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        {...popoverProps}
      >
        <Typography sx={{ p: 2 }}>{children}</Typography>
      </PopoverDefault>
    </div>
  );
};

export default Popover;
