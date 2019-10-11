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
```bash
curl -u zakkarat:***** -d "{ \"title\" : \"test\" }" https://api.github.com/repos/zakkarat/kottans-backend/issues
```
- Name at least three possible negative consequences of not using https.

First of all, possible it would be a man in the middle attack, when data is being changed to fake data somewhere in the middle of the sending process. Secondly, data can be captured and read by someone else(Not actual data receiver). Finally, without certification, the user won't know if he is connected to the actual site, so the user's data could be stolen by the attacker.

- Explain the main idea behind public key cryptography in few sentences.

The idea behind the public key is to make sure that only specified users get data. There are two types of keys: public and private. Data can be encrypted by one of them, but must be decrypted by another. For example, if we have data encrypted by the public key, it can only be decrypted by the private key. It provides assurance, that we get data from trusted users, moreover, It makes impossible to access data for attackers.
