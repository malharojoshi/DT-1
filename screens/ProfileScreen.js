import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch
} from "react-native";
import firebase from "firebase";



export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_image: "",
      name: ""
    };
  }
}
