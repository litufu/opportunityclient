import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CREATE_INDUSTRY from '../graphql/create_industry.mutation';
import MySnackBar from '../components/MySnackBar'
import Loading from '../components/Loading'


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

export default function AddIndustry() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [createIndustry,{loading,error}] = useMutation(CREATE_INDUSTRY,
    {
        onCompleted() {
            setDisplay("success")
            setName("")
            setDesc("")
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
        label="行业名称"
        className={classes.textField}
        value={name}
        fullWidth
        onChange={(event)=>setName(event.target.value)}
        margin="normal"
      />
      <TextField
        id="industry-desc"
        label="行业描述"
        fullWidth
        className={classes.textField}
        value={desc}
        onChange={(event)=>setDesc(event.target.value)}
        margin="normal"
        multiline
      />
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>createIndustry({variables:{name,desc}})}
        className={classes.button}>
            提交
            {loading && <Loading />}
        </Button>
    </form>
    {display==="success" && 
    <MySnackBar 
    message="行业创建成功"
    />}
    </div>
    </Container>
  );
}