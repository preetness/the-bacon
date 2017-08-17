class MainHeader extends React.Component {
  render () {
    const style = {
      textAlign: 'center',
      paddingTop: '50',
      paddingBottom: '50'
    }
    return (
      <div>
        <h2 className='main-header-title' style={style}>Jobs Currently Available:</h2>
      </div>
    )
  }
}
