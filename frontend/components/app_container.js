import { connect } from 'react-redux';
import App from './app'

const mapStateToProps = state => {
  return({
    loggedin: state.session.id
  })
}



export default connect(mapStateToProps)(App)