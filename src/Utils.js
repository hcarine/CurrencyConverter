import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BRL',
        label: 'R$',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
  
export const getCurrencyOptions = (noOption=false) =>
    currencies.map(option => noOption !== option.value && (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>
    ))

