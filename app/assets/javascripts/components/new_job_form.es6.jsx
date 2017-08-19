class NewJobForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      company: ''
    }
  }
  handleSubmit(){

  }
  render () {
    return (
      <div>
        <h2 className='header-title'>Add a New Job Posting</h2>
        <form action='/postings' method='POST'>
          <label>Job Title</label>
          <input type='text' name='posting[title]' placeholder='Sr. Software Developer' />
          <label>Job Description</label>
          <textarea name='posting[description]' placeholder='Ruby on Rails experience, React knowledge a plus' />
          <label>Company Name</label>
          <input type='text' name='posting[company]' placeholder='The Bacon' />
          <label>Job Type</label>
          <select name='type'>
            <option value='full-time'>Full-Time</option>
            <option value='part-time'>Part-Time</option>
            <option value='temporary'>Temporary</option>
            <option value='internship'>Internship</option>
          </select>
          <input type='submit' value='Post New Job' />
        </form>
      </div>
    );
  }
}
