import { FC } from "react";

import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";

interface DateFieldProps {
  label: string;
  value: null | Date;
  onChange: (value: null) => void;
}

const DateField: FC<DateFieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <DatePicker
        label={label}
        value={value}
        mask="__.__.____"
        onChange={onChange}
        renderInput={(params) => <TextField {...params} size="small" />}
      />
    </div>
  );
};
export default DateField;
