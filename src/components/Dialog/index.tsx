import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Dialog as DialogDefault } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { PropsWithChildren } from "react";
import { DialogProps } from "@mui/material/Dialog/Dialog";

const BootstrapDialog = styled(DialogDefault)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
    borderBottom: "none",
  },
  // '& .MuiDialogActions-root': {
  //     padding: theme.spacing(1),
  // },
}));

// Partial сделать не обязательным
type IDialogProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  buttonsComponent?: React.ReactElement;
}> &
  Partial<DialogProps>;

export const Dialog: React.FC<IDialogProps> = (props) => {
  const { children, buttonsComponent } = props;

  return (
    <div>
      <BootstrapDialog aria-labelledby="customized-dialog-title" {...props}>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>{buttonsComponent}</DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Dialog;
