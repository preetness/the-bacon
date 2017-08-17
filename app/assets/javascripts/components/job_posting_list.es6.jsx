class JobPostingList extends React.Component {
  render () {
    return (
      <div className='ui container'>
      {this.props.postings.map(function(posting) {
        return <p>{posting.title}</p>
      })}
      </div>
    );
  }
}
