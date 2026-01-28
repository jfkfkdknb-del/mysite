// ملف script.js الأساسي
// معظم الكود موجود في videos.js

// تهيئة إضافية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثيرات إضافية
    addScrollAnimations();
    setupVideoPlayerControls();
});

// دالة لإضافة تأثيرات التمرير
function addScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر
    document.querySelectorAll('.video-card, .category-card, .stat').forEach(el => {
        observer.observe(el);
    });
}

// دالة لإعداد تحكمات مشغل الفيديو
function setupVideoPlayerControls() {
    const likeBtn = document.getElementById('likeBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            const playerTitle = document.getElementById('playerTitle').textContent;
            const video = perezVideos.find(v => v.title === playerTitle);
            if (video) {
                likeVideo(video.id);
                this.innerHTML = '<i class="fas fa-heart"></i> أعجبني';
                this.style.background = 'rgba(239, 68, 68, 0.2)';
                this.style.color = '#ef4444';
                this.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            }
        });
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const playerTitle = document.getElementById('playerTitle').textContent;
            const video = perezVideos.find(v => v.title === playerTitle);
            if (video) {
                shareVideo(video.id);
            }
        });
    }
}

// دالة لإظهار/إخفاء زر التمرير للأعلى
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;
    
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// إضافة زر التمرير للأعلى
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollTopBtn';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // إضافة التنسيقات
    const scrollStyle = document.createElement('style');
    scrollStyle.textContent = `
        #scrollTopBtn.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        #scrollTopBtn:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }
    `;
    document.head.appendChild(scrollStyle);
}

// تهيئة إضافية
setTimeout(() => {
    addScrollToTopButton();
    updateStats();
}, 1000);
