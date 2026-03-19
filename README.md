# Steps to create this app
- npm create vite@latest netflixGPT
- cd netflixGPT
- npm install
- delete un-necessary css, etc. files

# Setup needed to run the App
- Setup Tailwind
    - npm install tailwindcss @tailwindcss/vite --> install
    - follow steps from here to add tailwind-config in vite.config.js
- npm install firebase
- npm install -g firebase-tools
- firebase login
- firebase init
    - select Hosting
- create firebase-console project + app then add the config in this project (firebase.js)
- start using firebase APIs
- npm run dev --> start the server
