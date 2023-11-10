const OpenAI = require("openai");
require("dotenv/config");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let messages = [
  {
    role: "user",
    content: ` Write a C++ code to solve this problem
      At the start of class, I like to call roll. I like to go through my list of students in alphabetical order. Where possible, I like to call students by their first names. Of course, if two students have the same first name, I have to also give the last name so they know who I'm calling. Write a program to help me out. Given a class roll, it is going to tell how I should call the names.
      
      Input
      Input consists of up to 200 names, one per line, terminated by the end of file. Each line contains a first and a last name for a particular person. First and last names use 1 to 20 letters (a−z), always starting with an uppercase letters first followed by only lowercase letters. No two people will have exactly the same first and last names.
      
      Output
      Print the list of names, one per line, sorted by last name. If two or more people have the same last name, order these people by first name. Where the first name is unambiguous, just list the first name. If two people have the same first name, also list their last names to resolve the ambiguity.
      
      example
      
      input:
      Will Smith
      Agent Smith
      Peter Pan
      Micky Mouse
      Minnie Mouse
      Peter Gunn
      
      output:
      Peter Gunn
      Micky
      Minnie
      Peter Pan
      Agent
      Will`,
  },
];

function chatGPT() {
  openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
    })
    .then(async (resp) => {
      messages = messages.concat(resp.choices[0].message);
      console.log('sucessss ',resp.choices[0].message);
    })
    .catch((err) => {
      console.log('errrorrrr',err);
    });
}

chatGPT()