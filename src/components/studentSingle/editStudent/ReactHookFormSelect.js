import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles';
import { Controller } from "react-hook-form";

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  formClassName,
  ...props
}) => {
  const labelId = `${name}-label`;
  const classes = useStyles();
  return (
    <FormControl {...props} variant="outlined" className={classes.formControl}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label}>
            {children}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 180,
    },
  }));