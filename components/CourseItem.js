import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getFormattedDate } from '../helper/date';
import { useNavigation } from '@react-navigation/native';

export default function CourseItem({ amount, date, description, id }) {
  const navigation = useNavigation();

  function coursePress() {
    navigation.navigate('ManageCourse', {
      courseId: id,
    });
  }
  return (
    <Pressable onPress={coursePress}>
      <View style={styles.courseContainer}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black', // Mor renk
    marginVertical: 8,
    padding: 12,
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF', // Beyaz renk
  },
  priceContainer: {
    backgroundColor: '#FFFFFF', // Beyaz arka plan
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  price: {
    fontWeight: 'bold',
    color: '#0000FF', // Mavi renk
  },
  date:{
    color:'white'
  }
});