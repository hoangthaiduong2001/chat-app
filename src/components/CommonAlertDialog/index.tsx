import { Button, DialogContent, DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { CAlertDialogProps } from './type';

export default function AlertDialog({
  value,
  label,
  onSubmit,
  setValue,
  title,
}: CAlertDialogProps) {
  const handleClose = () => {
    setValue(false);
  };
  const handleClickOpen = () => {
    setValue(true);
  };

  const handleSubmit = () => {
    setValue(false);
    onSubmit();
  };

  return (
    <React.Fragment>
      <Button
        className="w-full"
        variant="contained"
        color="secondary"
        startIcon={<FaSignOutAlt />}
        onClick={handleClickOpen}
      >
        {label}
      </Button>
      <Dialog open={value} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>{title}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" variant="text" onClick={handleClose}>
            No
          </Button>
          <Button color="error" onClick={handleSubmit} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
