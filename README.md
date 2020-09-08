# harmonix-tech-test

## The test

Build a simple MVC application, using technologies of your choice and which you feel are relevant. The application will require a database for storage of data generated by the application. The application must be able to perform two functions. These functions must prove both true and false and all results stored into the db. The first function is to prove whether a word is an anagram of another! (two words consisting of exactly the same letters but in a different order).

The second function is to prove whether the word is a palindrome! (a word that can be spelled left to right or right to left).

This application must perform the following tasks and built to best practices:

1.  Allow the user to enter two separate words for comparison;
2.  Compare the two words to prove either of the conditions above and display the result – the user should choose the comparison.
3.  Store both words into a db with the time the comparison has taken to complete and they type of comparison performed along with the result.
4.  Use the Bootstrap template provided to style your application and examples from http://getbootstrap.com/css/#tables (or use a similar )
5.  Display the results of all Comparisons available and display in either ascending or descending order of time taken. Again the user must be able to decide

## Cloning and installation

To clone this [repository](https://github.com/jackralph/harmonix-tech-test):

```bash
git clone https://github.com/jackralph/harmonix-tech-test

cd be-nc-news

code .
```

## Installing Dependencies

Run `npm i` command in the terminal to install all the relevant dependencies.

## Testing

To run the tests, it's important that you have MongoDB installed globally - instructions can be found [here](https://docs.mongodb.com/manual/installation/).

Tests are run by using the following command:

```bash
npm t
```

If using a service like Postman, requests to the live API can be sent in the following formats:

GET(https://fierce-beyond-25336.herokuapp.com/) for the results in time descending order,

GET(https://fierce-beyond-25336.herokuapp.com/?orderBy=-1) for the results in time ascending order,

POST(https://fierce-beyond-25336.herokuapp.com/) with the following body for an anagram test:

```bash
{
    "firstWord": "test",
    "secondWord" : "comparison",
    "typeOfTest": "anagram"
}
```

...or for a palindrome test:

```bash
{
    "firstWord": "test",
    "secondWord" : "comparison",
    "typeOfTest": "palindrome"
}
```

This app was developed using Node version v12.9.0.
