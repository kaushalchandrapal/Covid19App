import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from '../../../Component/TableComponent';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { getData } from '../actions/index';
import Filters from './Filters';
import { Container, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const DataPage = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data.data);
    const dataToTable = useSelector(state => state.data.dataToTable);
    const loading = useSelector(state => state.data.loading);
    const error = useSelector(state => state.data.error);
    // const stateSelected = useSelector(state => state.data.stateSelected);

    console.log(data);

    // const [search, setSearch] = useState({
    //     stateSelected: state.referenceNumber
    //   });

    // const handleSearch = () => {
    //     // setExpandedRowKeys([]);
    //     setSearch({
    //         orderReferenceNumber: state.referenceNumber,
    //         shareClassName: state.shareClassName,
    //         isin: state.isin,
    //     });
    // };

    useEffect(() => {
        if(data.length === 0){
            dispatch(getData());
        }
    }, []);

    let onKeyPress = (event) => {
        return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122);
    }
    
    const regex = /[A-Za-z]/;

    function validate(e) {
        const chars = e.target.value.split('');
        const char = chars.pop();
        if (!regex.test(char)) {
          e.target.value.replace(/[A-Za-z]/,'');
          console.log(`${char} is not a valid character.`);
        }
    }

    const [age, setAge] = useState();
    
    const handleChange = (e) => {
    const value = e.target.value.replace(/\W/g, "").replace(/\d/g,"");
    setAge(value);
    };

    return (
        <>
            <br></br>
            <br></br>
            <Container>
                <Button fullWidth color='primary' component={Link} to='/addDataPage' variant='contained' disableElevation>Add Data</Button>
            </Container>            
            <Container>
                <Card variant='outlined'>
                    <h1>
                        <Typography align={'center'}>Active Covid Cases India</Typography>
                    </h1>
                </Card>
            </Container>            
            <Container>
                <Card variant='outlined'>
                    <CardContent>
                        <Filters dataList={data} key='filters'/>
                        {data.loading && <p>Loading...</p>}  
                        {data.length>0 && <TableComponent dataList={dataToTable} key={dataToTable.length} />}
                        {data.length === 0 && <p>No Data Available</p> }
                        {error && !loading && <p>{error}</p>}
                        {/* <AddDataPage/> */}
                        <TextField onChange={handleChange} value={age}  />
                    </CardContent>
                </Card>
            </Container>
            <br></br>
            <br></br>
        </>
    );
}

export default DataPage;