function JobPostingList (props) {

    const style = {
        display: 'inline-block',
        border: '1px solid black',
        height: '200px',
        width: '200px',
        marginRight: '25px',
        verticalAlign: 'top',
        textAlign: 'center',
        fontSize: '15px'
    }

    return (
      <div>
      {props.postings.map(function(posting) {
        return (
          <a href={'postings/' + posting.id} className='jobs' style={style}>
            <strong>Job Title: </strong>
            {posting.title}<br />
            <strong>Company: </strong>
            {posting.company}
          </a>
        )
      })}
      </div>
  );
}
