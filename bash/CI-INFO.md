## Continuous Integration Information

This repo uses .git hooks to perform some continuous integration tasks after the commit happens.

####Dependencies

Go To: <current-directory>/.git/hooks
Make/Update 'post-commit' to include th following:

`#!/bin/sh`

 `echo "ENTER: post-update"`
 
 `pwd`
 
 `echo "running bash/commit.sh"`
 
 `sh bash/commit.sh`
 
 `echo "END: post-update"`
 
 Then put the post-commit action(s) in `<current-directory>/bash/commit.sh`
 
 You should see the `echo` statements in the terminal or the IntelliJ Console.
 
 ##Nginx Info
 https://dev.to/guimg/how-to-serve-nodejs-applications-with-nginx-on-a-raspberry-jld