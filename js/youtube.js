// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 함수 이름은 정해진 것으로 고정되어야 한다.
  // <div id="player"></div>
  new YT.Player('player', { // YT.Player('id값', {옵션})
    videoId: 'bAJYsT91PXU', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'bAJYsT91PXU' // 반복 재생할 영상의 ID 목록
    },
    events: {
      onReady: function (event) { // 준비가 되면 함수가 실행 된다.
        event.target.mute(); // 음소거
      }
    }
  });
}