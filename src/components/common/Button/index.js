import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Button } from '@material-ui/core'
import clsx from 'clsx'
import style from './style'

const ButtonStyled = ({ classes, label, size, ...props }) => (
  <Button className={clsx(classes.button, classes[size])} {...props}>
    {label}
  </Button>
)

ButtonStyled.defaultProps = {
  label: '',
  size: 'medium',
}

ButtonStyled.propTypes = {
  classes: PropTypes.shape().isRequired,
  label: PropTypes.string,
  size: PropTypes.string,
}

export default withStyles(style)(ButtonStyled)
