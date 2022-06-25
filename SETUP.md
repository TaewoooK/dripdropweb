# Getting Started with Dripdrop
What a shit show you're getting yourself into.

## Prerequisites
1. VSCode
2. Git
3. Node.js

If Windows machine:
1. install wsl `https://docs.microsoft.com/en-us/windows/wsl/install

## VSCode Setup Windows
1. Clone repo into local vscode environment
2. Run the following commands in ubuntu wsl (might take a while)
`
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install npm
`

## VSCode Setup MacOS
1. Clone repo into local vscode environment
2. Run the `npm install` in terminal

## Connecting to Amplify
1. Ask a current AWS founder to create an AWS Profile to connect to Amplify
2. After AWS login, go to AWS Amplfy and set up the backend environments amplify studio
3. Make sure that the region is selected to us-east-1 (N.Virginia)
4. On the console, look on the left side for Authentication.
5. If the authentication is not deloyed (indicated at the top in green), deloy the authentication and wait until it is finished as indicated on the top right corner.
6. After the Auth is deployed, go into ubuntu wsl (terminal on mac) and install Amplify CLI with `npm install -g @aws-amplify/cli`
7. Go back to Amplify studio and click on the top right corner of where it states either, `local setup instructions` or that the deploy is complete.
8. Copy the command given into your Ubuntu WSL (terminal on mac)
9. Your setup should not be ready

## Running on Windows
1. Open Powershell or CMD (not Ubuntu WSL) and run `npm run start` on the repo directory
2. Wait for it to load, it will take a while for the first time

## Running on Mac
1. Open terminal and run `npm run start` on the repo directory
2. Wait for it to load, it will take a while for the first time

If you have any errors or questions, please message one of the founders. Thanks!

