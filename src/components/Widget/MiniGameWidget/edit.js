import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslate } from 'react-redux-multilingual/lib/context';

import { createMiniGameWidget } from '../../../redux/actions/mentor';
import { MINI_GAMES } from '../../MiniGames';

function MiniGameEditWidget({
  open,
  handleClose,
  initLink = '',
  stateId,
  id,
  createMiniGameWidget,
}) {
  const [link, setLink] = useState(initLink);
  const t = useTranslate();

  const handleClick = () => {
    if (id) {
      // TODO: edit mode
    } else {
      createMiniGameWidget({ state: stateId, link });
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t('game')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('chooseTheGame')}</DialogContentText>
        <TextField
          autoFocus
          fullWidth
          select
          label={t('game')}
          value={link}
          inputProps={{ className: 'ltr-input' }}
          onChange={(e) => setLink(e.target.value)}>
          {Object.keys(MINI_GAMES).map((url, index) => (
            <MenuItem key={index} value={`/game/${url}`}>
              {MINI_GAMES[url].label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color="primary" variant="contained">
          {t('submit')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(null, { createMiniGameWidget })(MiniGameEditWidget);
