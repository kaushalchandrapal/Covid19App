import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { filterAction } from '../../actions/filterActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


const Filters = ( dataList ) => {
    const dispatch = useDispatch();
    const [stateTick, setStateTick] = useState(''); 
    const data = dataList.dataList;
    const handleChange = (event) => {
        setStateTick(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(stateTick === ''){
            console.error('NOTHING TO SEARCH');
        }else{
            dispatch(filterAction(stateTick));
        }
    }

    
    
    // useEffect(() => {
    //     dispatch(getData());
    // }, []);

    return(
    <div>
        <form onSubmit={submitHandler}>
        <Grid container alignItems='stretch' spacing={3} wrap='nowrap' direction="row">
            <Grid item  xs={5}>
                <TextField
                    id="stateSelected"
                    select
                    fullWidth
                    label="Select State"
                    value={stateTick}
                    onChange={handleChange}
                    helperText="Please select State"
                    variant="outlined"
                    margin='normal'
                    
                    >
                        {data.map((option) => (
                            <MenuItem key={option.state} value={option.state}>
                            {option.state}
                            
                            </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={5}>
                    <Autocomplete
                        id='autoCompleteId'
                        options={data}
                        fullWidth
                        getOptionLabel = {(option) => option.state}
                        margin='normal'
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} label="State" variant="outlined"/>}
                    />
            </Grid>
            <Grid item xs={2}>
                <br></br>
                <Typography align='center'>
                    <Button margin='normal' variant='contained' size='large' color='primary' disableElevation type='submit'>Search</Button>
                </Typography>
            </Grid>
        </Grid>
        </form>
        

    </div>
  );
}

export default Filters;