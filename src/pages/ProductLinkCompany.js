
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SelectCompany from '../components/SelectCompany'
import SelectProduct from '../components/SelectProduct'
import MySnackBar from '../components/MySnackBar'
import Loading from '../components/Loading'
import PRODUCT_LINK_COMPANY from '../graphql/productLinkCompany.mutation'


const useStyles = makeStyles(theme => ({
  container: {
    width:800,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
    width:510
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [companyName, setCompanyName] = React.useState("");
  const [deal, setDeal] = React.useState("sell");
  const [productName, setProductName] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [productLinkCompany,{loading,error}] = useMutation(PRODUCT_LINK_COMPANY,
    {
        onCompleted() {
            setDisplay("success")
            setCompanyName("")
            setProductName("")
        }
    });
 if(loading) return <Loading />
 if(error) return <div>{error.message}</div>

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          录入公司产品
        </Typography>
      <SelectCompany 
        handleSelect={(value)=>setCompanyName(value)}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={deal}
          onChange={(event)=>setDeal(event.target.value)}
          inputProps={{
            name: 'deal',
            id: 'deal-simple',
          }}
        >
          <MenuItem value="sell">销售</MenuItem>
          <MenuItem value="purchase">购买</MenuItem>
        </Select>
      </FormControl>
      <SelectProduct
        handleSelect={(value)=>setProductName(value)}
      />
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>productLinkCompany({variables:{companyName,productName,deal}})}
        className={classes.button}>
            提交
        </Button>
    </div>
    {display==="success" && 
    <MySnackBar 
    message="产品与公司关联成功"
    />}
    </Container>
  );
}