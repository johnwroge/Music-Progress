4/7/23
Received error for dependencies needed in main.go and separate modules: 

Error loading workspace: You are outside of a module and outside of $GOPATH/src. If you are using modules, please open your editor to a directory in your module. If you believe this warning is incorrect, please file an issue: https://github.com/golang/go/issues/new.

resolved through 
https://github.com/golang/vscode-go/issues/2160

go work init ./server 
in root directory (Music Progress)

go env to find information about the current go installation and environment

//packages: to import file contents, have to append the module name in go.mod to the folder name
