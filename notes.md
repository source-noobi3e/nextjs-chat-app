now to build this chat app we will use redis as a database and upstash as database provider

to use redis we will first install upstash/redis package using **npm i @upstash/redis** command

for working example pls take a look at db.ts file in models folder

to implement authentication we will use next-auth package which is mordern and secure way of authentication using google, github and other services

to install we type **npm i next-auth**

In authentication all the auth requets will be handled by **[...nextAuth].ts** file
