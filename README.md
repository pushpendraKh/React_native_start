# React_native_start
This is a learning project for react Native

# Start 
1. Install Node and Watchman (to watch changes in filesystem) to kick of the start.
i) brew install node
ii) brew install watchman.

2. Install React Native command line interface with *npm install -g react-native-cli*
3. Create a new project with *react-native init AwesomeProject*
4. To run project, navigate to the newly create project and run *react-native run-ios*

# Props And State
Props are basically values that are set by parent for its child. This is all constant throught. But
States are used to change something in that component.

# Install Flow
1. Run *npm install --save-dev babel-preset-flow* OR *yarn add --dev babel-cli babel-preset-flow*
2. go to .babelrc file and add flow in the preset
3. Run *npm add --only=dev flow-bin*
4. Now, Run flow with *npm run flow*. If there is any version incompatiblity error turns up, then flow-bin with the compatible version. For Example *npm add --only=dev flow-bin@0.53.0*
