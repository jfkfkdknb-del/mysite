// بيانات الفيديوهات الكاملة
const perezVideos = [
    {
        id: 1,
        title: "مشهد طبيعي خلاب من قمم الجبال",
        description: "جولة مصورة في أعلى قمم الجبال مع مناظر طبيعية مذهلة وغروب شمس ساحر",
        duration: "4:35",
        views: 12540,
        likes: 892,
        category: "طبيعة",
        date: "2023-11-15",
        videoUrl: "https://i.top4top.io/m_3680jpxoa0.mp4"
    },
    {
        id: 2,
        title: "عرض موسيقي حي مع فرقة محلية",
        description: "حفلة موسيقية مباشرة لفرقة محلية مع أداء رائع وموسيقى عربية أصيلة",
        duration: "8:20",
        views: 23450,
        likes: 1540,
        category: "موسيقى",
        date: "2023-11-14",
        videoUrl: "https://j.top4top.io/m_36803yd7u1.mp4"
    },
    {
        id: 3,
        title: "تجربة تشغيل اللعبة الأكثر انتظاراً",
        description: "مراجعة كاملة وتجربة تشغيل للعبة التي طال انتظارها هذا العام مع تحليل مفصل",
        duration: "22:15",
        views: 54800,
        likes: 3250,
        category: "ألعاب",
        date: "2023-11-13",
        videoUrl: "https://a.top4top.io/m_3680fq72e0.mp4"
    },
    {
        id: 4,
        title: "دورة برمجة للمبتدئين من الصفر",
        description: "درس شامل لتعلم أساسيات البرمجة من الصفر حتى الاحتراف",
        duration: "35:10",
        views: 32400,
        likes: 2180,
        category: "تعليمي",
        date: "2023-11-12",
        videoUrl: "https://b.top4top.io/m_36802hxr61.mp4"
    },
    {
        id: 5,
        title: "أجمل المقاطع الكوميدية لهذا الشهر",
        description: "تجميعة لأطرف وأجمل المقاطع الكوميدية العربية والعالمية لهذا الشهر",
        duration: "12:45",
        views: 89200,
        likes: 6570,
        category: "كوميدي",
        date: "2023-11-11",
        videoUrl: "https://c.top4top.io/m_368011wxu2.mp4"
    },
    {
        id: 6,
        title: "ملخص مباراة اليوم مع أهداف رائعة",
        description: "أبرز اللحظات والأهداف من المباراة المثيرة بين الفريقين المحليين",
        duration: "9:40",
        views: 124500,
        likes: 8520,
        category: "رياضة",
        date: "2023-11-10",
        videoUrl: "https://d.top4top.io/m_36807nfxw3.mp4"
    },
    {
        id: 7,
        title: "رحلة سفاري في الغابات الأفريقية",
        description: "مغامرة مثيرة في قلب الغابات الأفريقية مع تصوير حيوانات نادرة",
        duration: "18:30",
        views: 34600,
        likes: 2910,
        category: "طبيعة",
        date: "2023-11-09",
        videoUrl: "https://e.top4top.io/m_36804ihtc4.mp4"
    },
    {
        id: 8,
        title: "حفل غنائي مع أشهر الفنانين العرب",
        description: "أمسية غنائية استثنائية مع مجموعة من أشهر الفنانين العرب",
        duration: "45:20",
        views: 67800,
        likes: 5340,
        category: "موسيقى",
        date: "2023-11-08",
        videoUrl: "https://f.top4top.io/m_3680j214s5.mp4"
    },
    {
        id: 9,
        title: "منافسة مثيرة في بطولة الألعاب",
        description: "نهائي البطولة الدولية للألعاب الإلكترونية مع منافسة قوية",
        duration: "28:45",
        views: 92700,
        likes: 7840,
        category: "ألعاب",
        date: "2023-11-07",
        videoUrl: "https://g.top4top.io/m_36805m1cj6.mp4"
    },
    {
        id: 10,
        title: "تعلم التصميم الجرافيكي من البداية",
        description: "دورة متكاملة لتعلم التصميم الجرافيكي وأساسيات البرامج",
        duration: "42:10",
        views: 41700,
        likes: 3240,
        category: "تعليمي",
        date: "2023-11-06",
        videoUrl: "https://h.top4top.io/m_3680jwj017.mp4"
    },
    {
        id: 11,
        title: "تجميعة مواقف مضحكة من الحياة",
        description: "مجموعة من أطرف المواقف الكوميدية التي تحدث في الحياة اليومية",
        duration: "14:25",
        views: 105800,
        likes: 8970,
        category: "كوميدي",
        date: "2023-11-05",
        videoUrl: "https://i.top4top.io/m_36809mwe68.mp4"
    },
    {
        id: 12,
        title: "أفضل الأهداف في تاريخ كرة القدم",
        description: "تجميعة لأروع وأجمل الأهداف في تاريخ لعبة كرة القدم العالمية",
        duration: "16:15",
        views: 156800,
        likes: 12100,
        category: "رياضة",
        date: "2023-11-04",
        videoUrl: "https://j.top4top.io/m_3680wo3dr9.mp4"
    }
];

// دالة لتنسيق الأرقام
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + ' مليون';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + ' ألف';
    }
    return num.toString();
}

// دالة لتنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'أمس';
    if (diffDays <= 7) return `قبل ${diffDays} أيام`;
    
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// دالة للحصول على أيقونة القسم
function getCategoryIcon(category) {
    const icons = {
        'طبيعة': 'fas fa-tree',
        'موسيقى': 'fas fa-music',
        'ألعاب': 'fas fa-gamepad',
        'تعليمي': 'fas fa-graduation-cap',
        'كوميدي': 'fas fa-laugh',
        'رياضة': 'fas fa-running'
    };
    return icons[category] || 'fas fa-video';
}

// دالة لعرض الفيديوهات
function displayVideos(videos = perezVideos) {
    const videosGrid = document.getElementById('videosGrid');
    if (!videosGrid) return;
    
    videosGrid.innerHTML = '';
    
    if (videos.length === 0) {
        videosGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>لم نتمكن من العثور على فيديوهات تطابق بحثك</p>
            </div>
        `;
        return;
    }
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
    
    updateStats();
}

// دالة لإنشاء بطاقة فيديو
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.id = video.id;
    card.dataset.category = video.category;
    
    const iconClass = getCategoryIcon(video.category);
    
    card.innerHTML = `
        <div class="video-thumbnail" onclick="playVideo(${video.id})">
            <div class="category-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="play-icon">
                <i class="fas fa-play"></i>
            </div>
            <div class="duration-badge">${video.duration}</div>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-meta">
                <span class="views"><i class="fas fa-eye"></i> ${formatNumber(video.views)}</span>
                <span class="date"><i class="far fa-calendar"></i> ${formatDate(video.date)}</span>
                <span class="likes"><i class="fas fa-heart"></i> ${formatNumber(video.likes)}</span>
            </div>
            <div class="video-description">${video.description}</div>
            <div class="video-category">${video.category}</div>
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
    
    return card;
}

// دالة للبحث عن الفيديوهات
function searchVideos() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    
    const clearBtn = document.getElementById('clearSearch');
    clearBtn.style.display = query ? 'block' : 'none';
    
    if (!query) {
        const activeFilter = document.querySelector('.filter-btn.active');
        if (activeFilter && activeFilter.dataset.filter !== 'all') {
            filterVideos(activeFilter.dataset.filter);
            return;
        }
        displayVideos();
        return;
    }
    
    const filteredVideos = perezVideos.filter(video => 
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query)
    );
    
    displayVideos(filteredVideos);
}

// دالة لتصفية الفيديوهات
function filterVideos(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    
    if (category === 'all') {
        displayVideos();
        return;
    }
    
    const filteredVideos = perezVideos.filter(video => video.category === category);
    displayVideos(filteredVideos);
}

// دالة لتشغيل الفيديو
function playVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (!video) return;
    
    // زيادة المشاهدات
    video.views++;
    
    // تحديث الإحصائيات
    updateStats();
    
    // فتح مشغل الفيديو
    openVideoPlayer(video);
}

// دالة لفتح مشغل الفيديو
function openVideoPlayer(video) {
    const player = document.getElementById('videoPlayer');
    const mainVideo = document.getElementById('mainVideo');
    const playerTitle = document.getElementById('playerTitle');
    const playerViews = document.getElementById('playerViews');
    const playerLikes = document.getElementById('playerLikes');
    const playerCategory = document.getElementById('playerCategory');
    const playerDescription = document.getElementById('playerDescription');
    
    playerTitle.textContent = video.title;
    playerViews.textContent = formatNumber(video.views);
    playerLikes.textContent = formatNumber(video.likes);
    playerCategory.textContent = video.category;
    playerDescription.textContent = video.description;
    
    mainVideo.src = video.videoUrl;
    player.style.display = 'block';
    
    // إعادة تشغيل الفيديو
    setTimeout(() => {
        mainVideo.load();
    }, 100);
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
            const likeCount = card.querySelector('.likes');
            if (likeCount) {
                likeCount.innerHTML = `<i class="fas fa-heart"></i> ${formatNumber(video.likes)}`;
            }
        }
        
        // تحديث المشغل إذا كان مفتوحاً
        const playerLikes = document.getElementById('playerLikes');
        const currentVideo = perezVideos.find(v => v.title === document.getElementById('playerTitle').textContent);
        if (playerLikes && currentVideo && currentVideo.id === videoId) {
            playerLikes.textContent = formatNumber(video.likes);
        }
        
        showNotification('تم الإعجاب بالفيديو!');
    }
}

// دالة للمشاركة
function shareVideo(videoId) {
    const video = perezVideos.find(v => v.id === videoId);
    if (video) {
        const shareUrl = window.location.href.split('#')[0];
        const shareText = `شاهد هذا الفيديو الرائع: ${video.title}`;
        
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: shareText,
                url: shareUrl
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareUrl)
                .then(() => showNotification('تم نسخ الرابط!'))
                .catch(() => {
                    prompt('انسخ الرابط:', shareUrl);
                });
        }
    }
}

// دالة لتحديث الإحصائيات
function updateStats() {
    const totalVideos = perezVideos.length;
    const totalViews = perezVideos.reduce((sum, video) => sum + video.views, 0);
    const totalLikes = perezVideos.reduce((sum, video) => sum + video.likes, 0);
    
    const totalVideosEl = document.getElementById('totalVideos');
    const totalViewsEl = document.getElementById('totalViews');
    const totalLikesEl = document.getElementById('totalLikes');
    
    if (totalVideosEl) totalVideosEl.textContent = totalVideos;
    if (totalViewsEl) totalViewsEl.textContent = formatNumber(totalViews);
    if (totalLikesEl) totalLikesEl.textContent = formatNumber(totalLikes);
}

// دالة لعرض الإشعارات
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
        font-family: 'Cairo', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayVideos();
    setupEventListeners();
});

// إعداد المستمعين للأحداث
function setupEventListeners() {
    // البحث
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', searchVideos);
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            searchVideos();
        });
    }
    
    // التصفية
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterVideos(this.dataset.filter);
        });
    });
    
    // النقر على الأقسام
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterVideos(category);
            
            // التمرير إلى قسم الفيديوهات
            const videosSection = document.getElementById('videos');
            if (videosSection) {
                window.scrollTo({
                    top: videosSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إغلاق مشغل الفيديو
    const closePlayer = document.getElementById('closePlayer');
    const playerOverlay = document.getElementById('playerOverlay');
    
    if (closePlayer) {
        closePlayer.addEventListener('click', closeVideoPlayer);
    }
    
    if (playerOverlay) {
        playerOverlay.addEventListener('click', closeVideoPlayer);
    }
    
    // إغلاق بالضغط على ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideoPlayer();
        }
    });
    
    // القائمة المتحركة للهواتف
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // إغلاق القائمة عند النقر على رابط
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }
    
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// دالة لإغلاق مشغل الفيديو
function closeVideoPlayer() {
    const player = document.getElementById('videoPlayer');
    const mainVideo = document.getElementById('mainVideo');
    
    if (player) player.style.display = 'none';
    if (mainVideo) {
        mainVideo.pause();
        mainVideo.currentTime = 0;
    }
}

// إضافة تنسيقات الإشعار
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        background: rgba(30, 41, 59, 0.5);
        border-radius: 15px;
        border: 2px dashed rgba(255, 255, 255, 0.1);
    }
    
    .no-results i {
        font-size: 60px;
        color: #94a3b8;
        margin-bottom: 20px;
    }
    
    .no-results h3 {
        color: #f1f5f9;
        margin-bottom: 10px;
        font-size: 24px;
    }
    
    .no-results p {
        color: #94a3b8;
        font-size: 16px;
    }
    
    /* تنسيقات إضافية للفيديوهات */
    .category-icon {
        font-size: 40px;
        color: #3b82f6;
        margin-bottom: 15px;
    }
    
    .duration-badge {
        position: absolute;
        bottom: 10px;
        left: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
    }
    
    .video-category {
        display: inline-block;
        background: rgba(59, 130, 246, 0.2);
        color: #3b82f6;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 14px;
        margin: 10px 0;
        font-weight: 500;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }
`;
document.head.appendChild(notificationStyle);
