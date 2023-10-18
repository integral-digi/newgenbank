import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CreditForm from './CreditForm';

const VirtualForm = () => {
  return (
    <div className=''>
      <FormControl>
        <FormLabel className='flex items-center space-x-8 space-y-8'>
          <p className='font-medium text-sm text-slate-950'>Card type</p>
        </FormLabel>
        <RadioGroup row>
          <div className='h-20 w-32 p-4 bg-white shadow-lg rounded-lg'>
            <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
          </div>
          <div className='h-20 w-32 p-4 bg-white shadow-lg rounded-lg'>
            <FormControlLabel value="Debit Card" control={<Radio />} label="Debit Card" />
          </div>
        </RadioGroup>
        <CreditForm />
      </FormControl>
    </div>
  );
}

export default VirtualForm;