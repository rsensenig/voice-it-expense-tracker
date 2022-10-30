import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
// import { Doughnut } from 'react-chartjs-2';
// import { ExpenseTrackerContext } from '../../context/context';

// import useStyles from './styles';
// import Form from './Form/Form';
// import History from './History/History';

const Input = () => {
    
   const classes = useStyles();
   const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Input" subheader="a voice-activated application"></CardHeader>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${balance} </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                 {/* info card*/ }
                 {/* Try saying: Add income for $100 in category Salary for Monday */}
                </Typography>
                <Divider />
                <Form />
            </CardContent>
        </Card>
    );
}

export default Input