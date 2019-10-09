import React, {PureComponent} from 'react';
// import UserProfile  from './UserProfile'


const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

  export default class ControlPanel extends PureComponent {
    render() {
      const Container = this.props.containerComponent || defaultContainer;

      return (

        <Container className='map-label'>
          <p>See Your Coven Matches</p>

        </Container>
      );
    }
  }


  //
  // export default class ControlPanel extends PureComponent {
  //   render() {
  //     return (
  //       <button
  //       className="content-button"
  //       onClick={props.handleChangeLocation}
  //       >CHANGE YOUR LOCATION ON THE MAP
  //       </button>
  //
  //     );
  //   }
  // }
