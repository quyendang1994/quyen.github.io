const urlParams = new URLSearchParams(window.location.search);
const toName = urlParams.get('to') || 'em';
const fromName = urlParams.get('from') || 'anh';

var title = document.querySelector('.something');
title.innerHTML = `${fromName} có điều muốn nói với ${toName}!`;
charming(title);
title.addEventListener('mouseenter', function(){
	anime({
		targets: '.something span',
		translateY: [-3,-2],
		translateX: [-3,-2],
		delay: function(el, i) {
			return i*10;
		},
		color: ["#fff","#fff"],
		duration: 200,
	})
});

title.addEventListener('click', function(){
	anime({
		targets: '.something span',
		translateY: [-3,-2],
		translateX: [-3,-2],
		delay: function(el, i) {
			return i*10;
		},
		color: ["#fff","#fff"],
		duration: 200,
	})
});

title.addEventListener('mouseleave', function(){
	anime({
		targets: '.something span',
		translateY: [0,-2],
		translateX: [0,-2],
		delay: function(el, i) {
			return i*10;
		},
		color: ["#fff","#fff"],
		duration: 200,
		direction: 'reverse'
	})
});

var final = document.querySelector('.layer');
final.insertAdjacentHTML('beforebegin', '<div class="iloveyou"></div>');
var test = document.querySelector('.iloveyou');
test.appendChild(final);
test.insertAdjacentHTML('beforeend', '<div class="mask"></div>')
var mask = document.querySelector('.mask');
var thu = document.querySelector('.thu');
var tamthu = document.querySelector('.tamthu');

// Cá nhân hóa nội dung tâm thư (thay thế 'anh' và 'em')
tamthu.innerHTML = tamthu.innerHTML.replace(/\banh\b/g, fromName).replace(/\bem\b/g, toName);

// Sử dụng charming để tách chữ
charming(tamthu);

// Ẩn tất cả các chữ ban đầu
var tamthuSpans = document.querySelectorAll('.tamthu span');
tamthuSpans.forEach(function(span) {
	span.style.opacity = "0";
});

mask.style.transformOrigin = "0% 50%";
mask.style.transform = "scaleX(0)";
thu.style.opacity= "0";

window.onload = function() {
	var okdone = anime({
		delay: 300,
		targets: mask,
		scaleX: 1,
		duration: 500,
		easing: 'easeInOutQuint',
		complete: function() {
			thu.style.opacity= "1";
			mask.style.transformOrigin = "100% 50%";
			var back = anime({
				delay: 200,
				targets: mask,
				scaleX: 0,
				duration: 500,
				easing: 'easeInOutQuint',
				complete: function() {
					// Chạy hiệu ứng chữ chạy từng chữ
					anime({
						targets: '.tamthu span',
						opacity: [0, 1],
						easing: 'linear',
						duration: 50,
						delay: function(el, i) {
							return i * 50; // Tốc độ chạy từng chữ (50ms mỗi chữ)
						},
						complete: function() {
							// Hiển thị các nút sau khi chữ chạy xong
							var authButtons = document.getElementById('auth-buttons');
							if (authButtons) {
								authButtons.style.display = 'flex';
							}
						}
					});
				}
			})
		}
	});
};

// --- Hiệu ứng Tim bay lơ lửng ---
function createHeart() {
    const container = document.getElementById('heart-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    container.appendChild(heart);

    // Xóa tim sau khi hoàn thành animation để tránh tràn bộ nhớ
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Tạo tim mỗi 300ms
setInterval(createHeart, 300);

// --- Xử lý các nút Đồng ý / Không ---
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            alert('Anh biết mà! Cảm ơn em nhiều nhé T ❤️');
        });
    }

    if (noBtn) {
        noBtn.addEventListener('mouseover', function() {
            // Di chuyển nút "Không" đến vị trí ngẫu nhiên
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        });
    }
});


