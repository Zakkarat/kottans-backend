# kottans-backend

## Git Collaboration
## Linux CLI

Had already accomplished tasks in frontend course. [Check it out!](https://github.com/Zakkarat/kottans-frontend)

Also providing screenshot for new Unix-Shell task

<img src="https://github.com/Zakkarat/kottans-backend/blob/master/task-unix-shell/unix.PNG" width="500px" />

## NodeJS Basics 1
<div style="display: flex">
<img src="https://github.com/Zakkarat/kottans-backend/blob/master/node-basic-1/node-basic.PNG" width="250px" />
<img src="https://github.com/Zakkarat/kottans-backend/blob/master/node-basic-1/node-basic2.PNG" width="250px" />
<img src="https://github.com/Zakkarat/kottans-backend/blob/master/node-basic-1/node-basic3.PNG" width="250px" />
</div>

## Memory Management

- What's going to happen if program reaches maximum limit of stack ?

If the maximum stack size has been reached, we have a stack overflow and the program receives a Segmentation Fault.

- What's going to happen if program requests a big (more then 128KB) memory allocation on heap ? 

The heap is enlarged via the brk() system call (implementation) to make room for the requested block.

- What's the difference between Text and Data memory segments ?

The string lives in the text segment, which is read-only and stores all of your code in addition to tidbits like string literals.
The data segment, on the other hand, holds the contents for static variables initialized in source code. This memory area is not anonymous.

<img src="https://github.com/Zakkarat/kottans-backend/blob/master/memory-managment/memory.jpg" width="800px" />

## TCP. UDP. Network

<img src="https://github.com/Zakkarat/kottans-backend/blob/master/task_networks/networks.PNG" width="500px" />

## HTTP/HTTPS

```bash
curl https://api.github.com/users/zakkarat
```
```bash
curl -i https://api.github.com/users/zakkarat
```
```bash
curl --user "USERNAME" https://api.github.com/gists/starred
```
```bash
curl -i https://api.github.com/orgs/kottans/repos
```

