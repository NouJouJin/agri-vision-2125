document.addEventListener('DOMContentLoaded', () => {
    const finalistsData = [
        { newNo: 1, orgNo: 20, title: 'The world is still being cultivated', creator: '3.5%vibes さん', videoId: 'NkEXWviEpX8', description: '本作は、100年後の日本の農業を静かに見つめた映像詩です。東京・長野・広島・北海道、それぞれの土地に根ざした農の風景を描きながら、未来の人と技術と自然の共生を描いています。壁面に実るイチゴ、仮想空間で畑を育てる高齢農家、海辺に立つ水耕タワー、雪原に浮かぶ温室ドーム。そこには、進化したテクノロジーだけでなく、「育てる」という営みを手放さない人々の姿があります。タイトルに掲げた “The world is still being cultivated” は、私たちの暮らしも社会も、そして未来も、まだ途中にあるという想いを込めた言葉です。農業は過去から未来へと連なる文化であり、変化の中でも失われない人間の根源的な行為です。この作品は、完成された理想の未来ではなく、「耕し続けている」のありのままの姿を、30秒の静かな時間に収めた試みです。' },
        { newNo: 2, orgNo: 26, title: '“共鳴根農法”── 音で育む地中の記憶', creator: '大森研一 さん', videoId: 'Q_XK2sjHAZI', description: '地中で対話が始まった。根はただ栄養を吸う存在ではない。情報を貯え、周囲と“共鳴”する知覚器として音で会話することに人は成功。やがてそれは応用され、土壌にナノ粒子センサーを埋め込み、根が吸うミネラルや水分、微小振動までもデータ化。それらの情報をAIが「植物の健康状態や成長リズム」と解釈し最適な栽培条件へ音で導く。それは「制御」ではなく「根との対話」である。例えば、白菜の根が微かに「深く水を欲している」と感じた時─AIは地下水脈からの水注入を自律的に調節し地中の栄養バランスを整える。また“病の兆し”を葉に出す前の根の振動パターンで予知し、根元から微量な自然由来の防除物質を噴霧。植物は自らの“声”で育てられる。面白いのは、これが「記憶としての農業」を可能にしたこと。種子ひとつひとつが自ら育った環境の情報を根に記憶し、次世代に伝える。同じ種子をまけば“この畑はやせていたな”“あの時は春の雨が少なかった”といった、数世代分の成長履歴が“根の共鳴”として蘇るのだ。植え付けから収穫まで、畑はまるで“記憶の図書館”であるかのように刻々と色調を変え、夜には青緑に光るセンサー群が、根と土が紡いだ歴史を語る。社会影響も大きく、気候変動や土壌劣化によって混迷する22世紀において、植物自身を“育て手”として尊重する共鳴農法は、何よりも持続可能性と調和する。農薬削減、肥料の最小化、水の適正使用すべてが“根との対話”で実現し、農業は科学だけでなく、倫理をもって営まれる共同作業となった。これは食べものの価値を“命の記憶”へと昇華させる第一歩だ。' },
        { newNo: 3, orgNo: 15, title: 'SKY HORIZON 2125', creator: '延辺大学 李晨曦 さん', videoId: 'K_CJTvrUN4I', description: '作品は、2125年の日本を舞台に、もはや地面に依存せず、都市上空に広がる未来の農業の姿を構想した映像作品です。限られた土地資源と加速する都市化に直面する中で、AI技術・都市空間・エコ農業を融合させた、新たな農業の形を模索しています。映像は、SoraによるAIアニメーション生成とSunoによる音楽生成、さらにAfter EffectsとDaVinci Resolveによる編集・合成によって制作されました。本作は、技術によって空間を再構築し、人間と自然の関係を再定義しようとする未来のビジョンを描いています。' },
        { newNo: 4, orgNo: 17, title: 'i-Ffarming ～スマホ農業～', creator: '大森研一 さん', videoId: 'NdEOXXNlyVE', description: '本作『i-Ffarming ～スマホ農業～』は、AI・IoT・クラウド基盤などの先進技術が農業を日常生活の一部に変えていく未来を描いています。100年後、農業はもはや“専業”のものではなく、誰もが“スマホ一台”で関われる社会インフラへと進化しているはずです。遠隔操作によるドローン散布、AIによる作物の自動モニタリング、個人のライフログと連動した作業提案など、テクノロジーが農作業の知識・経験・身体的負担を超えていく時代――それが「Ffarming（Futuristic Farming）」です。本作では、「いつでも・どこでも・だれでも」というキーワードのもと、テクノロジーと共生する新しい“ながら農業”のスタイルを提示し、都市と農村、個人とコミュニティがテクノロジーで繋がり支え合う未来像を表現しました。高齢化・過疎化が進む日本において、地域や世代を越えて“支え合いながら農を共有する未来”を、静かに、そして希望をもって。' },
        { newNo: 5, orgNo: 4, title: '環境を制する農業', creator: '田中 さん', videoId: '08fLqyqTk1k', description: '人類のフロンティアはどこまで広がるのか？本作『環境を制する農業』は、宇宙空間、火山地帯、断崖絶壁、そして海中といった極限環境でも農業が営まれる衝撃的な未来を描き出しています！100年後の農業は、食料生産を超え、人類の生存域を拡張する“生命維持技術”へと進化する…そんな壮大なビジョンを提示。AIが織りなす圧巻の映像美と、「どんな環境でも命は育つ」という希望のメッセージが胸を打ちます。「人類の技術と自然の調和」、そして気候変動等の課題に立ち向かう柔軟な発想の重要性を問いかける意欲作です！' },
        { newNo: 6, orgNo: 23, title: '宇宙農業-新たな進化の道へ-', creator: 'すみこ さん', videoId: 'vXadmCjHlxY', description: '22世紀、人類は食料生産の主舞台を地球から軌道上へと移した。地球環境は気候変動の激化、土壌塩性化、人口爆発による耕地圧迫により不可逆的に荒廃し、宇宙農業への移行は「夢」ではなく「必然」となった。本作では、そうした未来における軌道型農業施設の内部を可視化し、閉鎖循環型システムがいかに効率的かつ持続的に機能するかを描く。気候非依存のLED光栽培、病原体を排除した無農薬環境、水資源の完全リサイクル、栽培から収穫までを担うAIロボットの導入──これらは農業を「労働」から「設計」へと進化させる。重力の制約から解放された空間では多段棚式の立体栽培が可能となり、単位体積あたりの収量は地上の数十倍に達する。本作のビジュアルは、食の未来が「科学と美しさの融合体」であることを意図的に示している。もはや農業は過酷な地上労働ではない。情報と光と設計による、知性の営みである。未来の農業とは、人類の知と倫理が宇宙で実を結ぶ“生命工学的文化”なのだ。' }
    ];
    // ... (以下、前回提案のJavaScriptコード) ...
    const cardContainer = document.getElementById('card-container');
    const modal = document.getElementById('modal');
    const modalPlayer = document.getElementById('modal-player-container');
    const modalInfo = document.getElementById('modal-info-container');
    const closeButton = document.querySelector('.close-button');
    const numCards = finalistsData.length;
    const radius = 350;

    finalistsData.forEach((finalist, i) => {
        const angle = (i / numCards) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle) * 0.4;
        const rotation = (angle * 180 / Math.PI) + 90;
        const card = document.createElement('div');
        card.className = 'finalist-card';
        card.style.setProperty('--transform-default', `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`);
        card.style.transform = card.style.getPropertyValue('--transform-default');
        card.innerHTML = `<div class="card-thumbnail" style="background-image: url('https://i.ytimg.com/vi/${finalist.videoId}/hqdefault.jpg')"></div><div class="card-content"><div class="card-new-no">FINALIST No.${finalist.newNo}</div><h3 class="card-title">${finalist.title}</h3><p class="card-creator">${finalist.creator}</p></div>`;
        card.addEventListener('click', () => openModal(finalist));
        cardContainer.appendChild(card);
    });
    
    function openModal(finalist) {
        modalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${finalist.videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        modalInfo.innerHTML = `<h3>No.${finalist.newNo} ${finalist.title}</h3><h4>by ${finalist.creator}</h4><p>${finalist.description}</p>`;
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
});