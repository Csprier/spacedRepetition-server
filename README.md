# Isael and Cam's Spaced Repetition Project

### Back-end Tech:
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- mongodb
- mongoose
- morgan
- nodemon
- passport
- passport-jwt
- passport-local

## The Algorithm: Spaced Repetition
Given a list of questions with corresponding "memory values", M, starting at 1:
Take the first question in the list
Ask the question
If the answer was correct:
  Double the value of M
If the answer was wrong:
  Reset M to 1
Move the question back M places in the list

### Live server!
https://spaced-repetition-server-ic.herokuapp.com 
### Endpoints
- /api/login (for user creation)
- /api/users (to see all the users)

### Live client!
https://warm-harbor-78349.herokuapp.com/

Create an account and start learning! It's that simple!

<img width="376" alt="register-sr" src="https://user-images.githubusercontent.com/26131912/42701297-0da1d1fc-867b-11e8-8327-6d70e26d1ad7.png">


If you have an account, simply log in!

<img width="374" alt="login-sr" src="https://user-images.githubusercontent.com/26131912/42701346-330c5408-867b-11e8-860a-59ee62bfb9e6.png">

Input an answer, hit submit!
If your guess is correct, you'll see a message saying so and your score tally increment!
If your guess is incorrect, you'll see a message saying so, and your score will remain unchanged!