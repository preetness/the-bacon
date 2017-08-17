class NewJobForm extends React.Component {
  render () {
    return (
      <div>
        <h2>Add a New Job Posting</h2>
        <label>Job Title</label>
        <input type='text' name='title' placeholder='Sr. Software Developer' />
        <label>Job Description</label>
        <textarea name='description' placeholder='Ruby on Rails experience, React knowledge a plus' />
        <label>Company Name</label>
        <input type='text' name='company' placeholder='The Bacon' />
      </div>
    );
  }
}
