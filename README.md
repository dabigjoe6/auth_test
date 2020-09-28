# Patricia React Native Mobile Test

Provides a look at example/test code for how I implement authentication screens with route protections 1 Registration Page 2. Login Page 3. user's data Page.

## Project Layout
* The main app files you'll want to edit are in `src`. The app uses [React Navigation](https://reactnavigation.org/) to provide stack navigation.
* All components are functional components
* States such as user data, acess token and user auth are in a context (Store) provided at the top level of the application (parent to the root navigator)
* Store context implements 'useReducer' for managing states and then passes states and its dispatch function to its children
* Unit tests for all reusable components
* Custom hook for fetch API 

## Starting the test app
Android
* Run an AVD (Android Virtual Device) emulator. This could be started via Android Studio (Tools -> AVD Manager) or [the command line](https://developer.android.com/studio/run/emulator-commandline)
* `npx react-native run-android` runs the Android build
* ⌘-m in the Android emulator brings up the [React Native debug menu](https://facebook.github.io/react-native/docs/debugging.html).

For running on a physical Android device, [take a look at the docs for the subtleties involved](https://facebook.github.io/react-native/docs/running-on-device).

