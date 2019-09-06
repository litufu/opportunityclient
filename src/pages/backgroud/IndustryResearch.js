
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SelectIndustry from '../../components/SelectIndustry'
import TextField from '@material-ui/core/TextField';
import MySnackBar from '../../components/MySnackBar'
import Loading from '../../components/Loading'
import INDUSTRY_RESEARCH from '../../graphql/industryResearch.mutation'


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
  const [industryName, setIndustryName] = React.useState("");
  const [research, setResearch] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [industryResearch,{loading,error}] = useMutation(INDUSTRY_RESEARCH,
    {
        onCompleted() {
            setDisplay("success")
            setIndustryName("")
            setResearch("")
        }
    });
 if(loading) return <Loading />
 if(error) return <div>{error.message}</div>

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.paper}>
      <SelectIndustry 
        handleSelect={(value)=>setIndustryName(value)}
      />
      <TextField
        id="industry-desc"
        label="行业研究"
        className={classes.textField}
        value={research}
        onChange={(event)=>setResearch(event.target.value)}
        margin="normal"
        multiline
      />
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>industryResearch({variables:{industryName,research}})}
        className={classes.button}>
            提交
        </Button>
    </div>
    {display==="success" && 
    <MySnackBar 
    message="行业研究添加成功"
    />}
    </Container>
  );
}