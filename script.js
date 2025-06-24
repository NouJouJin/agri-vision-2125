document.addEventListener('DOMContentLoaded', function() {

    // 作品データ
    const worksData = [
        {
            creator: "1Gan / イチガン さん",
            title: "やさしいテクノロジー",
            description: "自然とテクノロジーが調和した未来の温室農園で、AIロボットが野菜を丁寧に収穫。効率だけじゃない、『やさしさ』を感じる未来の農業の姿を表現。",
            videoId: "I5k9aFaCxUo"
        },
        {
            creator: "農情人～NouJouJin～",
            title: "来る2115年～宇宙に咲く希望の農業～",
            description: "舞台はなんと宇宙へ！地球から太陽系全体へと広がる壮大な農業圏で、AIが数億もの農場を管理し、人間は創造性を追求する美しく調和した未来を描く。",
            videoId: "Yg9nDdVlxXQ"
        },
        {
            creator: "Yuusuke.H さん",
            title: "To you from 100 years ago",
            description: "『100年後からのメッセージ』という壮大なテーマ。現代をセピア調で描き、未来の姿が明かされる構成が魅力的。私たちが未来を選べる『余地』を問いかける。",
            videoId: "5miEdVNbXdw"
        },
        {
            creator: "田中 さん",
            title: "環境を制する農業",
            description: "宇宙、火山、断崖絶壁、海中といった極限環境でも営まれる衝撃的な未来。農業は人類の生存域を拡張する“生命維持技術”へと進化する。",
            videoId: "08fLqyqTk1k"
        },
        {
            creator: "NouJouJin",
            title: "Veo 3と創る未来農業🌱 アスカとAIの15秒物語✨",
            description: "ハイテク農場のコントロールルームで、若き農家アスカとAIアドバイザーが見事な連携プレーを披露。人間とAIが手を取り合う希望に満ちた未来を描く。",
            videoId: "Epv0_bPWLkc"
        },
        {
            creator: "やち さん",
            title: "Itadakimasu in Space",
            description: "宇宙船の中で稲を育て、ごはんを炊いて食べる物語。技術がいかに進化しても変わらない“命をつなぐ行為”の象徴として、文化と未来への希望を込める。",
            videoId: "2CfV_SEYc7Q"
        },
        {
            creator: "やち さん",
            title: "Our Lunch, Our Future",
            description: "100年後の小学校が地域の食料供給拠点に。子どもたちが収穫を通じて食を学ぶ光景は、未来の「食育」そのもの。食の安全保障と成長への願いを象徴。",
            videoId: "99PnVCxaF5E"
        },
        {
            creator: "うどんみかん さん",
            title: "2125年 ドコでも農業",
            description: "実家の農業を継げなかった体験から生まれた、場所や人間関係の縛りから解放され、ゲームのように誰でも気軽に始められる農業への強い願いが込められている。",
            videoId: "NXkpV9g9ZdM"
        }
    ];

    const worksContainer = document.getElementById('works-container');

    // ★★★ 以下を修正 ★★★
    // 作品データを元にHTMLカードを生成
    worksData.forEach((work, index) => { // index を追加
        const card = document.createElement('div');
        card.className = 'work-card';
        card.dataset.videoId = work.videoId;
        
        // HTML構造に No. と ツールチップ を追加
        card.innerHTML = `
            <div class="card-thumbnail">
                <span class="work-number">No.${index + 1}</span>
                <img src="https://i.ytimg.com/vi/${work.videoId}/hqdefault.jpg" alt="${work.title}">
                <div class="play-icon"></div>
            </div>
            <div class="card-content">
                <div class="tooltip">${work.description}</div>
                <h3 class="card-title">${work.title}</h3>
                <p class="card-creator">👤 ${work.creator}</p>
                <p class="card-description">${work.description}</p>
            </div>
        `;
        worksContainer.appendChild(card);
    });
    // ★★★ ここまでが修正箇所 ★★★

    // モーダル関連の要素を取得
    const modal = document.getElementById('modal');
    const videoContainer = document.getElementById('video-container');
    const closeButton = document.querySelector('.close-button');
    const allCards = document.querySelectorAll('.work-card');

    // カードクリックでモーダルを開く
    allCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            modal.style.display = 'block';
        });
    });

    // モーダルを閉じる処理
    function closeModal() {
        modal.style.display = 'none';
        videoContainer.innerHTML = ''; // 動画を停止するために中身を空にする
    }

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // 背景クリックで閉じる
            closeModal();
        }
    });

    // スクロールアニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    allCards.forEach(card => {
        observer.observe(card);
    });
});
