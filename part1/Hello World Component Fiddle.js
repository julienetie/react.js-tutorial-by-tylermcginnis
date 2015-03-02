var HelloWorld = React.createClass({
  displayName: "HelloMessage",
    render: function() {
      return React.createElement("div", null, "Hello World");
    }
  }
);
 
React.render(<HelloWorld />, document.getElementById('app'));




/**
	This is what JSX transforms to: 

		var HelloWorld = React.createClass({
		  displayName: "HelloMessage",
		  render: function() {
		    return React.createElement("div", null, "Hello World");
		  }
		});



*/