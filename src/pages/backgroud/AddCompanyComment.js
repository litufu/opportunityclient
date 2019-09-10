
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SelectCompany from '../../components/SelectCompany'
import TextField from '@material-ui/core/TextField';
import MySnackBar from '../../components/MySnackBar'
import Loading from '../../components/Loading'
import ADD_COMPANY_COMMENT from '../../graphql/add_company_comment'


const useStyles = makeStyles(theme => ({
  container: {
    width:800,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width:500,
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
  
}));

export default function ProductLinkIndustry() {
  const classes = useStyles();
  const [companyName, setCompanyName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [addCompanyComment,{loading,error}] = useMutation(ADD_COMPANY_COMMENT,
    {
        onCompleted() {
            setDisplay("success")
            setCompanyName("")
            setComment("")
        }
    });
 if(loading) return <Loading />
 if(error) return <div>{error.message}</div>

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.paper}>
      <SelectCompany 
        handleSelect={(value)=>setCompanyName(value)}
      />
      <TextField
        id="industry-desc"
        label="公司评价"
        className={classes.textField}
        value={comment}
        onChange={(event)=>setComment(event.target.value)}
        margin="normal"
        multiline
      />
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>addCompanyComment({variables:{companyName,comment}})}
        className={classes.button}>
            提交
        </Button>
    </div>
    {display==="success" && 
    <MySnackBar 
    message="公司评价添加成功"
    />}
    </Container>
  );
}