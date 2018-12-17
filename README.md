# React Native Firebase analytics
this is a simple project using firebase analytics
I installed this firebase by following [this tutorial](https://medium.com/@oakromulo/firebase-analytics-on-react-native-4b348466f025) it more readable than the [documentation](https://rnfirebase.io/docs/v5.x.x/analytics/ios)
## installation
- clone this repo
- run `npm install` in this repo
- go to the `ios` directory
- if there's no podfile create one by this command `pod init`
- open your `Podfile`
- add this to your `Podfile`
    ```
     # Pods for RNFirebaseAnalytics
	pod 'Firebase/Core'
    ```
- save it.
- run `pod install` on your `ios` directory

## Run the app
`react-native run-ios`

## Other References
 - by [Mz Chi](https://medium.com/@Mz_Chi/how-to-include-firebase-analytics-to-your-react-native-app-d8fc977747d0)
 - [firebase](https://firebase.google.com/docs/)
 - [react-native-firebase](https://github.com/invertase/react-native-firebase)
 - [rnfirebase.io](https://rnfirebase.io/)
