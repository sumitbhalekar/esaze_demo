package com.demoapp; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

public class NoticeModule extends ReactContextBaseJavaModule {
   NoticeModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
    public String getName() {
        return "NoticeModule";
    }

   @ReactMethod
     public void noticeMessageText(String name, String location) {
     Log.d("NoticeModule", "App is running on emulator or simulator " + name
     + " and location: " + location);
     }
}