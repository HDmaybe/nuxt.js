function init() {
    // const a = document.createElement('div');
    // a.setAttribute('class','test');
    // a.innerHTML = 'red'
    // const style1 = document.createElement('style');
    // style1.innerHTML = '.test { color : white; background : red}';
    const div = document.querySelector('.tokyo')
    // div.appendChild(a);
    // div.appendChild(style1);

    const btn = document.createElement('btn');
    btn.setAttribute('class', 'chatbot-toggler');
    div.appendChild(btn); //마지막에 div를 chatbot body로 바꿀것!

    const open_btn = document.createElement('span');
    open_btn.setAttribute('class', 'material-symbols-outlined');
    open_btn.innerHTML = 'mode_comment';
    btn.appendChild(open_btn);

    const close_btn1 = document.createElement('span');
    close_btn1.setAttribute('class', 'material-symbols-outlined');
    close_btn1.innerHTML = 'close';
    btn.appendChild(close_btn1);

    const chatbot_container = document.createElement('div');
    chatbot_container.setAttribute('class', 'chatbot');
    div.appendChild(chatbot_container);

    const chatbot_header = document.createElement('header');
    chatbot_container.appendChild(chatbot_header);

    const title = document.createElement('h2');
    title.innerHTML = 'Chatbot';
    chatbot_header.appendChild(title);

    const close_btn2 = document.createElement('span');
    close_btn2.setAttribute('class', 'material-symbols-outlined');
    close_btn2.innerHTML = 'close';
    chatbot_header.appendChild(close_btn2);

    const chatbox = document.createElement('ul');
    chatbox.setAttribute('class', 'chatbox');
    chatbot_container.appendChild(chatbox);

    const chat_incoming = document.createElement('li');
    chat_incoming.setAttribute('class','chat incoming');
    chatbox.appendChild(chat_incoming);

    const toy_icon = document.createElement('span');
    toy_icon.setAttribute('class', 'material-symbols-outlined');
    toy_icon.innerHTML = 'smart_toy';
    chat_incoming.appendChild(toy_icon);

    const hello = document.createElement('p');
    hello.innerHTML = 'Hi there ✋ <br> How can I help you today?';
    chat_incoming.appendChild(hello);

    const chat_input = document.createElement('div');
    chat_input.setAttribute('class', 'chat-input');
    chatbot_container.appendChild(chat_input);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', 'Enter a message...');
    chat_input.appendChild(textarea);

    const send_icon = document.createElement('span');
    send_icon.setAttribute('class', 'material-symbols-outlined');
    send_icon.innerHTML = 'send';
    chat_input.appendChild(send_icon);

    styleTag = document.createElement('style');
    styleTag.innerHTML = `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    
    .chatbot-toggler {
        position: fixed;
        right: 40px;
        bottom: 35px;
        height: 50px;
        width: 50px;
        color: #fff;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        background: #724ae8;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .chatbot-toggler span {
        position: absolute;
    }
    
    .show-chatbot .chatbot-toggler span:first-child,
    .chatbot-toggler span:last-child {
        opacity: 0;
    }
    
    .show-chatbot .chatbot-toggler span:last-child {
        opacity: 1;
    }
    
    .chatbot {
        background: #e3f2fd;
        position: fixed;
        right: 40px;
        bottom: 100px;
        width: 420px;
        transform: scale(0.5);
        opacity: 0;
        overflow: hidden;
        pointer-events: none;
        border-radius: 15px;
        transform-origin: bottom right;
        box-shadow: 0 0 128ox 0 rgba(0, 0, 0, 0.1),
            0 32px 64px -48px rgba(0, 0, 0, 0.5);
        transition: all 0.1s ease;
    }
    
    .show-chatbot .chatbot-toggler {
        transform: rotate(90deg);
    }
    
    .show-chatbot .chatbot {
        transform: scale(1);
        opacity: 1;
        pointer-events: auto;
    }
    
    .chatbot header {
        background: #724ae8;
        padding: 16px 0;
        text-align: center;
    }
    
    .chatbot header h2 {
        color: white;
        font-size: 1.4rem;
    }
    
    .chatbot header span {
        position: absolute;
        right: 20px;
        top: 6%;
        color: #fff;
        cursor: pointer;
        transform: translateY(-50%);
    }
    
    .chatbot .chatbox {
        height: 510px;
        overflow-y: auto;
        padding: 30px 20px 70px;
    }
    
    .chatbox .chat {
        display: flex;
    }
    
    .chatbox .incoming span {
        height: 32px;
        width: 32px;
        color: white;
        background: #724ae8;
        text-align: center;
        line-height: 32px;
        border-radius: 4px;
        margin: 0 10px 7px 0;
    }
    
    .chatbox .outgoing {
        margin: 20px 0;
        justify-content: flex-end;
    }
    
    .chatbox .chat p {
        color: white;
        max-width: 75%;
        font-size: 0.95rem;
        padding: 12px 16px;
        border-radius: 10px 10px 0 10px;
        background: #724ae8;
    }
    
    .chatbox .incoming p {
        color: black;
        background: #f2f2f2;
        border-radius: 10px 10px 0 10px;
    }
    
    .chatbot .chat-input {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        gap: 5px;
        background: #fff;
        padding: 5px 20px;
        border-top: 1px solid #ccc;
    }
    
    .chat-input textarea {
        height: 55px;
        width: 100%;
        border: none;
        outline: none;
        font-size: 0.95rem;
        resize: none;
        padding: 16px 15px 16px 0;
    }
    
    .chat-input span {
        align-self: flex-end;
        height: 55px;
        line-height: 55px;
        color: #724ae8;
        font-size: 1.35rem;
        cursor: pointer;
        visibility: hidden;
    }
    
    .chat-input textarea:valid~span {
        visibility: visible;
    }
    
    @media(max-width:490px) {
        .chatbot {
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    
        .chatbot .chatbox {
            height: 90%;
        }
    
        .chatbot header span {
            display: block;
        }
    }`
    document.querySelector('.tokyo').appendChild(styleTag);

}

init();

function second(){
    const chatbotToggler = document.querySelector(".chatbot-toggler span");
    console.log(chatbotToggler);
    // chatbotToggler.addEventListener("click", () => {document.querySelector('.tokyo').classList.toggle('show-chatbot')}); 
    chatbotToggler.addEventListener("click",test); 
    console.log('a');
}

function test() {
    console.log('test')
}
second();



