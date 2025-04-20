### Step 1: Install Ngrok
npm install -g ngrok

### Step 2: Run Your Express Server
Make sure your backend is running on http://localhost:4000 (or your specified port).

### Step 3: Start Ngrok to Tunnel Port 4000
#### Run this command in a new terminal:
ngrok http 4000

### Step 4: Update your react native frontend 
#### utils/index.js 
export const BaseUrl = "https://866b-119-74-68-214.ngrok-free.app";
replace this line with your ngrok url 

### Step 5: update your react native backend 
#### backend/index.js
 origin: "https://866b-119-74-68-214.ngrok-free.app",
 replace this line with your ngrok url 

### Step 6: 
 start your server (npm start) 
 and start your frontend (npx expo start)
