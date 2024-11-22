import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cfu.messenger',
  appName: 'Messenger',
  webDir: 'dist',
  plugins: {
    "PushNotifications":{
      "presentationOptions": ["badge", "sound", "alert"]
    }
  }
};

export default config;
