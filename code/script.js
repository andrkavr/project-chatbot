// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const userInput = document.getElementById("name-input");
const sendChatBtn = document.getElementById("send-btn");

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const sendMessage = (event) => {
  //Prevents chat from defaulting when message is sent
  event.preventDefault();

  const userMessage = userInput.value.trim();

  if (userMessage !== "") {
    showMessage(userMessage, "user");
    messageResponse(userMessage);
    userInput.value = "";
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  const messageDiv = document.createElement("div");
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    messageDiv.innerHTML = `<section class="user-msg">
    <div class="bubble user-bubble">
      <p>${message}</p>
    </div>
    <img src="assets/user.png" alt="User" />  
  </section>
`;
    chat.appendChild(messageDiv);
    // chat.innerHTML += `
    //   <section class="user-msg">
    //     <div class="bubble user-bubble">
    //       <p>${message}</p>
    //     </div>
    //     <img src="assets/user.png" alt="User" />
    //   </section>
    // `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    messageDiv.innerHTML = `
    <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble user-bubble">
      <p>${message}</p>
    </div>
  </section>
`;
    chat.appendChild(messageDiv);

    // chat.innerHTML += `
    //   <section class="bot-msg">
    //     <img src="assets/bot.png" alt="Bot" />
    //     <div class="bubble bot-bubble">
    //       <p>${message}</p>
    //     </div>
    //   </section>
    // `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(
    "Hello there, my name is Anna the bot. Do you know who I am?",
    "bot"
  );
  // Just to check it out, change 'bot' to 'user' here 👆
};

const messageResponse = (message) => {
  let botResponse = "I'm just a simple bot, not a protocol droid.";
  if (message.toLowerCase().includes("protocol droid")) {
    botResponse = "A protocol droid, yes. You know, like C3PO from Star Wars?";
  } else if (message.toLowerCase().includes("how are you?")) {
    botResponse = "Thanks for asking! I'm good, but I'm still a bot.";
  }

  setTimeout(() => {
    showMessage(botResponse, "bot");
  }, 500);
};

// Set up your eventlisteners here
sendChatBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);
