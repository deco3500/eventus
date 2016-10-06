# Eventus App Testing Guide
1. Download SourceTree and clone this repository from https://github.com/deco3500/Team-Nearby.git
2. Install Ionic in your local machine by doing ```npm install -g cordova ionic```
3. Start a  new project in your local machine by using this command ```ionic start myApp tabs```. 
  This will create a new project folder called myApp
4. Go to the project root folder
8. Overwrite the www folder with this www folder.
5. Do ```ionic platform add ios``` for iOS Device. I you're running on Android Emulator, change the ios to Android.
6. ```ionic build ios``` 
7. ```ionic emulate ios```
You can run live preview on your browser by using ```ionic serve```.
