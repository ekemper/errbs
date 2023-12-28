import descriptors from './descriptors';
import Chip from '@mui/material/Chip';


export default function descriptorPicker() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        descriptors.map(item => {
            return <Chip label={item} variant="outlined" onClick={handleClick} />
        })
    );
}

