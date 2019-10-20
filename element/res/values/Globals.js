
import {Dimensions,Platform,PixelRatio,NativeModules} from  'react-native';
import WCProgressHUD from "../../app/components/ProgressHUD";
import Strings from './Strings'
import Colors from './Colors'
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

// 全局变量
global.Platform =  Platform;
global.WCProgressHUD =  WCProgressHUD;
global.Strings = Strings;
global.Colors = Colors;
global.Device = {
    get ScreenWidth() {
        const {width} = Dimensions.get('window');
        return  width;
    },
    get ScreenHeight() {
        const {height} = Dimensions.get('window');
        return  height;
    },
};

global.NavigationHeight =  44;
global.statusBarManager = {
     statusHeight(callback) {
         ///获取转态栏高度
         if (Platform.OS==='ios'){
             NativeModules.StatusBarManager.getHeight(({height}) => {
                 if (callback){callback(height)}
             });
         }else {
             if (callback){callback(StatusBar.currentHeight)}
         }
    },
};


global.storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});