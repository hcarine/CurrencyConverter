import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const  RatesResult = (props) => {
  const convertMoney = () => {
    return props.many * props.rates
  };

    return (
        <React.Fragment>
          <br/>
          <br/>
           <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Converted Money
              </Typography>
              <Typography variant="body2" component="p">
                {convertMoney()}
              </Typography>
            </CardContent>
          </Card>
        </React.Fragment>
    );
}

export default RatesResult;