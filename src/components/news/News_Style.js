
import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('window');
module.exports = StyleSheet.create({
  // Row
  row: {
    paddingBottom: 4,                   // Add padding at the bottom
  },
  // Background image
  imageBackground: {
    flex: 1,
    height: screen.height *0.4,          // Divide screen height by 3
    justifyContent: 'space-between',           // Center vertically
    alignItems: 'center', 
    backgroundColor: 'transparent',
            // Center horizontally
  },
  // Shared text style
  text: {
    color: '#fff',                      // White text color
    backgroundColor: 'transparent',     // No background
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
   
  },
  // Movie title
  title: {
    fontSize: 16,                       // Bigger font size
  },
  // Rating row
  
  // Certified fresh icon
  icon: {
    width: 22,                          // Set width
    height: 22,                         // Set height
    marginRight: 5,                     // Add some margin between icon and rating
  },
  // Rating value
  value: {
    fontSize: 14,                       // Smaller font size
  },
});
