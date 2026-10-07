// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Em bé oiiiii",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Thương vk iu lắm áaaaa 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Em có thương a hog?",
            yesBtn: "Có chớ",
            noBtn: "Không, thương làm gì",
            secretAnswer: "Có, thương ck iu cụa em lắm luôn á! 🥰"
        },

        second: {
            text: "Yêu a nhiều cỡ nào zaaa",
            startText: "Kéo thanh biểu diễn ik",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Hôm nay là ngày rất đặc biệt và anh có đôi lời gửi đến người cũng rất đặc biệt quan trong với anh nè🌹",
            yesBtn: "Đâu đâu, để xem ck em viết gì cho em đây 🥰🥰",
            noBtn: "Ai thèm xem chớ 🙄🙄"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "Waaaaaa, a là ng hạnh phúc nhất vì được em yêu nhiều vậy 🥰💝",
        high: "Tr ơi, em yêu a tới vậy luôn hả💝",
        normal: "Thiệt hả 🥰"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Nhân ngày 20/10 này, a có đôi lời mún gửi đến công chúa của a nè💝💖💝💓",
        message: "Hôm nay 20/10 là ngày phụ nữ Việt Nam đồng thời là kề ngày kỉ niệm 6 tháng bên nhau của đôi mình, a biết văn a tệ nhma những lời sau dây là lời chân thành và thật lòng dành riêng cho vk iu thoi🥰🥰. Cảm ơn vk iu vì đã không ngại khoảng cách mà vẫn chọn đồng hành bên anh, chúc em có 1 ngày lễ thật hạnh phúc bên gia đình, luôn luôn tràn đầy năng lượng tích cực và đạt được ước mơ mà em hằng mong ước, tương lai dẫu có ra sao, vk vẫn sẽ là người con gái hoàn hảo nhất trong mắt anh, mỗi khi cần a vk cứ nói, a sẵng sàn dành tgian cho vk iu. Thương vk iu nhất trên đờiii 😘😘",
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music (Optional)
    // Nếu file upload lên repo có tên APM.mp3 thì URL phải là raw.githubusercontent.com...
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://raw.githubusercontent.com/MinhTC1108/20-10-cho-vk-iu/main/APM.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Export for use in other scripts
window.DEFAULT_CONFIG = CONFIG;
window.VALENTINE_CONFIG = { ...CONFIG };
