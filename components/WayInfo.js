'use client'

import Image from 'next/image';


export default async function WayInfo() {

    var traffic_map = new naver.maps.Map('traffic_map', {center: new naver.maps.LatLng(35.1542308, 126.8839826)});
		var traffic_marker = new naver.maps.Marker({
		    position: new naver.maps.LatLng(35.1542308, 126.8839826),
		    map: traffic_map
		});
		var traffic_info = new naver.maps.InfoWindow({
		    content: '<div class="naver_map_info">광주 라페스타웨딩홀</div>'
		});
		traffic_info.open(traffic_map, traffic_marker);
				
		
	    Kakao.init('048a9d9ab667fc3b5f6ed77c28d87808');

	    // 카카오내비
	    function navi_kakao(event){
	    	event.preventDefault();
	        Kakao.Navi.start({
	            name: '광주 라페스타웨딩홀',
	            x: 126.8839826,
	            y: 35.1542308,
	            coordType: 'wgs84'
	        });
	    }

	    // 티맵
	    function navi_tmap(event) {
	    	event.preventDefault();
	    	var name = encodeURIComponent('광주 라페스타웨딩홀');
	    	location.href = 'http://www.tmap.co.kr/tmap2/mobile/route.jsp?name=' + name + '&lon=126.8839826&lat=35.1542308';
	    }

	    var sns_message = "\uc7a5\uc900\ud658&\ubc30\uc724\uc544 \uacb0\ud63c\uc744 \ucd95\ud558\ud574 \uc8fc\uc138\uc694.";

	    // 카카오톡
	    function sns_kakaotalk(event) {
	    	event.preventDefault();
	    	Kakao.Link.sendDefault({
	    		objectType: 'feed',
	    		content: {
	    			title: '장준환 ♥ 배윤아',
	    			description: sns_message,
	    			imageUrl: 'https://thegoodday.kr/static/upload/invitation/62870/crop/2222f5b4aeae7a30d627d5cafdf6aa38.png',
	    			link: {
	    				mobileWebUrl: 'https://thegoodday.kr/62870',
	    				webUrl: 'https://thegoodday.kr/62870'
	    			}
	    		},
	    		buttons: [
	    		{
	    			title: '청첩장 바로가기',
	    			link: {
	    				mobileWebUrl: 'https://thegoodday.kr/62870',
	    				webUrl: 'https://thegoodday.kr/62870'
	    			}
	    		}
	    		]
	    	});
	    }

	    // 카카오스토리
	    function sns_kakaostory(event) {
	    	event.preventDefault();
	    	Kakao.Story.open({
	    		url: 'https://thegoodday.kr/62870',
	    		text: sns_message
	    	});
	    }

	    // 페이스북
	    function sns_facebook(event) {
	    	event.preventDefault();
	    	var text = encodeURIComponent(sns_message);
	    	var url = 'https://thegoodday.kr/62870';
	    	var encodeURL = encodeURIComponent(url);
	    	window.open('https://www.facebook.com/sharer/sharer.php?t=' + text + '&u=' + encodeURL);
	    }

	    // 위챗
	    function sns_wechat(event) {
	    	event.preventDefault();
	    	alert('죄송합니다.\n준비중 입니다.');
	    }

	    // 트위터
	    function sns_twitter(event) {
	    	event.preventDefault();
	    	var text = encodeURIComponent(sns_message);
	    	var url = 'https://thegoodday.kr/62870';
	    	var encodeURL = encodeURIComponent(url);
	    	window.open('https://twitter.com/share?text=' + text + '&url=' + encodeURL);
	    }

	    // 밴드
	    function sns_band(event) {
	    	event.preventDefault();
	    	var content = sns_message;
	    	var url = 'https://thegoodday.kr/62870';

	    	content = content + "\n" + url;
	    	var param = 'create/post?text=' + encodeURIComponent(content);
	    	location.href = 'bandapp://' + param;
	    }

    return (
        <div className="traffic_area" id="traffic">
            <div className="traffic_wrapper">
                <div className="traffic_title">오시는 길</div>
                <div className="traffic_place">광주 라페스타웨딩홀 
                    <span className="small">/ 2층 엘루체홀</span>
                </div>
                <div className="traffic_address">
                    광주 서구 죽봉대로 12 (농성동 393-57) 
                </div>
                <div className="traffic_tel">TEL. 062-366-7766</div>
                    <a href="tel:062-366-7766" className="traffic_tel_button">
                        <Image src="/static/theme/theme53/img/phone.png" width={30} height={30}/> 웨딩홀 전화하기
                    </a>
                <div className="traffic_navigation">
                    <span className="bold">NAVIGATION_</span> 카카오내비 
                    <a href="#" onClick={(event)=>{
                        navi_kakao(event);
                    }}>
                        <Image src="/static/theme/theme53/img/navigation_kakao.png" width={30} height={30}/>
                    </a> 티맵 
                    <a href="#" onClick={(event)=>{
                        navi_tmap(event);
                    }}>
                        <Image src="/static/theme/theme53/img/navigation_tmap.png" width={30} height={30}/>
                    </a>
                </div>
                <div className="traffic_subway_title">
                    <Image src="/static/theme/theme53/img/map_subway.png" width={30} height={30}/> 지하철 이용시
                </div>
                <div className="traffic_subway">
                    [1호선 농성역 하차]
                    ㆍ농성역 6번, 7번 출구 바로 앞				
                </div>
                <div className="traffic_bus_title">
                    <Image src="/static/theme/theme53/img/map_bus.png" width={30} height={30}/> 버스 이용시
                </div>
                <div className="traffic_bus">
                    [농성SK뷰 하차]
                    ㆍ송정19, 1187, (나주)160

                    [화정중흥파크 하차]
                    ㆍ문흥39, 봉선37, 금호36, 지원25,
                    　수완12, 송암72, 217, 217-1, 218, 218-1, 200

                    [광주고속버스터미널] 도보 약 15분
                    ㆍ터미널 → 신세계백화점 → 이마트
                    　→ 농성역 방향으로 약 500M				
                </div>
                <div className="traffic_etc_title">
                    <Image src="/static/theme/theme53/img/map_car.png" width={30} height={30}/> 승용차 이용시
                </div>
                <div className="traffic_etc">
                    [내비게이션]
                    ㆍ라페스타웨딩홀
                    ㆍ광주광역시 서구 죽봉대로 12
                    ㆍ062-366-7766
                    
                    ※상공회의소 앞 유턴 또는 서구청 앞 유턴				
                </div>
            </div>
        </div>
    )
  }
  



