import React from 'react'
import PropTypes from 'prop-types'
import Button from './components/common/Button'

const App = ({ classes }) => (
  <Button label="Test" variant="contained" color="primary" />
)

App.defaultProps = {
}

App.propTypes = {
  classes: PropTypes.shape().isRequired,
}

export default (App)
