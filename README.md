# Svg file to react-native-svg component

The purpose of this tiny lib is to provide a tool that can generate a usable "out of the box" react-native-svg component from a standard svg file using the svg optimization library SVGO (which is truly awesome) and a small plugin that comes along with it.

If you get there it mean that you are really, like REALLY, lost, because there is no chance to get this far in the github desert.

So if you have an advice or you want to contribute feel free

## To do

* ~~Template react-native-svg component~~
* ~~Get the name of the component from the CLI~~
* ~~Get the body of the component from the plugin~~
* ~~Create a SVGO plugin and use others to optimize the svg component before converting it~~
* ~~Create component.native.js as output~~
* Specify path from the CLI to get the svg file

* Better error handling
* Better template file, the actual one is just a POC not a great solution
* Fall back to a default name if there is none provided or throw an error
* Make possible to choose which svgo plugin to use for the convertion
* Prettify the component.native.js code output
* Handle the convertion of all react-native-svg attribute to Pascal Case
* Split function in several files
* Write unit test
* Write an Atom plugin
* if i get there i will take a deep breath and take 5 minutes to be proud of me <3
