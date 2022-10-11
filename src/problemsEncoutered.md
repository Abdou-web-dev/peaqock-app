P : Plugin "react" was conflicted between "package.json » eslint-config-react-app

## S : If anyone else is struggling to understand the last bit of this fix, this is how I fixed the error... The root of the casing problem was coming from the difference in how the folders were capitalised in windows vs how I had typed them when using cd in bash. So I cd to the directory matching the casing of the actual windows folders and then ran npm start again from this location and the error was gone. –
