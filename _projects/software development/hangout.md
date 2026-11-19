---
layout: page
title: Hangout
description: >
  <u><b>Full-Stack Developer</b></u> <br/>
  Mobile web app that gets plans out of the group chat and actually happening. <br/>
  <i>August 2026 - November 2026</i>
img: assets/img/hangout/wordmark-white-on-purple.png
importance: 1
category: software development
related_publications: false
---

Group chats are good at starting plans and bad at finishing them. Hangout is a mobile web app that takes a friend group from an idea to a plan everyone agreed on: they **vote on what to do** with ranked-choice voting, **mark when they're free** so the app can suggest the time most people can make, **pick a place**, **sort out rides**, and **chat**, all in one place, with live updates and phone notifications.

<b>Highlights:</b>

- Built a full-stack, real-time web app with React, Node.js/Express, PostgreSQL, and Socket.io
- Implemented ranked-choice (instant-runoff) voting, a sweep-line algorithm that finds the times the most people are free, and a ride matcher that never overbooks a car
- Added live updates over WebSockets (votes, free time, rides, and chat appear for everyone instantly, including "is typing") and phone push notifications through a service worker and Web Push
- Implemented JWT login, bcrypt-hashed passwords, rate limiting, a content security policy, an invite code for sign-up, and a Discord-style account deletion that keeps chat history intact
- Deployed to Railway with a PostgreSQL database and scripted backups and restores

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/hangout/cover.png" title="the home feed, a hangout being decided, and a locked-in plan" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## The problem, and the flow

A hangout moves through a small set of states, and the app makes each one visible: **proposed** (an idea, no options yet), **voting**, **locked in** (a winner, a time, and a place), then **past** (a memory) or **archived** (the dates passed and nothing was decided). A person who planned a hangout, or owns the group, confirms the vote; everything else is open to everyone who joined.

<div class="row">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/04-hangouts.png" title="the home feed" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/05-needs-you.png" title="Needs You" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/06-groups.png" title="groups" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Home feed (every plan across your groups, with its status), <b>Needs You</b> (a to-do list of votes, times, and rides waiting on you), and your groups.
</div>

<div class="row d-flex justify-content-center mt-3">
    <div class="col-8 col-md-4">
        {% include video.liquid
        path="assets/video/hangout/01-plan-a-hangout.mp4"
        title="planning a hangout"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-8 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/09-reorder-list.mp4"
        title="reordering hangouts"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
</div>
<div class="caption">
    Planning a hangout from a group, and press-and-hold to drag hangouts into your own order.
</div>

## Deciding what to do: ranked-choice voting

Anyone who joined can add an idea (optionally with a place). Each person taps the options in order of preference, and the app counts with **instant-runoff voting**: if no option has a majority of first choices, the weakest option is eliminated and its voters' ballots move to their next choice, repeating until one option has a majority. The vote can close on its own at a deadline, or the person who planned it can confirm once everyone has voted (or end voting early).

<div class="row d-flex justify-content-center mt-3">
    <div class="col-8 col-md-4">
        {% include video.liquid
        path="assets/video/hangout/02-ranked-choice-vote.mp4"
        title="ranked-choice voting"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-8 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/03-live-vote-updates.mp4"
        title="votes updating live"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-8 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/12-confirm-the-vote.mp4"
        title="confirming the vote"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
</div>
<div class="caption">
    Ranking the options and saving a vote; another person's vote arriving live ("3 of 5 voted" becomes "4 of 5" without a refresh); and the planner confirming the winner once everyone has voted.
</div>

<div class="row">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/12-hangout-voting.png" title="a hangout being decided" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/13-vote-tab.png" title="the vote tab" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/25-everyone-voted-confirm.png" title="everyone has voted" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A hangout still being decided (<b>what</b>, <b>when</b>, and <b>where</b> are each marked Deciding or Settled), the vote tab where you tap options in order of preference, and the planner's view once everyone has voted.
</div>

## Deciding when: free time and suggested times

Each person paints the 15-minute blocks they're free on a calendar-style grid (tap, or press-and-hold and drag), and it saves itself. A **usual weekly schedule** pre-fills the grid for every new hangout. When someone goes to set the time, the app suggests the windows where the most people are free at once, and shows how many of the people who joined are free for the exact range they pick.

<div class="row d-flex justify-content-center mt-3">
    <div class="col-8 col-md-4">
        {% include video.liquid
        path="assets/video/hangout/04-free-time-grid.mp4"
        title="marking free time"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-8 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/11-set-the-time.mp4"
        title="settling the time from the suggestions"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
</div>
<div class="caption">
    Painting free time on the grid, and picking a suggested time (the plan card goes from "Not set yet" to "Settled").
</div>

<div class="row">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/14-free-time-grid.png" title="the free-time grid" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/15-set-time-suggestions.png" title="suggested times" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/30-usual-week.png" title="usual weekly schedule" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The free-time grid, suggested times (with who is free for each), and the weekly schedule that pre-fills it.
</div>

## Deciding where, and who's driving

There's no map search; instead, people open Apple or Google Maps, copy an address, and paste it in, and everyone gets a tap-to-copy address. **Rides** are their own tab: each person chooses _Driving_ (with a number of seats), _Need a ride_, or _My own way_. Setting your own status can never overbook a car, a driver can take a specific rider, and anyone can press _Assign open seats_ to fill what's left.

<div class="row justify-content-center">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/05-rides.mp4"
        title="choosing to drive and assigning open seats"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/17-set-place.png" title="setting the place" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/24-rides-not-enough-seats.png" title="riders waiting for a seat" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Choosing to drive, adding a seat, and assigning the people still waiting; setting the place from a copied address; and riders waiting for a seat.
</div>

## Chat, live

Every hangout has its own chat, and every group has one too. Messages, photos, and "Marcus is typing" all arrive over a WebSocket connection, unread counts update on the tab bar, and the chat opens at the first message you haven't read.

<div class="row justify-content-center">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/06-live-chat.mp4"
        title="live chat with typing indicators"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/09-someone-is-typing.png" title="someone is typing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/21-chat-with-photo.png" title="a photo in chat" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Other people's messages and typing indicators arriving live, then sending a message; the typing indicator; and a photo in chat.
</div>

## Locked in, memories, and the archive

A hangout is **locked in** only when the vote is confirmed _and_ a time _and_ a place are set; until then it shows as "Finishing up". The first time you see a fully locked-in plan, the app celebrates with confetti and the group's own funny picture. Afterward it becomes a **memory** with a photo to remember it by. If the dates pass without a decision, the plan moves to an **archive** where it can be looked at again or reopened with its ideas and chat intact.

<div class="row d-flex justify-content-center mt-3">
    <div class="col-8 col-md-4">
        {% include video.liquid
        path="assets/video/hangout/07-confetti.mp4"
        title="the confetti when a hangout is locked in"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
    <div class="col-8 col-md-4 mt-3 mt-md-0">
        {% include video.liquid
        path="assets/video/hangout/10-archive-and-reopen.mp4"
        title="reopening an archived hangout"
        class="img-fluid rounded z-depth-1"
        controls=true
        autoplay=false
        muted=true
        %}
    </div>
</div>
<div class="caption">
    The confetti the first time a hangout is fully locked in, and reopening an archived plan.
</div>

<div class="row">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/18-locked-in.png" title="a locked-in hangout" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/22-finishing-up.png" title="finishing up" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/23-ends-after-midnight.png" title="a plan that ends after midnight" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/19-add-to-calendar.png" title="add to calendar" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/26-memories.png" title="memories" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/27-archive.png" title="the archive" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A locked-in plan, a plan that's still "Finishing up", an event that runs past midnight, exporting it to the phone's calendar, memories with photos, and the archive.
</div>

## Groups, notifications, and getting started

People join a group with an invite code; the owner can hand the group over or remove members, and anyone can leave. Phone notifications (new hangouts, votes that need you, locked-in plans, rides, reminders an hour before) are chosen per type from a settings screen. To receive them on an iPhone the app must be installed to the Home Screen, so the app asks first-time visitors on a phone to install it.

<div class="row">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/01-login.png" title="log in and sign up" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/07-group-page.png" title="a group's page" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/10-group-settings.png" title="group settings" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/11-group-members.png" title="members, owner controls, and party picture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/28-plan-a-hangout.png" title="planning a hangout" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-6 col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hangout/29-notification-settings.png" title="notification settings" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Logging in, a group's page, group settings, members with owner controls and the group's party picture, the plan-a-hangout form, and per-type notification settings.
</div>

## Under the hood

<b>Stack.</b> React 19 and Vite on the front end, Node.js with Express 5 on the back end, PostgreSQL for data, Socket.io for real-time, JSON Web Tokens for login, and Web Push (a service worker plus VAPID keys) for phone notifications. It's deployed on Railway.

<b>Layers.</b> Routes call authentication middleware, then controllers, then small database helpers.

<b>Three algorithms.</b>

- **Instant-runoff voting.** Each round counts first choices among the remaining options. If none has a majority, the one with the fewest is eliminated and its ballots transfer to their next choice. Ties for last place eliminate the newest suggestion, which guarantees a winner. The function also returns every round, so the UI can show how a result was reached.
- **Best-time finder (sweep line).** Each person's free windows are merged, then a "line" sweeps across all of them, tracking the set of people free between each pair of changes. Every stretch where that set is constant is one segment, and segments are ranked by how many people are free.
- **Ride matcher.** Three steps: keep riders in their current car if it still has room (driver-chosen riders first, so a driver cutting seats removes them last), trim anyone who no longer fits, and fill open seats first-come-first-served only when someone presses _Assign_. Ordinary changes never fill seats, so a car can never be overbooked.

<b>Real-time.</b> Each hangout and group is a Socket.io room that a client joins only if the server confirms membership. Changes still go through normal REST requests; the server then pushes a small event, and the screens refresh. Typing indicators are relayed between sockets and never stored.

<b>Background job.</b> A job runs every minute: it locks a vote when its deadline passes, archives hangouts whose dates passed without a decision, and sends the reminder an hour before a locked-in plan.

<b>Security.</b> bcrypt-hashed passwords, signed login tokens that stop working when an account is deleted, rate limits on login and sign-up, a content security policy, a sign-up invite code for the beta, and input checks that validate types and lengths rather than only checking that a field exists. Deleting an account works like Discord: the person is replaced by "Deleted user" and their messages stay, but an owner must hand over or delete their groups first.

## Next steps

- Password reset by email or text
- Sign-up by phone number
- Recurring hangouts
- A proper app-store release if the beta shows people want it
