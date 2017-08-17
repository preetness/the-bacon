function JobPostingList (props) {

    return (
      <div>
        {props.postings.map(function(posting) {
          return (
            <a href={'postings/' + posting.id}>
              <strong>Job Title: </strong>
              {posting.title}<br />
              <strong>Company: </strong>
              {posting.company}<br />
            </a>
          )
        })}
      </div>
   );
}
