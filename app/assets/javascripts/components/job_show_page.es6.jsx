class JobShowPage extends React.Component {
  render () {
    return (
      <div>
         <p>{this.props.posting.title}</p>
         <p>{this.props.posting.description}</p>
         <p>{this.props.posting.company}</p>
      </div>
    );
  }
}
