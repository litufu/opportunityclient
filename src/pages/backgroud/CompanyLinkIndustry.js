
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SelectIndustry from '../../components/SelectIndustry'
import MyChips from '../../components/MyChips'
import SelectCompany from '../../components/SelectCompany'
import MySnackBar from '../../components/MySnackBar'
import Loading from '../../components/Loading'
import COMPANY_LINK_INDUSTRY from '../../graphql/companyLinkIndustry.mutation'


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
    alignItems: 'flex-start',
  },
  chips: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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

export default function ProductLinkIndustry() {
  const classes = useStyles();
  const [industryName, setIndustryName] = React.useState("");
  const [companyNames, setCompanyNames] = React.useState([]);
  const [display, setDisplay] = React.useState("");
  const [companyLinkIndustry,{loading,error}] = useMutation(COMPANY_LINK_INDUSTRY,
    {
        onCompleted() {
            setDisplay("success")
            setIndustryName("")
            setCompanyNames([])
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
      <SelectCompany 
        handleSelect={(value)=>setCompanyNames([...companyNames,value])}
      />
      {
          companyNames.length>0 && (
              <div >
            <Typography  variant="h6">
                拟添加的公司：
              </Typography>
              <MyChips
            values={companyNames}
            handleDelete={(deleteName)=>{
                const newCompanyNames = companyNames.filter(companyName=>companyName!==deleteName)
                setCompanyNames(newCompanyNames)
            }}
            />
            </div>)
      }
     
      
     
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>companyLinkIndustry({variables:{companyNames,industryName}})}
        className={classes.button}>
            提交
        </Button>
    </div>
    {display==="success" && 
    <MySnackBar 
    message="公司与行业关联成功"
    />}
    </Container>
  );
}