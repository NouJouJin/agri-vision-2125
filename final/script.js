document.addEventListener('DOMContentLoaded', () => {
    // データは変更なし
    const finalistsData = [
        { newNo: 1, orgNo: 20, title: 'The world is still being cultivated', creator: '3.5%vibes さん', videoId: 'NkEXWviEpX8', description: '本作は、100年後の日本の農業を静かに見つめた映像詩です。...' },
        { newNo: 2, orgNo: 26, title: '“共鳴根農法”── 音で育む地中の記憶', creator: '大森研一 さん', videoId: 'Q_XK2sjHAZI', description: '地中で対話が始まった。根はただ栄養を吸う存在ではない。...' },
        { newNo: 3, orgNo: 15, title: 'SKY HORIZON 2125', creator: '延辺大学 李晨曦 さん', videoId: 'K_CJTvrUN4I', description: '作品は、2125年の日本を舞台に、もはや地面に依存せず、都市上空に広がる未来の農業の姿を構想した映像作品です。...' },
        { newNo: 4, orgNo: 17, title: 'i-Ffarming ～スマホ農業～', creator: '大森研一 さん', videoId: 'NdEOXXNlyVE', description: '本作『i-Ffarming ～スマホ農業～』は、AI・IoT・クラウド基盤などの先進技術が農業を日常生活の一部に変えていく未来を描いています。...' },
        { newNo: 5, orgNo: 4, title: '環境を制する農業', creator: '田中 さん', videoId: '08fLqyqTk1k', description: '人類のフロンティアはどこまで広がるのか？本作『環境を制する農業』は、宇宙空間、火山地帯、断崖絶壁、そして海中といった極限環境でも農業が営まれる衝撃的な未来を描き出しています！...' },
        { newNo: 6, orgNo: 23, title: '宇宙農業-新たな進化の道へ-', creator: 'すみこ さん', videoId: 'vXadmCjHlxY', description: '22世紀、人類は食料生産の主舞台を地球から軌道上へと移した。...' }
    ];

    const cardCarousel = document.getElementById('card-carousel');
    const modal = document.getElementById('modal');
    const modalPlayer = document.getElementById('modal-player-container');
    const modalInfo = document.getElementById('modal-info-container');
    const closeButton = document.querySelector('.close-button');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // カードを生成
    finalistsData.forEach((finalist) => {
        const card = document.createElement('div');
        card.className = 'finalist-card';
        card.innerHTML = `
            <div class="card-thumbnail" style="background-image: url('https://i.ytimg.com/vi/${finalist.videoId}/hqdefault.jpg')"></div>
            <div class="card-content">
                <div class="card-new-no">FINALIST No.${finalist.newNo}</div>
                <h3 class="card-title">${finalist.title}</h3>
                <p class="card-creator">${finalist.creator}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(finalist));
        cardCarousel.appendChild(card);
    });
    
    // モーダル機能 (変更なし)
    function openModal(finalist) {
        modalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${finalist.videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        modalInfo.innerHTML = `
            <h3>No.${finalist.newNo} ${finalist.title}</h3>
            <h4>by ${finalist.creator}</h4>
            <p>${finalist.description}</p>
        `;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        modalPlayer.innerHTML = '';
        modalInfo.innerHTML = '';
    }

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // ★★★ カルーセル（横スクロール）機能を修正 ★★★
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const cardWidth = 330; // card width (300px) + gap (30px)
    
    nextBtn.addEventListener('click', () => {
        // 現在のスクロール位置にカード1枚分を追加してスクロール
        carouselWrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        // 現在のスクロール位置からカード1枚分を引いてスクロール
        carouselWrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    
    // オープニングアニメーション (変更なし)
    const mainContent = document.querySelector('.main-content');
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 2500);

    const openingAnimation = document.querySelector('.opening-animation');
    setTimeout(() => {
        openingAnimation.style.display = 'none';
    }, 3500);
});
