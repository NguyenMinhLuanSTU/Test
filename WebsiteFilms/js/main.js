// Sử dụng để tải dữ liệu về các bộ phim từ một tệp JSON và hiển thị chúng trên trang web.
// Duyệt qua từng bộ phim trong dữ liệu:
// Tạo một phần tử div mới để chứa thông tin về bộ phim (được gán class là episode-item).
// Thiết lập nội dung của phần tử div này bằng cách sử dụng dữ liệu từ tệp JSON.
document.addEventListener("DOMContentLoaded", function() {
    fetch('/json/movies.json')
        .then(response => response.json())
        .then(data => {
            const episodeContent = document.querySelector('.episode-content');
            data.forEach(movie => {
                const episodeItem = document.createElement('div');
                episodeItem.classList.add('episode-item');
                episodeItem.innerHTML = `
                    <a href="#" onclick="goToDetails('${movie.link}', '${movie.name}', '${movie.duration}', '${movie.views}', '${movie.des}')">
                        <img class="episode-item-thumbnail" src="${movie.img}" alt="${movie.name}">
                        <div class="episode-item-description">
                            <div class="episode-item-title">${movie.name}</div>
                            <div class="episode-item-meta-info">
                                <div class="episode-film-views">${movie.views} xem</div>
                                <div class="episode-film-nums">${movie.duration}</div>
                            </div>
                        </div>
                    </a>
                `;
                episodeContent.appendChild(episodeItem);
            });
        });
});
// sử dụng phương thức setItem của đối tượng localStorage để lưu thông tin của bộ phim dưới dạng cặp key-value
// Cuối cùng, hàm chuyển hướng người dùng đến trang moviedetails.html bằng cách thay đổi thuộc tính window.location.href.
function goToDetails(link, name, duration, views, des) {
    localStorage.setItem('movieLink', link);
    localStorage.setItem('movieName', name);
    localStorage.setItem('movieDuration', duration);
    localStorage.setItem('movieViews', views);
    localStorage.setItem('movieDescription', des);
    window.location.href = 'moviedetails.html';
}

