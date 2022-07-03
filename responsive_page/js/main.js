const hamburgerMenu = document.querySelector('.hamburger'); //ハンバーガークラスを習得する.
//アロー関数をクラスをアクティブにする為に作成する.
const menuIsActive = () => {
    //ハンバーガーメニュークラスを選んで、アクティブクリッククラスを追加と削除をする.
    hamburgerMenu.classList.toggle('active');
};
//クリックのイベントリスナーをハンバーガーメニューに追加する そして　トグルのスイッチ切り替え。
hamburgerMenu.addEventListener('click', menuIsActive);