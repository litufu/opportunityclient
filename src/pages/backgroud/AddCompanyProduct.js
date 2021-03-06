import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ADD_COMPANY_PRODUCT from '../../graphql/add_company_product.mutation';
import MySnackBar from '../../components/MySnackBar'
import Loading from '../../components/Loading'


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
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function AddCompanyProduct() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [introduce, setIntroduce] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [createCompanyProduct,{loading,error}] = useMutation(ADD_COMPANY_PRODUCT,
    {
        onCompleted() {
            setDisplay("success")
            setName("")
            setIntroduce("")
        }
    });
 if(loading) return <Loading />
 if(error) return <div>{error.message}</div>

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.paper}>
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="公司产品名称"
        className={classes.textField}
        value={name}
        fullWidth
        onChange={(event)=>setName(event.target.value)}
        margin="normal"
      />
      <TextField
        id="standard-introduce"
        label="公司产品介绍"
        fullWidth
        className={classes.textField}
        value={introduce}
        onChange={(event)=>setIntroduce(event.target.value)}
        margin="normal"
        multiline
      />
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>createCompanyProduct({variables:{name,introduce}})}
        className={classes.button}>
            提交
            {loading && <Loading />}
        </Button>
    </form>
    {display==="success" && 
    <MySnackBar 
    message="产品创建成功"
    />}
    </div>
    </Container>
  );
}