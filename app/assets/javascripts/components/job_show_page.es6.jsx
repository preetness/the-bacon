const headingStyle = {
  color: 'white',
  fontSize: 45,
  fontFamily: 'Playfair Display'
}

const descriptionStyle = {
  color: 'white',
  fontSize: 25,
  fontFamily: 'Playfair Display'
}

const companyStyle = {
  color: 'orange',
  fontSize: 25,
  fontFamily: 'Playfair Display'
}

class JobShowPage extends React.Component {

  render () {
    return (
      <div className='job-show'>
         <h3 style={headingStyle}>{this.props.posting.title}</h3>
         <p style={descriptionStyle}>{this.props.posting.description}</p>
         <p style={companyStyle}>{this.props.posting.company}</p>
      </div>
    );
  }
}
