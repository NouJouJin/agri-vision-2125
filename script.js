document.addEventListener('DOMContentLoaded', function() {

    // 作品データ (全28作品)
    const worksData = [
        // No.1 - No.23 (省略)
        { creator: "1Gan / イチガン さん", title: "やさしいテクノロジー", description: "自然とテクノロジーが調和した未来の温室農園で、AIロボットが野菜を丁寧に収穫。効率だけじゃない、『やさしさ』を感じる未来の農業の姿を表現。", videoId: "I5k9aFaCxUo" },
        { creator: "農情人～NouJouJin～", title: "来る2115年～宇宙に咲く希望の農業～", description: "舞台はなんと宇宙へ！地球から太陽系全体へと広がる壮大な農業圏で、AIが数億もの農場を管理し、人間は創造性を追求する美しく調和した未来を描く。", videoId: "Yg9nDdVlxXQ" },
        { creator: "Yuusuke.H さん", title: "To you from 100 years ago", description: "『100年後からのメッセージ』という壮大なテーマ。現代をセピア調で描き、未来の姿が明かされる構成が魅力的。私たちが未来を選べる『余地』を問いかける。", videoId: "5miEdVNbXdw" },
        { creator: "田中 さん", title: "環境を制する農業", description: "宇宙、火山、断崖絶壁、海中といった極限環境でも営まれる衝撃的な未来。農業は人類の生存域を拡張する“生命維持技術”へと進化する。", videoId: "08fLqyqTk1k" },
        { creator: "NouJouJin", title: "Veo 3と創る未来農業🌱 アスカとAIの15秒物語✨", description: "ハイテク農場のコントロールルームで、若き農家アスカとAIアドバイザーが見事な連携プレーを披露。人間とAIが手を取り合う希望に満ちた未来を描く。", videoId: "Epv0_bPWLkc" },
        { creator: "やち さん", title: "Itadakimasu in Space", description: "宇宙船の中で稲を育て、ごはんを炊いて食べる物語。技術がいかに進化しても変わらない“命をつなぐ行為”の象徴として、文化と未来への希望を込める。", videoId: "2CfV_SEYc7Q" },
        { creator: "やち さん", title: "Our Lunch, Our Future", description: "100年後の小学校が地域の食料供給拠点に。子どもたちが収穫を通じて食を学ぶ光景は、未来の「食育」そのもの。食の安全保障と成長への願いを象徴。", videoId: "99PnVCxaF5E" },
        { creator: "うどんみかん さん", title: "2125年 ドコでも農業", description: "実家の農業を継げなかった体験から生まれた、場所や人間関係の縛りから解放され、ゲームのように誰でも気軽に始められる農業への強い願いが込められている。", videoId: "NXkpV9g9ZdM" },
        { creator: "テックトークナビゲーター さん", title: "Smart future", description: "この動画では、100年後の農業が「人とテクノロジーが共存し、よりスマートで持続可能なものになる」という未来像を描きました。...", videoId: "MB2FXxOHp7A" },
        { creator: "枝垂れ桜 さん", title: "２１２５年の農業", description: "コンセプトは、未来に受け継がれる農業です。...", videoId: "CRl7yUQG9G4" },
        { creator: "枝垂れ桜 さん", title: "垂直農場2125", description: "2125年には核融合炉の実現により、エネルギー事情が大きく変化していると思います。...", videoId: "cnFh6ynckjk" },
        { creator: "sora さん", title: "future agriculture", description: "この作品では、100年後の日本農業がどのように進化し、人と自然、そしてテクノロジーが調和していくのかを映像と音楽で表現しました。...", videoId: "5JtJTdITsjo" },
        { creator: "小島 慎平 さん", title: "変わらない想い、進化する農業", description: "本作品「変わらない想い、進化する農業」は、2025年時点で私が抱く「この美しい農村風景を未来に遺したい」という想いが、2125年においてどのような形で実現されているかを描いた物語です。...", videoId: "BzUBHxJn-J8" },
        { creator: "おまっめ さん", title: "大地を、取り戻す農業", description: "本作のテーマは「大地への回帰」です。100年後の農業は、テクノロジーの力で「土地を解放する」という選択をするのではないか、というビジョンをアニメーションで表現しました。...", videoId: "SlqpKc2OFs0" },
        { creator: "延辺大学 李晨曦 さん", title: "SKY HORIZON 2125：100年後日本空中農業計画", description: "作品は、2125年の日本を舞台に、もはや地面に依存せず、都市上空に広がる未来の農業の姿を構想した映像作品です。...", videoId: "K_CJTvrUN4I" },
        { creator: "山本響 さん", title: "ネオアーバンファーミング　~100年後の都市~", description: "私は100年後の農業はアーバンファーミングが活性化すると考えます。...", videoId: "jn_Y72Rz2UY" },
        { creator: "大森研一 さん", title: "i-Ffarming ～スマホ農業～", description: "本作『i-Ffarming ～スマホ農業～』は、AI・IoT・クラウド基盤などの先進技術が農業を日常生活の一部に変えていく未来を描いています。...", videoId: "NdEOXXNlyVE" },
        { creator: "ひろます さん", title: "タワー農業 tower farming", description: "本作《タワー農業 – Tower Farming》は、22世紀の都市型農業の一つの到達点として、垂直栽培と都市構造の融合を描いたビジュアル・コンセプトです。...", videoId: "kRWNp9TSTwQ" },
        { creator: "Auroak さん", title: "未来百年の2125年、日本の農業", description: "この映像では、2125年の日本の農業の温かく未来的な一場面を想像しています...", videoId: "5uXpyCHWIZI" },
        { creator: "3.5%vibes さん", title: "The world is still being cultivated", description: "本作は、100年後の日本の農業を静かに見つめた映像詩です。...", videoId: "NkEXWviEpX8" },
        { creator: "チェアハウス さん", title: "AGRI VISION 2125 ~ 100年後の日本農業 -", description: "大変興味深いテーマだったので珍しく少し深く考えました。...", videoId: "jQz15PSesug" },
        { creator: "チェアハウス さん", title: "AGRI VISION 2125 ボーカルバージョン", description: "昨日、１作品を応募させて頂きました。そちらはナレーション主体の作品です。...", videoId: "Tzgs_5WjeaU" },
        { creator: "すみこ さん", title: "宇宙農業-新たな進化の道へ-", description: "22世紀、人類は食料生産の主舞台を地球から軌道上へと移した。...", videoId: "vXadmCjHlxY" },
        // ★★★ ここからが新規追加作品 ★★★
        {
            creator: "YUTO TSUCHIE さん",
            title: "100年後の演奏",
            description: "現代にいる少年が田舎でピアノを演奏。VRゴーグルを付け100年後の農業を想像しながら演奏。ディストピア的な未来を想像しており、タランチュラ星雲をモチーフにした空やドローンやレールガンみたいな機械で農業を管理しているのではないかと空想のもと動画を作成。",
            videoId: "oiQ_FiUiX3g"
        },
        {
            creator: "YUTO TSUCHIE さん",
            title: "宇宙配達ースペースイーツ",
            description: "宇宙から、野菜を配達して家に届ける「宇宙配達-スペースイーツ」のイメージムービーを作成しました。小型人工衛星みたいなもので自宅に届ける過程を作成しております。",
            videoId: "nyj0Eyo2hEs"
        },
        {
            creator: "大森研一 さん",
            title: "“共鳴根（きょうめいこん）農法”── 音で育む地中の記憶",
            description: "地中で対話が始まった。根はただ栄養を吸う存在ではない。情報を貯え、周囲と“共鳴”する知覚器として音で会話することに人は成功。やがてそれは応用され、土壌にナノ粒子センサーを埋め込み、根が吸うミネラルや水分、微小振動までもデータ化。それらの情報をAIが「植物の健康状態や成長リズム」と解釈し最適な栽培条件へ音で導く。それは「制御」ではなく「根との対話」である。例えば、白菜の根が微かに「深く水を欲している」と感じた時─AIは地下水脈からの水注入を自律的に調節し地中の栄養バランスを整える。また“病の兆し”を葉に出す前の根の振動パターンで予知し、根元から微量な自然由来の防除物質を噴霧。植物は自らの“声”で育てられる。面白いのは、これが「記憶としての農業」を可能にしたこと。種子ひとつひとつが自ら育った環境の情報を根に記憶し、次世代に伝える。同じ種子をまけば“この畑はやせていたな”“あの時は春の雨が少なかった”といった、数世代分の成長履歴が“根の共鳴”として蘇るのだ。植え付けから収穫まで、畑はまるで“記憶の図書館”であるかのように刻々と色調を変え、夜には青緑に光るセンサー群が、根と土が紡いだ歴史を語る。社会影響も大きく、気候変動や土壌劣化によって混迷する22世紀において、植物自身を“育て手”として尊重する共鳴農法は、何よりも持続可能性と調和する。農薬削減、肥料の最小化、水の適正使用すべてが“根との対話”で実現し、農業は科学だけでなく、倫理をもって営まれる共同作業となった。これは食べものの価値を“命の記憶”へと昇華させる第一歩だ。",
            videoId: "Q_XK2sjHAZI"
        },
        {
            creator: "茶々 さん",
            title: "チャットする土",
            description: "本作は、100年後の農業において「土と会話ができる」という未来像を、リアルな圃場管理の視点から描いたショートムービーです。AI土壌分析システム「SoilTalk 2125」によって、農家は土の状態を音声で確認し、潅水や施肥をリアルタイムで自動制御できるようになります。作品内では、広大な圃場、作物ごとの最適ケア、遠隔共有機能など、精密農業の進化をシンプルに可視化しました。あえてファンタジー要素を排除し、「現場に根ざした未来」を丁寧に描くことで、AIと自然が協働する営農のあり方を現実的に表現しました。土の声を“聞く”という発想が、次世代の農業において大切な感覚となることを願って制作しています。",
            platform: 'tiktok', // TikTok用の特別な目印
            url: 'https://vt.tiktok.com/ZSBchTP5g/', // TikTokのURL
            thumbnail: 'http://metagri-labo.com/wp-content/uploads/2024/07/e32fab8e2b2e9930531e7f8edffab72b.png' // 代替サムネイル
        },
        {
            creator: "Kawanishi さん",
            title: "Agri Future in 2125",
            description: "本作品は、「自然との共生～100年後の農業～」をテーマに、AIと人が協力して築く未来の農業の姿を描いた30秒のショートムービーです。現在でもすでに取り組まれている、AIが環境データをリアルタイムで監視することで、より安定した生育環境を実現する農業をベースに描き出しました。さらに、苗ごとの状態を分析して最適な対応を提案する仕組みや、蓄積したデータをもとに土起こしや収穫などの農業特有の重労働を代替してくれるAIロボット、家庭内でも気軽に野菜づくりに挑戦できるAI搭載プランターなど、人と自然が無理なく寄り添いながら生きていける未来をイメージしました。テクノロジーによって自然が置き換えられるのではなく、AIのサポートによって農業体験がより身近なものとなり、人の暮らしと自然とがより密接に、なめらかにつながっていく——そんな未来への希望を込めています。",
            videoId: "lP89tz0eYzY"
        }
        // ★★★ ここまでが新規追加作品 ★★★
    ];

    const worksContainer = document.getElementById('works-container');

    // 作品データを元にHTMLカードを生成
    worksData.forEach((work, index) => { 
        const card = document.createElement('div');
        card.className = 'work-card';
        
        // --- 修正箇所 ---
        // 作品データに応じてカードの内容とイベントを設定
        if (work.platform === 'tiktok') {
            // TikTok作品の場合
            card.dataset.url = work.url;
            card.innerHTML = `
                <div class="card-thumbnail">
                    <span class="work-number">No.${index + 1}</span>
                    <img src="${work.thumbnail}" alt="${work.title}" class="tiktok-thumbnail">
                    <div class="play-icon tiktok-play-icon"></div>
                </div>
                <div class="card-content">
                    <div class="tooltip">${work.description}</div>
                    <h3 class="card-title">${work.title}</h3>
                    <p class="card-creator">👤 ${work.creator}</p>
                    <p class="card-description">${work.description}</p>
                </div>
            `;
        } else {
            // YouTube作品の場合 (これまで通り)
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
        }
        worksContainer.appendChild(card);
    });

    // モーダル関連の要素を取得
    const modal = document.getElementById('modal');
    const videoContainer = document.getElementById('video-container');
    const closeButton = document.querySelector('.close-button');
    const allCards = document.querySelectorAll('.work-card');

    // カードクリック時のイベントを設定
    allCards.forEach(card => {
        card.addEventListener('click', () => {
            // --- 修正箇所 ---
            if (card.dataset.url) {
                // TikTokのURLがある場合は新しいタブで開く
                window.open(card.dataset.url, '_blank');
            } else if (card.dataset.videoId) {
                // YouTubeのVideoIDがある場合はモーダルを開く
                const videoId = card.dataset.videoId;
                videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                modal.style.display = 'block';
            }
        });
    });

    // モーダルを閉じる処理
    function closeModal() {
        modal.style.display = 'none';
        videoContainer.innerHTML = ''; 
    }

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
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
