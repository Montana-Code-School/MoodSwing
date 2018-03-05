import React from 'react';

class PopUp extends React.Component {
  componentDidMount(){
    console.log("is this working");
  }

  render () {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    return (
     {greet}
    );
  }
}

export default PopUp;