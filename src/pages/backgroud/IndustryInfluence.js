
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SelectIndustry from '../../components/SelectIndustry'
import SelectKeyword from '../../components/SelectKeyword'
import TextField from '@material-ui/core/TextField';
import MySnackBar from '../../components/MySnackBar'
import Loading from '../../components/Loading'
import ADD_INDUSTRY_INFLUENCE from '../../graphql/add_industry_influence.mutation'


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
}));

export default function ProductLinkIndustry() {
  const classes = useStyles();
  const [industryName, setIndustryName] = React.useState("");
  const [keyword, setKeyword] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [keywordDirection,setKeywordDirection] = React.useState("GOOD");
  const [direction, setDirection] = React.useState("GOOD");
  const [kind, setKind] = React.useState("ASSET");
  const [display, setDisplay] = React.useState("");
  const [addIndustryInfluence,{loading,error}] = useMutation(ADD_INDUSTRY_INFLUENCE,
    {
        onCompleted() {
            setDisplay("success")
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
      <SelectKeyword
        handleSelect={(value)=>setKeyword(value)}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="direction-simple">关键影响因素变动方向</InputLabel>
        <Select
          value={keywordDirection}
          onChange={(event)=>setKeywordDirection(event.target.value)}
          inputProps={{
            name: 'deal',
            id: 'deal-simple',
          }}
        >
          <MenuItem value="GOOD">上升/增加/上涨/升值</MenuItem>
          <MenuItem value="BAD">下降/减少/回落/贬值</MenuItem>
        </Select>
        </FormControl>
      <TextField
        id="industry-desc"
        label="影响描述"
        className={classes.textField}
        value={desc}
        onChange={(event)=>setDesc(event.target.value)}
        margin="normal"
        multiline
      />
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="kind-simple">影响类别</InputLabel>
        <Select
          value={kind}
          onChange={(event)=>setKind(event.target.value)}
          inputProps={{
            name: 'deal',
            id: 'deal-simple',
          }}
        >
          <MenuItem value="ASSET">资产</MenuItem>
          <MenuItem value="DEBT">负债</MenuItem>
          <MenuItem value="EQUITY">权益</MenuItem>
          <MenuItem value="INCOME">收入</MenuItem>
          <MenuItem value="COST">成本</MenuItem>
          <MenuItem value="FEE">费用</MenuItem>
          <MenuItem value="BRAND">品牌</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="direction-simple">影响方向</InputLabel>
        <Select
          value={direction}
          onChange={(event)=>setDirection(event.target.value)}
          inputProps={{
            name: 'deal',
            id: 'deal-simple',
          }}
        >
          <MenuItem value="GOOD">利好</MenuItem>
          <MenuItem value="BAD">利空</MenuItem>
        </Select>
      </FormControl>
        <Button 
        color="primary" 
        fullWidth
        variant="contained"
        onClick={()=>addIndustryInfluence({variables:{industryName,keyword,keywordDirection,kind,desc,direction}})}
        className={classes.button}>
            提交
        </Button>
    </div>
    {display==="success" && 
    <MySnackBar 
    message="行业影响添加成功"
    />}
    </Container>
  );
}