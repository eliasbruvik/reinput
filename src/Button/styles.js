export const input = ({ error, errorColor }) => ({
  color: error ? errorColor ; "#000"
})


export const hidden = () => ({
  height: 0,
  opacity: 0,
  width: 0
})

export const transparent = {
  backgroundColor: 'transparent'
}
