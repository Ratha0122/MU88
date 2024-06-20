document.getElementsByClassName('header')[0].innerHTML = `
    <div class=" w-full bg-[#2b1047] text-white ">
        <div class="container p-4">
            <div class=" flex justify-between item-center gap-4">
                <div class="flex justify-center gap-8 items-center">

                    <a href="./index.html" class="logo ">
                        <img src="./images/log-mu88.png " alt="logo" class="w-[160px] h-full ">
                    </a>


                    <div class="navigation text-[14px] hidden md:block">
                        <ul class="flex gap-4 flex-wrap item-center">
                            <li ><a href="./index.html" class="hover:border-b-[3px] hover:border-red-600 duration-200">TRANG CHỦ</a></li>
                            <li ><a href="./HƯỚNG DẪN.html" class="hover:border-b-[3px] hover:border-red-600 duration-200">HƯỚNG DẪN</a></li>
                            <li ><a href="./THỂ THAO.html" class="hover:border-b-[3px] hover:border-red-600 duration-200">THỂ THAO</a></li>
                            <li ><a href="./TIN TỨC.html" class="hover:border-b-[3px] hover:border-red-600 duration-200">TIN TỨC</a></li>
                             <li ><a href="./x0-so.html" class="hover:border-b-[3px] hover:border-red-600 duration-200">XỔ SỐ </a></li>
                        </ul>
                    </div>
                </div>
   
                <div  class="hidden md:block">
                    <div class=" btns flex gap-4 justify-center item-center *:px-2 *:py-2 *:bg-[#B82B00]   *:rounded-md font-medium">
                        <button onclick=url() class=" hover:border hover:border-[#00A2A2] hover:text-black hover:bg-white duration-700">ĐĂNG KÝ</button>
                        <button onclick=url() class=" hover:border hover:border-[#00A2A2] hover:text-black hover:bg-white duration-700">ĐĂNG NHẬP</button>
                    </div>
                </div>
                <div id="burger-menu" class="md:hidden">
                    <span></span>
                </div>
                            
                
            </div>

           <div id="menu" class=" z-50 text-white bg-[#2fa9c7] w-[60%] fixed top-0 left-0 overflow-hidden  h-screen -translate-x-full transition-transform duration-500 ">
                <div class="navigation text-[18px] font-serif ">
                    <ul class="gap-4 flex-wrap item-center *:p-4 mt-10">
                        <li class="border-b-2 hover:bg-gray-500 duration-700"><a href="./index.html" >TRANG CHỦ</a></li>
                        <li class="border-b-2 hover:bg-gray-500 duration-700"><a href="./HƯỚNG DẪN.html">HƯỚNG DẪN</a></li>
                        <li class="border-b-2 hover:bg-gray-500 duration-700"><a href="./THỂ THAO.html">THỂ THAO</a></li>
                        <li class="border-b-2 hover:bg-gray-500 duration-700"><a href="./TIN TỨC.html">TIN TỨC</a></li>
                        <li class="border-b-2 hover:bg-gray-500 duration-700"><a href="./x0-so.html">XỔ SỐ </a></li>
                    </ul>
                </div>
           </div>
        </div>
         <div  class="md:hidden from-[#a709098a] to-[#333] bg-gradient-to-l p-2">
            <div class=" btns flex gap-4 justify-center item-center *:px-2 *:py-2 *:bg-[#3ab95591]   *:rounded-md font-medium">
                <button onclick=url() class=" hover:border hover:border-[#00A2A2] hover:text-black hover:bg-white duration-700">ĐĂNG KÝ</button>
                <button onclick=url() class=" hover:border hover:border-[#00A2A2] hover:text-black hover:bg-white duration-700">ĐĂNG NHẬP</button>
            </div>
        </div>
    </div>

   
`;




document.getElementsByClassName('footer')[0].innerHTML = `
    <div class="bg-[#151f5c] p-4">
        <div class="container text-white mb-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between ">
                <div class="text-[17px]">
                    <h1 class="border-b-[3px] text-[#fff134] py-2 font-serif" >VỀ CHÚNG TÔI</h1>
                    <div class="mt-6 ">
                        <p class="leading-relaxed"><span class="text-[#fff134] font-medium">Mu88 </span>cung cấp sản phẩm cá cược trực tuyến hàng đầu như casino, thể thao, xổ số lô đề, bắn cá, tài xỉu, xóc đĩa, đá gà. Hàng ngày với hàng ngàn khuyến mãi, ưu đãi cực hấp dẫn. Chúng tôi có trụ sở tại Manila, Phillippines cấp phép và quản lý bởi PAGCOR bởi chính phủ Phillippines.</p>
                        <p class="mt-10"><span class=" font-medium">Mu88.Tips</span>là kênh thông tin hỗ trợ, đại lý chính thức của nhà cái Mu88 tại thị trường Việt Nam. </p>
                    </div>
                    <img src="./images/_dmca_premi_badge_1.png" class="mt-4">
                </div>
                <div class="text-[17px]">
                    <h1 class="border-b-[3px] text-[#fff134] py-2 font-serif" >CHÍNH SÁCH</h1>
                   <ul class="mt-6 list-disc px-4 *:py-2">
                        <li><a href="./chin-sach-bao-mat.html" class="text-[#fff134] hover:text-[#d6ca28a2]">Chính sách bảo mật</a></li>
                        <li><a href="./Dieu-khoan-su-dong.html" class="text-[#fff134] hover:text-[#d6ca28a2]">Điều khoản sử dụng</a></li>
                        <li><a href="./Gioi-thieu.html" class="text-[#fff134] hover:text-[#d6ca28a2]">Giới thiệu</a></li>
                   </ul>
                </div>
                <div class="text-[17px]">
                    <h1 class="border-b-[3px] text-[#fff134] py-2 font-serif" >LIÊN KẾT NHANH</h1>
                   <ul class="mt-6 list-disc px-4 *:py-2">
                        <li><a href="./the-thao.html" class="text-[#fff134] hover:text-[#d6ca28a2]">THỂ THAO</a></li>
                        <li><a href="./casino-online.html" class="text-[#fff134] hover:text-[#d6ca28a2]">CASINO ONLINE</a></li>
                        <li><a href="./xo-so-lo-de.html" class="text-[#fff134] hover:text-[#d6ca28a2]">XỔ SỐ - LÔ ĐỀ</a></li>
                        <li><a href="./HƯỚNG DẪN.html" class="text-[#fff134] hover:text-[#d6ca28a2]">HƯỚNG DẪN</a></li>
                   </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#10460f9a]">
        <div class="container md:w-96 mx-auto p-2">
            <span class="">Copyright 2024 © MU88. All Right Reserved.</span>
        </div>
    </div>
`






document.getElementById('burger-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('-translate-x-full');
});

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


function url() {
    location.href = "https://www.hay88.one/?inviteCode=9003171"
}