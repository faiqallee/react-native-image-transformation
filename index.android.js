import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
// var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
// var PAGE_SIZE = 25;
// var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
// var REQUEST_URL = API_URL + PARAMS;

class AwesomeProject extends Component {

  LabelEditor(canvas, width, height) {
  this.canvas = canvas;
  this.canvas.width = width;
  this.canvas.height = height;
  this.canvas.id = 'mainEditor';
  
  var ctx = this.canvas.getContext('2d');
  ctx.fillStyle = "#A0EBDD"
  ctx.fillRect(30, 30, 150, 150);
}

var Editor = React.createClass({
  componentDidMount: function() {
    var canvas = React.findDOMNode(this.refs.canvas);
    this._editor = new LabelEditor(canvas, this.props.width, this.props.height);
  },

  render: function() {
    return (
      <canvas ref="canvas"></canvas>
      <div id="editor"></div>
    );
  }
});

React.render(
  <Editor width={500} height={500} />,
   document.getElementById('editor')

);
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       }),
//       loaded: false,
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//           loaded: true,
//         });
//       })
//       .done();
//   }
//  LabelEditor(canvas, width, height) {
//   this.canvas = canvas;
//   this.canvas.width = width;
//   this.canvas.height = height;
//   this.canvas.id = 'mainEditor';

  
//   var ctx = this.canvas.getContext('2d');
//   ctx.fillStyle = "#A0EBDD"
//   ctx.fillRect(30, 30, 150, 150);
// }
//   render() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }

//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={this.renderMovie}
//         style={styles.listView}/>
//     );
//   }

//   renderLoadingView() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading movies...
//         </Text>
//       </View>
//     );
//   }

//   renderMovie(movie) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: movie.posters.thumbnail}}
//           style={styles.thumbnail}/>
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{movie.title}</Text>
//           <Text style={styles.year}>{movie.year}</Text>
//         </View>
//       </View>
//     );
//   }

}

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);