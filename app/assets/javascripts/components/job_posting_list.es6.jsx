function JobPostingList (props) {

  return (
       <div className='cards row'>
         {props.postings.map(function(posting) {
          return (
            <div className='card grid-demo-col'>
               <h5 className='card-header text-center'>{posting.title}</h5>
               <p className='card-body text-center'>{posting.company}</p>
               <div className='card-footer center text-center'>
                 <a className='job-details' href={'postings/' + posting.id}>Details</a>
               </div>
            </div>
           )
        })}
     </div>
   )
}
