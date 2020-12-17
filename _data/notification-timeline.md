---
date: 2020-11-12
title: A Notification Timeline Widget using React?
tags:
  - javascript
  - programming
  - react
author: Tapas Adhikary
---
> Taken from [blog.greenroots.info](https://blog.greenroots.info/a-notification-timeline-using-react-ckdb6o0yp00wy59s16les9bjn) to dmonstrate an example.

# Introduction
It's been a while I have done much with [React](https://reactjs.org/). When I was trying it out with simple state management, in-built hooks, basic styling and managing events, I thought, why not to build something useful? That's when the idea of building a simple, light-weight `notification-timeline` came into my mind.

So what is notification-timeline? 
- As the name indicates, it notifies you sooner a notification arrives.
- It helps you in reading through your notifications in timed sorted manner. That's where the timeline comes from.
- You can mark the notifications as read.
- You can identify what notification was received and when. 
- Few more customization capabilities that we will discuss bit later.

How does it look?
- The basic look and feel contains a bell icon along with a number of unread notifications for you to look into.

 ![1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1596200894152/IAyZ5bz-i.png)

- You click on the bell icon to open up a pop-over to read the notifications and mark them as read, if required.

 ![2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1596196428932/MY3VUo_vo.png)

# TL;DR
In this article, I am going to explain some source code at the high level. Please stick to it. I am sure, you will have some take-away from it. 

In case, you want to get to the code or the demo early, here are the details:

## Demo
You can access the demo from here: [https://notify-timeline.netlify.app/](https://notify-timeline.netlify.app/)

## Source Code
All the Source Code are here in the git repo.  If you like the work, please show your support with a star for the repo.

%[https://github.com/atapas/notifyme]

# Yayyy, it is available as npm
Did you know, this component is also [available as a npm](https://www.npmjs.com/package/react-notification-timeline)? Yeah! you can download and install it using,

```js
npm i react-notification-timeline
```
or

```js
yarn add react-notification-timeline
```

Once installed, it can be imported into your React project as,

```js
import NotifyMe from 'react-notification-timeline';
```

Use the component as,

```js
<NotifyMe
  data={data}
  storageKey='notific_key'
  notific_key='timestamp'
  notific_value='update'
  heading='Notification Alerts'
  sortedByKey={false}
  showDate={true}
  size={64}
  color="yellow"
/>
```
For more details about the properties and customizations, please [read it from here](https://github.com/atapas/notifyme#properties).

Please give it a try and let me know how it goes. Almost nothing is bug free! Feel free to be a contributor if you would like to find-try-fix bugs or add features to it. You are most welcome.