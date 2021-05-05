import { COLORS } from '../../../themes/common'

const style = () => ({
  button: {
    color: COLORS.text.white,
    background: COLORS.secondary.secondaryBlue,
    textTransform: 'capitalize',
    '&:hover': {
      background: COLORS.secondary.secondaryBlue,
    },
  },
  large: {
    padding: '15px 30px',
    borderRadius: 40,
    fontSize: 20,
  },
  medium: {
    padding: '8px 25px',
    borderRadius: 30,
    fontSize: 14,
  },
  small: {
    padding: '5px 10px',
    borderRadius: 20,
    fontSize: 12,
  },
})

export default style
