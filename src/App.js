import './App.css';
import './css/bootstrap.min.css'
import './css/nodeflair.css';
import JobListingContainer from './containers/JobListingContainer';


function App() {
  return (
    <div className="container container-max-width">
      <div className="page-section-container">
        <JobListingContainer />
      </div>
    </div>
  );
}

export default App;
