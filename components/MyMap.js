import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View, Text, Image } from "react-native";
import React, { Component } from "react";

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 500,

    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    height: 400,
    width: 500
  }
});
const markerList = [
  {
    title: "marker 1",
    description: "marker 1 desc",
    coordinate: { latitude: 37, longitude: 122 }
  }
];

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.showAllCallOut = this.showAllCallOut.bind(this);
    this.state = {
      markers: [
        {
          title: "marker 1",
          description: "marker 1 desc",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          coordinate: { latitude: 37.032, longitude: -122.00022 }
        },
        {
          title: "marker 2",
          description: "marker 2 desc",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          coordinate: { latitude: 37.013, longitude: -122.0004 }
        },
        {
          title: "marker 3",
          description: "marker 3 desc",
          image: "https://randomuser.me/api/portraits/women/80.jpg",
          coordinate: { latitude: 37.021, longitude: -122.0003 }
        }
      ]
    };
    this.myCallOutRef = React.createRef();
    this.myCallOutRef1 = React.createRef();
    
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({markers: [
      {
        title: "marker 1 x",
        description: "marker 1 desc",
        image: "https://randomuser.me/api/portraits/women/80.jpg",
        coordinate: { latitude: 37.052, longitude: -122.00022 }
      },
      {
        title: "marker 2 x",
        description: "marker 2 desc",
        image: "https://randomuser.me/api/portraits/women/80.jpg",
        coordinate: { latitude: 37.93, longitude: -122.0004 }
      },
      {
        title: "marker 3 x",
        description: "marker 3 desc",
        image: "https://randomuser.me/api/portraits/women/80.jpg",
        coordinate: { latitude: 37.081, longitude: -122.0003 }
      }
    ]});
  //alert('timeout done');
  },2000)
  }
  showAllCallOut() {
    console.log("here is the case", this.myCallOutRef);
    console.log("here is the case", this.myCallOutRef1);

    alert(this.myCallOutRef1.current);
  }

  render() {
    return (
      <View style={styles.container} ref={this.myCallOutRef}>
        <MapView
        scrollEnabled={false}
          onMapReady={this.showAllCallOut}
          showsUserLocation={true}
          userLocationAnnotationTitle="my position"
          showsScale={true}
          showsCompass={true}
          showsIndoors={true}
          showsMyLocationButton={true}
          zoomControlEnabled={true}
          scrollEnabled={true}
          loadingEnabled={true}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 37.0001,
            longitude: -122.0002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0921
          }}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
            
              
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            >
              <CustomMarker {...marker} />
            </Marker>
          ))}
          <Marker 
          draggable={true}
          coordinate={{latitude: 37.061, longitude: -122.0003}}
          title='Main Marker'
          onDragEnd={(e)=>{alert('drag end')}}
          />
        </MapView>
      </View>
    );
  }
}

class CustomMarker extends Component {
  render() {
    return (
      <View>
        <Text> title {this.props.title} </Text>
        <Image
          style={{ height: 40, width: 40, borderRadius: 20 }}
          source={{ uri: "https://randomuser.me/api/portraits/women/80.jpg" }}
        />
      </View>
    );
  }
}
