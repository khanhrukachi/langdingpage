var chatIcon = document.querySelector('.chat-icon');
var chatContainer = document.getElementById('chat-container');

function toggleChatBox() {
  chatContainer.classList.toggle('show');
  chatIcon.style.display = 'none'; // Ẩn chat-icon khi hiển thị khung chat
}

function closeChatBox() {
  chatContainer.classList.remove('show');
  chatIcon.style.display = 'block'; // Hiển thị lại chat-icon khi đóng khung chat
}

function appendMessage(message, sender) {
  var chatLog = document.getElementById('chat-log');
  var messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container', sender);
  
  var bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = message;
  
  messageContainer.appendChild(bubble);
  chatLog.appendChild(messageContainer);
  
  // Cuộn xuống dòng mới khi có tin nhắn mới
  chatLog.scrollTop = chatLog.scrollHeight;
}

function sendRequestToDialogflow(userMessage) {
  // Xử lý gửi yêu cầu tới Dialogflow và nhận phản hồi
  
  // Sau khi nhận phản hồi từ Dialogflow, gọi hàm appendMessage để hiển thị tin nhắn chatbot
  var chatbotMessage = "Phản hồi từ chatbot";
  appendMessage(chatbotMessage, "chatbot");
}

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value;
  
    // Kiểm tra xem người dùng đã nhập nội dung hay chưa
    if (userMessage.trim() !== "") {
      // Hiển thị tin nhắn người dùng
      appendMessage(userMessage, "user");
  
      // Gửi yêu cầu tới Dialogflow
      sendRequestToDialogflow(userMessage);
  
      userInput.value = "";
    }
  }
  
  // Thêm sự kiện "keypress" cho ô input
  var userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      // Kiểm tra xem phím Enter đã được nhấn
      sendMessage();
    }
  });
  