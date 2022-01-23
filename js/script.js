const imgs = document.querySelectorAll(".project .img"),
	closeBtn = document.querySelector(".project .img-container .close-btn"),
	imgContainer = document.querySelector(".project .img-container"),
	imgOfImgContainer = document.querySelector(".project .img-container img");

imgs.forEach(img =>{
	img.addEventListener("click",()=>{
		let imgSrc = img.src;
		imgContainer.classList.add("active");
		imgOfImgContainer.src = imgSrc;
	});
});
closeBtn.addEventListener("click",()=>{
	imgContainer.classList.remove("active");
});

const scrollTopBtn = document.getElementById("scroll-top-btn"),
	logo = document.querySelector("header nav .navbar-brand");

window.addEventListener("scroll",()=>{
	if(window.scrollY > 0){
		scrollTopBtn.style.display = "grid";
		logo.style.color = "var(--primary-color)";
	}else{
		scrollTopBtn.style.display = "none";
		logo.style.color = "#fff";
	};
});
