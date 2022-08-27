const products = [
	{
		id: 1,
		productImage:
			"https://newshop.vn/public/uploads/products/41478/sieu-tri-nho-hoc-duong-tron-goi-3-cap.jpg",
		productName: "Siêu trí nhớ học đường",
		productUnit: "Quyển",
		productPrice: 80000,
		productDescription:
			'"Siêu Trí nhớ học đường", một công trình xuất bản đầy ý nghĩa của thầy Nguyễn Phùng Phong ra mắt. Đó là thành quả của trải nghiệm thực tế, nghiên cứu, đúc kết những phương pháp, kỹ thuật ghi nhớ kiến thức trong học đường, đề giúp cho học sinh có thể áp dụng được tất cả các môn học từ Toán, Lí, Hóa đến Văn, Sử, Địa, Ngoại Ngữ...nhẹ nhàng, đơn giản và hiệu quả nhất. Dự án trở thành những bí kíp và phương pháp mang tính ứng dụng cao, giúp cho việc ghi nhớ hiệu quả cho các em học sinh từ lớp 1 đến lớp 12 sở hữu các phương pháp học nhanh, nhớ lâu các môn học ở trường, giúp các con có nhiều thời gian nghỉ ngơi, vui chơi.',
	},
	{
		id: 2,
		productImage:
			"https://cdn0.fahasa.com/media/flashmagazine/images/page_images/5_centimet_tren_giay/2019_10_24_15_33_17_1-390x510.jpg",
		productName: "5 Centimet trên giây",
		productUnit: "Quyển",
		productPrice: 55000,
		productDescription: `5cm/s không chỉ là vận tốc của những cánh anh đào rơi, mà còn là vận tốc khi chúng ta lặng lẽ bước qua đời nhau, đánh mất bao cảm xúc thiết tha nhất của tình yêu.
        Bằng giọng văn tinh tế, truyền cảm, 5 centimet trên giây mang đến những khắc họa mới về tâm hồn và khả năng tồn tại của cảm xúc, bắt đầu từ tình yêu trong sáng, ngọt ngào của một cô bé và cậu bé. Ba giai đoạn, ba mảnh ghép, ba ngôi kể chuyện khác nhau nhưng đều xoay quanh nhân vật nam chính, người luôn bị ám ảnh bởi kí ức và những điều đã qua…`,
	},
	{
		id: 3,
		productImage:
			"https://img-cdn.2game.vn/pictures/xemgame/2016/09/14/tacgia5cm_14_9_2016_2.jpg",
		productName: "Your name",
		productUnit: "Quyển",
		productPrice: 70000,
		productDescription: "Your Name. là câu chuyện nổi tiếng và đạt được nhiều kỉ lục ở cả hai bản phim và truyện, xoay quanh một thiếu niên và một thiếu nữ hoán đổi linh hồn với nhau, sống dậy ở môi trường hoàn toàn khác biệt và tự thích ứng theo bản năng. Sự hoán đổi đó không đơn thuần để đem đến trạng thái hòa hợp về tình cảm, kể lại một chuyện tình ly kì làm lòng ta hồi hộp rồi khuây khỏa, mà gây ấn tượng hơn, là lưu ý chúng ta về định mệnh hình thành từ những hành vi nhỏ nhặt nhất, về ý nghĩa sâu xa tiềm ẩn trong từng sự vật bé bỏng nhất, như sợi dây tết, như rượu cúng thần, như vị trí và hành vi của từng người trong suốt dòng thời gian biến động.",
	},
	{
		id: 4,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/fb/1d/34/4a5be4b48fbb204120983eae008c2705.jpg.webp",
		productName: "Trí Tuệ Do Thái",
		productUnit: "Quyển",
		productPrice: 116700,
		productDescription: "Trí Tuệ Do Thái không dừng lại ở giới hạn của một cuốn sách triết lý hay kỹ năng. Thông qua Jerome, một kẻ lông bông thích la cà, tác giả đưa người đọc vào một chuyến khám phá về trí tuệ của người Do Thái, từ đó khơi ra những giới hạn để người đọc có thể tự khai phá trí tuệ bản thân với \"Năm nguyên tắc\" và \"Mười lăm gợi ý\". Đây sẽ là những bài học quý giá dành cho những ai muốn tồn tại và phát triển mạnh mẽ, không chỉ với con đường thành công của riêng mình.",
	},
	{
		id: 5,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/77/43/c6/4a6f7f0d38eb4175180d4298843e7020.jpg.webp",
		productName: "1 Ngày Bằng 48 Giờ",
		productUnit: "Quyển",
		productPrice: 54000,
		productDescription: "Bạn chưa đi làm, hoặc vừa mới chân ướt chân ráo bước vào chốn công sở, đã bao giờ bạn gặp phải tình huống như thế này: Khi cấp trên (hoặc thầy cô giáo) giao cho bạn một việc nào đó, ngay lập tức bạn ghi ghi chép chép rồi lao vào thực hiện. Chỉ tập trung làm cách nào để mau chóng hoàn thành nên bạn không nghĩ đến việc xác nhận lại với cấp trên (hoặc thầy cô) về mục tiêu chính của nhiệm vụ. Trong suốt quá trình thực hiện, bạn ít khi trao đổi với người khác, cũng không dành thời gian suy nghĩ, phân tích kĩ xem làm thế nào cho hiệu quả.  ",
	},
	{
		id: 6,
		productImage:
			"https://salt.tikicdn.com/cache/200x200/ts/product/de/1f/e3/368d77eb57d9a8ae2da5577074d328a5.jpg.webp",
		productName: "Đọc Sách Cộng Hưởng",
		productUnit: "Quyển",
		productPrice: 49700,
		productDescription: "Đọc sách cộng hưởng là một khái niệm hoàn toàn mới ở Việt Nam nhưng lại không mới với các nước khác, nhất là ở Nhật. Đây là phương pháp đọc sách được tác giả Wanatabe Yassuhiro, Thành viên Hiệp hội sách Nhật Bản viết và được chia sẻ nhiều trong cộng đồng đọc sách ở đất nước mặt trời mọc trong thời gian gần đây.",
	},
	{
		id: 7,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/c3/fb/2a/209a2fddbea9d5b0b3ef89e523853c29.jpg.webp",
		productName: "Đắc Nhân Tâm",
		productUnit: "Quyển",
		productPrice: 80000,
		productDescription: "Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. “Đắc Nhân Tâm” cần được cảm nhận bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra, khơi gợi những tiềm năng ẩn khuất nơi họ và giúp họ phát triển lên một tầm cao mới.. Dưới ngòi bút của dịch giả Nguyễn Hiến Lê, bản dịch truyền tải đúng linh hồn của bản gốc nhưng vẫn thân thuộc, gần gũi với bao nhiêu thế hệ và giúp hàng triệu người Việt Nam thành công.",
	},
	{
		id: 8,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/cf/07/0b/4b051cfe1f989d58108c16b9204dcc01.jpg.webp",
		productName: "Lo Âu Xã Hội",
		productUnit: "Quyển",
		productPrice: 70000,
		productDescription: "Lo âu xã hội là tình trạng kéo dài và có thể gây ảnh hưởng nghiêm trọng đến đời sống thường ngày của bạn. Những hành vi trốn tránh, cảm giác sợ hãi và lo lắng tột độ là triệu chứng điển hình mà người mắc chứng lo âu xã hội thường xuyên trải qua. Điều này có thể ngăn bạn đến với những trải nghiệm mới mẻ và có được cuộc sống mà bạn mong muốn.",
	},
	{
		id: 9,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/85/31/55/59f21ab29c71c93df39901580e50d807.jpg.webp",
		productName: "Làm Thế Nào Để Sống Một Đời Tốt Đẹp",
		productUnit: "Quyển",
		productPrice: 72000,
		productDescription: "Mất kết nối với phiên bản  tốt nhất của chính chúng ta. Chúng ta đều từng cảm thấy rằng một phần của mình đang dần chết đi từng ngày, và không biết làm sao để thay đổi tình thế, làm thế nào để “bật công tắc” cuộc đời mình lên lần nữa. Và chúng ta đã đều thêu dệt nên những cuộc trao đổi trong đầu mình để hợp thức hóa việc hành động và tự bằng lòng. Những lời nói giữ ta trong một chiếc kén, an toàn tránh khỏi những điều chưa biết, nhưng cũng xa rời những tiềm năng.  ",
	},
	{
		id: 10,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/99/72/a3/3eac14165e0b760b173e9ef4b774c140.jpg.webp",
		productName: "Tâm Lý Học Nhận Thức",
		productUnit: "Quyển",
		productPrice: 96000,
		productDescription: "Nhận thức về bản thân chính là chìa khóa để hình thành nhân cách, nó giúp chúng ta hiểu rõ đặc điểm tính cách, thói quen, suy nghĩ, nhu cầu và ưu khuyết điểm của bản thân. Thông qua quá trình tự nhận thức, chúng ta sẽ khám phá ra những năng lực tiềm ẩn, sống tích cực hơn và tự đặt ra những mục tiêu để phấn đấu.",
	},
	{
		id: 11,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/d7/30/f3/8ba0c86c5beb3d4ad404806b4c3f620e.png.webp",
		productName: "Sói đội lốt Cừu",
		productUnit: "Quyển",
		productPrice: 69000,
		productDescription: "Mỗi khi bị thao túng tâm lí và đối xử tàn tệ, nạn nhân thường tự diễn giải và hợp lí hóa cho các hành vi lệch lạc của kẻ thao túng. Họ cho rằng kẻ thao túng—những con sói đội lốt cừu—thường không cố ý làm hại người xung quanh, rằng các hành vi xấu ấy vốn có nguyên nhân là những tổn thương tâm lí ẩn bên trong kẻ thao túng.",
	},
	{
		id: 12,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/44/4a/b1/5e50bae01994cfb43bcb35f1de0ce044.jpg.webp",
		productName: "Buổi Sáng Diệu Kỳ",
		productUnit: "Quyển",
		productPrice: 79200,
		productDescription: "Cách bạn thức dậy mỗi sáng và những thói quen buổi sáng của bạn (hoặc thiếu điều ấy) sẽ ảnh hưởng sâu sắc đến những cấp độ thành công của bạn trong từng phạm trù của cuộc sống.Buổi sáng tập trung, hiệu quả và thành công sẽ tạo nên một ngày thành công, hiệu quả và tập trung cao độ – điều này tất nhiên sẽ tạo nên một cuộc sống thành đạt – và ngược lại.",
	},
	{
		id: 13,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/24/20/e4/1ed01a1a64a6e08e9b710402f8290ef0.jpg.webp",
		productName: "Kỹ Năng Đọc Thông Minh",
		productUnit: "Quyển",
		productPrice: 57000,
		productDescription: "Nhiều nhân viên trẻ khi mới bước vào môi trường công sở đã từng gặp rắc rối như thế này: vì tốc độ đọc chậm mà tài liệu cứ chồng chất lên nhay; hiệu quả đọc không cao, thường xuyên quên mất nội dung sau khi đọc; không thể phân loại thông tin và đưa ra tổng kết; không thể tìm thấy nguồn thông tin mỗi khi cần đế Từ tiếp nhận thông tin, xử lí thông tin đến trích xuất thông tin là một quá trình mà chúng ta dễ xảy ra nhiều thiếu sót, dẫn đến làm việc kém hiệu quả.",
	},
	{
		id: 14,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/f2/78/db/519339b2143334abb6c62381a036cf88.jpg.webp",
		productName: "Nghệ Thuật Tư Duy Phản Biện",
		productUnit: "Quyển",
		productPrice: 90300,
		productDescription: "Tư duy phản biện là một phần trong cuộc sống hằng ngày, bạn cần nắm lấy và phát triển từ nó. Thực hiện nghiên cứu của bạn, tìm kiếm các nguồn thông tin tốt, đưa ra lập luận của bạn và cân nhắc phản bác, cân nhắc xem bạn có đưa ra giả định hay không và đừng vội vàng đưa ra quyết định nếu bạn không hài lòng với thông tin bạn thu thập được.",
	},
	{
		id: 15,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/cb/fe/26/d57e318ace0fa2bdab92b991d468ea70.jpg.webp",
		productName: "Tâm Lý Học Nói Gì Về Nỗi Đau?",
		productUnit: "Quyển",
		productPrice: 58100,
		productDescription: "“Tâm lý học nói gì về nỗi đau?” là một cuốn sách nhân văn phân tích những phản ứng đa dạng của chúng ta khi mất đi một người thân yêu, cũng như đi sâu tìm hiểu cách các nhà tâm lý học giải thích về trải nghiệm này. Cuốn sách cũng khảo nghiệm các tập quán văn hóa - xã hội vốn đang định khung hoặc hạn chế hiểu biết về quá trình đau buồn, từ bộ môn phân tâm học tiên phong của Sigmund Freud cho tới quan niệm đã bị phủ nhận về các \"giai đoạn\" của nỗi đau.",
	},
	{
		id: 16,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/59/e3/e7/642ce38017ac1d35f2e87234b6fd56f2.jpg.webp",
		productName: "Tâm Lý Học Nói Gì Về Hạnh Phúc",
		productUnit: "Quyển",
		productPrice: 60000,
		productDescription: "Cảm giác hạnh phúc được gắn liền với suy nghĩ tích cực và sự quảng giao trong đời sống hằng ngày, nhưng cuốn sách cũng sẽ đề cập đến những sự thật đầy bất ngờ về mặt hạn chế của hạnh phúc cá nhân.Ai cũng muốn cảm thấy hạnh phúc trong đời. Cuốn sách nhỏ này sẽ giúp bạn hiểu rõ về hạnh phúc, đối phó với bất hạnh và cải thiện hạnh phúc theo phương cách riêng của tâm lý học.",
	},
	{
		id: 17,
		productImage:
			"https://salt.tikicdn.com/cache/400x400/ts/product/8b/97/f8/d58a8a012cb890c0985a42ac6b726d11.jpg.webp",
		productName: "Nguyên tắc kỷ luật bản thân",
		productUnit: "Quyển",
		productPrice: 74250,
		productDescription: "Có tính kỷ luật và ý chí mạnh mẽ là có khả năng làm được những việc khó khăn hoặc những việc không dễ chịu bởi vì những điều này là tốt hơn cho sự thành công của bạn trong thời gian dài. Điều đó có thể là thức dậy sớm để tập thể dục thay vì như mọi khi bạn sẽ muốn nhấn nút báo thức lại, hoặc có thể là chống lại sự cám dỗ của một món ăn vặt nhiều đường mà bạn biết việc này sẽ gây khủng hoảng năng lượng vào thời điểm một giờ sau đó.",
	},
];

export default products;
