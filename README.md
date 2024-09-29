To start a new project, clone this repo and follow the below steps:

add a .env and add following: 

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=                                                                                  
CLERK_SECRET_KEY=                                                                                                    
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in   
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up 
CLERK_WEBHOOK_SECRET =
DATABASE_URL=""

install ngrok in terminal, then go to ngrok website and get a domain, add that to your clerk dashboard inside webhooks section, select user.create, update and delete.

In your terminal, run ngrok at 3000 (remove 80), and npm run dev at 3000. 

check that your db is in sync with auth. 
you're good to go
