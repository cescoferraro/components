import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';

import PropTypes from "prop-types";

export const ExpendedB2BButton = ( 
    {label}:{label: string}) => {

  return (
      <div>
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <Search/>
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label={label} />
            </Grid>
        </Grid>
    </div>
  );
};

ExpendedB2BButton.propTypes = {
  label: PropTypes.string.isRequired
};

ExpendedB2BButton.defaultProps = {};