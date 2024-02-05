export const codes = {
    firstSection: `    function 슬라이드위치업데이트(){
        menuContainerUl.style.transform = \`translateX(-\${100 *index}vw)\`;
        
        function 차움직이기(도착지점){
        console.log(neneCar)
        neneCar.style.left= \`\${도착지점}%\`;
        
        if(네네카이전좌표 < 도착지점) {
        neneCar.setAttribute("src","./nene/img/rightnenecar.png")
        }else {
        neneCar.setAttribute("src","./nene/img/leftnenecar.png")
        // 왼쪽방향 이미지로 교체
        }
        
        setTimeout(() => {
        // 이동 끝난 후 정면으로 교체
        neneCar.setAttribute("src","./nene/img/네네캐릭터.png")
        }, 1000);
        네네카이전좌표=도착지점;
        }
        
        let slideState = true;
        
        function slideControl() {
        if(slideState) {
        slideState === false;
        // 해당 슬라이드 위치로 이등하기
        slideState === true;
        }
        }
        `,

        secondSection:`        // 슬라이드 버튼 만들기
for(let i = 0 ; i < menuContainerUl.childElementCount ; i ++) {
    const aButton = document.createElement('a');
    aButton.setAttribute('href','#');
    aButton.classList.add('index-dots');
    if(i===0) {
    aButton.classList.add('active');
    }
    const pTag = document.createElement('p');
    const pTagText = document.createTextNode(\`\${menuContainerUl.children[i].querySelector('h3').firstElementChild.getAttribute('alt')}\`);
    // console.log(pTagText);
    pTag.appendChild(pTagText);
    const divTag = document.createElement('div');
    divTag.classList.add('menu_slide_cir')
    aButton.appendChild(pTag);
    aButton.appendChild(divTag);
    
    const thisButtonPos = 100 / (menuContainerUl.childElementCount - 1) * i;
    aButton.style.left = \`\${thisButtonPos}%\`;
    
    aButtonContainer.appendChild(aButton);
    
    
    // 슬라이드 버튼을 클릭했을때 해당위치로 이미지 이동하기 및 인터랙션 발생
    aButton.addEventListener('click', (e) => {
    e.preventDefault();
    for(let i = 0; i < aButtonContainer.childElementCount ; i++){
    aButtonContainer.children[i].classList.remove('active');
    }
    차움직이기(thisButtonPos);
    aButton.classList.add('active');
    index = i ;
    console.log(\`\${j}컨테이너의 인덱스 : \${i}\`)
    슬라이드위치업데이트();
    })
    
    }`,

    thirdSection : `    async function menuTitle(){// json 사용할때 기본형태 !! *** 데이터베이스 불러오기
        let dbContainer = [];
        fetch('json/new.json')
        .then(res => res.json())
        .then(data => {
        dbContainer.push(data);
        fetch('json/popular.json')
        .then(res => res.json())
        .then(data => {
        dbContainer.push(data);
        fetch('json/recommend.json')
        .then(res => res.json())
        .then(data => {
        dbContainer.push(data);
        함수();
        async function 함수(){
        await makeContent();
        await menuArray();
        }
        })
        })
        })
    `,

    fourthSection : `    function makeContent(){

        const conName = ['new_menu_con','popular_menu_con','recommended_menu_con']
        const menuConUl = document.getElementsByClassName('menu_con_ul');
        dbContainer.map((db, index)=>{
        for(let i = 0; i < db.length; i++) {
        // <li class="recommended_menu_con">
        const contents = document.createElement('li');
        contents.classList.add(conName[index]);
        // <div class="menu_title_con">
        const divMenuTitleCon = document.createElement('div');
        divMenuTitleCon.classList.add('menu_title_con');
        // <h3>db.이름</h3>
        const menuNaming = document.createElement('h3');
        
        const designImg = document.createElement("img");
        designImg.setAttribute("src", db[i].타이틀svg경로)
        designImg.setAttribute('alt', db[i].이름)
        menuNaming.appendChild(designImg);
        // <p>핫하고 달콤한 소스와<br>홍, 청고추의 매력적인 치킨!</p>
        const menuSubNaming = document.createElement('p');
        const menuSubNamingText = document.createTextNode(db[i].서브타이틀);
        menuSubNaming.appendChild(menuSubNamingText);
        // <p>네네에서 준비한 네네만의 매운맛! 핫블링치킨</p>
        const menuExplain = document.createElement('p');
        const menuExplainText = document.createTextNode(db[i].설명);
        menuExplain.appendChild(menuExplainText);
        // <ul class="menu_style_ul">
        // <li class="menu_style_li">마일드</li>
        // <li class="menu_style_li">순살</li>
        // <li class="menu_style_li">추천 메뉴</li>
        // <li class="menu_style_li">매콤달콤</li>
        // </ul>
        const menuStyleUl = document.createElement('ul')
        menuStyleUl.classList.add('menu_style_ul');
        for(let j = 0 ; j < db[i].뱃지.length ; j ++) {
        const badgeLi = document.createElement('li')
        badgeLi.classList.add('menu_style_li');
        const text = document.createTextNode(db[i].뱃지[j]);
        menuStyleUl.appendChild(badgeLi);
        badgeLi.appendChild(text);
        }
        // <a href="#">
        // <div class="button_con">
        // <p>바로 주문하기</p>
        // </div>
        // </a>
        const aButtonTag = document.createElement('a');
        aButtonTag.setAttribute('href', '#')
        const aButtonDiv = document.createElement('div');
        aButtonDiv.classList.add('button_con')
        const aButtonPTag = document.createElement('p')
        const aButtonText = document.createTextNode('바로 주문하기')
        aButtonTag.appendChild(aButtonDiv);
        aButtonDiv.appendChild(aButtonPTag);
        aButtonPTag.appendChild(aButtonText);
        // </div>
        
        // <figure>
        // <img src="../img/핫블링치킨.png" alt="핫블링치킨">
        // </figure>
        const imgContainer = document.createElement('figure');
        const img = document.createElement('img');
        img.setAttribute("src", db[i].이미지)
        img.setAttribute('alt', db[i].이름)
        imgContainer.appendChild(img);
        // console.log(imgContainer)
        // </li>
        contents.appendChild(divMenuTitleCon);
        divMenuTitleCon.appendChild(menuNaming);
        divMenuTitleCon.appendChild(menuSubNaming);
        divMenuTitleCon.appendChild(menuExplain);
        divMenuTitleCon.appendChild(menuStyleUl);
        divMenuTitleCon.appendChild(aButtonTag);
        contents.appendChild(imgContainer);
        menuConUl[index].appendChild(contents);
        }
        })
        }}
    `,

    fifthSection : `    var markers = [];

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
    center: new kakao.maps.LatLng(37.566826, 27.9786567), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
    };
    
    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);
    
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();
    
    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});
    
    ps.keywordSearch( "구월동 네네치킨", placesSearchCB); // 구월동 네네치킨이라는 검색어를 기본값으로 설정하고 검색한다.
    `,

    sixthSection : `    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
        
        // // 정상적으로 검색이 완료됐으면
        // // 검색 목록과 마커를 표출합니다
        displayPlaces(data);
        
        const locationStore = document.querySelector(".location_store_sec")
        const locationStoreCon = locationStore.firstElementChild;
        
        const locationStoreName = document.createElement('h2')
        const locationSotreNameText = document.createTextNode('구월동 근처매장');
        locationStoreName.appendChild(locationSotreNameText);
        locationStoreCon.appendChild(locationStoreName)
        
        const slideContainer = document.createElement('div')
        slideContainer.classList.add('slide_container')
        locationStoreCon.appendChild(slideContainer)
        
        const previousButton = document.createElement('img')
        previousButton.setAttribute('src' ,'nene/img/이전버튼.png')
        previousButton.setAttribute('alt', '이전버튼')
        slideContainer.appendChild(previousButton)
        previousButton.classList.add('hidden')
        const makeSlide = document.createElement('div');
        makeSlide.classList.add('make_slide')
        slideContainer.appendChild(makeSlide)
        
        const nextButton = document.createElement('img')
        nextButton.setAttribute('src' ,'nene/img/다음버튼.png')
        nextButton.setAttribute('alt', '다음버튼')
        slideContainer.appendChild(nextButton);
        
        const locationStoreUl = document.createElement('ul');
        locationStoreUl.classList.add('location_store_ul')
        makeSlide.appendChild(locationStoreUl);
         
        for(let i = 0; i < data.length; i++) {
        const storeList = document.createElement("li")
        storeList.classList.add('location_store_li')
        const aTag = document.createElement('a')
        aTag.setAttribute("href", "#");
        storeList.appendChild(aTag)
        const divImg = document.createElement('div')
        divImg.classList.add('nene_store_img')
        aTag.appendChild(divImg)
        const imgFigure = document.createElement('figure');
        divImg.appendChild(imgFigure);
        
        const neneImg = document.createElement('img')
        neneImg.setAttribute("src", "nene/img/neneLogo.png")
        neneImg.setAttribute("alt", "네네로고")
        
        imgFigure.appendChild(neneImg);
        const locationPTag = document.createElement('p')
        const locationPTagText = document.createTextNode(data[i].place_name)
        locationPTag.appendChild(locationPTagText)
        imgFigure.appendChild(locationPTag);
        
        const informationPTag = document.createElement('p')
        const informationPTagText = document.createTextNode(data[i].place_name);
        informationPTag.appendChild(informationPTagText);
        aTag.appendChild(informationPTag)
        
        const storeNumber = document.createElement('p')
        const storeNumberPTag = document.createTextNode(data[i].phone)
        
        storeNumber.appendChild(storeNumberPTag)
        aTag.appendChild(storeNumber)
        
        const addressPTag = document.createElement('p')
        const addressPTagText = document.createTextNode(data[i].address_name);
        
        addressPTag.appendChild(addressPTagText)
        aTag.appendChild(addressPTagText)
         
        locationStoreUl.appendChild(storeList);
        }
    `
}


// import { code } from '경로'

// code.firstSeciont