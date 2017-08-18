class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <h2 className='landing-page-title'>Find a job. Bring home The Bacon.</h2>
        <button className='outline'><a href='/postings' style={{color: 'white'}}>Find a job</a></button>
        <button className='outline'><a href='/postings/new' style={{color: 'white'}}>Post a job</a></button>
      </div>
    );
  }
}
