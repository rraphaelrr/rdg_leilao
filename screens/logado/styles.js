import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.telafundo,
		alignItems: 'center',
	},


	inputBox: {
		width: '80%',
		backgroundColor: Colors.corimput,
		fontSize: 16,	
		color: Colors.corsubtext,
		paddingHorizontal:-3,
		maxHeight:60,
		borderBottomWidth: 0.3 , //tamanho da linha 
		borderColor:Colors.corlabel //cor da linha 
	},

	inputKey: {
		width: '15%',
		backgroundColor: Colors.corimput,
		fontSize: 25,	
		color: Colors.corsubtext,
		paddingHorizontal:-3,
		maxHeight:60,
		margin:2,
		alignItems: 'center',
	
	},

	inputCPF: {
		width: '13%',
		backgroundColor: Colors.corimput,
		fontSize: 25,	
		color: Colors.corsubtext,
		//borderWidth:2,
		paddingHorizontal:-3,
		maxHeight:60,
		margin:10,
		alignItems: 'center',
	},

	separator: {
		height: 1, width: "100%", 
		backgroundColor: Colors.corlinha,
	},

	
	coloricon:{
		color: Colors.coricon,
	},

	buttonText: {
		fontSize: 15,
		color: Colors.corsecundaria,
		textAlign: 'center'
	},

	corsub: {
		fontSize: 15,
		color: Colors.corsubtext,
		fontWeight: 'bold',
		textAlign:'right',
		
	},
	corsub2: {
		fontSize: 15,
		color: Colors.corsubtext,
		fontWeight: 'bold',
		textAlign:'center',
		
	},
	corsub3: {
		fontSize: 15,
		color: Colors.corsubtext,
		fontWeight: 'bold',
		textAlign:'left',
	
	},
	corsub4: {
		fontSize: 15,
		color: Colors.corsubtext,
		fontWeight: 'bold',
		textAlign:'left',
		
	},

	logo: {
		width: 90,
		height: 100,
	},

		logo2: {
		width: 110,
		height: 110,
		borderRadius: 15,
		borderColor: Colors.corborda,
		borderWidth: 0.3,
		margin: 5, 
		alignItems: 'center',
		justifyContent:'center',
		
	},	

	viewrow: {
		flexDirection: 'row',		
	},

	
	footer: {
		position: 'absolute',		
		bottom: 30,
		flexDirection: 'row',
		height: 10,
		alignItems: 'center',
		justifyContent:'center',
		flex: 0.3,
		left: 10,
		right: 0,
		
	
	},
	corsecundaria: {
		color: Colors.corsecundaria
	},

	textogeral: {
		color: Colors.textogeral
	},

	textosecundario: {
		color: Colors.textosecundario

	},

	botaocontinuar: {
		color: Colors.botaocontinuar
	},

	botaovoltar: {
		color: Colors.botaovoltar
	},
	botaosair: {
		color: Colors.botaosair
	},


});


export default styles;