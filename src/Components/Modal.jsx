import React from 'react';

import {Button, Dialog, DialogContent, DialogActions, Box } from '@mui/material';

const Modal = ({open, onClose, dialogContent}) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Modal;