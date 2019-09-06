import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ADD_KEYWORD from '../../graphql/add_keyword.mutation';
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

export default function AddKeyword() {
  const classes = useStyles();
  const [keyword, setKeyword] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [addKeyword,{loading,error}] = useMutation(ADD_KEYWORD,
    {
        onCompleted() {
            setDisplay("success")
            setKeyword("")
        }
    });
 if(loading) return <Loading />
 if(error) return <div>{error.message}</div>

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.paper}>
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="industry-name"
        label="添加关键因素"
        className={classes.textField}
        value={keyword}
        fullWidth
        onChange={(event)=>setKeyword(event.target.value)}
        margin="normal"
      />
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>addKeyword({variables:{keyword}})}
        className={classes.button}>
            提交
            {loading && <Loading />}
        </Button>
    </form>
    {display==="success" && 
    <MySnackBar 
    message="关键词添加成功"
    />}
    </div>
    </Container>
  );
}