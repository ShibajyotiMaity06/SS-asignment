**\*\***\***\*\*** SETUP
clone the repository
cd proj
cd frontend
npm install
npm run dev

you can see it in local host 8000

\***\*\*\*\*\*** Approach
First I implemented a login page , I thought to make real JWT based but it would take time
Hence I made a mock login page , one should submit username as "admin" and password as "1234" to get access to dashbaord

Next I made a small loading animation
which reads "Loading dashbaord"

after that I implemented the whole dashboard also used settimout to simulate real world application
I also did mock error handling if no data is loaded

I added a View more button type which shows recent activities in json file
added hover for small animations for better UX

for view more I did nestied routing /dashboard/details

**\*\*\*\***\*\***\*\*\*\***Challenges faced
I directly copied and pasted the json file in my data , but it didnt rendered because of
it was pdf hence rendered as pdf
then I created a file and just copy pasted the content

Coudnt think of good Icons then I used AI for the heroicons

Thinkign about jwt based took some time I didnt know about how to store a token the syntax , hence used GPT
I got to know this too

**\*\*\*\***\***\*\*\*\*** Solutions meeting requirements

I hope that these animations are fulfilling this line "Subtle but impactful animations to enhance the user
experience."

I did error handling ofcourse mock as mentioned in the assignment

implemented view more

I implemented a login page ofcourse mock again
