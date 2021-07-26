import React from 'react';

import { Container } from './styles'

interface ISelectInputprops {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

const SelectInput: React.FC<ISelectInputprops> = ({ options }) => {
    return (
        <Container>
            <select>
                {
                    options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}>{option.label}
                        </option>
                    ))
                    
                }
                
            </select>
        </Container>
    )
}

export default SelectInput;