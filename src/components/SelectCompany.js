import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import {useQuery} from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import GET_COMPANIES_BY_CODE_OR_NAME from '../graphql/get_companies_by_code_or_name.query'


function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

renderInput.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 100,
    width:500,
    margin: theme.spacing(3),
    alignItems: 'center',
  },
  root1: {
    flexGrow: 1,
    height: 100,
    width:500,
    margin: theme.spacing(3),
    alignItems: 'center',
    display:"flex"
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  textField: {
    width:500
  },
  button: {
    padding: 10,
    // margin: theme.spacing(1),
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,

  },
  divider: {
    height: theme.spacing(2),
    width:500
  },
}));


function GetCompanies({ inputValue,getItemProps,highlightedIndex,selectedItem }) {
  const { loading, error, data } = useQuery(GET_COMPANIES_BY_CODE_OR_NAME,{
    variables: { inputvalue:inputValue },
  });
  

  if (loading) return <MenuItem disabled>Loading...</MenuItem>;
  if (error) return <MenuItem disabled>Error! ${error.message}</MenuItem>;

  return data.companiesByCodeOrName.map(({name: item,symbol:code}, index) => (
    <MenuItem
      key={item}
      selected={highlightedIndex === index}
      component="div"
      style={{
        fontWeight: ((selectedItem || '').indexOf(item) > -1) ? 500 : 400,
      }}
      {...getItemProps({
        item,
        index,
      })}
    >
      {`${item}(${code})`}
    </MenuItem>
  ));
}


export default function SelectCompany(props) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Downshift 
      onChange={selection =>props.handleSelect(selection)}
      id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: '股票代码或公司简称',
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: '公司',
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus},
                inputProps,
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    <GetCompanies
                      inputValue={inputValue}
                      getItemProps={getItemProps}
                      highlightedIndex={highlightedIndex}
                      selectedItem={selectedItem}
                    />
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
      <div className={classes.divider} />
    </div>
  );
}

SelectCompany.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    handleSelect: PropTypes.func.isRequired,
};