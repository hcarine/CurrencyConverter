import React from 'react';
import Button from '@material-ui/core/Button';

const  Converter = (props) => {
  const sendConvert = () => {
    props.onClick()
  };

    return (
        <Button variant="contained" color="primary" 
            disabled={props.disabled}
            onClick={sendConvert}
            margin="normal">
            Convert
        </Button>
    );
}

export default Converter;