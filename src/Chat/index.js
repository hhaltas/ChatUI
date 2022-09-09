import ReactNative, {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  LogBox,
  Modal,
  Keyboard,
  ScrollView,
  Platform,
  StyleSheet,
  NativeModules,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ActionSheet from 'react-native-actionsheet';
import PropTypes from 'prop-types';
import styles from './style';
import moment from 'moment';
import {randomString} from '../../lib/helper';
import {
  codeChatBackground,
  codeChatDescription,
  codeChatMe,
  codeChatUser,
} from '../../lib/color';
import {
  PhoneActive,
  PhoneNotActive,
  VideoActive,
  VideoNotActive,
  BackIcon2,
  ChatCam,
  ChatCamHover,
  ChatAttach,
  ChatAttachHover,
  ChatSend,
  UserIcon,
} from '../../lib/icon_list';
const ANDROID_PLATFORM = Platform.OS === 'android';
const AutoGrowTextInputManager = NativeModules.AutoGrowTextInputManager;
var _textInput = null;
var FlatListRef = null;

const ChatIndex = props => {
  const [userId, setuserId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [chatMessage, setchatMessage] = useState(null);
  const [visibleMessage, setvisibleMessage] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const [isAttachActive, setisAttachActive] = useState(false);
  const [height, setheight] = useState(0);
  const [time, setTime] = useState(0);
  const [isShowBuyCredit, setisShowBuyCredit] = useState(true);
  useEffect(() => {
    if (shouldApplyNativeSettings()) {
      const reactTag = textInputReactTag();
      if (reactTag) {
        AutoGrowTextInputManager.applySettingsForInput(reactTag, {
          enableScrollToCaret: props.enableScrollToCaret,
          maxHeight: props.maxHeight,
        });
      }
    }

    if (shouldApplyNativeSettings()) {
      const reactTag = textInputReactTag();
      if (reactTag) {
        AutoGrowTextInputManager.performCleanupForInput(reactTag);
      }
    }
  }, []);

  const shouldApplyNativeSettings = () => {
    return (
      AutoGrowTextInputManager &&
      (ANDROID_PLATFORM || props.enableScrollToCaret)
    );
  };

  const textInputReactTag = () => {
    if (_textInput) {
      return ReactNative.findNodeHandle(_textInput);
    }
  };

  const actionClick = async index => {
    if (index === 2) {
      this.resetPhotoIndex();
    }

    if (index === 0) {
      // camera
      launchCamera(
        {
          mediaType: 'photo',
          cameraType: 'back',
          saveToPhotos: true,
        },
        async ({assets}) => {
          if (assets.length > 0) {
            const img = assets[0];
            img.uri = await CompressImage.compress(img.uri, {
              compressionMethod: 'auto',
            });

            const _photo_ = await awsUpload({
              path: img.uri,
              name: getRandName(),
            })
              .then(async data => {
                await sendImage(data);
                //await handleSendImage(data);
              })
              .catch(err => {});
          }
        },
      );
    }

    if (index === 1) {
      launchImageLibrary(
        {
          mediaType: 'photo',
        },
        async ({assets}) => {
          let _photo_ = null;

          if (assets.length > 0) {
            const img = assets[0];
            const loaded = false;
            img.uri = await CompressImage.compress(img.uri, {
              compressionMethod: 'auto',
            });

            _photo_ = await awsUpload({
              path: img.uri,
              name: getRandName(),
            })
              .then(async data => {
                await sendImage(data);
              })
              .catch(err => {});
          }
        },
      );
    }
  };
  const getRandName = () => {
    const name_1 = moment(new Date()).unix().toString();
    const name_2 = randomString(5);
    return `${name_1}_${name_2}`;
  };
  const handleChangeText = async chatMessage => {
    if (chatMessage !== null) {
      setvisibleMessage(false);
    }
    if (height <= 130) {
      setvisibleMessage(true);
      await setchatMessage(chatMessage);
    }
    if (chatMessage.lenght === 0) {
      setvisibleMessage(false);
    }
  };
  const sendMessage = async () => {
    if (chatMessage.lenght !== 0) {
      const sendData = {
        orderId: props.orderID,
        message: chatMessage,
        senderId: props.user.id,
      };
      await setAllMessages(allMessages => [...allMessages, sendData]);
      setvisibleMessage(false);

      setchatMessage(null);
      //await ws.current.send(JSON.stringify(sendData));
    }
  };

  const isMessage = item => {
    return item.senderId === userId;
  };

  const renderMessage = item => {
    if (item.messageType === 'IMAGE') {
      return (
        <View
          style={[
            styles.containerMessage,
            !isMessage(item) ? {marginRight: 10} : {marginLeft: 10},
          ]}>
          <View
            style={[
              styles.messageBox,
              {
                backgroundColor: !isMessage(item) ? codeChatMe : codeChatUser,
                marginLeft: !isMessage(item) ? 100 : 0,
                marginRight: !isMessage(item) ? 0 : 100,
              },
            ]}>
            <Image
              style={styles.messageImage}
              source={{uri: item.message}}
              resizeMode="contain"
            />
          </View>
          <View
            style={[
              styles.talkBubbleTriangle,
              !isMessage(item) ? {right: -5} : {left: -5},
              {
                transform: [{rotate: !isMessage(item) ? '180deg' : '0deg'}],
                borderRightColor: !isMessage(item) ? codeChatMe : codeChatUser,
              },
            ]}
          />
        </View>
      );
    }

    return (
      <View
        style={[
          styles.containerMessage,
          !isMessage(item) ? {marginRight: 10} : {marginLeft: 10},
        ]}>
        <View
          style={[
            styles.messageBox,
            {
              backgroundColor: !isMessage(item) ? codeChatMe : codeChatUser,
              marginLeft: !isMessage(item) ? 100 : 0,
              marginRight: !isMessage(item) ? 0 : 100,
            },
          ]}>
          <Text
            style={[
              styles.messageText,
              {
                textAlign: !isMessage(item) ? 'right' : 'left',
              },
            ]}>
            {item.message}
          </Text>
        </View>
        <View
          style={[
            styles.talkBubbleTriangle,
            !isMessage(item) ? {right: -5} : {left: -5},
            {
              transform: [{rotate: !isMessage(item) ? '180deg' : '0deg'}],
              borderRightColor: !isMessage(item) ? codeChatMe : codeChatUser,
            },
          ]}
        />
      </View>
    );
  };
  const textInputView = () => {
    return (
      <View style={[styles.chatInputView]}>
        <View style={[styles.mainContainer]}>
          <TextInput
            placeholder={'Message...'}
            style={{
              flex: 1,
              height: 'auto',
              fontWeight: '600',
              color: codeChatDescription,
              fontSize: 16,
              textAlign: 'left',
              marginHorizontal: 10,
              alignItem: 'center',
            }}
            keyboardType="default"
            returnKeyType="done"
            maxHeight={100}
            minHeight={45}
            multiline={true}
            value={chatMessage}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            onChangeText={async e => {
              await handleChangeText(e);
            }}
          />
        </View>
        <View style={{padding: 2}} />
        <View style={[styles.mainIcon]}>
          <TouchableOpacity
            onPress={() => {
              sendMessage();
              // handleSend();
            }}>
            <Image
              source={ChatSend}
              style={[styles.Image2]}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={{padding: 2}} />

          {!visibleMessage && (
            <TouchableOpacity
              onPress={async () => {
                // SheetManager.show('PhotoActionsSheet');
                await this.ActionSheet.show();
              }}>
              <Image
                source={isAttachActive ? ChatAttachHover : ChatAttach}
                style={styles.Image2}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={{width: '100%', flex: 1}}>
        <View style={styles.banner}>
          <View style={styles.Left}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.backBtn}>
                <TouchableOpacity
                  onPress={() => {
                    setOpenModal(!openModal);
                  }}>
                  <Image style={{width: 24, height: 24}} source={BackIcon2} />
                </TouchableOpacity>
              </View>
              <View style={styles.bannerDetail}>
                {/* <Image
                  style={styles.Image}
                  resizeMode="contain"
                  source={{uri: setImageURL(props.teller.avatarUrl)}}
                /> */}

                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.tellerName}>Ahmet</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: codeChatDescription}}>dakikası</Text>

                    <Text style={{}}>50 kredi</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: codeChatBackground,
                width: '100%',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',

                margin: 10,
              }}>
              <View style={{flexDirection: 'row', width: '50%'}}>
                <Text style={styles.time}>ASd </Text>
                <Text style={styles.amount}>
                  {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                  {('0' + Math.floor((time / 1000) % 60)).slice(-2)}{' '}
                </Text>
              </View>

              <View style={{flexDirection: 'row', width: '50%'}}>
                <Text style={styles.time}>kredi </Text>
                <Text style={styles.amount}>350</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const ActionCamera = () => {
    return (
      <ActionSheet
        ref={o => {
          this.ActionSheet = o;
        }}
        title={'CAMERA'}
        options={['camera', 'galery', 'cancel']}
        cancelButtonIndex={2}
        onPress={index => actionClick(index)}
      />
    );
  };
  const MessageList = () => {
    return (
      <FlatList
        data={allMessages}
        refreshing={refreshing}
        ref={ref => (FlatListRef = ref)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => renderMessage(item)}
        contentContainerStyle={{marginBottom: 20}}
        onContentSizeChange={() => FlatListRef.scrollToEnd({animated: true})}
        onLayout={() => FlatListRef.scrollToEnd({animated: true})}
      />
    );
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: codeChatBackground}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={64}
      enabled>
      <View style={{flex: 1}}>
        {Header()}
        <View
          style={{
            flex: 1,
          }}>
          <View style={{flex: 1, paddingBottom: 20}}>{MessageList()}</View>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 8,
              paddingRight: 8,
              bottom: 10,
            }}>
            {textInputView()}
          </View>
        </View>

        {ActionCamera()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatIndex;
