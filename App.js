import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import useRsa from './useRsa';

export default function App() {
	const { test } = useRsa();

	// useEffect(() => {
	// 	const unsubscribe = test();
	// 	return unsubscribe;
	// }, []);

	return (
		<View style={styles.container}>
			<Button
				title='Test'
				onPress={() => {
					test();
				}}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
