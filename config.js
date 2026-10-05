// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Delisha", "Anjitesh", "Mike"
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
            text: "Em có thương a hog?",                                    // First interaction
            yesBtn: "Có chớ",                                 // Text for "Yes" button
            // Text for "Yes" button
            noBtn: "Không, thương làm gì",                                               // Text for "No" button
            secretAnswer: "Có, thương ck iu cụa em lắm luôn á! 🥰"           // Secret hover message
        },

        second: {
            text: "Yêu a nhiều cỡ nào zaaa",                          // For the love meter
            startText: "Kéo thanh biểu diễn ik",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Hôm nay là ngày rất đặc biệt và anh có đôi lời gửi đến người cũng rất đặc biệt quan trong với anh nè🌹", // The big question!
            yesBtn: "Đâu đâu, để xem ck em viết gì cho em đây 🥰🥰",                                             // Text for "Yes" button
            noBtn: "Ai thèm xem chớ 🙄🙄"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Waaaaaa, a là ng hạnh phúc nhất vì được em yêu nhiều vậy 🥰💝",  // Shows when they go past 5000%
        high: "Tr ơi, em yêu a tới vậy luôn hả💝",              // Shows when they go past 1000%
        normal: "Thiệt hả 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Nhân ngày 20/10 này, a có đôi lời mún gửi đến công chúa của a nè💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "(❤️´艸｀❤️)"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://www.youtube.com/watch?v=ZLwPWlwFVPI&list=RDZLwPWlwFVPI&start_radio=1", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Export for use in other scripts
window.DEFAULT_CONFIG = CONFIG;
window.VALENTINE_CONFIG = { ...CONFIG };
