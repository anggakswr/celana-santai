// event pada saat link diklik
$('.scroll').on('click',function(){

  // ambil isi href
  let tujuan = $(this).attr('href');

  // tangkap elemen ybs
  let elemenTujuan = $(tujuan);

  // utk mengetahui jarak elemenTujuan dg atap body
  // console.log(elemenTujuan.offset().top);

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  });
  // e.preventDefault();

});

// parallax
$(window).scroll(function(){

  // jarak antar atap body dan window yg sedang dilihat
  let scroll = $(this).scrollTop();

  // babydoll alias harga
  if(scroll>$('.babydoll').offset().top - 200) {
    $('.babydoll1').addClass('muncul');
    $('.babydoll2').addClass('muncul');
  }

  // produk
  if(scroll>$('.produk').offset().top - 200) {
    $('.thumb').each(function(i) {
      setTimeout(function() {
        $('.thumb').eq(i).addClass('muncul');
      }, 200*(i+1));
    });
  }

});
