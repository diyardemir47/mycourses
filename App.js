import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCourse from './screens/ManageCourse';
import RecentCourses from './screens/RecentCourses';
import AllCourses from './screens/AllCourses';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // AntDesign ikonlarını @expo/vector-icons'dan içe aktar

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseOverview() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}> {/* Ekranın tamamını kaplayacak şekilde view oluşturuldu ve arka plan rengi beyaz olarak ayarlandı */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'RecentCourses') {
              iconName = focused ? 'book' : 'book'; // Kitap simgesi
            } else if (route.name === 'AllCourses') {
              iconName = focused ? 'menufold' : 'menufold'; // Menü simgesi
            }

            // İstediğiniz herhangi bir bileşeni burada döndürebilirsiniz!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="RecentCourses" component={RecentCourses} />
        <Tab.Screen name="AllCourses" component={AllCourses} />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CourseOverview" component={CourseOverview} options={{ headerShown: false }} />
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
