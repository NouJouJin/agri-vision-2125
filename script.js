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
        },
        {
            creator: "テックトークナビゲーター さん",
            title: "Smart future",
            description: "この動画では、100年後の農業が「人とテクノロジーが共存し、よりスマートで持続可能なものになる」という未来像を描きました。冒頭、ランニング中の男性がスマートウォッチで農場の状態を確認するシーンは、遠隔地からでもリアルタイムに状況を把握し、瞬時に対応できる未来の農業経営を象徴しています。ドローンによる自動散水や状態チェックは、AIとロボット技術の進化がもたらす効率化と精密農業の実現を表現しています。これにより、限られた資源を最適に活用し、農作物の生育を最大化できると考えました。ゲリラ豪雨への対応や不審者アラートのシーンは、予測不可能な自然災害やセキュリティリスクに対し、AIが自動で判断し、インフラが柔軟に対応することで、農作物を守り抜く強靭な農業システムを表現しています。災害に強い強壁の展開や、AIロボットによる警備は、食料安全保障の観点からも重要な要素となるでしょう。そして、最終的に「作物のリクエストが届く」という表現は、単なる生産活動に留まらず、AIが人々のニーズを予測し、最適な作物を提案する、より消費者と密接に結びついた農業の未来を暗示しています。これらの技術が、農業をより魅力的で持続可能な産業へと発展させ、人々の暮らしを豊かにすることを目指しました。",
            videoId: "MB2FXxOHp7A"
        },
        {
            creator: "枝垂れ桜 さん",
            title: "２１２５年の農業",
            description: "コンセプトは、未来に受け継がれる農業です。1900年代、日本農作物は高い栄養価を持っていました。近年の農業は多作や肥料により栄養価が低くなっています。このビデオでは、高い栄養価のあるおいしい野菜を届け、国民の健康を守ることをコアに設定しています。農業を担うのは90％はロボットになると言われていますが、農業研修生や趣味で農業をしたい人も増えると考えています。また、日本特有の地形から、農地ごとの癖も存在します。少子高齢化で農業の伝統技術継承が断絶するのを防ぎ様々な継承者に知識を継承するための知識のアーカイブを考えました。同様に、地形に合わせて柔軟に農業を管理する目的で、小型ロボットやケーブルウェイでの運搬など、様々なロボット技術の発展を表現しました。最後に、栄養価インセンティブによる経済をブロックチェーンで実現します。栄養価の高い野菜に高い値段が付くことでインセンティブを与えるとともに、NFTによる即時決済で安定下の農業経済を構築します。",
            videoId: "CRl7yUQG9G4"
        },
        {
            creator: "枝垂れ桜 さん",
            title: "垂直農場2125",
            description: "2125年には核融合炉の実現により、エネルギー事情が大きく変化していると思います。前回と同じで、主要テーマは、人間社会をどのように栄養価の高い農作物により支えていくかです。20世紀～21世紀は農業の効率化が重視されて病気は医療や薬品の担当領域とされていましたが、人の健康を支えるのは農業科学であるべきだというのが自分の主張です。垂直農場は、核融合炉を前提とした都市型農業で、都市部の人の健康を支える基幹技術として考えています。そのため、光ファイバーや量子技術による作物一つ一つの高精度の管理をメインにした、農作物の安定供給に大部分の技術に充てていますが、ドローンによる各家庭への流通までをASIにより一括管理することで、無駄なコストを排除して持続的なシステムを実現させています。",
            videoId: "cnFh6ynckjk"
        },
        // ★★★ ここからが新規追加作品 ★★★
        {
            creator: "sora さん",
            title: "future agriculture",
            description: "この作品では、100年後の日本農業がどのように進化し、人と自然、そしてテクノロジーが調和していくのかを映像と音楽で表現しました。ドローンやAIが活躍する風景の中にも、稲穂が風に揺れる静かな情景や、人の手の温かさを残す場面を織り込み、未来における「命を育てる営み」の本質を描きたかったのです。「技術だけではなく、想いが未来を耕す」そんなメッセージを込め、見る人が希望を感じられるような映像を目指しました。",
            videoId: "5JtJTdITsjo"
        }
        // ★★★ ここまでが新規追加作品 ★★★
    ];

    const worksContainer = document.getElementById('works-container');

    // 作品データを元にHTMLカードを生成
    worksData.forEach((work, index) => { 
        const card = document.createElement('div');
        card.className = 'work-card';
        card.dataset.videoId = work.videoId;
        
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
