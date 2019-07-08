# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing. It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer. If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link). Additionally, some of the questions below are tricky. The answers were not necessarily covered in the reading we assigned. They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability. If you cannot find an answer, explain what you do know and what you are stuck on.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

We are requesting access from our _client_ computer to the unique name that identifies the location of the website (the IP address) which represents the _server_ on which the website is being hosted.

## From start to finish, how does data reach you to be rendered in the browser?

I would start by explaining more about the relationship between clients and servers. Clients request (and can send) information, but usually don't store data. Servers are dedicated computers that are always (hopefully!) connected to the internet which store data and "serves" that data, across the internet, to clients. Part of the data that a server hosts and sends to clients are HTML documents which are interpreted by the browser, a program that can acess webpages in order to display them.

## What code is rendered in the browser?

HTML is the code that is rendered in the browser. We use HTML to write webpages via the use of a text editor. HTML stands for Hyper Text Markup Language and it is used too structure your document or webpage,which is then served to the client requesting the page and rendered by the browser.

## What is the server-side code’s main function?

The server-side code's main function is to design and structure documents to define the boundaries of the webpage. It houses the process of processing user requests while restricting access to proprietary information.

## What is the client-side code’s main function?

The client-side code's main function is to render data sent from the server on the web, the part of the internet where webpages are shared via the http protocol.

## What is runtime?

Runtime refers to the amount of time a computer program takes to run a specific set of tasks, essenitally making it analogous to a time-based measurement of the program's algorithm(s).

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I think that instances are created per requests made by the user or amount of users requesting said assets.

## How many instances of the server-side code are available at any given time?

It seems that limitations or constraints to the amount of instances of server-side code are algorithmic and relate to the code itself or the programatic functionality of that code, as well as performant responses to requests made by the client(s).

## How many instances of the databases connected to the server application are created?

I believe the instances of the databases are dependent on the capacity of the db technologies deployed to store the data and business logic of the program or system accessed by the server application.
