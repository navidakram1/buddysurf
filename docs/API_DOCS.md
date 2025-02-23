# API Documentation

## Authentication Endpoints

### POST /api/auth/register
Register a new user.

### POST /api/auth/login
Login an existing user.

## User Endpoints

### GET /api/users/nearby
Get nearby users based on location and preferences.

### GET /api/users/profile
Get user profile information.

### PUT /api/users/profile
Update user profile information.

## Meetup Endpoints

### POST /api/meetups/create
Create a new meetup request.

### PUT /api/meetups/confirm
Confirm a meetup request.

### GET /api/meetups/active
Get active meetups for the current user.

## Safety Endpoints

### POST /api/safety/check-in
Record a safety check-in.

### POST /api/safety/emergency
Trigger emergency contact notification.

## Gamification Endpoints

### GET /api/gamification/points
Get user points and achievements.

### GET /api/gamification/leaderboard
Get the current leaderboard.
