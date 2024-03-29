import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';

export interface SearchFieldProps {
  /** Label is the input placeholder`s text. */
  label: string
}

/** SearchField  is the input placeholder`s text. */
export const SearchField = (
  {label = "Pesquisar"}: SearchFieldProps) => {
  return (
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <Search/>
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label={label}/>
        </Grid>
      </Grid>
    </div>
  );
};
