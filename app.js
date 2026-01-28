// تطبيق بيريز - JavaScript الرئيسي
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة التطبيق
    initApp();
    
    // عرض جميع الفيديوهات
    displayAllVideos();
    
    // إعداد المستمعين للأحداث
    setupEventListeners();
});

// تهيئة التطبيق
function initApp() {
    console.log('تطبيق بيريز جاهز للاستخدام!');
    
    // إضافة تنسيقات إضافية
    addCustomStyles();
    
    // تهيئة الإشعارات
    initNotifications();
}

// دالة لعرض جميع الفيديوهات
function displayAllVideos() {
    const videosGrid = document.getElementById('videosGrid');
    if (!videosGrid) return;
    
    videosGrid.innerHTML = '';
    
    perezVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
    
    // تحديث الإحصائيات
    updateStats();
}

// دالة لإنشاء بطاقة فيديو
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.id = video.id;
    card.dataset.category = video.category;
    
    // أيقونة القسم
    const iconClass = getCategoryIcon(video.category);
    
    card.innerHTML = `
        <div class="video-thumbnail" onclick="playVideo(${video.id})">
            <div class="video-overlay">
                <div class="play-btn">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        </div>
        <div class="video-info">
            <div class="video-meta">
                <span class="video-category">${video.category}</span>
                <div class="video-stats">
                    <span title="المشاهدات">
                        <i class="fas fa-eye"></i> ${formatNumber(video.views)}
                    </span>
                    <span title="الإعجابات">
                        <i class="fas fa-heart"></i> ${formatNumber(video.likes)}
                    </span>
                    <span title="المدة">
                        <i class="fas fa-clock"></i> ${video.duration}
                    </span>
                </div>
            </div>
            <div class="video-actions">
                <button class="action-btn like-btn" onclick="likeVideo(${video.id})">
                    <i class="far fa-heart"></i> أعجبني
                </button>
                <button class="action-btn share-btn" onclick="shareVideo(${video.id})">
                    <i class="fas fa-share"></i> مشاركة
                </button>
            </div>
        </div>
    `;
    
    // إضافة صورة خلفية (بدون أيقونة إيموجي)
    const thumbnail = card.querySelector('.video-thumbnail');
    const gradient = getCategoryGradient(video.category);
    thumbnail.style.background = gradient;
    
    return card;
}

// دالة للحصول على أيقونة القسم
function getCategoryIcon(category) {
    const icons = {
        'طبيعة': 'fas fa-mountain',
        'موسيقى': 'fas fa-music',
        'العاب': 'fas fa-gamepad',
        'تعليمي': 'fas fa-graduation-cap',
        'كوميدي': 'fas fa-laugh',
        'رياضة': 'fas fa-futbol'
    };
    return icons[category] || 'fas fa-video';
}

// دالة للحصول على تدرج لوني حسب القسم
function getCategoryGradient(category) {
    const gradients = {
        'طبيعة': 'linear-gradient(135deg, #059669, #10b981)',
        'موسيقى': 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
        'العاب': 'linear-gradient(135deg, #dc2626, #ef4444)',
        'تعليمي': 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
        'كوميدي': 'linear-gradient(135deg, #f59e0b, #fbbf24)',
        'رياضة': 'linear-gradient(135deg, #1e293b, #334155)'
    };
    return gradients[category] || 'linear-gradient(135deg, #1e293b, #334155)';
}

// دالة لتنسيق الأرقام
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// دالة للإعجاب بالفيديو
function likeVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        video.likes++;
        updateStats();
        
        // تحديث البطاقة
        const card = document.querySelector(`.video-card[data-id="${videoId}"]`);
        if (card) {
            const likeCount = card.querySelector('.video-stats span:nth-child(2)');
            if (likeCount) {
                likeCount.innerHTML = `<i class="fas fa-heart"></i> ${formatNumber(video.likes)}`;
            }
        }
        
        showNotification('تم الإعجاب بالفيديو!');
    }
}

// دالة للمشاركة
function shareVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        const shareText = `شاهد هذا الفيديو المميز من تطبيق بيريز`;
        const shareUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: 'فيديو من بيريز',
                text: shareText,
                url: shareUrl
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareUrl)
                .then(() => showNotification('تم نسخ رابط التطبيق!'))
                .catch(() => {
                    prompt('انسخ الرابط:', shareUrl);
                });
        }
    }
}

// دالة لتشغيل الفيديو
function playVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        // زيادة المشاهدات
        video.views++;
        updateStats();
        
        // فتح الفيديو في نافذة جديدة
        window.open(video.videoUrl, '_blank');
    }
}

// دالة لعرض الفيديوهات حسب القسم
function showCategory(category) {
    // تحديث القائمة السفلية
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const filteredVideos = perezVideos.filter(video => video.category === category);
    const videosGrid = document.getElementById('videosGrid');
    
    if (!videosGrid) return;
    
    videosGrid.innerHTML = '';
    
    if (filteredVideos.length === 0) {
        videosGrid.innerHTML = `
            <div class="no-videos">
                <i class="fas fa-folder-open"></i>
                <h3>لا توجد فيديوهات</h3>
                <p>لا توجد فيديوهات في هذا القسم حالياً</p>
            </div>
        `;
        return;
    }
    
    filteredVideos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
    
    showNotification(`عرض قسم ${category}`);
}

// دالة لعرض جميع الفيديوهات
function showAllVideos() {
    // تحديث القائمة السفلية
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('.nav-item:first-child').classList.add('active');
    
    displayAllVideos();
    showNotification('عرض جميع الفيديوهات');
}

// دالة لعرض قائمة المزيد
function showMoreOptions() {
    const moreMenu = document.getElementById('moreMenu');
    moreMenu.classList.add('show');
}

// دالة لإغلاق قائمة المزيد
function closeMoreMenu() {
    const moreMenu = document.getElementById('moreMenu');
    moreMenu.classList.remove('show');
}

// دالة لعرض نافذة المشاركة
function shareApp() {
    const shareModal = document.getElementById('shareModal');
    shareModal.classList.add('show');
    closeMoreMenu();
}

// دالة لإغلاق نافذة المشاركة
function closeShareModal() {
    const shareModal = document.getElementById('shareModal');
    shareModal.classList.remove('show');
}

// دالة للمشاركة عبر واتساب
function shareViaWhatsApp() {
    const text = 'تطبيق بيريز لمشاهدة الفيديوهات العربية عالية الجودة';
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
}

// دالة للمشاركة عبر تليجرام
function shareViaTelegram() {
    const text = 'تطبيق بيريز لمشاهدة الفيديوهات العربية عالية الجودة';
    const url = window.location.href;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
}

// دالة لنسخ رابط التطبيق
function copyAppLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            showNotification('تم نسخ رابط التطبيق!');
            closeShareModal();
        })
        .catch(() => {
            prompt('انسخ الرابط:', window.location.href);
        });
}

// دالة لتحديث الفيديوهات
function refreshVideos() {
    // محاكاة تحديث الفيديوهات
    showNotification('جاري تحديث الفيديوهات...');
    setTimeout(() => {
        displayAllVideos();
        showNotification('تم تحديث الفيديوهات!');
        closeMoreMenu();
    }, 1000);
}

// دالة لتحديث الإحصائيات
function updateStats() {
    const totalViews = perezVideos.reduce((sum, video) => sum + video.views, 0);
    const totalLikes = perezVideos.reduce((sum, video) => sum + video.likes, 0);
    
    const totalViewsEl = document.getElementById('totalViews');
    const totalLikesEl = document.getElementById('totalLikes');
    
    if (totalViewsEl) totalViewsEl.textContent = formatNumber(totalViews);
    if (totalLikesEl) totalLikesEl.textContent = formatNumber(totalLikes);
}

// دالة لإظهار الإشعارات
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// تهيئة الإشعارات
function initNotifications() {
    // تم إضافة العنصر في HTML
}

// إضافة تنسيقات مخصصة
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .no-videos {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            background: rgba(30, 41, 59, 0.5);
            border-radius: 20px;
            border: 2px dashed rgba(255, 255, 255, 0.1);
        }
        
        .no-videos i {
            font-size: 60px;
            color: #94a3b8;
            margin-bottom: 20px;
        }
        
        .no-videos h3 {
            color: #f1f5f9;
            margin-bottom: 10px;
            font-size: 24px;
        }
        
        .no-videos p {
            color: #94a3b8;
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);
}

// إعداد المستمعين للأحداث
function setupEventListeners() {
    // إغلاق قائمة المزيد عند النقر خارجها
    document.addEventListener('click', function(e) {
        const moreMenu = document.getElementById('moreMenu');
        const moreButton = document.querySelector('.nav-item:last-child');
        
        if (moreMenu.classList.contains('show') && 
            !moreMenu.contains(e.target) && 
            !moreButton.contains(e.target)) {
            closeMoreMenu();
        }
    });
    
    // إغلاق نافذة المشاركة عند النقر خارجها
    document.addEventListener('click', function(e) {
        const shareModal = document.getElementById('shareModal');
        if (shareModal.classList.contains('show') && !shareModal.contains(e.target)) {
            closeShareModal();
        }
    });
    
    // منع إغلاق عند النقر داخل النوافذ
    document.querySelectorAll('.more-menu, .share-modal').forEach(element => {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}

// جعل الدوال متاحة عالمياً
window.showCategory = showCategory;
window.showAllVideos = showAllVideos;
window.showMoreOptions = showMoreOptions;
window.closeMoreMenu = closeMoreMenu;
window.shareApp = shareApp;
window.closeShareModal = closeShareModal;
window.shareViaWhatsApp = shareViaWhatsApp;
window.shareViaTelegram = shareViaTelegram;
window.copyAppLink = copyAppLink;
window.refreshVideos = refreshVideos;
window.playVideo = playVideo;
window.likeVideo = likeVideo;
window.shareVideo = shareVideo;
