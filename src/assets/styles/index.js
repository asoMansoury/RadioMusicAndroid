import EStyleSheet from 'react-native-extended-stylesheet';


export const darwerLayout = EStyleSheet.create({
  container:{flex:1},
  Item:{justifyContent:'flex-end',padding:10},
  Icon:{marginLeft:10},
  Image:{height:180,width:"100%"},
  Text:{}
})

export const swiperPage = EStyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e91e63',
      width: '100%', 
      height: '100%'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#673ab7',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3f51b5'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});

export const loginPageStyle = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e0e0e0'
  },
  containerView: {
    flex: 1,
    backgroundColor:'#EEEEEE'
  },
  sliderTop:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63',
    width: '100%', 
    height: '100%'
  },
  loginScreenContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width:'95%',
    height:'98%',
    marginLeft:13
  },
  logoText: {
    fontSize: 16,
    fontWeight: "300",
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
    backgroundColor:'$mainColor',
    width:'98%',
    borderRadius:8,
    elevation:15
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '$mainColor',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '$iconColor',
    borderRadius: 5,
    height: 45,
    marginTop: 18,
    marginLeft:20
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
})

export const initialAppStyle  = EStyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  }
});

export const registerPage = EStyleSheet.create({
  bgImage:{
    flex:1,
    height:'100%',
    width:'100%'
  },
  inputContainer:{
    alignItems:'center',
    shadowColor: "#808080",
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F5FCFF',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,
    marginTop:40,
    width:300,
    height:45,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRadius:30,
    marginLeft:40
  },
  inputs:{
    height:45,

    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    justifyContent: 'center',
    marginRight:15,
    color:'$iconColor'
  }
})