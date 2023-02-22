import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, 
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px'
  },
  list: {
    height: '75vh', overflow: 'auto', 
  },
  listContainer: {
    display: 'flex', flexDirection: 'row', alignItems: 'center'
  },
  select: {
    width: '200px', marginBottom: '30px'
  },
}));

export default useStyles;