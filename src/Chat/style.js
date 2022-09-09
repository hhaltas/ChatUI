import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  container1: {
    backgroundColor: '#eae2ef',
    flex: 1,
  },
  textInput: {
    flex: 1,
    borderColor: '#448aff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    marginBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 15,
    padding: 5,
  },
  messageTime: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.7,
    marginStart: 10,
    position: 'absolute',
    end: 10,
    bottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageImageContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    borderRadius: 10,
    //backgroundColor: '#248bf5',
  },
  messageImageReceived: {
    //backgroundColor: '#02C52D',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    borderRadius: 10,
    maxWidth: 160,
  },

  sendButton: {
    paddingStart: 10,
    marginBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#f8f2fa',
    height: 100,
  },
  Left: {
    flexDirection: 'column',
    height: '100%',
    width: '80%',
  },
  Right: {
    flexDirection: 'column',
    height: '100%',
    width: '20%',
  },
  backBtn: {
    margin: 5,
    zIndex: 9,
    left: 10,
    top: 10,
  },
  Image1: {
    margin: 5,
    width: 35,
    height: 35,
  },
  Image: {
    margin: 5,
    width: 40,
    height: 40,
  },
  messageImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bannerDetail: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    paddingLeft: 5,
    margin: 5,
  },
  tellerName: {
    fontSize: 18,
    fontWeight: '600',

    textAlign: 'left',
  },
  minute: {
    fontSize: 14,
    fontWeight: '600',

    textAlign: 'left',
  },
  time: {
    fontSize: 14,

    fontWeight: '600',
    textAlign: 'left',
    color: '#a591b2',
  },
  amount: {
    fontSize: 14,

    fontWeight: '600',
    textAlign: 'left',
  },
  scrollview: {
    paddingBottom: 100,
    position: 'relative',
  },

  listView: {
    flex: 2,
    padding: 10,
  },
  newInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    padding: 10,
    height: 50,
  },
  messageRow: {
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  meRow: {
    alignItems: 'flex-end',
  },
  messageContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
  },
  me: {
    alignItems: 'flex-end',
    backgroundColor: '#d2fffd',
  },
  message: {
    fontSize: 16,
    color: '#888',
  },
  messageDate: {
    fontSize: 12,
    color: '#656565',
    padding: 2,
  },
  text: {
    color: '#000',
  },
  InputBox: {
    borderWidth: 1,
  },
  creditDescription: {
    fontSize: 12,
    fontWeight: '600',

    textAlign: 'center',
    padding: 8,
  },
  creditDescriptionView: {
    backgroundColor: '#ffc1df',
    borderRadius: 5,
    width: '74%',
  },
  creditButton: {
    height: '100%',
    fontSize: 16,
    color: '#ffffff',

    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
  },
  creditButtonView: {
    width: '26%',
  },
  chatInputView: {
    width: '99%',
    height: 'auto',
    backgroundColor: '#f8f2fa',
    flexDirection: 'row',
    shadowColor: '#000',
    borderRadius: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    //marginBottom: Platform.OS === 'ios' ? 40 : 10,
  },

  mainContainer: {
    flexDirection: 'row',
    padding: 5,
    flex: 1,
    alignItems: 'flex-end',
  },
  mainIcon: {
    flexDirection: 'row-reverse',
    marginLeft: 10,
  },
  Image2: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  TextInput: {
    flex: 1,
    fontWeight: '600',
    color: '#776881',
    fontSize: 16,
    textAlign: 'left',

    textAlignVertical: 'top',
    marginHorizontal: 10,
  },
  messageContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#248bf5',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    borderRadius: 10,
    maxWidth: 300,
  },
  rightArrow: {
    position: 'absolute',
    backgroundColor: '#248bf5',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eae2ef',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },

  //Other User Css chat input
  messageContainerReceived: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#02C52D',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    borderRadius: 10,
    maxWidth: 300,
  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#02C52D',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eae2ef',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    height: '25%',
    width: '100%',
    margin: 20,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  creditTouchable: {
    height: 50,
    fontSize: 16,
    color: 'black',

    fontWeight: '700',
    textAlign: 'center',
  },
  containerMessage: {
    padding: 10,
  },
  messageBox: {
    backgroundColor: '#e5e5e5',
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  triangle: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  triangleRight: {
    transform: [{rotate: '90deg'}],
  },
  talkBubble: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginTop: 10,
  },
  talkBubbleSquare: {
    width: 120,
    height: 80,
  },
  talkBubbleTriangle: {
    position: 'absolute',
    top: 13,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: 'red',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent',
  },
});

export default styles;
