import { Button, Card, CardContent, Container, Typography, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import React from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addData } from '../actions';


const CustomForm = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    

    return (
        <>
            <TextField margin='normal' {...field} {...props} fullWidth id="activeCases" label={props.name1} variant="outlined" />
            {meta.touched  && meta.error ? (
                <p style={{color:"red"}}>{meta.error}</p>
            ): null}
        </>
    );
}

const AddDataPage = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <br></br>
            <br></br>
            <Container>
                <Button fullWidth color='primary' component={Link} to='/' variant='contained' disableElevation>Go back</Button>
            </Container>
            <Container>
                <Card variant='outlined'>
                    <Typography align={'center'}>
                        <h1>Add New Data Form</h1>
                    </Typography>
                </Card>
            </Container>
            <Container>
                <Card variant='outlined'>
                    <CardContent>
                        <Formik
                            initialValues={{
                                active: '',
                                confirmed: '',
                                deaths: '',
                                deltaconfirmed: '',
                                deltadeaths: '',
                                deltarecovered: '',
                                lastupdatedtime: '',
                                migratedother: '',
                                recovered: '',
                                state: '',
                                statecode: '',
                                statenotes: ''
                            }}
                            validationSchema={Yup.object({
                                active: Yup.string().required('Active is Required'),
                                confirmed: Yup.string().required('Confirmed is Required'),
                                deaths: Yup.string().required('Deaths is Required'),
                                deltaconfirmed: Yup.string(),
                                deltadeaths: Yup.string(),
                                deltarecovered:Yup.string(),
                                lastupdatedtime: Yup.string(),
                                migratedother: Yup.string(),
                                recovered: Yup.string().required('Recovered is Required'),
                                state: Yup.string().min(3, 'Must Have 3 Characters').max(15, 'Cannot Exceed 15 Characters').required('State is Required'),
                                statecode: Yup.string().min(2, 'Must Have 2 Characters').max(3, 'Cannot Exceed 3 Characters').required('State Code is Required'),
                                statenotes: Yup.string()
                            })}
                            onSubmit={(values, {setSubmitting, resetForm}) => {
                                setTimeout(()=> {
                                    dispatch(addData(values));
                                    resetForm();
                                    setSubmitting(false);
                                    history.push('/');
                                },3000)
                            }}
                            >
                                {props => (
                                    <Form>
                                        <CustomForm label='Active' name1='Active' name='active' type='text' placeholder='0'/>
                                        <CustomForm label='Confirmed' name1='Confirmed' name='confirmed' type='text'/>
                                        <CustomForm label='Deaths' name1='Deaths' name='deaths' type='text'/>
                                        <CustomForm label='Delta Confirmed' name1='Delta Confirmed' name='deltaconfirmed' type='text'/>
                                        <CustomForm label='Delta Deaths' name1='Delta Deaths' name='deltadeaths' type='text'/>
                                        <CustomForm label='Delta Recoverd' name1='Delta Recovered' name='deltarecovered' type='text'/>
                                        <CustomForm label='Last Updated Time' name1='Last Updated Time' name='lastupdatedtime' type='text'/>
                                        <CustomForm label='Migrated Other' name1='Migrated Other' name='migratedother' type='text'/>
                                        <CustomForm label='Recovered' name1='Recovered' name='recovered' type='text'/>
                                        <CustomForm label='State' name1='State' name='state' type='text'/>
                                        <CustomForm label='State Code' name1='State Code' name='statecode' type='text'/>
                                        <CustomForm label='State Notes' name1='State Notes' name='statenotes' type='text'/>
                                        <Button fullWidth color='primary' type='submit' variant='contained' disableElevation>Add Data</Button>
                                    </Form>
                                )}
                            </Formik>
                    </CardContent>
                </Card>
            </Container>
            <br></br>
            <br></br>
        </>
    );
}

export default AddDataPage;